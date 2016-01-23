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

    function watchData (scope, prop) {
    // WATCH FOR CHANGES TO NS OBJECT
      self.watch(scope.domData[prop], function () {
      // IF OBJECT CHANGES
        var self = this

        Daft.dom('[' + namespace + '-data="' + prop + '"]').forEach(function (value, key) {
          if (typeof value.type !== 'undefined') {
            Daft.dom(value).val(self.data)
          } else {
            Daft.dom(value).html(self.data)
          }
        })
      })
    }

    // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
    function populateDomData () {
      self.domData = {}

      var datas = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]')

      // GRAB ALL namespace-data ELEMENTS & APPEND TO DOM DATA
      datas.forEach(function (element, key) {
        var prop = element.attributes[namespace + '-data'].value
        var qty = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data="' + prop + '"]').length
        var value = ''

        if (qty === 1 || typeof element.attributes['data-init'] !== 'undefined') {
          if (typeof element.type !== 'undefined' && element.value !== '') value = element.value
          if (typeof element.innerHTML !== 'undefined' && element.innerHTML !== '') value = element.innerHTML

          self.domData[prop] = {
            data: value,
            previous: null
          }
        }

        // ON CHANGE EVENT FOR FORM ELEMENTS
        // TODO: REVISIT HOW THIS WORKS
        if (typeof element.type !== 'undefined') {
          element.addEventListener('input', function (e) {
            self.domData[prop].data = e.target.value
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
          if (typeof Dom(element)[0].type !== 'undefined') {
            Dom(element).val(userData.domData[prop].data)
          } else { // OTHERWISE SET HTML
            Dom(element).html(userData.domData[prop].data)
          }

          // UPDATE DOMDATA OBJECT
          self.domData[prop].data = userData.domData[prop].data
          self.domData[prop].previous = value
        }

        watchData(self, prop) // WATCH FOR CHANGES TO OUR DATA

        // ONCE ALL DATA HAS BEEN CHECKED
        if (key === datas.length - 1) {
          if (typeof self.domData[prop] === 'undefined') {
            self.domData[prop] = {
              data: '',
              previous: null
            }
            // THROW AN ERROR IF WE CAN'T DETERMINE AN INITIAL DEFAULT VALUE
            // TODO: ABSTRACT ERROR MESSAGES OUT INTO AN ERROR HANDLER SERVICE (ESPECIALLY SUCH IN-DEPTH MESSAGES)
            console.error(
              'Error populating ' + prop + ' data:\n\n' +
              'Found ' + (datas.length - 1) + ' element(s) with ' + namespace + '-data="' + prop + '" attribute, and could not determine default value.\nIf you wish to use the same key to bind data to multiple elements, please be sure to specify a default value in domData object when creating the namespace:\n' +
              'domData: {\n' +
              '  ' + prop + ': {\n' +
              '    data: "my value"\n' +
              '  }\n' +
              '}\n\n' +
              'Alternatively, if you want to pull the default data from the dom, you can add an init-data attribute to one (and only one!) of these elements: \n', datas, '\n\nmore info: http://docs.daftjs.com/namespace/data')
          } else {
            setData(self, prop)
          }
        }

      // END
      })
    }

    function setData (self, prop) {
    // SET DOM DATA

      var datas = Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data="' + prop + '"]')

      datas.forEach(function (element, key) {
        if (typeof element.type !== 'undefined' && element.value !== '') {
          Daft.dom(element).val(self.domData[prop].data)
        } else {
          Daft.dom(element).html(self.domData[prop].data)
        }
      })
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
    Daft.NS[namespace] = self

    // WATCH FOR ANY DOM CHANGES
    self.observer = new Watcher.Observe(self.container)

    // ALLOW FOR CALLBACK AS LAST PARAMETER
    // TODO: CONSIDER DELETING SINCE WE HAVE ONLOAD NOW
    if (typeof cb === 'function') cb()

    // INFORM ONLOAD WE ARE ALL FINISHED
    self.loaded.success = true
  }

  onUpdate (cb) {
    if (typeof cb === 'function') cb()
  }

  onload (cb) {
    var self = this

    // MAX SECS / REFRESH RATE = HOW MANY TIMES WE CAN TRY TRY
    var fail = self.loaded.fail / self.loaded.refresh

    if (self.loaded.success) {
      if (typeof cb === 'function') cb()
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
      cb({
        msg: 'Failed to finish loading ' + self.namespace + ' namespace after ' + self.loaded.fail / 1000 + ' seconds'
      })
    }
  }

}

module.exports = Namespace
