// REQUIRES
var Logger = require('./logger');
var Bootstrap = require('./bootstrap');

module.exports = {

  app: function (name, opt, cb) {

    var self = this;

    Bootstrap.app(name, opt);

    // SET APP KEYS
    for (var bootstrapKey in Bootstrap.settings) {
      self[bootstrapKey] = Bootstrap.settings[bootstrapKey];
    }

    self[name] = {};

    const Include = require('./include');

    self.dom = require('domtastic');
    Include.init(self.templates);
    self.Component = require('./component');

    if (typeof cb === 'function') cb.call(self);

  },

  // READY EVENT FIRED WHEN EVERYTHING IS LOADED
  ready: function (cb) {
    var self = this;
    this.dom(document).ready(function () {
      if (typeof cb === 'function') cb.call(self);
    });
  },

  // LOGGING FUNCTIONS
  error: function () { new Logger(this.logging.console).error(arguments[0], arguments[1]); },
  info: function () { new Logger(this.logging.console).info(arguments[0], arguments[1]); },
  log: function () { new Logger(this.logging.console).log(arguments[0], arguments[1]); },
  warn: function () { new Logger(this.logging.console).warn(arguments[0], arguments[1]); }

};
