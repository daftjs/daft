class DaftJS {

  constructor () {
    var self = this

    self.version = {
      codename: 'bulleit',
      full: '0.2.0',
      major: '0',
      minor: '2',
      dot: '0'
    }
    self.config = {
      logging: {
        console: true,
        file: false
      }
    }

    self.Logger = require('./logger') // LOGGING

    self.dom = require('domtastic')
    self.Namespace = require('./namespace')
    self.App = {}
  }

  // LOGGING ALIAS'
  error () { new this.Logger(this.config.logging.console).error(arguments[0], arguments[1]) }
  info () { new this.Logger(this.config.logging.console).info(arguments[0], arguments[1]) }
  log () { new this.Logger(this.config.logging.console).log(arguments[0], arguments[1]) }
  warn () { new this.Logger(this.config.logging.console).warn(arguments[0], arguments[1]) }

  // READY EVENT FIRED WHEN EVERYTHING IS LOADED
  ready (cb) {
    this.dom(document).ready(function () {
      if (window.Daft) {
        cb.apply(this)
      } else {
        console.error('Error:', 'Daft could not be loaded')
      }
    })
  }

}

module.exports = new DaftJS()
