module.exports = {
  bootstrap: function (settings, opt, keys) {
  // BOOTSTRAP NEW APP WITH USER DEFINIED VALUES
  // FALLS BACK TO DEFAULTS IF NOT DEFINED

    if (typeof keys === 'undefined') {
      keys = '';
    } else {
      keys = keys + '.';
    }

    // keys = ''

    for (var key in settings) {
      var item = settings[key];
      if (typeof item === 'object') {
        this.bootstrap(item, opt, key);
      } else {
        keys = keys + key;
        this.setObjectValue(settings, keys, this.extractObjectValue(opt, keys));
        keys = '';
      }
    }
  },

  capitalize: function (str) {
    return str.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },

  setNamespace: function (name) {
    return this.capitalize(name);
  },

  setObjectValue: function (obj, keys, value) {
  // EXTRACT VALUE OF OBJECT BASED ON STRINGIFIED KEY

    if (typeof value !== 'undefined') {
      if (typeof keys === 'string') {
        keys = keys.split('.');
      }
      var last = keys.pop();
      for (var i in keys) {
        if (!obj.hasOwnProperty(keys[i])) {
          break;
        }
        obj = obj[keys[i]];
      }
      if (obj.hasOwnProperty(last)) {
        obj[last] = value;
      }
    }
  },

  extractObjectValue: function (obj, keys) {
  // EXTRACT VALUE OF OBJECT BASED ON STRINGIFIED KEY

    if (typeof keys === 'string') {
      keys = keys.split('.');
    }
    var last = keys.pop();
    for (var i in keys) {
      if (!obj.hasOwnProperty(keys[i])) {
        break;
      }
      obj = obj[keys[i]];
    }
    if (obj.hasOwnProperty(last)) {
      return obj[last];
    }
  }

};
