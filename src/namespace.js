class Namespace {

  constructor (namespace, userData) {
    var Daft = window.Daft
    var Dom = require('domtastic')
    var WatchJS = require('watchjs')
    var watch = WatchJS.watch
    var Watcher = require('./watcher')([namespace + '-data'])
    var self = this

    userData = userData || {}

    // ADD USER DATA TO NAMESPACE
    for (var key in userData) {
      self[key] = userData[key]
    }

    if (typeof userData.update !== 'undefined' && typeof userData.update === 'function') {
      self.update = userData.update
    }

    // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
    function populateDomData () {
      self.domData = {}

      Dom('[namespace="' + namespace + '"]').children('[' + namespace + '-data]').forEach(function (element) {
        var prop = element.attributes[namespace + '-data'].value
        var value = element.innerHTML

        self.domData[prop] = {
          data: value,
          previous: null
        }

        // OVERRIDE HTML WITH USER PROVIDED VALUE
        if (typeof userData.domData !== 'undefined' && typeof userData.domData[prop] !== 'undefined') {
          Dom(element).html(userData.domData[prop].data)
          self.domData[prop].data = userData.domData[prop].data
          self.domData[prop].previous = value
        } else {
          self.domData[prop] = value
        }

        // UPDATE ELEMENT IF DATA CHANGES
        watch(self.domData[prop], function () {
          Dom(element).html(this.data)
        })
      })
    }

    self.onUpdate = function (data) {
      self.domData[data.key].data = data.data
      self.domData[data.key].previous = data.previous
      // populateDomData()
    }

    self.container = Dom('[namespace="' + namespace + '"]')[0]

    self.namespace = namespace

    // POPULATE DOM DATE
    populateDomData()

    self.actions = {
      test: self.test,
      updateData: populateDomData
    }

    Daft.NS[namespace] = self

    self.observer = new Watcher.Observe(self.container)
  }

}

module.exports = Namespace
