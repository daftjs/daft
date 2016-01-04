// WATCHES OUR NAMESPACE AND REPORT ON ANY CHANGES

module.exports = function (attrs) {
  var MutationObserver = MutationObserver || window.MutationObserver
  var Daft = Daft || window.Daft

  function namespaceExists (namespace) {
  // CHECK IF A NAMESPACE EXISTS, AND RETURN THE OBJECT IF IT DOES

    // IF NAMESPACE EXISTS
    if (typeof Daft.NS[namespace] === 'object') {
      return Daft.NS[namespace]
    // IF NAMESPACE DOES NOT EXIST
    } else {
      return false
    }
  }

  function getNameSpace (mutation) {
  // TRY TO FIND NAME OF NAMESPACE FROM MUTATION EVENT

    var target = mutation.target
    var mutationLevel = null
    var namespace = null

    // DIRECT CHILD (LIKELY ONLY TEXT WAS UPDATED)
    if (target.parentElement !== null && typeof target.parentElement.attributes.namespace !== 'undefined') {
      mutationLevel = 'child'
      namespace = target.parentElement.attributes.namespace.value
    // GRAND CHILD (LIKELY DOME STRUCTURE WAS UPDATED)
    } else if (typeof target.parentElement.parentElement.attributes.namespace !== 'undefined') {
      mutationLevel = 'child'
      namespace = target.parentElement.parentElement.attributes.namespace.value
    // PARENT: ENTIRE DOM OF NAMESPACE HAS CHANGED, ASSUME ALL DATA IS NOW OUT OF DATE
    } else if (typeof target.attributes !== 'undefined' && typeof target.attributes.namespace !== 'undefined') {
      mutationLevel = 'parent'
      namespace = target.attributes.namespace.value
      // UPDATE ALL DATA FOR NAMESPACE
      Daft.NS[namespace].actions.updateData(mutation)
    }

    return {
      namespace: namespaceExists(namespace),
      mutation: mutationLevel
    }
  }

  function checkFunction (fn, NS) {
  // RETURN A FUNCTION TO CALL IF IT EXISTS

    var args = []
    var func = false
    var obj = window.Daft.NS[NS.namespace.namespace]

    // IF ACTUAL FUNCTION WAS PASSED & NOT JUST A NAME OF A FUNCTION
    if (fn.indexOf('(') > 0) {
      var fnSplit = fn.split('(')
      fn = fnSplit[0]
      args = fnSplit[1].split(')')[0].split(',')
      if (args.length === 1 && args[0] === '') { args = null }
    }

    // CHECK IF A FUNCTION EXISTS IN: namespace.function
    if (typeof obj[fn] === 'function') {
      func = obj[fn]
    // CHECK IF A FUNCTION EXISTS IN: namespace.function
    } else if (typeof obj.actions[fn] === 'function') {
      func = obj.actions[fn]
    // CHECK IF A FUNCTION EXISTS IN GLOBAL NAMESPACE
    } else if (typeof window[fn] === 'function') {
      func = window[fn]
      console.warn('WARNING:', fn + ' function exists as a global. You should define it as a part of your ' + NS.namespace.namespace + ' namespace instead: http://docs.daftjs.com/namespace/functions'
      )
    }

    return {
      run: func,
      name: fn,
      arguments: args
    }
  }

  function checkAttributes (mutation, NS) {
  // CHECK FOR data-namespace ATTRIBUTE ON ELEMENT

    var dataKey = null
    var updateFunction = null

    if (NS.mutation === 'child') {
    // IF THIS IS A CHILD ELEMENT OF THE NAMESPACED CONTAINER (SHOULD ALMOST ALWAYS BE THE CASE)

      // IF ONLY TEXT DATA HAS BEEN UPDATED
      if (mutation.type === 'characterData') {
        // IF DAFT-UPDATE ATTRUBUTE IF FOUND ON CONTAINER
        if (typeof mutation.target.parentElement.attributes['daft-update'] !== 'undefined') {
          updateFunction = mutation.target.parentElement.attributes['daft-update'].value
          dataKey = mutation.target.parentElement.attributes[NS.namespace.namespace + '-data'].value
        }
      // IF DOM NODES HAVE BEEN UPDATED
      } else if (mutation.type === 'childList') {
        // IF DAFT-UPDATE ATTRUBUTE IF FOUND ON CONTAINER
        if (typeof mutation.target.parentElement.attributes['daft-update'] !== 'undefined') {
          updateFunction = mutation.target.parentElement.attributes['daft-update'].value
          dataKey = mutation.target.parentElement.attributes[NS.namespace.namespace + '-data'].value
        // IF DAFT-UPDATE ATTRUBUTE IF FOUND ON PARENT CONTAINER
        } else if (typeof mutation.target.parentElement.parentElement.attributes['daft-update'] !== 'undefined') {
          updateFunction = mutation.target.parentElement.parentElement.attributes['daft-update'].value
          dataKey = mutation.target.parentElement.parentElement.attributes[NS.namespace.namespace + '-data'].value
        }
      }

    // IF THIS IS THE NAMESPACED CONTAINER ITSELF
    } else if (NS.mutation === 'parent') {
      if (typeof mutation.target.attributes['daft-update'] !== 'undefined') {
        updateFunction = mutation.target.attributes['daft-update'].value
      }
    }

    // IF AN UPDATE FUNCTION WAS PROVIDED
    if (updateFunction !== null) {
      updateFunction = checkFunction(updateFunction, NS)

      if (updateFunction.run !== false) {
        var updateData = {
          el: mutation.target.parentElement,
          data: mutation.target.nodeValue,
          key: dataKey,
          previous: mutation.oldValue,
          mutation: mutation
        }

        if (updateFunction.arguments !== null) {
          updateFunction.arguments.unshift(updateData)

          updateFunction.arguments.forEach(function (value, key) {
            if (value === 'this') {
              if (NS.mutation === 'child') {
                updateFunction.arguments[key] = mutation.target.parentElement
              } else {
                updateFunction.arguments[key] = mutation.target
              }
            }
          })
        }

        // APPLY FUNCTION
        if (typeof updateFunction === 'function') updateFunction.run.apply(this, updateFunction.arguments)
      }
    }
  }

  var Watcher = new MutationObserver(function (mutations) {
  // WATCH FOR ANY CHANGES TO DOM (WITHIN A NAMESPACE)

    // LOOP THROUGH EACH CHANGE THAT WAS RECEIVED
    mutations.forEach(function (mutation) {
      var NS = getNameSpace(mutation) // GET NAMESPACE DATA
      if (NS !== null) { checkAttributes(mutation, NS) } // MAKE SURE WE HAVE A PROPER NAMESPACE
    })
  })

  // WHAT DO WE WANT TO WATCH FOR
  var observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    attributeFilter: attrs
  }

  return {
    Observe: function (node) {
      Watcher.observe(node, observerConfig)
    },
    Disconnect: function () {
      Watcher.disconnect()
    }
  }
}
