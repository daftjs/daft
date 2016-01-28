'use strict';

const Daft = Daft || window.Daft;
const request = require('../public/lib/pegasus-amd.js');

// CREATES A NEW COMPONENT
const Include = {

  init: function (opts) {


    let containers = Daft.dom(Daft.prefix + Daft.attributes.include);
    let self = this;
    self.opts = opts;


    containers.forEach(function(container) {
      let file = container.attributes.src.value;
      let templateData = {};

      if (typeof container.attributes.component !== 'undefined') {
        templateData.component = container.attributes.component.value;
      }
      self.fetch(container, file, templateData);
    });

  },

  engine: function (file) {
    let self = this;

    if (self.opts.engine === null) {
      var ext = (file).match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
      return ext[1];
    } else {
      return self.opts.engine;
    }

  },

  // TODO: REFACTOR TO USE CONSOLIDATE FOR MORE DYNAMIC TEMPLATES
  fetch: function (container, file, data) {
    let self = this;

    var engine = self.engine(file);

    request(self.opts.dir + file).then(
      // success handler
      function(response, xhr) {
        var content = html;
        var html = xhr.response;

        data.template = self.opts;
        data.template.engine = engine;


        // JADE
        if (self.opts.engine === 'jade') {
          const jade = require('../node_modules/jade/jade.js');
          content = jade.compile(html)(data);
        }

        // HANDLEBARS
        if (self.opts.engine === 'handlebars' || self.opts.engine === 'hbs') {
          const handlebars = require('handlebars/dist/amd/handlebars');
          content = handlebars.compile(html);
          content = content(data);
        }

        Daft.dom(container).replaceWith(content);


      },
      // error handler (optional)
      function(data, xhr) {
        Daft.error(data, xhr.status);
      }
    );
  }

};

module.exports = Include;
