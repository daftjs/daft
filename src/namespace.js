// CREATES A NEW NAPESPACE
var WatchJS = require('watchjs')
var Watch = WatchJS.watch
var Daft = Daft || window.Daft
var Dom = require('domtastic')
var Utility = require('./utility.js')

class Namespace {

  constructor (namespace, userData, cb) {
    var self = this
    var Watcher = require('./watcher')([namespace + '-data'])

    namespace = namespace.toLowerCase()

    self.loaded = {
      attempts: 0, // HOW MANY TIMES WE'VE TRIED TO FIRE LOAD EVENT
      fail: 3000, // HOW MANY SECONDS TIL WE SHOULD GIVE UP
      refresh: 500, // HOW OFTEN TO RE-TRY
      success: false // WHETHER OR NOT WE'VE SUCCEEDED YET
    }

    // SET EMPTY OBJECT IF NOT PROVIDED
    userData = userData || {}

    // ADD USER DATA TO NAMESPACE
    for (var key in userData) {
      self[key] = userData[key]
    }

    function watchData (scope, elements) {
    // WATCH FOR CHANGES TO DOM DATA OBJECT

      for (var key in elements) {
        elements[key].forEach(function (el, key) {
          var element = el.element

          if (typeof scope.data[el.key] !== 'undefined') {
            Watch(scope.data[el.key], function () {
              var val = scope.data[el.key].value
              if (typeof element.type !== 'undefined') {
                Daft.dom(element).value(val)
              } else {
                Daft.dom(element).html(val)
              }
            })
          }
        })
      }
    }

    // GET ALL CUSTOM DOM TAGS FOR NAMESPACE: <namespace-key>
    function registerTags (namespace) {
      var elements = Dom('[namespace="' + namespace + '"] *')
      var tags = []
      var skip = false

      elements = Array.prototype.slice.call(elements).filter(function (el) {
        return el.localName.indexOf('-') !== -1 || el.getAttribute('is')
      })

      // LOOP THROUGH EACH CUSTOM ELEMENT
      elements.forEach(function (el, key) {
        var attrs = el.localName.split('-')

        var root = false

        if (el.attributes['data-init']) root = true

        // MAKE SURE IT'S IN OUR NAMESPACE
        if (attrs[0] === namespace) {
          // ADD DATA TO ARRAY OF CUSTOM TAGS
          tags.push({
            element: el,
            key: el.localName.split(attrs[0] + '-')[1],
            namespace: attrs[0],
            root: root,
            tag: el.localName,
            value: el.innerHTML
          })

          if (el.attributes[namespace + '-data']) {
            if (el.localName.split('content-').join('') === el.attributes[namespace + '-data'].value) {
              skip = true
            }
          }

          if (!skip) Dom(el).attr(namespace + '-data', el.localName.split(attrs[0] + '-')[1])
        }

        // REGISTER ELEMENTS WITH THE DOM
        try { document.registerElement(el.localName) } catch (e) {}
      })

      return tags
    }

    // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
    function populateDomData () {
      self.data = {}

      var domTags = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]')

      self.customTags = registerTags(namespace)

      data(self.customTags, domTags)
    }

    function data (tags, domTags) {
    // COMBINE DATA FROM CUSTOM ELEMENTS & DATA ATTRIBUTES

      var elementCollection = []
      var added = []

      // GET EACH STANDARD ELEMENT
      domTags.forEach(function (el) {
        var root = false
        var key = el.attributes[namespace + '-data'].value

        if (el.attributes['data-init']) root = true

        if (typeof elementCollection[key] === 'undefined') {
          elementCollection[key] = []
          elementCollection.length++
        }

        added.push(el)

        // SAVE DATA
        elementCollection[key].push({
          element: el,
          key: key,
          namespace: namespace,
          root: root,
          tag: el.localName,
          value: el.innerHTML
        })
      })

      // GET EACH CUSTOM ELEMENT
      tags.forEach(function (element, key) {
        Daft.dom(element.tag).forEach(function (el) {
          var root = false
          var skip = false

          if (el.attributes['data-init']) root = true

          if (typeof elementCollection[element.key] === 'undefined') {
            elementCollection[element.key] = []
            elementCollection.length++
          }

          added.forEach(function (value, key) {
            if (value === el) skip = true
          })

          if (!skip) {
          //   console.log('add', element)
            elementCollection[element.key].push({
              element: el,
              key: element.key,
              namespace: element.namespace,
              root: root,
              tag: element.tag,
              value: el.innerHTML
            })
          }
        })
      })

      populateData(elementCollection)
    }

