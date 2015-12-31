class Logger {

  constructor (allow) {
    this.allow = allow
  }

  log (msg) {
    if (window.console.log && this.allow) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        window.console.log(arguments[0], arguments[1])
      } else {
        window.console.log(arguments[0])
      }
    }
  }

  info () {
    if (window.console.info && this.allow) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        window.console.info(arguments[0], arguments[1])
      } else {
        window.console.info(arguments[0])
      }
    }
  }

  error () {
    if (window.console.error && this.allow) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        window.console.error(arguments[0], arguments[1])
      } else {
        window.console.error(arguments[0])
      }
    }
  }

  warn () {
    if (window.console.warn && this.allow) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        window.console.warn(arguments[0], arguments[1])
      } else {
        window.console.warn(arguments[0])
      }
    }
  }

}

module.exports = Logger
