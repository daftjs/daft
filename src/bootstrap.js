const Utility = require('./utility.js');

module.exports = {

  app: function (name, options) {

    var self = this;

    window.console.log('Bootstrap.app');

    if (typeof name !== 'undefined') self.settings.name = name; // SET APP NAME

    // APPLY NEW APP SETTINGS
    for (var opt in options) {
      if (options[opt] !== 'version') {
        window.console.log('type', typeof options[opt]);
        if (typeof options[opt] === 'object') {
          self.settings[opt] = options[opt];
          // Utility.bootstrap(self.settings, options);
        }
        if (typeof options[opt] === 'string') {
          self.settings[opt] = options[opt];
        }
      }
    }

  },

  set: function (opt) {
    Utility.bootstrap(this.settings, opt);
  },

  settings: {
    name: 'Daft',
    attributes: {
      app: '-app',
      component: 'component',
      data: '-data',
      init: 'data-init',
      include: '-include',
      loop: '-loop',
      loopItem: 'loop-item',
      update: '-update'
    },
    templates: {
      dir: 'templates/',
      engine: null,
      ext: null
    },
    prefix: 'daft',
    router: {
      html5: true,
      prepend: '#'
    },
    version: {
      codename: 'bulleit',
      full: '0.2.0',
      major: '0',
      minor: '2',
      dot: '0'
    },
    logging: {
      console: true,
      file: false
    }
  }
};
