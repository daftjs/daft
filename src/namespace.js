// CREATES A NEW NAPESPACE

class Namespace {

  constructor (namespace, userData) {
    var Daft = Daft || window.Daft
    var Dom = require('domtastic')
    var WatchJS = require('watchjs')
    var watch = WatchJS.watch
    var Watcher = require('./watcher')([namespace + '-data'])
    var self = this

    // SET EMPTY OBJECT IF NOT PROVIDED
    userData = userData || {}

    // ADD USER DATA TO NAMESPACE
    for (var key in userData) {
      self[key] = userData[key]
    }

    // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
    function populateDomData () {
      self.domData = {}

      // GRAB ALL namespace-data ELEMENTS & APPEND TO DOM DATA
      Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]').forEach(function (element) {
        var prop = element.attributes[namespace + '-data'].value
        var value = element.innerHTML

        // SET DEFAULT DATA
        self.domData[prop] = {
          data: value,
          previous: null
        }

        // OVERRIDE HTML WITH USER PROVIDED VALUE
        if (typeof userData.domData !== 'undefined' && typeof userData.domData[prop] !== 'undefined') {
          Dom(element).html(userData.domData[prop].data)
          self.domData[prop].data = userData.domData[prop].data
          self.domData[prop].previous = value
        // FALLBACK TO DOM VALUE
        } else {
          self.domData[prop] = value
        }

        // IF OBJECT CHANGES
        watch(self.domData[prop], function () {
          Daft.dom('[' + namespace + '-data="' + prop + '"]').html(this.data)
        })
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
  }

}

module.exports = Namespace
