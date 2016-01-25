// CREATES A NEW NAPESPACE

class Namespace {

  constructor (namespace, userData, cb) {
    var Daft = Daft || window.Daft
    var Dom = require('domtastic')
    var WatchJS = require('watchjs')
    var Watcher = require('./watcher')([namespace + '-data'])
    var self = this

    self.watch = WatchJS.watch

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
    // WATCH FOR CHANGES TO NS OBJECT

      // self.watch(scope.domData[el.key], function () {
      // // IF OBJECT CHANGES
      //   var self = this
      //   var element = Daft.dom(el.element)
      //
      //   if (typeof element.type !== 'undefined') {
      //     console.log('set value', self.value)
      //     Daft.dom(element).value(self.value)
      //   } else {
      //     console.log('set html', self.value)
      //     console.log(element)
      //     Daft.dom(element).html(self.value)
      //   }
      // })

      console.log('scope', scope)
      console.log('elements', elements)

      for (var key in elements) {
        elements[key].forEach(function (el, key) {
          var element = Daft.dom(el.element)[0]

          if (typeof scope.domData[el.key] !== 'undefined') {
            console.log('watch ' + el.key)
            scope.watch(scope.domData[el.key], function () {
              console.log('change to' + el.key, scope.domData[el.key])
              var val = scope.domData[el.key].value
              if (typeof element.type !== 'undefined') {
                console.log('set value', scope.value)
                Daft.dom(element).value(val)
              } else {
                console.log('set html', scope.value)
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

      elements = Array.prototype.slice.call(elements).filter(function (el) {
        return el.localName.indexOf('-') !== -1 || el.getAttribute('is')
      })

      // LOOP THROUGH EACH CUSTOM ELEMENT
      elements.forEach(function (value, key) {
        var attrs = value.localName.split('-')

        // MAKE SURE IT'S IN OUR NAMESPACE
        if (attrs[0] === namespace) {
          // ADD DATA TO ARRAY OF CUSTOM TAGS
          tags.push({
            key: value.localName.split(attrs[0] + '-')[1],
            namespace: attrs[0],
            tag: value.localName
          })

          // REGISTER ELEMENTS WITH THE DOM
          try { document.registerElement(value.localName) } catch (e) {}

          Dom(value).attr(namespace + '-data', value.localName.split(attrs[0] + '-')[1])
        }
      })

      return tags
    }

    // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
    function populateDomData () {
      self.domData = {}

      var datas = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]')

      self.customTags = registerTags(namespace)

      // var datas = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]')

      // console.log('custom', )

      // GRAB ALL namespace-data ELEMENTS & APPEND TO DOM DATA
      // datas.forEach(function (element, key) {
      //   attributeData(element, key, datas)
      // })

      domData(self.customTags, datas)
    }

    function domData (tags, datas) {
    // COMBINE DATA FROM CUSTOM ELEMENTS & DATA ATTRIBUTES

      var allElements = []

      // GET EACH STANDARD ELEMENT
      datas.forEach(function (el) {
        var root = false
        var key = el.attributes[namespace + '-data'].value

        if (el.attributes['data-init']) root = true

        if (typeof allElements[key] === 'undefined') {
          allElements[key] = []
          allElements.length++
        }

        // SAVE DATA
        allElements[key].push({
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

          if (el.attributes['data-init']) root = true

          if (typeof allElements[element.key] === 'undefined') {
            allElements[element.key] = []
            allElements.length++
          }

          // GET EACH STANDARD ELEMENT
          allElements[element.key].push({
            element: el,
            key: element.key,
            namespace: element.namespace,
            root: root,
            tag: element.tag,
            value: el.innerHTML
          })
        })
      })

      populateData(allElements)
    }

    function populateData (elements) {
    // POPULATE DATA FROM DOM ELEMENTS

      for (var key in elements) {
        var qty = elements[key].length
        elements[key].forEach(function (el, key) {
          var element = el.element
          var prop = el.key
          var value = ''

          if (qty === 1 || el.root === true) {
            if (typeof element.type !== 'undefined' && element.value !== '') value = element.value
            if (typeof element.innerHTML !== 'undefined' && element.innerHTML !== '') value = element.innerHTML

            self.domData[prop] = {
              value: value,
              previous: null
            }
          }

          // ON CHANGE EVENT FOR FORM ELEMENTS
          // TODO: REVISIT HOW THIS WORKS
          if (typeof element.type !== 'undefined') {
            element.addEventListener('input', function (e) {
              self.domData[prop].value = e.target.value
              this.setSelectionRange(this.selectionStart, this.selectionEnd)
            })
          }

          if (typeof userData.domData !== 'undefined' && typeof userData.domData[prop] !== 'undefined') {
          // OVERRIDE DOM DATA WITH JS DATA IF THE EXISTS

            if (typeof self.domData[prop] === 'undefined') {
            // CREATE DOM DATA FOR PROP IF IT DOESN'T EXIST
              self.domData[prop] = { data: '', previous: null }
            }

            // SET VALUE IF FORM FIELD
            if (typeof element.type !== 'undefined') {
              Dom(element).val(userData.domData[prop].value)
            } else { // OTHERWISE SET HTML
              Dom(element).html(userData.domData[prop].value)
            }

            // UPDATE DOMDATA OBJECT
            self.domData[prop].value = userData.domData[prop].value
            self.domData[prop].previous = value
          }

          // if (self.domData[prop]) {
          //
          // }

          // ONCE ALL DATA HAS BEEN CHECKED
          if (key === elements.length - 1) {
            console.info('ALL DONE')
            if (typeof self.domData[prop] === 'undefined') {
              console.log('undefined data')
              self.domData[prop] = {
                value: '',
                previous: null
              }
              // THROW AN ERROR IF WE CAN'T DETERMINE AN INITIAL DEFAULT VALUE
              // TODO: ABSTRACT ERROR MESSAGES OUT INTO AN ERROR HANDLER SERVICE (ESPECIALLY SUCH IN-DEPTH MESSAGES)
              console.error(
                'Error populating ' + prop + ' data:\n\n' +
                'Found ' + (elements.length - 1) + ' element(s) with ' + namespace + '-data="' + prop + '" attribute, and could not determine default value.\nIf you wish to use the same key to bind data to multiple elements, please be sure to specify a default value in domData object when creating the namespace:\n' +
                'domData: {\n' +
                '  ' + prop + ': {\n' +
                '    data: "my value"\n' +
                '  }\n' +
                '}\n\n' +
                'Alternatively, if you want to pull the default data from the dom, you can add a data-init attribute to one (and only one!) of these elements: \n', elements, '\n\nmore info: http://docs.daftjs.com/namespace/data')
            } else {
              watchData(self, elements) // WATCH FOR CHANGES TO OUR DATA
              setData(self, elements)
            }
          }
        }) // END LOOP
      } // END LOOP
    }

    function setData (self, elements) {
    // SET DOM DATA FOR EACH ELEMENT

      for (var key in elements) {
        elements[key].forEach(function (el, key) {
          var element = Daft.dom(el.element)[0]
          if (typeof self.domData[el.key] !== 'undefined') {
            var val = self.domData[el.key].value
            if (typeof element.type !== 'undefined') {
              Daft.dom(element).value(val)
            } else {
              console.log('html', val)
              Daft.dom(element).html(val)
            }
          }
        })
      }
    }

    // SET PARENT COMTAINER
    self.container = Dom('[namespace="' + namespace + '"]')[0]

    // SET NAMESPACE NAME
    self.namespace = namespace

    // POPULATE DOM DATA
    populateDomData()

    // SET ACTIONS
    self.actions = {
      test: self.test,
      updateData: populateDomData
    }

    // ADD NAMESPACE TO NS OBJECT
    Daft.App[namespace] = self

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
