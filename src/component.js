'use strict';

const WatchJS = require('watchjs');
const Watch = WatchJS.watch;
const Daft = Daft || window.Daft;
const Dom = require('domtastic');
const Utility = require('./utility.js');

// CREATES A NEW COMPONENT
class Component {

  constructor (component, userData, cb) {
    let self = this;
    const Watcher = require('./watcher')([component + Daft.attributes.data]);

    component = component.toLowerCase();

    if (!verify(component)) return false; // VERIFY THAT NAMESPACE EXISTS

    self.loaded = {
      attempts: 0, // HOW MANY TIMES WE'VE TRIED TO FIRE LOAD EVENT
      fail: 3000, // HOW MANY SECONDS TIL WE SHOULD GIVE UP
      refresh: 500, // HOW OFTEN TO RE-TRY
      success: false // WHETHER OR NOT WE'VE SUCCEEDED YET
    };

    // SET EMPTY OBJECT IF NOT PROVIDED
    userData = userData || {};

    // ADD USER DATA TO NAMESPACE
    for (let key in userData) {
      self[key] = userData[key];
    }

    function watchData (scope, elements) {
    // WATCH FOR CHANGES TO DOM DATA OBJECT

      for (let key in elements) {
        elements[key].forEach(function (el, key) {
          let element = el.element;

          if (typeof scope.data[el.key] !== 'undefined') {
            Watch(scope.data[el.key], function () {
              let val = scope.data[el.key].value;
              let tag = scope.data[el.key].tag;
              if (typeof element.type !== 'undefined' && element.type !== '') {
                Daft.dom(element).value(val);
              } else {
                if (typeof val === 'string') {
                  Dom(element).html(val);
                } else {
                  let arrayData = '';
                  val.forEach(function (value) {
                    arrayData = arrayData + '<' + tag + ' ' + Daft.attributes.loopItem + '>';
                    arrayData = arrayData + value;
                    arrayData = arrayData + '</' + tag + '>';
                  });

                  Dom(element).html(arrayData);
                }
              }
            });
          }
        });
      }
    }

    function verify (component) {
      let wrapper = Dom('[' + Daft.attributes.component + '="' + component + '"]');

      if (wrapper.length < 1) {
        throwError('invalidNamespace');
        return false;
      } else {
        return wrapper;
      }
    }

    // GET ALL CUSTOM DOM TAGS FOR NAMESPACE: <component-key>
    function registerTags (component) {
      let elements = Dom('[' + Daft.attributes.component + '="' + component + '"] *');
      let tags = [];
      let skip = false;

      elements = Array.prototype.slice.call(elements).filter(function (el) {
        return el.localName.indexOf('-') !== -1 || el.getAttribute('is');
      });

      // LOOP THROUGH EACH CUSTOM ELEMENT
      elements.forEach(function (el, key) {
        let attrs = el.localName.split('-');
        let data = dataType(el);
        let root = false;

        if (el.attributes[Daft.attributes.init]) root = true;

        // MAKE SURE IT'S IN OUR NAMESPACE
        if (attrs[0] === component) {
          // ADD DATA TO ARRAY OF CUSTOM TAGS
          tags.push({
            element: el,
            key: el.localName.split(attrs[0] + '-')[1],
            component: attrs[0],
            root: root,
            tag: el.localName,
            type: data.type,
            value: data.value
          });

          if (el.attributes[component + Daft.attributes.data]) {
            if (el.localName.split(component + '-').join('') === el.attributes[component + Daft.attributes.data].value) {
              skip = true;
            }
          }

          if (!skip) Dom(el).attr(component + Daft.attributes.data, el.localName.split(attrs[0] + '-')[1]);
        }

        // REGISTER ELEMENTS WITH THE DOM
        try { document.registerElement(el.localName); } catch (e) {
          //
        }
      });

      return tags;
    }

    // POPULAR DOM DATA OBJECT BASED ON component-data OBJECTS
    function populateDomData () {
      self.data = {};

      let domTags = Dom('[' + Daft.attributes.component + '="' + component + '"]').find('[' + component + '-data]');

      self.customTags = registerTags(component);

      data(self.customTags, domTags);
    }

    function dataType (el) {
      let data = '';
      let type = 'string';
      let value = '';

      if (el.attributes[Daft.attributes.prefix + '-loop']) {
        let children = Daft.dom(el).find('[' + Daft.prefix + Daft.attributes.loopItem);
        data = [];
        type = 'array';

        children.forEach(function (el) {
          if (typeof el.type !== 'undefined' && el.value !== '') value = el.value;
          if (typeof el.innerHTML !== 'undefined' && el.innerHTML !== '') value = el.innerHTML;
          data.push(value);
        });
      } else {
        data = el.innerHTML;
      }

      return {
        type: type,
        value: data
      };
    }

    function data (tags, domTags) {
    // COMBINE DATA FROM CUSTOM ELEMENTS & DATA ATTRIBUTES

      let elementCollection = [];
      let added = [];

      // GET EACH STANDARD ELEMENT
      domTags.forEach(function (el) {
        let data = dataType(el);
        let key = el.attributes[component + Daft.attributes.data].value;
        let root = false;

        if (el.attributes[Daft.attributes.init]) root = true;

        if (typeof elementCollection[key] === 'undefined') {
          elementCollection[key] = [];
          elementCollection.length++;
        }

        added.push(el);

        // SAVE DATA
        elementCollection[key].push({
          element: el,
          key: key,
          component: component,
          root: root,
          tag: el.localName,
          type: data.type,
          value: data.value
        });
      });

      // GET EACH CUSTOM ELEMENT
      tags.forEach(function (element, key) {
        Daft.dom(element.tag).forEach(function (el) {
          let data = dataType(el);
          let root = false;
          let skip = false;

          if (el.attributes[Daft.attributes.init]) root = true;

          if (typeof elementCollection[element.key] === 'undefined') {
            elementCollection[element.key] = [];
            elementCollection.length++;
          }

          added.forEach(function (value, key) {
            if (value === el) skip = true;
          });

          if (!skip) {
            elementCollection[element.key].push({
              element: el,
              key: element.key,
              component: element.component,
              root: root,
              tag: element.tag,
              type: data.type,
              value: data.value
            });
          }
        });
      });

      populateData(elementCollection);
    }

    function throwError (which, data) {
    // ERROR HANDLER FOR NAMESPACE

      if (which === 'invalidNamespace') {
        return Daft.error(
          'Failed to initiate component for ' + component + '. Could not find a valid container.' +
          'Please make sure your component has a parent container with an attribute of ' + Daft.attributes.component + '="' + component + '"'
        );
      }

      if (which === 'noRoot') {
        return Daft.error('Error populating ' + data.prop + ' data:\n\n' +
        'Found multiple elements with "' + data.prop + '" data in "' + component + '" component, and could not determine default value. If you wish to use the same key to bind data to multiple elements, please be sure to specify a default value in data object when creating the component:\n' +
        'data: {\n' +
        '  ' + data.prop + ': {\n' +
        '    value: "hello world"\n' +
        '  }\n' +
        '}\n\n' +
        'Alternatively, if you want to pull the default data from the dom, you can add a data-init attribute to one (and only one!) of these elements.');
      }
    }

    function populateData (elements) {
    // POPULATE DATA FROM DOM ELEMENTS

      for (let key in elements) {
        let qty = elements[key].length;
        let root = false;
        let jsData = false;

        elements[key].forEach(function (el, key) {
          let element = el.element;
          let prop = el.key;
          let value = '';

          if (qty === 1 || el.root === true) {
            self.data[prop] = {
              value: el.value,
              previous: null
            };
          }

          // ON CHANGE EVENT FOR FORM ELEMENTS
          // TODO: REVISIT HOW THIS WORKS
          if (typeof element.type !== 'undefined') {
            element.addEventListener('input', function (e) {
              self.data[prop].value = e.target.value;
              this.setSelectionRange(this.selectionStart, this.selectionEnd);
            });
          }

          if (typeof userData.data !== 'undefined' && typeof userData.data[prop] !== 'undefined') {
          // OVERRIDE DOM DATA WITH JS DATA IF THE EXISTS

            if (typeof self.data[prop] === 'undefined') {
            // CREATE DOM DATA FOR PROP IF IT DOESN'T EXIST
              self.data[prop] = { data: '', previous: null };
            }

            // SET VALUE IF FORM FIELD
            if (typeof element.type !== 'undefined' && element.type !== '') {
              Dom(element).val(userData.data[prop].value);
            } else { // OTHERWISE SET HTML

              // IF VALUE IS A STRING, JUST SAVE AS HTML
              if (typeof userData.data[prop].value === 'string') {
                Dom(element).html(userData.data[prop].value);
              // IF WE HAVE AN ARRAY OR AN OBJECT, TRY AND CREATE A LIST
              } else {
                populateArray(userData, element, prop);
              }
            }

            // UPDATE DOMDATA OBJECT
            self.data[prop].value = userData.data[prop].value;
            self.data[prop].previous = value;

            jsData = true;
          }

          if (el.root) root = true;

          // IF WE HAVE MORE THAN ONE ELEMENT, MAKE SURE WE HAVE A ROOT ELEMENT TO SET DEFAULT VALUE
          if (qty > 1 && key === qty - 1) {
            // THROW AN ERROR IF WE CAN'T DETERMINE AN INITIAL DEFAULT VALUE
            if (!root && !jsData) throwError('noRoot', {prop: prop, elements: elements});
          } else {
            setData(self, elements);
            watchData(self, elements); // WATCH FOR CHANGES TO OUR DATA
          }

          // JUST IN CASE WE STILL DON'T KNOW WHAT THE DOM DATA VALUE SHOULD BE
          if (typeof self.data[prop] === 'undefined' && el.tag !== 'content-' + prop) {
            self.data[prop] = { value: '', previous: null };
          }
        });
      }
    }

    function populateArray (userData, element, prop) {
      let arrayData = '';

      userData.data[prop].value.forEach(function (value) {
        // IF USER HAS SUPPLIED A TEMPLATE
        if (typeof userData.data[prop].template !== 'undefined') {
        // IF WE'RE USING RAW DATA
        } else {
          if (typeof value === 'object') {
            value = value[userData.data[prop].key];
          }
          arrayData = arrayData + '<' + userData.data[prop].tag + '' + Daft.attributes.loopItem + '>';
          arrayData = arrayData + value;
          arrayData = arrayData + '</' + userData.data[prop].tag + '>';
          self.data[prop].tag = userData.data[prop].tag;
        }
      });

      Dom(element).html(arrayData);
    }

    function setData (self, elements) {
    // SET DOM DATA FOR EACH ELEMENT

      for (let key in elements) {
        elements[key].forEach(function (el, key) {
          let element = Daft.dom(el.element)[0];
          if (typeof self.data[el.key] !== 'undefined') {
            let val = self.data[el.key].value;
            if (typeof element.type !== 'undefined' && element.type !== '') {
              Daft.dom(element).value(val);
            } else {
              Daft.dom(element).html(val);
            }
          }
        });
      }
    }

    // SET PARENT COMTAINER
    self.container = Dom('[' + Daft.attributes.component + '="' + component + '"]')[0];

    // SET NAMESPACE NAME
    self.name = Utility.setNamespace(component);

    // POPULATE DOM DATA
    populateDomData();

    // ADD NAMESPACE TO NS OBJECT
    Daft[Daft.name][self.name] = self;

    // WATCH FOR ANY DOM CHANGES
    self.observer = new Watcher.Observe(self.container);

    self.loaded.success = true; // INFORM ONLOAD FUNCTION WE'RE ALL FINISHED
  }

  onload (cb) {
  // CALLBACK ONE EVERYTHING IS LOADED
    let self = this;

    // MAX SECS / REFRESH RATE = HOW MANY TIMES WE CAN TRY TRY
    let fail = self.loaded.fail / self.loaded.refresh;

    if (self.loaded.success) {
      if (typeof cb === 'function') {
        cb.call(self);
      }
    } else if (!self.loaded.success && self.loaded.attempts < fail) {
      self.loaded.attempts++;
      setTimeout(function () {
        if (!self.loaded.success) {
          self.onload(cb);
        } else {
          if (typeof cb === 'function') cb();
        }
      }, self.loaded.refresh);
    } else {
      cb.call(self, {
        msg: 'Failed to finish loading ' + self.component + ' component after ' + self.loaded.fail / 1000 + ' seconds'
      });
    }
  }

}

module.exports = Component;
