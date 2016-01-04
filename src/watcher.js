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
  //

    var attributes = null
    var namespace = null
    var parent = null

    if (Daft.dom(mutation.target.parentElement).length > 0) {
      parent = Daft.dom(mutation.target.parentElement)[0].closest('[namespace]')
      namespace = namespaceExists(parent.attributes.namespace.value)
      attributes = getAttrs(mutation, namespace)
    }

    return {
      container: parent,
      namespace: namespace,
      attributes: attributes
    }
  }

  function getAttrs (el, namespace) {
  // GET ATTRIBUTES OF PARENT ELEMENT

    el = Daft.dom(el.target.parentElement)[0].closest('[' + namespace.namespace + '-data]')

    if (typeof el !== 'undefined' && el !== null) {
      return el.attributes
    } else {
      return null
    }
  }

  function checkFunction (fn, NS) {
  // RETURN A FUNCTION TO CALL IF IT EXISTS

    var args = []
    var func = false
    var obj = window.Daft.NS[NS.namespace.namespace]

    // IF ACTUAL FUNCTION WAS PASSED & NOT JUST A NAME OF A FUNCTION
    if (fn !== null && fn.indexOf('(') > 0) {
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

    if (NS.attributes !== null) {
      if (typeof NS.attributes['daft-update'] !== 'undefined') {
        updateFunction = NS.attributes['daft-update'].value
      }

      if (typeof NS.attributes[NS.namespace.namespace + '-data'] !== 'undefined') {
        dataKey = NS.attributes[NS.namespace.namespace + '-data'].value
      }

      // IF AN UPDATE FUNCTION WAS PROVIDED
      if (typeof updateFunction !== 'undefined') {
        updateFunction = checkFunction(updateFunction, NS)

        // IF FUNCTION EXISTS & SHOULD BE RUN
        if (updateFunction.run !== false) {
          var updateData = {
            el: mutation.target.parentElement,
            data: mutation.target.nodeValue,
            key: dataKey,
            previous: mutation.oldValue,
            mutation: mutation
          }

          // IF FUNCTION HAS ARGUMENTS
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
          if (typeof updateFunction.run === 'function') updateFunction.run.apply(this, updateFunction.arguments)
        }
      }
    }

    if (typeof NS.attributes[NS.namespace.namespace + '-data'] !== 'undefined') {
      dataKey = NS.attributes[NS.namespace.namespace + '-data'].value
    }

    // UPDATE OBJECT WITH NEW VALUE
    Daft.NS[NS.namespace.namespace].domData[dataKey].data = mutation.target.nodeValue
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
