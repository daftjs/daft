const Utility = require('./utility.js')

module.exports = {

  app: function (name, opt) {
    if (typeof opt !== 'undefined') Utility.bootstrap(this.settings, opt) // APPLY NEW APP SETTINGS
    if (typeof name !== 'undefined') this.settings.name = name // SET APP NAME
  },

  set: function (opt) {
    Utility.bootstrap(this.settings, opt)
  },

  settings: {
    name: 'Daft',
    attributes: {
      app: '-app',
      component: '-component',
      data: '-data',
      include: '-include',
      update: '-update'
    },
    other: 'test',
    prefix: 'dj',
    templates: {
      dir: 'templates',
      ext: '.html'
    },
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
}