    function throwError (which, data) {
      var messages = []

      messages.noRoot = console.error('Error populating ' + data.prop + ' data:\n\n' +
      'Found multiple elements with "' + data.prop + '" data in "' + namespace + '" namespace, and could not determine default value. If you wish to use the same key to bind data to multiple elements, please be sure to specify a default value in data object when creating the namespace:\n' +
      'data: {\n' +
      '  ' + data.prop + ': {\n' +
      '    value: "hello world"\n' +
      '  }\n' +
      '}\n\n' +
      'Alternatively, if you want to pull the default data from the dom, you can add a data-init attribute to one (and only one!) of these elements.')

      return messages[which]
    }

    function populateData (elements) {
    // POPULATE DATA FROM DOM ELEMENTS

      for (var key in elements) {
        var qty = elements[key].length
        var root = false
        var jsData = false

        elements[key].forEach(function (el, key) {
          var element = el.element
          var prop = el.key
          var value = ''

          if (qty === 1 || el.root === true) {
            if (typeof element.type !== 'undefined' && element.value !== '') value = element.value
            if (typeof element.innerHTML !== 'undefined' && element.innerHTML !== '') value = element.innerHTML
            self.data[prop] = {
              value: value,
              previous: null
            }
          }

          // ON CHANGE EVENT FOR FORM ELEMENTS
          // TODO: REVISIT HOW THIS WORKS
          if (typeof element.type !== 'undefined') {
            element.addEventListener('input', function (e) {
              self.data[prop].value = e.target.value
              this.setSelectionRange(this.selectionStart, this.selectionEnd)
            })
          }

          if (typeof userData.data !== 'undefined' && typeof userData.data[prop] !== 'undefined') {
          // OVERRIDE DOM DATA WITH JS DATA IF THE EXISTS

            if (typeof self.data[prop] === 'undefined') {
            // CREATE DOM DATA FOR PROP IF IT DOESN'T EXIST
              self.data[prop] = { data: '', previous: null }
            }

            // SET VALUE IF FORM FIELD
            if (typeof element.type !== 'undefined') {
              Dom(element).val(userData.data[prop].value)
            } else { // OTHERWISE SET HTML
              Dom(element).html(userData.data[prop].value)
            }

            // UPDATE DOMDATA OBJECT
            self.data[prop].value = userData.data[prop].value
            self.data[prop].previous = value

            jsData = true
          }

          if (el.root) root = true

          // IF WE HAVE MORE THAN ONE ELEMENT, MAKE SURE WE HAVE A ROOT ELEMENT TO SET DEFAULT VALUE
          if (qty > 1 && key === qty - 1) {
            // THROW AN ERROR IF WE CAN'T DETERMINE AN INITIAL DEFAULT VALUE
            if (!root && !jsData) throwError('noRoot', {prop: prop, elements: elements})
          } else {
            setData(self, elements)
            watchData(self, elements) // WATCH FOR CHANGES TO OUR DATA
          }

          // JUST IN CASE WE STILL DON'T KNOW WHAT THE DOM DATA VALUE SHOULD BE
          if (typeof self.data[prop] === 'undefined' && el.tag !== 'content-' + prop) {
            self.data[prop] = { value: '', previous: null }
          }
        })
      }
    }

    function setData (self, elements) {
    // SET DOM DATA FOR EACH ELEMENT

      for (var key in elements) {
        elements[key].forEach(function (el, key) {
          var element = Daft.dom(el.element)[0]
          if (typeof self.data[el.key] !== 'undefined') {
            var val = self.data[el.key].value
            if (typeof element.type !== 'undefined') {
              Daft.dom(element).value(val)
            } else {
              Daft.dom(element).html(val)
            }
          }
        })
      }
    }

    // SET PARENT COMTAINER
    self.container = Dom('[namespace="' + namespace + '"]')[0]

    // SET NAMESPACE NAME
    self.name = Utility.setNamespace(namespace)

    // POPULATE DOM DATA
    populateDomData()

    // ADD NAMESPACE TO NS OBJECT
    Daft[Daft.name][self.name] = self

    // WATCH FOR ANY DOM CHANGES
    self.observer = new Watcher.Observe(self.container)

    self.loaded.success = true // INFORM ONLOAD FUNCTION WE'RE ALL FINISHED
  }

  onload (cb) {
  // CALLBACK ONE EVERYTHING IS LOADED
    var self = this

    // MAX SECS / REFRESH RATE = HOW MANY TIMES WE CAN TRY TRY
    var fail = self.loaded.fail / self.loaded.refresh

    if (self.loaded.success) {
      if (typeof cb === 'function') {
        cb.call(self)
      }
    } else if (!self.loaded.success && self.loaded.attempts < fail) {
      self.loaded.attempts++
      setTimeout(function () {
        if (!self.loaded.success) {
          self.onload(cb)
        } else {
          if (typeof cb === 'function') cb()
        }
      }, self.loaded.refresh)
    } else {
      cb.call(self, {
        msg: 'Failed to finish loading ' + self.namespace + ' namespace after ' + self.loaded.fail / 1000 + ' seconds'
      })
    }
  }

}

module.exports = Namespace
