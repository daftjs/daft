var Daft =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DaftJS = (function () {
	  function DaftJS() {
	    _classCallCheck(this, DaftJS);

	    var self = this;

	    self.version = {
	      codename: 'apple jack',
	      full: '0.1.6',
	      major: '0',
	      minor: '1',
	      dot: '6'
	    };
	    self.config = {
	      logging: {
	        console: true,
	        file: false
	      }
	    };

	    self.bootstrap = {
	      Dom: __webpack_require__(2), // DOM FUNCTIONS
	      Logger: __webpack_require__(22) // LOGGING
	    };

	    self.dom = self.bootstrap.Dom;
	    self.Namespace = __webpack_require__(23);
	    self.NS = {};
	  }

	  // LOGGING ALIAS'

	  _createClass(DaftJS, [{
	    key: 'error',
	    value: function error() {
	      new this.bootstrap.Logger(this.config.logging.console).error(arguments[0], arguments[1]);
	    }
	  }, {
	    key: 'info',
	    value: function info() {
	      new this.bootstrap.Logger(this.config.logging.console).info(arguments[0], arguments[1]);
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      new this.bootstrap.Logger(this.config.logging.console).log(arguments[0], arguments[1]);
	    }
	  }, {
	    key: 'warn',
	    value: function warn() {
	      new this.bootstrap.Logger(this.config.logging.console).warn(arguments[0], arguments[1]);
	    }

	    // READY EVENT FIRED WHEN EVERYTHING IS LOADED

	  }, {
	    key: 'ready',
	    value: function ready(cb) {
	      this.dom(document).ready(function () {
	        if (window.Daft) {
	          cb();
	        } else {
	          console.error('Error:', 'Daft could not be loaded');
	        }
	      });
	    }
	  }]);

	  return DaftJS;
	})();

	module.exports = new DaftJS();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module API
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _util = __webpack_require__(3);

	// Import modules to build up the API

	var _array = __webpack_require__(4);

	var array = _interopRequireWildcard(_array);

	var _baseClass = __webpack_require__(6);

	var _baseClass2 = _interopRequireDefault(_baseClass);

	var _domAttr = __webpack_require__(7);

	var attr = _interopRequireWildcard(_domAttr);

	var _domClass = __webpack_require__(8);

	var class_ = _interopRequireWildcard(_domClass);

	var _domContains = __webpack_require__(9);

	var contains = _interopRequireWildcard(_domContains);

	var _css = __webpack_require__(10);

	var css = _interopRequireWildcard(_css);

	var _domData = __webpack_require__(11);

	var data = _interopRequireWildcard(_domData);

	var _domIndex = __webpack_require__(12);

	var dom = _interopRequireWildcard(_domIndex);

	var _domExtra = __webpack_require__(13);

	var dom_extra = _interopRequireWildcard(_domExtra);

	var _eventIndex = __webpack_require__(14);

	var event = _interopRequireWildcard(_eventIndex);

	var _domHtml = __webpack_require__(16);

	var html = _interopRequireWildcard(_domHtml);

	var _noconflict = __webpack_require__(17);

	var noconflict = _interopRequireWildcard(_noconflict);

	var _eventReady = __webpack_require__(18);

	var ready = _interopRequireWildcard(_eventReady);

	var _selectorIndex = __webpack_require__(5);

	var selector = _interopRequireWildcard(_selectorIndex);

	var _selectorClosest = __webpack_require__(15);

	var closest = _interopRequireWildcard(_selectorClosest);

	var _selectorExtra = __webpack_require__(19);

	var selector_extra = _interopRequireWildcard(_selectorExtra);

	var _eventTrigger = __webpack_require__(20);

	var trigger = _interopRequireWildcard(_eventTrigger);

	var _type = __webpack_require__(21);

	var type = _interopRequireWildcard(_type);

	var api = {},
	    $ = {};

	if (typeof selector !== 'undefined') {
	    $ = selector.$;
	    $.matches = selector.matches;
	    api.find = selector.find;
	}

	_util.extend($, contains, noconflict, type);
	_util.extend(api, array, attr, class_, closest, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

	$.fn = api;

	// Version

	$.version = '0.11.2';

	// Util

	$.extend = _util.extend;

	// Provide base class to extend from

	if (typeof _baseClass2['default'] !== 'undefined') {
	    $.BaseClass = _baseClass2['default']($.fn);
	}

	// Ugly interoperability hack, to prevent potential ES6 import issues

	$['default'] = $;

	// Export interface

	exports['default'] = $;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 * @module Util
	 */

	/*
	 * Reference to the global scope
	 * @private
	 */

	"use strict";

	exports.__esModule = true;
	var global = new Function("return this")();

	/**
	 * Convert `NodeList` to `Array`.
	 *
	 * @param {NodeList|Array} collection
	 * @return {Array}
	 * @private
	 */

	function toArray(collection) {
	    var length = collection.length,
	        result = new Array(length);
	    for (var i = 0; i < length; i++) {
	        result[i] = collection[i];
	    }
	    return result;
	}

	/**
	 * Faster alternative to [].forEach method
	 *
	 * @param {Node|NodeList|Array} collection
	 * @param {Function} callback
	 * @return {Node|NodeList|Array}
	 * @private
	 */

	function each(collection, callback, thisArg) {
	    var length = collection.length;
	    if (length !== undefined && collection.nodeType === undefined) {
	        for (var i = 0; i < length; i++) {
	            callback.call(thisArg, collection[i], i, collection);
	        }
	    } else {
	        callback.call(thisArg, collection, 0, collection);
	    }
	    return collection;
	}

	/**
	 * Assign enumerable properties from source object(s) to target object
	 *
	 * @method extend
	 * @param {Object} target Object to extend
	 * @param {Object} [source] Object to extend from
	 * @return {Object} Extended object
	 * @example
	 *     $.extend({a: 1}, {b: 2});
	 *     // {a: 1, b: 2}
	 * @example
	 *     $.extend({a: 1}, {b: 2}, {a: 3});
	 *     // {a: 3, b: 2}
	 */

	function extend(target) {
	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        sources[_key - 1] = arguments[_key];
	    }

	    sources.forEach(function (src) {
	        for (var prop in src) {
	            target[prop] = src[prop];
	        }
	    });
	    return target;
	}

	/**
	 * Return the collection without duplicates
	 *
	 * @param collection Collection to remove duplicates from
	 * @return {Node|NodeList|Array}
	 * @private
	 */

	var uniq = function uniq(collection) {
	    return collection.filter(function (item, index) {
	        return collection.indexOf(item) === index;
	    });
	};

	/*
	 * Export interface
	 */

	exports.global = global;
	exports.toArray = toArray;
	exports.each = each;
	exports.extend = extend;
	exports.uniq = uniq;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Array
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _selectorIndex = __webpack_require__(5);

	var ArrayProto = Array.prototype;

	/**
	 * Checks if the given callback returns a true(-ish) value for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Boolean} Whether each element passed the callback check.
	 * @example
	 *     $('.items').every(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 *     // true/false
	 */

	var every = ArrayProto.every;

	/**
	 * Filter the collection by selector or function, and return a new collection with the result.
	 *
	 * @param {String|Function} selector Selector or function to filter the collection.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Object} A new wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').filter('.active');
	 * @example
	 *     $('.items').filter(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 */

	function filter(selector, thisArg) {
	  var callback = typeof selector === 'function' ? selector : function (element) {
	    return _selectorIndex.matches(element, selector);
	  };
	  return _selectorIndex.$(ArrayProto.filter.call(this, callback, thisArg));
	}

	/**
	 * Execute a function for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').forEach(function(element) {
	 *         element.style.color = 'evergreen';
	 *     );
	 */

	function forEach(callback, thisArg) {
	  return _util.each(this, callback, thisArg);
	}

	var each = forEach;

	/**
	 * Returns the index of an element in the collection.
	 *
	 * @param {Node} element
	 * @return {Number} The zero-based index, -1 if not found.
	 * @example
	 *     $('.items').indexOf(element);
	 *     // 2
	 */

	var indexOf = ArrayProto.indexOf;

	/**
	 * Create a new collection by executing the callback for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Array} Collection with the return value of the executed callback for each element.
	 * @example
	 *     $('.items').map(function(element) {
	 *         return element.getAttribute('name')
	 *     });
	 *     // ['ever', 'green']
	 */

	var map = ArrayProto.map;

	/**
	 * Removes the last element from the collection, and returns that element.
	 *
	 * @return {Object} The last element from the collection.
	 * @example
	 *     var lastElement = $('.items').pop();
	 */

	var pop = ArrayProto.pop;

	/**
	 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').push(element);
	 */

	var push = ArrayProto.push;

	/**
	 * Apply a function against each element in the collection, and this accumulator function has to reduce it
	 * to a single value.
	 *
	 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
	 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
	 * @example
	 *     $('.items').reduce(function(previousValue, element, index, collection) {
	 *         return previousValue + element.clientHeight;
	 *     }, 0);
	 *     // [total height of elements]
	 */

	var reduce = ArrayProto.reduce;

	/**
	 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
	 * to reduce it to a single value.
	 *
	 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
	 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
	 * @example
	 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
	 *         return previousValue + element.textContent;
	 *     }, '')
	 *     // [reversed text of elements]
	 */

	var reduceRight = ArrayProto.reduceRight;

	/**
	 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
	 *
	 * @return {Object} The wrapped collection, reversed
	 * @chainable
	 * @example
	 *     $('.items').reverse();
	 */

	function reverse() {
	  return _selectorIndex.$(_util.toArray(this).reverse());
	}

	/**
	 * Removes the first element from the collection, and returns that element.
	 *
	 * @return {Object} The first element from the collection.
	 * @example
	 *     var firstElement = $('.items').shift();
	 */

	var shift = ArrayProto.shift;

	/**
	 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @return {Boolean} Whether any element passed the callback check.
	 * @example
	 *     $('.items').some(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 *     // true/false
	 */

	var some = ArrayProto.some;

	/**
	 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').unshift(element);
	 */

	var unshift = ArrayProto.unshift;

	/*
	 * Export interface
	 */

	exports.each = each;
	exports.every = every;
	exports.filter = filter;
	exports.forEach = forEach;
	exports.indexOf = indexOf;
	exports.map = map;
	exports.pop = pop;
	exports.push = push;
	exports.reduce = reduce;
	exports.reduceRight = reduceRight;
	exports.reverse = reverse;
	exports.shift = shift;
	exports.some = some;
	exports.unshift = unshift;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Selector
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var isPrototypeSet = false;

	var reFragment = /^\s*<(\w+|!)[^>]*>/;
	var reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	var reSimpleSelector = /^[\.#]?[\w-]*$/;

	/*
	 * Versatile wrapper for `querySelectorAll`.
	 *
	 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
	 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     var $items = $(.items');
	 * @example
	 *     var $element = $(domElement);
	 * @example
	 *     var $list = $(nodeList, document.body);
	 * @example
	 *     var $element = $('<p>evergreen</p>');
	 */

	function $(selector) {
	    var context = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

	    var collection = undefined;

	    if (!selector) {

	        collection = document.querySelectorAll(null);
	    } else if (selector instanceof Wrapper) {

	        return selector;
	    } else if (typeof selector !== 'string') {

	        collection = selector.nodeType || selector === window ? [selector] : selector;
	    } else if (reFragment.test(selector)) {

	        collection = createFragment(selector);
	    } else {

	        context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

	        collection = querySelector(selector, context);
	    }

	    return wrap(collection);
	}

	/*
	 * Find descendants matching the provided `selector` for each element in the collection.
	 *
	 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
	 * @return {Object} The wrapped collection
	 * @example
	 *     $('.selector').find('.deep').$('.deepest');
	 */

	function find(selector) {
	    var nodes = [];
	    _util.each(this, function (node) {
	        _util.each(querySelector(selector, node), function (child) {
	            if (nodes.indexOf(child) === -1) {
	                nodes.push(child);
	            }
	        });
	    });
	    return $(nodes);
	}

	/*
	 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
	 *
	 * @param {Node} element Element to test
	 * @param {String} selector Selector to match against element
	 * @return {Boolean}
	 *
	 * @example
	 *     $.matches(element, '.match');
	 */

	var matches = (function () {
	    var context = typeof Element !== 'undefined' ? Element.prototype : _util.global,
	        _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
	    return function (element, selector) {
	        return _matches.call(element, selector);
	    };
	})();

	/*
	 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
	 *
	 * @private
	 * @param {String} selector Query selector.
	 * @param {Node} context The context for the selector to query elements.
	 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
	 */

	function querySelector(selector, context) {

	    var isSimpleSelector = reSimpleSelector.test(selector);

	    if (isSimpleSelector) {
	        if (selector[0] === '#') {
	            var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
	            return element ? [element] : [];
	        }
	        if (selector[0] === '.') {
	            return context.getElementsByClassName(selector.slice(1));
	        }
	        return context.getElementsByTagName(selector);
	    }

	    return context.querySelectorAll(selector);
	}

	/*
	 * Create DOM fragment from an HTML string
	 *
	 * @private
	 * @param {String} html String representing HTML.
	 * @return {NodeList}
	 */

	function createFragment(html) {

	    if (reSingleTag.test(html)) {
	        return [document.createElement(RegExp.$1)];
	    }

	    var elements = [],
	        container = document.createElement('div'),
	        children = container.childNodes;

	    container.innerHTML = html;

	    for (var i = 0, l = children.length; i < l; i++) {
	        elements.push(children[i]);
	    }

	    return elements;
	}

	/*
	 * Calling `$(selector)` returns a wrapped collection of elements.
	 *
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 * @return (Object) The wrapped collection
	 */

	function wrap(collection) {

	    if (!isPrototypeSet) {
	        Wrapper.prototype = $.fn;
	        Wrapper.prototype.constructor = Wrapper;
	        isPrototypeSet = true;
	    }

	    return new Wrapper(collection);
	}

	/*
	 * Constructor for the Object.prototype strategy
	 *
	 * @constructor
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 */

	function Wrapper(collection) {
	    var i = 0,
	        length = collection.length;
	    for (; i < length;) {
	        this[i] = collection[i++];
	    }
	    this.length = length;
	}

	/*
	 * Export interface
	 */

	exports.$ = $;
	exports.find = find;
	exports.matches = matches;
	exports.Wrapper = Wrapper;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module BaseClass
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _selectorIndex = __webpack_require__(5);

	var _util = __webpack_require__(3);

	exports['default'] = function (api) {

	    /**
	     * Provide subclass for classes or components to extend from.
	     * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
	     *
	     * @return {Class} The class to extend from, including all `$.fn` methods.
	     * @example
	     *     import { BaseClass } from  'domtastic';
	     *
	     *     class MyComponent extends BaseClass {
	     *         doSomething() {
	     *             return this.addClass('.foo');
	     *         }
	     *     }
	     *
	     *     let component = new MyComponent('body');
	     *     component.doSomething();
	     *
	     * @example
	     *     import $ from  'domtastic';
	     *
	     *     class MyComponent extends $.BaseClass {
	     *         progress(value) {
	     *             return this.attr('data-progress', value);
	     *         }
	     *     }
	     *
	     *     let component = new MyComponent(document.body);
	     *     component.progress('ive').append('<p>enhancement</p>');
	     */

	    var BaseClass = function BaseClass() {
	        _classCallCheck(this, BaseClass);

	        _selectorIndex.Wrapper.call(this, _selectorIndex.$.apply(undefined, arguments));
	    };

	    _util.extend(BaseClass.prototype, api);
	    return BaseClass;
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Attr
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	/**
	 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
	 *
	 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
	 * @param {String} [value] The value of the attribute to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').attr('attrName'); // get
	 *     $('.item').attr('attrName', 'attrValue'); // set
	 *     $('.item').attr({'attr1', 'value1'}, {'attr2', 'value2}); // set multiple
	 */

	function attr(key, value) {

	    if (typeof key === 'string' && typeof value === 'undefined') {
	        var element = this.nodeType ? this : this[0];
	        return element ? element.getAttribute(key) : undefined;
	    }

	    _util.each(this, function (element) {
	        if (typeof key === 'object') {
	            for (var _attr in key) {
	                element.setAttribute(_attr, key[_attr]);
	            }
	        } else {
	            element.setAttribute(key, value);
	        }
	    });

	    return this;
	}

	/**
	 * Remove attribute from each element in the collection.
	 *
	 * @param {String} key Attribute name
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeAttr('attrName');
	 */

	function removeAttr(key) {
	    _util.each(this, function (element) {
	        return element.removeAttribute(key);
	    });
	    return this;
	}

	/*
	 * Export interface
	 */

	exports.attr = attr;
	exports.removeAttr = removeAttr;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Class
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	/**
	 * Add a class to the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to add to the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').addClass('bar');
	 *     $('.item').addClass('bar foo');
	 */

	function addClass(value) {
	    if (value && value.length) {
	        _util.each(value.split(' '), _each.bind(this, 'add'));
	    }
	    return this;
	}

	/**
	 * Remove a class from the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to remove from the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeClass('bar');
	 *     $('.items').removeClass('bar foo');
	 */

	function removeClass(value) {
	    if (value && value.length) {
	        _util.each(value.split(' '), _each.bind(this, 'remove'));
	    }
	    return this;
	}

	/**
	 * Toggle a class at the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to toggle at the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').toggleClass('bar');
	 *     $('.item').toggleClass('bar foo');
	 */

	function toggleClass(value) {
	    if (value && value.length) {
	        _util.each(value.split(' '), _each.bind(this, 'toggle'));
	    }
	    return this;
	}

	/**
	 * Check if the element(s) have a class.
	 *
	 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
	 * returns `true` if _any_ of them contains the class name.
	 * @return {Boolean} Whether the element's class attribute contains the class name.
	 * @example
	 *     $('.item').hasClass('bar');
	 */

	function hasClass(value) {
	    return (this.nodeType ? [this] : this).some(function (element) {
	        return element.classList.contains(value);
	    });
	}

	/**
	 * Specialized iteration, applying `fn` of the classList API to each element.
	 *
	 * @param {String} fnName
	 * @param {String} className
	 * @private
	 */

	function _each(fnName, className) {
	    _util.each(this, function (element) {
	        return element.classList[fnName](className);
	    });
	}

	/*
	 * Export interface
	 */

	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.toggleClass = toggleClass;
	exports.hasClass = hasClass;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * @module contains
	 */

	/**
	 * Test whether an element contains another element in the DOM.
	 *
	 * @param {Element} container The element that may contain the other element.
	 * @param {Element} element The element that may be a descendant of the other element.
	 * @return {Boolean} Whether the `container` element contains the `element`.
	 * @example
	 *     $.contains(parentElement, childElement);
	 *     // true/false
	 */

	"use strict";

	exports.__esModule = true;
	function contains(container, element) {
	    if (!container || !element || container === element) {
	        return false;
	    } else if (container.contains) {
	        return container.contains(element);
	    } else if (container.compareDocumentPosition) {
	        return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
	    }
	    return false;
	}

	/*
	 * Export interface
	 */

	exports.contains = contains;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module CSS
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var isNumeric = function isNumeric(value) {
	    return !isNaN(parseFloat(value)) && isFinite(value);
	};

	var camelize = function camelize(value) {
	    return value.replace(/-([\da-z])/gi, function (matches, letter) {
	        return letter.toUpperCase();
	    });
	};

	var dasherize = function dasherize(value) {
	    return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	};

	/**
	 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
	 *
	 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
	 * @param {String} [value] The value of the style property to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').css('padding-left'); // get
	 *     $('.item').css('color', '#f00'); // set
	 *     $('.item').css({'border-width', '1px'}, {'display', 'inline-block}); // set multiple
	 */

	function css(key, value) {

	    var styleProps = undefined,
	        prop = undefined,
	        val = undefined;

	    if (typeof key === 'string') {
	        key = camelize(key);

	        if (typeof value === 'undefined') {
	            var element = this.nodeType ? this : this[0];
	            if (element) {
	                val = element.style[key];
	                return isNumeric(val) ? parseFloat(val) : val;
	            }
	            return undefined;
	        }

	        styleProps = {};
	        styleProps[key] = value;
	    } else {
	        styleProps = key;
	        for (prop in styleProps) {
	            val = styleProps[prop];
	            delete styleProps[prop];
	            styleProps[camelize(prop)] = val;
	        }
	    }

	    _util.each(this, function (element) {
	        for (prop in styleProps) {
	            if (styleProps[prop] || styleProps[prop] === 0) {
	                element.style[prop] = styleProps[prop];
	            } else {
	                element.style.removeProperty(dasherize(prop));
	            }
	        }
	    });

	    return this;
	}

	/*
	 * Export interface
	 */

	exports.css = css;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Data
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var DATAKEYPROP = '__DOMTASTIC_DATA__';

	/**
	 * Get data from first element, or set data for each element in the collection.
	 *
	 * @param {String} key The key for the data to get or set.
	 * @param {String} [value] The data to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').data('attrName'); // get
	 *     $('.item').data('attrName', {any: 'data'}); // set
	 */

	function data(key, value) {

	    if (typeof key === 'string' && typeof value === 'undefined') {
	        var element = this.nodeType ? this : this[0];
	        return element && element[DATAKEYPROP] ? element[DATAKEYPROP][key] : undefined;
	    }

	    _util.each(this, function (element) {
	        element[DATAKEYPROP] = element[DATAKEYPROP] || {};
	        element[DATAKEYPROP][key] = value;
	    });

	    return this;
	}

	/**
	 * Get property from first element, or set property on each element in the collection.
	 *
	 * @param {String} key The name of the property to get or set.
	 * @param {String} [value] The value of the property to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prop('attrName'); // get
	 *     $('.item').prop('attrName', 'attrValue'); // set
	 */

	function prop(key, value) {

	    if (typeof key === 'string' && typeof value === 'undefined') {
	        var element = this.nodeType ? this : this[0];
	        return element && element ? element[key] : undefined;
	    }

	    _util.each(this, function (element) {
	        return element[key] = value;
	    });

	    return this;
	}

	/*
	 * Export interface
	 */

	exports.data = data;
	exports.prop = prop;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module DOM
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _selectorIndex = __webpack_require__(5);

	var forEach = Array.prototype.forEach;

	/**
	 * Append element(s) to each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to append to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').append('<p>more</p>');
	 */

	function append(element) {
	    if (this instanceof Node) {
	        if (typeof element === 'string') {
	            this.insertAdjacentHTML('beforeend', element);
	        } else {
	            if (element instanceof Node) {
	                this.appendChild(element);
	            } else {
	                var elements = element instanceof NodeList ? _util.toArray(element) : element;
	                forEach.call(elements, this.appendChild.bind(this));
	            }
	        }
	    } else {
	        _each(this, append, element);
	    }
	    return this;
	}

	/**
	 * Place element(s) at the beginning of each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prepend('<span>start</span>');
	 */

	function prepend(element) {
	    if (this instanceof Node) {
	        if (typeof element === 'string') {
	            this.insertAdjacentHTML('afterbegin', element);
	        } else {
	            if (element instanceof Node) {
	                this.insertBefore(element, this.firstChild);
	            } else {
	                var elements = element instanceof NodeList ? _util.toArray(element) : element;
	                forEach.call(elements.reverse(), prepend.bind(this));
	            }
	        }
	    } else {
	        _each(this, prepend, element);
	    }
	    return this;
	}

	/**
	 * Place element(s) before each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').before('<p>prefix</p>');
	 */

	function before(element) {
	    if (this instanceof Node) {
	        if (typeof element === 'string') {
	            this.insertAdjacentHTML('beforebegin', element);
	        } else {
	            if (element instanceof Node) {
	                this.parentNode.insertBefore(element, this);
	            } else {
	                var elements = element instanceof NodeList ? _util.toArray(element) : element;
	                forEach.call(elements, before.bind(this));
	            }
	        }
	    } else {
	        _each(this, before, element);
	    }
	    return this;
	}

	/**
	 * Place element(s) after each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').after('<span>suf</span><span>fix</span>');
	 */

	function after(element) {
	    if (this instanceof Node) {
	        if (typeof element === 'string') {
	            this.insertAdjacentHTML('afterend', element);
	        } else {
	            if (element instanceof Node) {
	                this.parentNode.insertBefore(element, this.nextSibling);
	            } else {
	                var elements = element instanceof NodeList ? _util.toArray(element) : element;
	                forEach.call(elements.reverse(), after.bind(this));
	            }
	        }
	    } else {
	        _each(this, after, element);
	    }
	    return this;
	}

	/**
	 * Clone a wrapped object.
	 *
	 * @return {Object} Wrapped collection of cloned nodes.
	 * @example
	 *     $(element).clone();
	 */

	function clone() {
	    return _selectorIndex.$(_clone(this));
	}

	/**
	 * Clone an object
	 *
	 * @param {String|Node|NodeList|Array} element The element(s) to clone.
	 * @return {String|Node|NodeList|Array} The cloned element(s)
	 * @private
	 */

	function _clone(element) {
	    if (typeof element === 'string') {
	        return element;
	    } else if (element instanceof Node) {
	        return element.cloneNode(true);
	    } else if ('length' in element) {
	        return [].map.call(element, function (el) {
	            return el.cloneNode(true);
	        });
	    }
	    return element;
	}

	/**
	 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
	 *
	 * @param {NodeList|Array} collection
	 * @param {Function} fn
	 * @param {Node} element
	 * @private
	 */

	function _each(collection, fn, element) {
	    var l = collection.length;
	    while (l--) {
	        var elm = l === 0 ? element : _clone(element);
	        fn.call(collection[l], elm);
	    }
	}

	/*
	 * Export interface
	 */

	exports.append = append;
	exports.prepend = prepend;
	exports.before = before;
	exports.after = after;
	exports.clone = clone;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module DOM (extra)
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _index = __webpack_require__(12);

	var _selectorIndex = __webpack_require__(5);

	/**
	 * Append each element in the collection to the specified element(s).
	 *
	 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').appendTo(container);
	 */

	function appendTo(element) {
	    var context = typeof element === 'string' ? _selectorIndex.$(element) : element;
	    _index.append.call(context, this);
	    return this;
	}

	/*
	 * Empty each element in the collection.
	 *
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').empty();
	 */

	function empty() {
	    return _util.each(this, function (element) {
	        return element.innerHTML = '';
	    });
	}

	/**
	 * Remove the collection from the DOM.
	 *
	 * @return {Array} Array containing the removed elements
	 * @example
	 *     $('.item').remove();
	 */

	function remove() {
	    return _util.each(this, function (element) {
	        if (element.parentNode) {
	            element.parentNode.removeChild(element);
	        }
	    });
	}

	/**
	 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
	 *
	 * @return {Array} Array containing the replaced elements
	 */

	function replaceWith() {
	    return _index.before.apply(this, arguments).remove();
	}

	/**
	 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').text('New content');
	 */

	function text(value) {

	    if (value === undefined) {
	        return this[0].textContent;
	    }

	    _util.each(this, function (element) {
	        return element.textContent = '' + value;
	    });

	    return this;
	}

	/**
	 * Get the `value` from the first, or set the `value` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('input.firstName').value('New value');
	 */

	function val(value) {

	    if (value === undefined) {
	        return this[0].value;
	    }

	    _util.each(this, function (element) {
	        return element.value = value;
	    });

	    return this;
	}

	/*
	 * Export interface
	 */

	exports.appendTo = appendTo;
	exports.empty = empty;
	exports.remove = remove;
	exports.replaceWith = replaceWith;
	exports.text = text;
	exports.val = val;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Events
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _selectorClosest = __webpack_require__(15);

	/**
	 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
	 *
	 * @param {String} eventNames List of space-separated event types to be added to the element(s)
	 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Boolean} useCapture=false
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').on('click', callback);
	 *     $('.container').on('click focus', '.item', handler);
	 */

	function on(eventNames, selector, handler, useCapture) {
	    var _this = this;

	    if (typeof selector === 'function') {
	        handler = selector;
	        selector = null;
	    }

	    var parts = undefined,
	        namespace = undefined,
	        eventListener = undefined;

	    eventNames.split(' ').forEach(function (eventName) {

	        parts = eventName.split('.');
	        eventName = parts[0] || null;
	        namespace = parts[1] || null;

	        eventListener = proxyHandler(handler);

	        _util.each(_this, function (element) {

	            if (selector) {
	                eventListener = delegateHandler.bind(element, selector, eventListener);
	            }

	            element.addEventListener(eventName, eventListener, useCapture || false);

	            getHandlers(element).push({
	                eventName: eventName,
	                handler: handler,
	                eventListener: eventListener,
	                selector: selector,
	                namespace: namespace
	            });
	        });
	    }, this);

	    return this;
	}

	/**
	 * Shorthand for `removeEventListener`.
	 *
	 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
	 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Boolean} useCapture=false
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').off('click', callback);
	 *     $('#my-element').off('myEvent myOtherEvent');
	 *     $('.item').off();
	 */

	function off(eventNames, selector, handler, useCapture) {
	    if (eventNames === undefined) eventNames = '';

	    var _this2 = this;

	    if (typeof selector === 'function') {
	        handler = selector;
	        selector = null;
	    }

	    var parts = undefined,
	        namespace = undefined,
	        handlers = undefined;

	    eventNames.split(' ').forEach(function (eventName) {

	        parts = eventName.split('.');
	        eventName = parts[0] || null;
	        namespace = parts[1] || null;

	        _util.each(_this2, function (element) {

	            handlers = getHandlers(element);

	            _util.each(handlers.filter(function (item) {
	                return (!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector);
	            }), function (item) {
	                element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
	                handlers.splice(handlers.indexOf(item), 1);
	            });

	            if (!eventName && !namespace && !selector && !handler) {
	                clearHandlers(element);
	            } else if (handlers.length === 0) {
	                clearHandlers(element);
	            }
	        });
	    }, this);

	    return this;
	}

	/**
	 * Get event handlers from an element
	 *
	 * @private
	 * @param {Node} element
	 * @return {Array}
	 */

	var eventKeyProp = '__domtastic_event__';
	var id = 1;
	var handlers = {};
	var unusedKeys = [];

	function getHandlers(element) {
	    if (!element[eventKeyProp]) {
	        element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
	    }
	    var key = element[eventKeyProp];
	    return handlers[key] || (handlers[key] = []);
	}

	/**
	 * Clear event handlers for an element
	 *
	 * @private
	 * @param {Node} element
	 */

	function clearHandlers(element) {
	    var key = element[eventKeyProp];
	    if (handlers[key]) {
	        handlers[key] = null;
	        element[key] = null;
	        unusedKeys.push(key);
	    }
	}

	/**
	 * Function to create a handler that augments the event object with some extra methods,
	 * and executes the callback with the event and the event data (i.e. `event.detail`).
	 *
	 * @private
	 * @param handler Callback to execute as `handler(event, data)`
	 * @return {Function}
	 */

	function proxyHandler(handler) {
	    return function (event) {
	        handler.call(this, augmentEvent(event), event.detail);
	    };
	}

	/**
	 * Attempt to augment events and implement something closer to DOM Level 3 Events.
	 *
	 * @private
	 * @param {Object} event
	 * @return {Function}
	 */

	var augmentEvent = (function () {

	    var methodName = undefined,
	        eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	    },
	        returnTrue = function returnTrue() {
	        return true;
	    },
	        returnFalse = function returnFalse() {
	        return false;
	    };

	    return function (event) {
	        if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
	            for (methodName in eventMethods) {
	                (function (methodName, testMethodName, originalMethod) {
	                    event[methodName] = function () {
	                        this[testMethodName] = returnTrue;
	                        return originalMethod && originalMethod.apply(this, arguments);
	                    };
	                    event[testMethodName] = returnFalse;
	                })(methodName, eventMethods[methodName], event[methodName]);
	            }
	            if (event._preventDefault) {
	                event.preventDefault();
	            }
	        }
	        return event;
	    };
	})();

	/**
	 * Function to test whether delegated events match the provided `selector` (filter),
	 * if the event propagation was stopped, and then actually call the provided event handler.
	 * Use `this` instead of `event.currentTarget` on the event object.
	 *
	 * @private
	 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Event} event
	 */

	function delegateHandler(selector, handler, event) {
	    var eventTarget = event._target || event.target,
	        currentTarget = _selectorClosest.closest.call([eventTarget], selector, this)[0];
	    if (currentTarget && currentTarget !== this) {
	        if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
	            handler.call(currentTarget, event);
	        }
	    }
	}

	var bind = on,
	    unbind = off;

	/*
	 * Export interface
	 */

	exports.on = on;
	exports.off = off;
	exports.bind = bind;
	exports.unbind = unbind;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module closest
	 */

	'use strict';

	exports.__esModule = true;

	var _index = __webpack_require__(5);

	var _util = __webpack_require__(3);

	/**
	 * Return the closest element matching the selector (starting by itself) for each element in the collection.
	 *
	 * @param {String} selector Filter
	 * @param {Object} [context] If provided, matching elements must be a descendant of this element
	 * @return {Object} New wrapped collection (containing zero or one element)
	 * @chainable
	 * @example
	 *     $('.selector').closest('.container');
	 */

	var closest = (function () {

	    function closest(selector, context) {
	        var nodes = [];
	        _util.each(this, function (node) {
	            while (node && node !== context) {
	                if (_index.matches(node, selector)) {
	                    nodes.push(node);
	                    break;
	                }
	                node = node.parentElement;
	            }
	        });
	        return _index.$(_util.uniq(nodes));
	    }

	    return !Element.prototype.closest ? closest : function (selector, context) {
	        var _this = this;

	        if (!context) {
	            var _ret = (function () {
	                var nodes = [];
	                _util.each(_this, function (node) {
	                    var n = node.closest(selector);
	                    if (n) {
	                        nodes.push(n);
	                    }
	                });
	                return {
	                    v: _index.$(_util.uniq(nodes))
	                };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	        } else {
	            return closest.call(this, selector, context);
	        }
	    };
	})();

	/*
	 * Export interface
	 */

	exports.closest = closest;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module HTML
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	/*
	 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
	 *
	 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').html();
	 *     $('.item').html('<span>more</span>');
	 */

	function html(fragment) {

	  if (typeof fragment !== 'string') {
	    var element = this.nodeType ? this : this[0];
	    return element ? element.innerHTML : undefined;
	  }

	  _util.each(this, function (element) {
	    return element.innerHTML = fragment;
	  });

	  return this;
	}

	/*
	 * Export interface
	 */

	exports.html = html;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module noConflict
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	/*
	 * Save the previous value of the global `$` variable, so that it can be restored later on.
	 * @private
	 */

	var previousLib = _util.global.$;

	/**
	 * In case another library sets the global `$` variable before DOMtastic does,
	 * this method can be used to return the global `$` to that other library.
	 *
	 * @return {Object} Reference to DOMtastic.
	 * @example
	 *     var domtastic = $.noConflict();
	 */

	function noConflict() {
	  _util.global.$ = previousLib;
	  return this;
	}

	/*
	 * Export interface
	 */

	exports.noConflict = noConflict;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * @module Ready
	 */

	/**
	 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
	 *
	 * @param handler Callback to execute when initial DOM content is loaded.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $(document).ready(callback);
	 */

	'use strict';

	exports.__esModule = true;
	function ready(handler) {
	  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
	    handler();
	  } else {
	    document.addEventListener('DOMContentLoaded', handler, false);
	  }
	  return this;
	}

	/*
	 * Export interface
	 */

	exports.ready = ready;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Selector (extra)
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _index = __webpack_require__(5);

	/**
	 * Return children of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').children();
	 *     $('.selector').children('.filter');
	 */

	function children(selector) {
	    var nodes = [];
	    _util.each(this, function (element) {
	        if (element.children) {
	            _util.each(element.children, function (child) {
	                if (!selector || selector && _index.matches(child, selector)) {
	                    nodes.push(child);
	                }
	            });
	        }
	    });
	    return _index.$(nodes);
	}

	/**
	 * Return child nodes of each element in the collection, including text and comment nodes.
	 *
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.selector').contents();
	 */

	function contents() {
	    var nodes = [];
	    _util.each(this, function (element) {
	        nodes.push.apply(nodes, _util.toArray(element.childNodes));
	    });
	    return _index.$(nodes);
	}

	/**
	 * Return a collection containing only the one at the specified index.
	 *
	 * @param {Number} index
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').eq(1)
	 *     // The second item; result is the same as doing $($('.items')[1]);
	 */

	function eq(index) {
	    return slice.call(this, index, index + 1);
	}

	/**
	 * Return the DOM element at the specified index.
	 *
	 * @param {Number} index
	 * @return {Node} Element at the specified index
	 * @example
	 *     $('.items').get(1)
	 *     // The second element; result is the same as doing $('.items')[1];
	 */

	function get(index) {
	    return this[index];
	}

	/**
	 * Return the parent elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').parent();
	 *     $('.selector').parent('.filter');
	 */

	function parent(selector) {
	    var nodes = [];
	    _util.each(this, function (element) {
	        if (!selector || selector && _index.matches(element.parentNode, selector)) {
	            nodes.push(element.parentNode);
	        }
	    });
	    return _index.$(nodes);
	}

	/**
	 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').siblings();
	 *     $('.selector').siblings('.filter');
	 */

	function siblings(selector) {
	    var nodes = [];
	    _util.each(this, function (element) {
	        _util.each(element.parentNode.children, function (sibling) {
	            if (sibling !== element && (!selector || selector && _index.matches(sibling, selector))) {
	                nodes.push(sibling);
	            }
	        });
	    });
	    return _index.$(nodes);
	}

	/**
	 * Create a new, sliced collection.
	 *
	 * @param {Number} start
	 * @param {Number} end
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.items').slice(1, 3)
	 *     // New wrapped collection containing the second, third, and fourth element.
	 */

	function slice(start, end) {
	    return _index.$([].slice.apply(this, arguments));
	}

	/*
	 * Export interface
	 */

	exports.children = children;
	exports.contents = contents;
	exports.eq = eq;
	exports.get = get;
	exports.parent = parent;
	exports.siblings = siblings;
	exports.slice = slice;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module trigger
	 */

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(3);

	var _domContains = __webpack_require__(9);

	var reMouseEvent = /^(?:mouse|pointer|contextmenu)|click/;
	var reKeyEvent = /^key/;

	/**
	 * Trigger event at element(s)
	 *
	 * @param {String} type Type of the event
	 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
	 * @param {Object} [params] Event parameters (optional)
	 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
	 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
	 * @param {Mixed} params.detail=undefined Additional information about the event.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').trigger('anyEventType');
	 */

	function trigger(type, data) {
	    var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var _ref$bubbles = _ref.bubbles;
	    var bubbles = _ref$bubbles === undefined ? true : _ref$bubbles;
	    var _ref$cancelable = _ref.cancelable;
	    var cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;
	    var _ref$preventDefault = _ref.preventDefault;
	    var preventDefault = _ref$preventDefault === undefined ? false : _ref$preventDefault;

	    var EventConstructor = getEventConstructor(type),
	        event = new EventConstructor(type, { bubbles: bubbles, cancelable: cancelable, preventDefault: preventDefault, detail: data });

	    event._preventDefault = preventDefault;

	    _util.each(this, function (element) {
	        if (!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
	            dispatchEvent(element, event);
	        } else {
	            triggerForPath(element, type, { bubbles: bubbles, cancelable: cancelable, preventDefault: preventDefault, detail: data });
	        }
	    });
	    return this;
	}

	function getEventConstructor(type) {
	    return supportsOtherEventConstructors ? reMouseEvent.test(type) ? MouseEvent : reKeyEvent.test(type) ? KeyboardEvent : CustomEvent : CustomEvent;
	}

	/**
	 * Trigger event at first element in the collection. Similar to `trigger()`, except:
	 *
	 * - Event does not bubble
	 * - Default event behavior is prevented
	 * - Only triggers handler for first matching element
	 *
	 * @param {String} type Type of the event
	 * @param {Object} data Data to be sent with the event
	 * @example
	 *     $('form').triggerHandler('submit');
	 */

	function triggerHandler(type, data) {
	    if (this[0]) {
	        trigger.call(this[0], type, data, { bubbles: false, preventDefault: true });
	    }
	}

	/**
	 * Check whether the element is attached to (or detached from) the document
	 *
	 * @private
	 * @param {Node} element Element to test
	 * @return {Boolean}
	 */

	function isAttachedToDocument(element) {
	    if (element === window || element === document) {
	        return true;
	    }
	    return _domContains.contains(element.ownerDocument.documentElement, element);
	}

	/**
	 * Dispatch the event at the element and its ancestors.
	 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
	 *
	 * @private
	 * @param {Node} element First element to dispatch the event at
	 * @param {String} type Type of the event
	 * @param {Object} [params] Event parameters (optional)
	 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
	 * Will be set to false (but shouldn't matter since events don't bubble anyway).
	 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
	 * @param {Mixed} params.detail=undefined Additional information about the event.
	 */

	function triggerForPath(element, type) {
	    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    params.bubbles = false;
	    var event = new CustomEvent(type, params);
	    event._target = element;
	    do {
	        dispatchEvent(element, event);
	    } while (element = element.parentNode);
	}

	/**
	 * Dispatch event to element, but call direct event methods instead if available
	 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
	 *
	 * @private
	 * @param {Node} element Element to dispatch the event at
	 * @param {Object} event Event to dispatch
	 */

	var directEventMethods = ['blur', 'focus', 'select', 'submit'];

	function dispatchEvent(element, event) {
	    if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
	        element[event.type]();
	    } else {
	        element.dispatchEvent(event);
	    }
	}

	/**
	 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill).
	 * Needed to support IE (9, 10, 11) & PhantomJS
	 */

	(function () {
	    function CustomEvent(event) {
	        var params = arguments.length <= 1 || arguments[1] === undefined ? { bubbles: false, cancelable: false, detail: undefined } : arguments[1];

	        var customEvent = document.createEvent('CustomEvent');
	        customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	        return customEvent;
	    }

	    CustomEvent.prototype = _util.global.CustomEvent && _util.global.CustomEvent.prototype;
	    _util.global.CustomEvent = CustomEvent;
	})();

	/*
	 * Are events bubbling in detached DOM trees?
	 * @private
	 */

	var isEventBubblingInDetachedTree = (function () {
	    var isBubbling = false,
	        doc = _util.global.document;
	    if (doc) {
	        var _parent = doc.createElement('div'),
	            child = _parent.cloneNode();
	        _parent.appendChild(child);
	        _parent.addEventListener('e', function () {
	            isBubbling = true;
	        });
	        child.dispatchEvent(new CustomEvent('e', { bubbles: true }));
	    }
	    return isBubbling;
	})();

	var supportsOtherEventConstructors = (function () {
	    try {
	        new window.MouseEvent('click');
	    } catch (e) {
	        return false;
	    }
	    return true;
	})();

	/*
	 * Export interface
	 */

	exports.trigger = trigger;
	exports.triggerHandler = triggerHandler;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * @module Type
	 */

	/*
	 * Determine if the argument passed is a Javascript function object.
	 *
	 * @param {Object} [obj] Object to test whether or not it is a function.
	 * @return {boolean}
	 * @example
	 *     $.isFunction(function(){});
	 *     // true
	 * @example
	 *     $.isFunction({});
	 *     // false
	 */

	'use strict';

	exports.__esModule = true;
	var isFunction = function isFunction(obj) {
	  return typeof obj === 'function';
	};

	/*
	 * Determine whether the argument is an array.
	 *
	 * @param {Object} [obj] Object to test whether or not it is an array.
	 * @return {boolean}
	 * @example
	 *     $.isArray([]);
	 *     // true
	 * @example
	 *     $.isArray({});
	 *     // false
	 */

	var isArray = Array.isArray;

	/*
	 * Export interface
	 */

	exports.isArray = isArray;
	exports.isFunction = isFunction;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Logger = (function () {
	  function Logger(allow) {
	    _classCallCheck(this, Logger);

	    this.allow = allow;
	  }

	  _createClass(Logger, [{
	    key: 'log',
	    value: function log(msg) {
	      if (window.console.log && this.allow) {
	        if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	          window.console.log(arguments[0], arguments[1]);
	        } else {
	          window.console.log(arguments[0]);
	        }
	      }
	    }
	  }, {
	    key: 'info',
	    value: function info() {
	      if (window.console.info && this.allow) {
	        if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	          window.console.info(arguments[0], arguments[1]);
	        } else {
	          window.console.info(arguments[0]);
	        }
	      }
	    }
	  }, {
	    key: 'error',
	    value: function error() {
	      if (window.console.error && this.allow) {
	        if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	          window.console.error(arguments[0], arguments[1]);
	        } else {
	          window.console.error(arguments[0]);
	        }
	      }
	    }
	  }, {
	    key: 'warn',
	    value: function warn() {
	      if (window.console.warn && this.allow) {
	        if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	          window.console.warn(arguments[0], arguments[1]);
	        } else {
	          window.console.warn(arguments[0]);
	        }
	      }
	    }
	  }]);

	  return Logger;
	})();

	module.exports = Logger;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// CREATES A NEW NAPESPACE

	var Namespace = function Namespace(namespace, userData) {
	  _classCallCheck(this, Namespace);

	  var Daft = Daft || window.Daft;
	  var Dom = __webpack_require__(2);
	  var WatchJS = __webpack_require__(24);
	  var watch = WatchJS.watch;
	  var Watcher = __webpack_require__(25)([namespace + '-data']);
	  var self = this;

	  // SET EMPTY OBJECT IF NOT PROVIDED
	  userData = userData || {};

	  // ADD USER DATA TO NAMESPACE
	  for (var key in userData) {
	    self[key] = userData[key];
	  }

	  // POPULAR DOM DATA OBJECT BASED ON namespace-data OBJECTS
	  function populateDomData() {
	    self.domData = {};

	    // GRAB ALL namespace-data ELEMENTS & APPEND TO DOM DATA
	    Dom('[namespace="' + namespace + '"]').find('[' + namespace + '-data]').forEach(function (element) {
	      var prop = element.attributes[namespace + '-data'].value;
	      var value = element.innerHTML;

	      // SET DEFAULT DATA
	      self.domData[prop] = {
	        data: value,
	        previous: null
	      };

	      // OVERRIDE HTML WITH USER PROVIDED VALUE
	      if (typeof userData.domData !== 'undefined' && typeof userData.domData[prop] !== 'undefined') {
	        Dom(element).html(userData.domData[prop].data);
	        self.domData[prop].data = userData.domData[prop].data;
	        self.domData[prop].previous = value;
	        // FALLBACK TO DOM VALUE
	      } else {
	          self.domData[prop] = value;
	        }

	      // IF OBJECT CHANGES
	      watch(self.domData[prop], function () {
	        Daft.dom('[' + namespace + '-data="' + prop + '"]').html(this.data);
	      });
	    });
	  }

	  // SET PARENT COMTAINER
	  self.container = Dom('[namespace="' + namespace + '"]')[0];

	  // SET NAMESPACE NAME
	  self.namespace = namespace;

	  // POPULATE DOM DATA
	  populateDomData();

	  // SET ACTIONS
	  self.actions = {
	    test: self.test,
	    updateData: populateDomData
	  };

	  // ADD NAMESPACE TO NS OBJECT
	  Daft.NS[namespace] = self;

	  // WATCH FOR ANY DOM CHANGES
	  self.observer = new Watcher.Observe(self.container);
	};

	module.exports = Namespace;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DEVELOPED BY
	 * GIL LOPES BUENO
	 * gilbueno.mail@gmail.com
	 *
	 * WORKS WITH:
	 * IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
	 *
	 * FORK:
	 * https://github.com/melanke/Watch.JS
	 */

	"use strict";
	(function (factory) {
	    if (true) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD. Register as an anonymous module.
	        define(factory);
	    } else {
	        // Browser globals
	        window.WatchJS = factory();
	        window.watch = window.WatchJS.watch;
	        window.unwatch = window.WatchJS.unwatch;
	        window.callWatchers = window.WatchJS.callWatchers;
	    }
	}(function () {

	    var WatchJS = {
	        noMore: false
	    },
	    defineWatcher,
	    unwatchOne,
	    callWatchers;

	    var isFunction = function (functionToCheck) {
	            var getType = {};
	            return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	    };

	    var isInt = function (x) {
	        return x % 1 === 0;
	    };

	    var isArray = function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };

	    var isModernBrowser = function () {
	        return Object.defineProperty || Object.prototype.__defineGetter__;
	    };

	    var defineGetAndSet = function (obj, propName, getter, setter) {
	        try {
	                Object.defineProperty(obj, propName, {
	                        get: getter,
	                        set: setter,
	                        enumerable: true,
	                        configurable: true
	                });
	        } catch(error) {
	            try{
	                Object.prototype.__defineGetter__.call(obj, propName, getter);
	                Object.prototype.__defineSetter__.call(obj, propName, setter);
	            }catch(error2){
	                throw "watchJS error: browser not supported :/"
	            }
	        }
	    };

	    var defineProp = function (obj, propName, value) {
	        try {
	            Object.defineProperty(obj, propName, {
	                enumerable: false,
	                configurable: true,
	                writable: false,
	                value: value
	            });
	        } catch(error) {
	            obj[propName] = value;
	        }
	    };

	    var watch = function () {

	        if (isFunction(arguments[1])) {
	            watchAll.apply(this, arguments);
	        } else if (isArray(arguments[1])) {
	            watchMany.apply(this, arguments);
	        } else {
	            watchOne.apply(this, arguments);
	        }

	    };


	    var watchAll = function (obj, watcher, level) {

	        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
	            return;
	        }

	        var props = [];


	        if(isArray(obj)) {
	            for (var prop = 0; prop < obj.length; prop++) { //for each item if obj is an array
	                props.push(prop); //put in the props
	            }
	        } else {
	            for (var prop2 in obj) { //for each attribute if obj is an object
	                props.push(prop2); //put in the props
	            }
	        }

	        watchMany(obj, props, watcher, level); //watch all itens of the props
	    };


	    var watchMany = function (obj, props, watcher, level) {

	        for (var prop in props) { //watch each attribute of "props" if is an object
	            watchOne(obj, props[prop], watcher, level);
	        }

	    };

	    var watchOne = function (obj, prop, watcher, level) {

	        if(isFunction(obj[prop])) { //dont watch if it is a function
	            return;
	        }

	        if(obj[prop] != null && (level === undefined || level > 0)){
	            if(level !== undefined){
	                level--;
	            }
	            watchAll(obj[prop], watcher, level); //recursively watch all attributes of this
	        }

	        defineWatcher(obj, prop, watcher);

	    };

	    var unwatch = function () {

	        if (isFunction(arguments[1])) {
	            unwatchAll.apply(this, arguments);
	        } else if (isArray(arguments[1])) {
	            unwatchMany.apply(this, arguments);
	        } else {
	            unwatchOne.apply(this, arguments);
	        }

	    };

	    var unwatchAll = function (obj, watcher) {

	        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
	            return;
	        }

	        var props = [];


	        if (isArray(obj)) {
	            for (var prop = 0; prop < obj.length; prop++) { //for each item if obj is an array
	                props.push(prop); //put in the props
	            }
	        } else {
	            for (var prop2 in obj) { //for each attribute if obj is an object
	                props.push(prop2); //put in the props
	            }
	        }

	        unwatchMany(obj, props, watcher); //watch all itens of the props
	    };


	    var unwatchMany = function (obj, props, watcher) {

	        for (var prop2 in props) { //watch each attribute of "props" if is an object
	            unwatchOne(obj, props[prop2], watcher);
	        }
	    };

	    if(isModernBrowser()){

	        defineWatcher = function (obj, prop, watcher) {

	            var val = obj[prop];

	            watchFunctions(obj, prop);

	            if (!obj.watchers) {
	                defineProp(obj, "watchers", {});
	            }

	            if (!obj.watchers[prop]) {
	                obj.watchers[prop] = [];
	            }


	            obj.watchers[prop].push(watcher); //add the new watcher in the watchers array


	            var getter = function () {
	                return val;
	            };


	            var setter = function (newval) {
	                var oldval = val;
	                val = newval;

	                if (obj[prop]){
	                    watchAll(obj[prop], watcher);
	                }

	                watchFunctions(obj, prop);

	                if (!WatchJS.noMore){
	                    if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
	                        callWatchers(obj, prop, "set", newval, oldval);
	                        WatchJS.noMore = false;
	                    }
	                }
	            };

	            defineGetAndSet(obj, prop, getter, setter);

	        };

	        callWatchers = function (obj, prop, action, newval, oldval) {

	            for (var wr in obj.watchers[prop]) {
	                if (isInt(wr)){
	                    obj.watchers[prop][wr].call(obj, prop, action, newval, oldval);
	                }
	            }
	        };

	        // @todo code related to "watchFunctions" is certainly buggy
	        var methodNames = ['pop', 'push', 'reverse', 'shift', 'sort', 'slice', 'unshift'];
	        var defineArrayMethodWatcher = function (obj, prop, original, methodName) {
	            defineProp(obj[prop], methodName, function () {
	                var response = original.apply(obj[prop], arguments);
	                watchOne(obj, obj[prop]);
	                if (methodName !== 'slice') {
	                    callWatchers(obj, prop, methodName,arguments);
	                }
	                return response;
	            });
	        };

	        var watchFunctions = function(obj, prop) {

	            if ((!obj[prop]) || (obj[prop] instanceof String) || (!isArray(obj[prop]))) {
	                return;
	            }

	            for (var i = methodNames.length, methodName; i--;) {
	                methodName = methodNames[i];
	                defineArrayMethodWatcher(obj, prop, obj[prop][methodName], methodName);
	            }

	        };

	        unwatchOne = function (obj, prop, watcher) {
	            for(var i in obj.watchers[prop]){
	                var w = obj.watchers[prop][i];

	                if(w == watcher) {
	                    obj.watchers[prop].splice(i, 1);
	                }
	            }
	        };

	    } else {
	        //this implementation dont work because it cant handle the gap between "settings".
	        //I mean, if you use a setter for an attribute after another setter of the same attribute it will only fire the second
	        //but I think we could think something to fix it

	        var subjects = [];

	        defineWatcher = function(obj, prop, watcher){

	            subjects.push({
	                obj: obj,
	                prop: prop,
	                serialized: JSON.stringify(obj[prop]),
	                watcher: watcher
	            });

	        };

	        unwatchOne = function (obj, prop, watcher) {

	            for (var i in subjects) {
	                var subj = subjects[i];

	                if (subj.obj == obj && subj.prop == prop && subj.watcher == watcher) {
	                    subjects.splice(i, 1);
	                }

	            }

	        };

	        callWatchers = function (obj, prop, action, value) {

	            for (var i in subjects) {
	                var subj = subjects[i];

	                if (subj.obj == obj && subj.prop == prop) {
	                    subj.watcher.call(obj, prop, action, value);
	                }

	            }

	        };

	        var loop = function(){

	            for(var i in subjects){

	                var subj = subjects[i];
	                var newSer = JSON.stringify(subj.obj[subj.prop]);
	                if(newSer != subj.serialized){
	                    subj.watcher.call(subj.obj, subj.prop, subj.obj[subj.prop], JSON.parse(subj.serialized));
	                    subj.serialized = newSer;
	                }

	            }

	        };

	        setInterval(loop, 50);

	    }

	    WatchJS.watch = watch;
	    WatchJS.unwatch = unwatch;
	    WatchJS.callWatchers = callWatchers;

	    return WatchJS;

	}));


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	// WATCHES OUR NAMESPACE AND REPORT ON ANY CHANGES

	module.exports = function (attrs) {
	  var MutationObserver = MutationObserver || window.MutationObserver;
	  var Daft = Daft || window.Daft;

	  function namespaceExists(namespace) {
	    // CHECK IF A NAMESPACE EXISTS, AND RETURN THE OBJECT IF IT DOES

	    // IF NAMESPACE EXISTS
	    if (_typeof(Daft.NS[namespace]) === 'object') {
	      return Daft.NS[namespace];
	      // IF NAMESPACE DOES NOT EXIST
	    } else {
	        return false;
	      }
	  }

	  function getNameSpace(mutation) {
	    //

	    var attributes = null;
	    var namespace = null;
	    var parent = null;

	    if (Daft.dom(mutation.target.parentElement).length > 0) {
	      parent = Daft.dom(mutation.target.parentElement)[0].closest('[namespace]');
	      namespace = namespaceExists(parent.attributes.namespace.value);
	      attributes = getAttrs(mutation, namespace);
	    }

	    return {
	      container: parent,
	      namespace: namespace,
	      attributes: attributes
	    };
	  }

	  function getAttrs(el, namespace) {
	    // GET ATTRIBUTES OF PARENT ELEMENT

	    el = Daft.dom(el.target.parentElement)[0].closest('[' + namespace.namespace + '-data]');

	    if (typeof el !== 'undefined' && el !== null) {
	      return el.attributes;
	    } else {
	      return null;
	    }
	  }

	  function checkFunction(fn, NS) {
	    // RETURN A FUNCTION TO CALL IF IT EXISTS

	    var args = [];
	    var func = false;
	    var obj = window.Daft.NS[NS.namespace.namespace];

	    // IF ACTUAL FUNCTION WAS PASSED & NOT JUST A NAME OF A FUNCTION
	    if (fn !== null && fn.indexOf('(') > 0) {
	      var fnSplit = fn.split('(');
	      fn = fnSplit[0];
	      args = fnSplit[1].split(')')[0].split(',');
	      if (args.length === 1 && args[0] === '') {
	        args = null;
	      }
	    }

	    // CHECK IF A FUNCTION EXISTS IN: namespace.function
	    if (typeof obj[fn] === 'function') {
	      func = obj[fn];
	      // CHECK IF A FUNCTION EXISTS IN: namespace.function
	    } else if (typeof obj.actions[fn] === 'function') {
	        func = obj.actions[fn];
	        // CHECK IF A FUNCTION EXISTS IN GLOBAL NAMESPACE
	      } else if (typeof window[fn] === 'function') {
	          func = window[fn];
	          console.warn('WARNING:', fn + ' function exists as a global. You should define it as a part of your ' + NS.namespace.namespace + ' namespace instead: http://docs.daftjs.com/namespace/functions');
	        }

	    return {
	      run: func,
	      name: fn,
	      arguments: args
	    };
	  }

	  function checkAttributes(mutation, NS) {
	    // CHECK FOR data-namespace ATTRIBUTE ON ELEMENT

	    var dataKey = null;
	    var updateFunction = null;

	    if (NS.attributes !== null) {
	      if (typeof NS.attributes['daft-update'] !== 'undefined') {
	        updateFunction = NS.attributes['daft-update'].value;
	      }

	      if (typeof NS.attributes[NS.namespace.namespace + '-data'] !== 'undefined') {
	        dataKey = NS.attributes[NS.namespace.namespace + '-data'].value;
	      }

	      // IF AN UPDATE FUNCTION WAS PROVIDED
	      if (typeof updateFunction !== 'undefined') {
	        updateFunction = checkFunction(updateFunction, NS);

	        // IF FUNCTION EXISTS & SHOULD BE RUN
	        if (updateFunction.run !== false) {
	          var updateData = {
	            el: mutation.target.parentElement,
	            data: mutation.target.nodeValue,
	            key: dataKey,
	            previous: mutation.oldValue,
	            mutation: mutation
	          };

	          // IF FUNCTION HAS ARGUMENTS
	          if (updateFunction.arguments !== null) {
	            updateFunction.arguments.unshift(updateData);

	            updateFunction.arguments.forEach(function (value, key) {
	              if (value === 'this') {
	                if (NS.mutation === 'child') {
	                  updateFunction.arguments[key] = mutation.target.parentElement;
	                } else {
	                  updateFunction.arguments[key] = mutation.target;
	                }
	              }
	            });
	          }

	          // APPLY FUNCTION
	          if (typeof updateFunction.run === 'function') updateFunction.run.apply(this, updateFunction.arguments);
	        }
	      }
	    }

	    if (typeof NS.attributes[NS.namespace.namespace + '-data'] !== 'undefined') {
	      dataKey = NS.attributes[NS.namespace.namespace + '-data'].value;
	    }

	    // UPDATE OBJECT WITH NEW VALUE
	    Daft.NS[NS.namespace.namespace].domData[dataKey].data = mutation.target.nodeValue;
	  }

	  var Watcher = new MutationObserver(function (mutations) {
	    // WATCH FOR ANY CHANGES TO DOM (WITHIN A NAMESPACE)

	    // LOOP THROUGH EACH CHANGE THAT WAS RECEIVED
	    mutations.forEach(function (mutation) {
	      var NS = getNameSpace(mutation); // GET NAMESPACE DATA
	      if (NS !== null) {
	        checkAttributes(mutation, NS);
	      } // MAKE SURE WE HAVE A PROPER NAMESPACE
	    });
	  });

	  // WHAT DO WE WANT TO WATCH FOR
	  var observerConfig = {
	    attributes: true,
	    characterData: true,
	    childList: true,
	    subtree: true,
	    attributeOldValue: true,
	    characterDataOldValue: true,
	    attributeFilter: attrs
	  };

	  return {
	    Observe: function Observe(node) {
	      Watcher.observe(node, observerConfig);
	    },
	    Disconnect: function Disconnect() {
	      Watcher.disconnect();
	    }
	  };
	};

/***/ }
/******/ ]);