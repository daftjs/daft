'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var Daft= /******/function(modules){ // webpackBootstrap
/******/ // The module cache
/******/var installedModules={}; /******/ // The require function
/******/function __webpack_require__(moduleId){ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={ /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ // Flag the module as loaded
/******/module.loaded=true; /******/ // Return the exports of the module
/******/return module.exports; /******/} /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules; /******/ // expose the module cache
/******/__webpack_require__.c=installedModules; /******/ // __webpack_public_path__
/******/__webpack_require__.p="public/js/"; /******/ // Load entry module and return exports
/******/return __webpack_require__(0); /******/}( /************************************************************************/ /******/[ /* 0 */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(1); /***/}, /* 1 */ /***/function(module,exports,__webpack_require__){'use strict'; // REQUIRES
var Logger=__webpack_require__(2);var Bootstrap=__webpack_require__(3);module.exports={app:function app(name,opt,cb){var self=this;Bootstrap.app(name,opt); // SET APP KEYS
for(var bootstrapKey in Bootstrap.settings){self[bootstrapKey]=Bootstrap.settings[bootstrapKey];}self[name]={};var Include=__webpack_require__(5);self.dom=__webpack_require__(36);self.Component=__webpack_require__(56);Include.init(self.templates);if(typeof cb==='function')cb.call(self);}, // READY EVENT FIRED WHEN EVERYTHING IS LOADED
ready:function ready(cb){var self=this;this.dom(document).ready(function(){if(typeof cb==='function')cb.call(self);});}, // LOGGING FUNCTIONS
error:function error(){new Logger(this.logging.console).error(arguments[0],arguments[1]);},info:function info(){new Logger(this.logging.console).info(arguments[0],arguments[1]);},log:function log(){new Logger(this.logging.console).log(arguments[0],arguments[1]);},warn:function warn(){new Logger(this.logging.console).warn(arguments[0],arguments[1]);}}; /***/}, /* 2 */ /***/function(module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Logger=function(){function Logger(allow){_classCallCheck(this,Logger);this.allow=allow;}_createClass(Logger,[{key:'log',value:function log(msg){if(window.console.log&&this.allow){if(arguments.length>1&&typeof arguments[1]!=='undefined'){window.console.log(arguments[0],arguments[1]);}else {window.console.log(arguments[0]);}}}},{key:'info',value:function info(){if(window.console.info&&this.allow){if(arguments.length>1&&typeof arguments[1]!=='undefined'){window.console.info(arguments[0],arguments[1]);}else {window.console.info(arguments[0]);}}}},{key:'error',value:function error(){if(window.console.error&&this.allow){if(arguments.length>1&&typeof arguments[1]!=='undefined'){window.console.error(arguments[0],arguments[1]);}else {window.console.error(arguments[0]);}}}},{key:'warn',value:function warn(){if(window.console.warn&&this.allow){if(arguments.length>1&&typeof arguments[1]!=='undefined'){window.console.warn(arguments[0],arguments[1]);}else {window.console.warn(arguments[0]);}}}}]);return Logger;}();module.exports=Logger; /***/}, /* 3 */ /***/function(module,exports,__webpack_require__){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var Utility=__webpack_require__(4);module.exports={app:function app(name,options){var self=this;window.console.log('Bootstrap.app');if(typeof name!=='undefined')self.settings.name=name; // SET APP NAME
// APPLY NEW APP SETTINGS
for(var opt in options){if(options[opt]!=='version'){window.console.log('type',_typeof(options[opt]));if(_typeof(options[opt])==='object'){self.settings[opt]=options[opt]; // Utility.bootstrap(self.settings, options);
}if(typeof options[opt]==='string'){self.settings[opt]=options[opt];}}}},set:function set(opt){Utility.bootstrap(this.settings,opt);},settings:{name:'Daft',attributes:{app:'-app',component:'component',data:'-data',init:'data-init',include:'-include',loop:'-loop',loopItem:'loop-item',update:'-update'},templates:{dir:'templates/',engine:null,ext:null},prefix:'daft',router:{html5:true,prepend:'#'},version:{codename:'bulleit',full:'0.2.0',major:'0',minor:'2',dot:'0'},logging:{console:true,file:false}}}; /***/}, /* 4 */ /***/function(module,exports){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};module.exports={bootstrap:function bootstrap(settings,opt,keys){ // BOOTSTRAP NEW APP WITH USER DEFINIED VALUES
// FALLS BACK TO DEFAULTS IF NOT DEFINED
if(typeof keys==='undefined'){keys='';}else {keys=keys+'.';} // keys = ''
for(var key in settings){var item=settings[key];if((typeof item==='undefined'?'undefined':_typeof(item))==='object'){this.bootstrap(item,opt,key);}else {keys=keys+key;this.setObjectValue(settings,keys,this.extractObjectValue(opt,keys));keys='';}}},capitalize:function capitalize(str){return str.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase();});},setNamespace:function setNamespace(name){return this.capitalize(name);},setObjectValue:function setObjectValue(obj,keys,value){ // EXTRACT VALUE OF OBJECT BASED ON STRINGIFIED KEY
if(typeof value!=='undefined'){if(typeof keys==='string'){keys=keys.split('.');}var last=keys.pop();for(var i in keys){if(!obj.hasOwnProperty(keys[i])){break;}obj=obj[keys[i]];}if(obj.hasOwnProperty(last)){obj[last]=value;}}},extractObjectValue:function extractObjectValue(obj,keys){ // EXTRACT VALUE OF OBJECT BASED ON STRINGIFIED KEY
if(typeof keys==='string'){keys=keys.split('.');}var last=keys.pop();for(var i in keys){if(!obj.hasOwnProperty(keys[i])){break;}obj=obj[keys[i]];}if(obj.hasOwnProperty(last)){return obj[last];}}}; /***/}, /* 5 */ /***/function(module,exports,__webpack_require__){'use strict';var Daft=Daft||window.Daft;var request=__webpack_require__(6); // CREATES A NEW COMPONENT
var Include={init:function init(opts){var containers=Daft.dom(Daft.prefix+Daft.attributes.include);var self=this;self.opts=opts;containers.forEach(function(container){var file=container.attributes.src.value;var templateData={};if(typeof container.attributes.component!=='undefined'){templateData.component=container.attributes.component.value;}self.fetch(container,file,templateData);});},engine:function engine(file){var self=this;if(self.opts.engine===null){var ext=file.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);return ext[1];}else {return self.opts.engine;}}, // TODO: REFACTOR TO USE CONSOLIDATE FOR MORE DYNAMIC TEMPLATES
fetch:function fetch(container,file,data){var self=this;var engine=self.engine(file);request(self.opts.dir+file).then( // success handler
function(response,xhr){var content=html;var html=xhr.response;data.template=self.opts;data.template.engine=engine; // JADE
if(self.opts.engine==='jade'){var jade=__webpack_require__(7);content=jade.compile(html)(data);} // HANDLEBARS
if(self.opts.engine==='handlebars'||self.opts.engine==='hbs'){var handlebars=__webpack_require__(8);content=handlebars.compile(html);content=content(data);}Daft.dom(container).replaceWith(content);}, // error handler (optional)
function(data,xhr){Daft.error(data,xhr.status);});}};module.exports=Include; /***/}, /* 6 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;'use strict';!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){ // a   url (naming it a, beacause it will be reused to store callbacks)
// xhr placeholder to avoid using var, not to be used
function pegasus(a,xhr){xhr=new XMLHttpRequest(); // Open url
xhr.open('GET',a); // Reuse a to store callbacks
a=[]; // onSuccess handler
// onError   handler
// cb, data  placeholder to avoid using var, should not be used
xhr.onreadystatechange=xhr.then=function(onSuccess,onError,cb,data){ // Test if onSuccess is a function
if(onSuccess&&onSuccess.call)a=[,onSuccess,onError]; // Test if request is complete
if(xhr.readyState==4){ // index will be:
// 0 if undefined
// 1 if status is between 200 and 399
// 2 if status is over
cb=a[0|xhr.status/200]; // Safari doesn't support xhr.responseType = 'json'
// so the response is parsed
if(cb){try{data=JSON.parse(xhr.responseText);}catch(e){data=null;}cb(data,xhr);}}}; // Send
xhr.send(); // Return request
return xhr;}return pegasus;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 7 */ /***/function(module,exports,__webpack_require__){var require;var require; /* WEBPACK VAR INJECTION */(function(global){(function(f){if(true){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.jade=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){(function(process){'use strict'; /*!
	 * Jade
	 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
	 * MIT Licensed
	 */ /**
	 * Module dependencies.
	 */var Parser=require('./parser'),Lexer=require('./lexer'),Compiler=require('./compiler'),runtime=require('./runtime'),addWith=require('with'),fs=require('fs'),utils=require('./utils'); /**
	 * Expose self closing tags.
	 */ // FIXME: either stop exporting selfClosing in v2 or export the new object
// form
exports.selfClosing=Object.keys(require('void-elements')); /**
	 * Default supported doctypes.
	 */exports.doctypes=require('./doctypes'); /**
	 * Text filters.
	 */exports.filters=require('./filters'); /**
	 * Utilities.
	 */exports.utils=utils; /**
	 * Expose `Compiler`.
	 */exports.Compiler=Compiler; /**
	 * Expose `Parser`.
	 */exports.Parser=Parser; /**
	 * Expose `Lexer`.
	 */exports.Lexer=Lexer; /**
	 * Nodes.
	 */exports.nodes=require('./nodes'); /**
	 * Jade runtime helpers.
	 */exports.runtime=runtime; /**
	 * Template function cache.
	 */exports.cache={}; /**
	 * Parse the given `str` of jade and return a function body.
	 *
	 * @param {String} str
	 * @param {Object} options
	 * @return {Object}
	 * @api private
	 */function parse(str,options){if(options.lexer){console.warn('Using `lexer` as a local in render() is deprecated and '+'will be interpreted as an option in Jade 2.0.0');} // Parse
var parser=new (options.parser||Parser)(str,options.filename,options);var tokens;try{ // Parse
tokens=parser.parse();}catch(err){parser=parser.context();runtime.rethrow(err,parser.filename,parser.lexer.lineno,parser.input);} // Compile
var compiler=new (options.compiler||Compiler)(tokens,options);var js;try{js=compiler.compile();}catch(err){if(err.line&&(err.filename||!options.filename)){runtime.rethrow(err,err.filename,err.line,parser.input);}else {if(err instanceof Error){err.message+='\n\nPlease report this entire error and stack trace to https://github.com/jadejs/jade/issues';}throw err;}} // Debug compiler
if(options.debug){console.error('\nCompiled Function:\n\n\u001b[90m%s\u001b[0m',js.replace(/^/gm,'  '));}var globals=[];if(options.globals){globals=options.globals.slice();}globals.push('jade');globals.push('jade_mixins');globals.push('jade_interp');globals.push('jade_debug');globals.push('buf');var body=''+'var buf = [];\n'+'var jade_mixins = {};\n'+'var jade_interp;\n'+(options.self?'var self = locals || {};\n'+js:addWith('locals || {}','\n'+js,globals))+';'+'return buf.join("");';return {body:body,dependencies:parser.dependencies};} /**
	 * Get the template from a string or a file, either compiled on-the-fly or
	 * read from cache (if enabled), and cache the template if needed.
	 *
	 * If `str` is not set, the file specified in `options.filename` will be read.
	 *
	 * If `options.cache` is true, this function reads the file from
	 * `options.filename` so it must be set prior to calling this function.
	 *
	 * @param {Object} options
	 * @param {String=} str
	 * @return {Function}
	 * @api private
	 */function handleTemplateCache(options,str){var key=options.filename;if(options.cache&&exports.cache[key]){return exports.cache[key];}else {if(str===undefined)str=fs.readFileSync(options.filename,'utf8');var templ=exports.compile(str,options);if(options.cache)exports.cache[key]=templ;return templ;}} /**
	 * Compile a `Function` representation of the given jade `str`.
	 *
	 * Options:
	 *
	 *   - `compileDebug` when `false` debugging code is stripped from the compiled
	       template, when it is explicitly `true`, the source code is included in
	       the compiled template for better accuracy.
	 *   - `filename` used to improve errors when `compileDebug` is not `false` and to resolve imports/extends
	 *
	 * @param {String} str
	 * @param {Options} options
	 * @return {Function}
	 * @api public
	 */exports.compile=function(str,options){var options=options||{},filename=options.filename?utils.stringify(options.filename):'undefined',fn;str=String(str);var parsed=parse(str,options);if(options.compileDebug!==false){fn=['var jade_debug = [ new jade.DebugItem( 1, '+filename+' ) ];','try {',parsed.body,'} catch (err) {','  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno'+(options.compileDebug===true?','+utils.stringify(str):'')+');','}'].join('\n');}else {fn=parsed.body;}fn=new Function('locals, jade',fn);var res=function res(locals){return fn(locals,Object.create(runtime));};if(options.client){res.toString=function(){var err=new Error('The `client` option is deprecated, use the `jade.compileClient` method instead');err.name='Warning';console.error(err.stack|| /* istanbul ignore next */err.message);return exports.compileClient(str,options);};}res.dependencies=parsed.dependencies;return res;}; /**
	 * Compile a JavaScript source representation of the given jade `str`.
	 *
	 * Options:
	 *
	 *   - `compileDebug` When it is `true`, the source code is included in
	 *     the compiled template for better error messages.
	 *   - `filename` used to improve errors when `compileDebug` is not `true` and to resolve imports/extends
	 *   - `name` the name of the resulting function (defaults to "template")
	 *
	 * @param {String} str
	 * @param {Options} options
	 * @return {Object}
	 * @api public
	 */exports.compileClientWithDependenciesTracked=function(str,options){var options=options||{};var name=options.name||'template';var filename=options.filename?utils.stringify(options.filename):'undefined';var fn;str=String(str);options.compileDebug=options.compileDebug?true:false;var parsed=parse(str,options);if(options.compileDebug){fn=['var jade_debug = [ new jade.DebugItem( 1, '+filename+' ) ];','try {',parsed.body,'} catch (err) {','  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, '+utils.stringify(str)+');','}'].join('\n');}else {fn=parsed.body;}return {body:'function '+name+'(locals) {\n'+fn+'\n}',dependencies:parsed.dependencies};}; /**
	 * Compile a JavaScript source representation of the given jade `str`.
	 *
	 * Options:
	 *
	 *   - `compileDebug` When it is `true`, the source code is included in
	 *     the compiled template for better error messages.
	 *   - `filename` used to improve errors when `compileDebug` is not `true` and to resolve imports/extends
	 *   - `name` the name of the resulting function (defaults to "template")
	 *
	 * @param {String} str
	 * @param {Options} options
	 * @return {String}
	 * @api public
	 */exports.compileClient=function(str,options){return exports.compileClientWithDependenciesTracked(str,options).body;}; /**
	 * Compile a `Function` representation of the given jade file.
	 *
	 * Options:
	 *
	 *   - `compileDebug` when `false` debugging code is stripped from the compiled
	       template, when it is explicitly `true`, the source code is included in
	       the compiled template for better accuracy.
	 *
	 * @param {String} path
	 * @param {Options} options
	 * @return {Function}
	 * @api public
	 */exports.compileFile=function(path,options){options=options||{};options.filename=path;return handleTemplateCache(options);}; /**
	 * Render the given `str` of jade.
	 *
	 * Options:
	 *
	 *   - `cache` enable template caching
	 *   - `filename` filename required for `include` / `extends` and caching
	 *
	 * @param {String} str
	 * @param {Object|Function} options or fn
	 * @param {Function|undefined} fn
	 * @returns {String}
	 * @api public
	 */exports.render=function(str,options,fn){ // support callback API
if('function'==typeof options){fn=options,options=undefined;}if(typeof fn==='function'){var res;try{res=exports.render(str,options);}catch(ex){return fn(ex);}return fn(null,res);}options=options||{}; // cache requires .filename
if(options.cache&&!options.filename){throw new Error('the "filename" option is required for caching');}return handleTemplateCache(options,str)(options);}; /**
	 * Render a Jade file at the given `path`.
	 *
	 * @param {String} path
	 * @param {Object|Function} options or callback
	 * @param {Function|undefined} fn
	 * @returns {String}
	 * @api public
	 */exports.renderFile=function(path,options,fn){ // support callback API
if('function'==typeof options){fn=options,options=undefined;}if(typeof fn==='function'){var res;try{res=exports.renderFile(path,options);}catch(ex){return fn(ex);}return fn(null,res);}options=options||{};options.filename=path;return handleTemplateCache(options)(options);}; /**
	 * Compile a Jade file at the given `path` for use on the client.
	 *
	 * @param {String} path
	 * @param {Object} options
	 * @returns {String}
	 * @api public
	 */exports.compileFileClient=function(path,options){var key=path+':client';options=options||{};options.filename=path;if(options.cache&&exports.cache[key]){return exports.cache[key];}var str=fs.readFileSync(options.filename,'utf8');var out=exports.compileClient(str,options);if(options.cache)exports.cache[key]=out;return out;}; /**
	 * Express support.
	 */exports.__express=function(path,options,fn){if(options.compileDebug==undefined&&process.env.NODE_ENV==='production'){options.compileDebug=false;}exports.renderFile(path,options,fn);};}).call(this,require('_process'));},{"./compiler":2,"./doctypes":3,"./filters":4,"./lexer":6,"./nodes":16,"./parser":23,"./runtime":24,"./utils":25,"_process":28,"fs":26,"void-elements":34,"with":35}],2:[function(require,module,exports){'use strict';var nodes=require('./nodes');var filters=require('./filters');var doctypes=require('./doctypes');var runtime=require('./runtime');var utils=require('./utils');var selfClosing=require('void-elements');var parseJSExpression=require('character-parser').parseMax;var constantinople=require('constantinople');function isConstant(src){return constantinople(src,{jade:runtime,'jade_interp':undefined});}function toConstant(src){return constantinople.toConstant(src,{jade:runtime,'jade_interp':undefined});}function errorAtNode(node,error){error.line=node.line;error.filename=node.filename;return error;} /**
	 * Initialize `Compiler` with the given `node`.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @api public
	 */var Compiler=module.exports=function Compiler(node,options){this.options=options=options||{};this.node=node;this.hasCompiledDoctype=false;this.hasCompiledTag=false;this.pp=options.pretty||false;if(this.pp&&typeof this.pp!=='string'){this.pp='  ';}this.debug=false!==options.compileDebug;this.indents=0;this.parentIndents=0;this.terse=false;this.mixins={};this.dynamicMixins=false;if(options.doctype)this.setDoctype(options.doctype);}; /**
	 * Compiler prototype.
	 */Compiler.prototype={ /**
	   * Compile parse tree to JavaScript.
	   *
	   * @api public
	   */compile:function compile(){this.buf=[];if(this.pp)this.buf.push("var jade_indent = [];");this.lastBufferedIdx=-1;this.visit(this.node);if(!this.dynamicMixins){ // if there are no dynamic mixins we can remove any un-used mixins
var mixinNames=Object.keys(this.mixins);for(var i=0;i<mixinNames.length;i++){var mixin=this.mixins[mixinNames[i]];if(!mixin.used){for(var x=0;x<mixin.instances.length;x++){for(var y=mixin.instances[x].start;y<mixin.instances[x].end;y++){this.buf[y]='';}}}}}return this.buf.join('\n');}, /**
	   * Sets the default doctype `name`. Sets terse mode to `true` when
	   * html 5 is used, causing self-closing tags to end with ">" vs "/>",
	   * and boolean attributes are not mirrored.
	   *
	   * @param {string} name
	   * @api public
	   */setDoctype:function setDoctype(name){this.doctype=doctypes[name.toLowerCase()]||'<!DOCTYPE '+name+'>';this.terse=this.doctype.toLowerCase()=='<!doctype html>';this.xml=0==this.doctype.indexOf('<?xml');}, /**
	   * Buffer the given `str` exactly as is or with interpolation
	   *
	   * @param {String} str
	   * @param {Boolean} interpolate
	   * @api public
	   */buffer:function buffer(str,interpolate){var self=this;if(interpolate){var match=/(\\)?([#!]){((?:.|\n)*)$/.exec(str);if(match){this.buffer(str.substr(0,match.index),false);if(match[1]){ // escape
this.buffer(match[2]+'{',false);this.buffer(match[3],true);return;}else {var rest=match[3];var range=parseJSExpression(rest);var code=('!'==match[2]?'':'jade.escape')+"((jade_interp = "+range.src+") == null ? '' : jade_interp)";this.bufferExpression(code);this.buffer(rest.substr(range.end+1),true);return;}}}str=utils.stringify(str);str=str.substr(1,str.length-2);if(this.lastBufferedIdx==this.buf.length){if(this.lastBufferedType==='code')this.lastBuffered+=' + "';this.lastBufferedType='text';this.lastBuffered+=str;this.buf[this.lastBufferedIdx-1]='buf.push('+this.bufferStartChar+this.lastBuffered+'");';}else {this.buf.push('buf.push("'+str+'");');this.lastBufferedType='text';this.bufferStartChar='"';this.lastBuffered=str;this.lastBufferedIdx=this.buf.length;}}, /**
	   * Buffer the given `src` so it is evaluated at run time
	   *
	   * @param {String} src
	   * @api public
	   */bufferExpression:function bufferExpression(src){if(isConstant(src)){return this.buffer(toConstant(src)+'',false);}if(this.lastBufferedIdx==this.buf.length){if(this.lastBufferedType==='text')this.lastBuffered+='"';this.lastBufferedType='code';this.lastBuffered+=' + ('+src+')';this.buf[this.lastBufferedIdx-1]='buf.push('+this.bufferStartChar+this.lastBuffered+');';}else {this.buf.push('buf.push('+src+');');this.lastBufferedType='code';this.bufferStartChar='';this.lastBuffered='('+src+')';this.lastBufferedIdx=this.buf.length;}}, /**
	   * Buffer an indent based on the current `indent`
	   * property and an additional `offset`.
	   *
	   * @param {Number} offset
	   * @param {Boolean} newline
	   * @api public
	   */prettyIndent:function prettyIndent(offset,newline){offset=offset||0;newline=newline?'\n':'';this.buffer(newline+Array(this.indents+offset).join(this.pp));if(this.parentIndents)this.buf.push("buf.push.apply(buf, jade_indent);");}, /**
	   * Visit `node`.
	   *
	   * @param {Node} node
	   * @api public
	   */visit:function visit(node){var debug=this.debug;if(debug){this.buf.push('jade_debug.unshift(new jade.DebugItem( '+node.line+', '+(node.filename?utils.stringify(node.filename):'jade_debug[0].filename')+' ));');} // Massive hack to fix our context
// stack for - else[ if] etc
if(false===node.debug&&this.debug){this.buf.pop();this.buf.pop();}this.visitNode(node);if(debug)this.buf.push('jade_debug.shift();');}, /**
	   * Visit `node`.
	   *
	   * @param {Node} node
	   * @api public
	   */visitNode:function visitNode(node){return this['visit'+node.type](node);}, /**
	   * Visit case `node`.
	   *
	   * @param {Literal} node
	   * @api public
	   */visitCase:function visitCase(node){var _=this.withinCase;this.withinCase=true;this.buf.push('switch ('+node.expr+'){');this.visit(node.block);this.buf.push('}');this.withinCase=_;}, /**
	   * Visit when `node`.
	   *
	   * @param {Literal} node
	   * @api public
	   */visitWhen:function visitWhen(node){if('default'==node.expr){this.buf.push('default:');}else {this.buf.push('case '+node.expr+':');}if(node.block){this.visit(node.block);this.buf.push('  break;');}}, /**
	   * Visit literal `node`.
	   *
	   * @param {Literal} node
	   * @api public
	   */visitLiteral:function visitLiteral(node){this.buffer(node.str);}, /**
	   * Visit all nodes in `block`.
	   *
	   * @param {Block} block
	   * @api public
	   */visitBlock:function visitBlock(block){var len=block.nodes.length,escape=this.escape,pp=this.pp; // Pretty print multi-line text
if(pp&&len>1&&!escape&&block.nodes[0].isText&&block.nodes[1].isText)this.prettyIndent(1,true);for(var i=0;i<len;++i){ // Pretty print text
if(pp&&i>0&&!escape&&block.nodes[i].isText&&block.nodes[i-1].isText)this.prettyIndent(1,false);this.visit(block.nodes[i]); // Multiple text nodes are separated by newlines
if(block.nodes[i+1]&&block.nodes[i].isText&&block.nodes[i+1].isText)this.buffer('\n');}}, /**
	   * Visit a mixin's `block` keyword.
	   *
	   * @param {MixinBlock} block
	   * @api public
	   */visitMixinBlock:function visitMixinBlock(block){if(this.pp)this.buf.push("jade_indent.push('"+Array(this.indents+1).join(this.pp)+"');");this.buf.push('block && block();');if(this.pp)this.buf.push("jade_indent.pop();");}, /**
	   * Visit `doctype`. Sets terse mode to `true` when html 5
	   * is used, causing self-closing tags to end with ">" vs "/>",
	   * and boolean attributes are not mirrored.
	   *
	   * @param {Doctype} doctype
	   * @api public
	   */visitDoctype:function visitDoctype(doctype){if(doctype&&(doctype.val||!this.doctype)){this.setDoctype(doctype.val||'default');}if(this.doctype)this.buffer(this.doctype);this.hasCompiledDoctype=true;}, /**
	   * Visit `mixin`, generating a function that
	   * may be called within the template.
	   *
	   * @param {Mixin} mixin
	   * @api public
	   */visitMixin:function visitMixin(mixin){var name='jade_mixins[';var args=mixin.args||'';var block=mixin.block;var attrs=mixin.attrs;var attrsBlocks=mixin.attributeBlocks.slice();var pp=this.pp;var dynamic=mixin.name[0]==='#';var key=mixin.name;if(dynamic)this.dynamicMixins=true;name+=(dynamic?mixin.name.substr(2,mixin.name.length-3):'"'+mixin.name+'"')+']';this.mixins[key]=this.mixins[key]||{used:false,instances:[]};if(mixin.call){this.mixins[key].used=true;if(pp)this.buf.push("jade_indent.push('"+Array(this.indents+1).join(pp)+"');");if(block||attrs.length||attrsBlocks.length){this.buf.push(name+'.call({');if(block){this.buf.push('block: function(){'); // Render block with no indents, dynamically added when rendered
this.parentIndents++;var _indents=this.indents;this.indents=0;this.visit(mixin.block);this.indents=_indents;this.parentIndents--;if(attrs.length||attrsBlocks.length){this.buf.push('},');}else {this.buf.push('}');}}if(attrsBlocks.length){if(attrs.length){var val=this.attrs(attrs);attrsBlocks.unshift(val);}this.buf.push('attributes: jade.merge(['+attrsBlocks.join(',')+'])');}else if(attrs.length){var val=this.attrs(attrs);this.buf.push('attributes: '+val);}if(args){this.buf.push('}, '+args+');');}else {this.buf.push('});');}}else {this.buf.push(name+'('+args+');');}if(pp)this.buf.push("jade_indent.pop();");}else {var mixin_start=this.buf.length;args=args?args.split(','):[];var rest;if(args.length&&/^\.\.\./.test(args[args.length-1].trim())){rest=args.pop().trim().replace(/^\.\.\./,'');} // we need use jade_interp here for v8: https://code.google.com/p/v8/issues/detail?id=4165
// once fixed, use this: this.buf.push(name + ' = function(' + args.join(',') + '){');
this.buf.push(name+' = jade_interp = function('+args.join(',')+'){');this.buf.push('var block = (this && this.block), attributes = (this && this.attributes) || {};');if(rest){this.buf.push('var '+rest+' = [];');this.buf.push('for (jade_interp = '+args.length+'; jade_interp < arguments.length; jade_interp++) {');this.buf.push('  '+rest+'.push(arguments[jade_interp]);');this.buf.push('}');}this.parentIndents++;this.visit(block);this.parentIndents--;this.buf.push('};');var mixin_end=this.buf.length;this.mixins[key].instances.push({start:mixin_start,end:mixin_end});}}, /**
	   * Visit `tag` buffering tag markup, generating
	   * attributes, visiting the `tag`'s code and block.
	   *
	   * @param {Tag} tag
	   * @api public
	   */visitTag:function visitTag(tag){this.indents++;var name=tag.name,pp=this.pp,self=this;function bufferName(){if(tag.buffer)self.bufferExpression(name);else self.buffer(name);}if('pre'==tag.name)this.escape=true;if(!this.hasCompiledTag){if(!this.hasCompiledDoctype&&'html'==name){this.visitDoctype();}this.hasCompiledTag=true;} // pretty print
if(pp&&!tag.isInline())this.prettyIndent(0,true);if(tag.selfClosing||!this.xml&&selfClosing[tag.name]){this.buffer('<');bufferName();this.visitAttributes(tag.attrs,tag.attributeBlocks.slice());this.terse?this.buffer('>'):this.buffer('/>'); // if it is non-empty throw an error
if(tag.block&&!(tag.block.type==='Block'&&tag.block.nodes.length===0)&&tag.block.nodes.some(function(tag){return tag.type!=='Text'||!/^\s*$/.test(tag.val);})){throw errorAtNode(tag,new Error(name+' is self closing and should not have content.'));}}else { // Optimize attributes buffering
this.buffer('<');bufferName();this.visitAttributes(tag.attrs,tag.attributeBlocks.slice());this.buffer('>');if(tag.code)this.visitCode(tag.code);this.visit(tag.block); // pretty print
if(pp&&!tag.isInline()&&'pre'!=tag.name&&!tag.canInline())this.prettyIndent(0,true);this.buffer('</');bufferName();this.buffer('>');}if('pre'==tag.name)this.escape=false;this.indents--;}, /**
	   * Visit `filter`, throwing when the filter does not exist.
	   *
	   * @param {Filter} filter
	   * @api public
	   */visitFilter:function visitFilter(filter){var text=filter.block.nodes.map(function(node){return node.val;}).join('\n');filter.attrs.filename=this.options.filename;try{this.buffer(filters(filter.name,text,filter.attrs),true);}catch(err){throw errorAtNode(filter,err);}}, /**
	   * Visit `text` node.
	   *
	   * @param {Text} text
	   * @api public
	   */visitText:function visitText(text){this.buffer(text.val,true);}, /**
	   * Visit a `comment`, only buffering when the buffer flag is set.
	   *
	   * @param {Comment} comment
	   * @api public
	   */visitComment:function visitComment(comment){if(!comment.buffer)return;if(this.pp)this.prettyIndent(1,true);this.buffer('<!--'+comment.val+'-->');}, /**
	   * Visit a `BlockComment`.
	   *
	   * @param {Comment} comment
	   * @api public
	   */visitBlockComment:function visitBlockComment(comment){if(!comment.buffer)return;if(this.pp)this.prettyIndent(1,true);this.buffer('<!--'+comment.val);this.visit(comment.block);if(this.pp)this.prettyIndent(1,true);this.buffer('-->');}, /**
	   * Visit `code`, respecting buffer / escape flags.
	   * If the code is followed by a block, wrap it in
	   * a self-calling function.
	   *
	   * @param {Code} code
	   * @api public
	   */visitCode:function visitCode(code){ // Wrap code blocks with {}.
// we only wrap unbuffered code blocks ATM
// since they are usually flow control
// Buffer code
if(code.buffer){var val=code.val.trim();val='null == (jade_interp = '+val+') ? "" : jade_interp';if(code.escape)val='jade.escape('+val+')';this.bufferExpression(val);}else {this.buf.push(code.val);} // Block support
if(code.block){if(!code.buffer)this.buf.push('{');this.visit(code.block);if(!code.buffer)this.buf.push('}');}}, /**
	   * Visit `each` block.
	   *
	   * @param {Each} each
	   * @api public
	   */visitEach:function visitEach(each){this.buf.push(''+'// iterate '+each.obj+'\n'+';(function(){\n'+'  var $$obj = '+each.obj+';\n'+'  if (\'number\' == typeof $$obj.length) {\n');if(each.alternative){this.buf.push('  if ($$obj.length) {');}this.buf.push(''+'    for (var '+each.key+' = 0, $$l = $$obj.length; '+each.key+' < $$l; '+each.key+'++) {\n'+'      var '+each.val+' = $$obj['+each.key+'];\n');this.visit(each.block);this.buf.push('    }\n');if(each.alternative){this.buf.push('  } else {');this.visit(each.alternative);this.buf.push('  }');}this.buf.push(''+'  } else {\n'+'    var $$l = 0;\n'+'    for (var '+each.key+' in $$obj) {\n'+'      $$l++;'+'      var '+each.val+' = $$obj['+each.key+'];\n');this.visit(each.block);this.buf.push('    }\n');if(each.alternative){this.buf.push('    if ($$l === 0) {');this.visit(each.alternative);this.buf.push('    }');}this.buf.push('  }\n}).call(this);\n');}, /**
	   * Visit `attrs`.
	   *
	   * @param {Array} attrs
	   * @api public
	   */visitAttributes:function visitAttributes(attrs,attributeBlocks){if(attributeBlocks.length){if(attrs.length){var val=this.attrs(attrs);attributeBlocks.unshift(val);}this.bufferExpression('jade.attrs(jade.merge(['+attributeBlocks.join(',')+']), '+utils.stringify(this.terse)+')');}else if(attrs.length){this.attrs(attrs,true);}}, /**
	   * Compile attributes.
	   */attrs:function attrs(_attrs,buffer){var buf=[];var classes=[];var classEscaping=[];_attrs.forEach(function(attr){var key=attr.name;var escaped=attr.escaped;if(key==='class'){classes.push(attr.val);classEscaping.push(attr.escaped);}else if(isConstant(attr.val)){if(buffer){this.buffer(runtime.attr(key,toConstant(attr.val),escaped,this.terse));}else {var val=toConstant(attr.val);if(key==='style')val=runtime.style(val);if(escaped&&!(key.indexOf('data')===0&&typeof val!=='string')){val=runtime.escape(val);}buf.push(utils.stringify(key)+': '+utils.stringify(val));}}else {if(buffer){this.bufferExpression('jade.attr("'+key+'", '+attr.val+', '+utils.stringify(escaped)+', '+utils.stringify(this.terse)+')');}else {var val=attr.val;if(key==='style'){val='jade.style('+val+')';}if(escaped&&!(key.indexOf('data')===0)){val='jade.escape('+val+')';}else if(escaped){val='(typeof (jade_interp = '+val+') == "string" ? jade.escape(jade_interp) : jade_interp)';}buf.push(utils.stringify(key)+': '+val);}}}.bind(this));if(buffer){if(classes.every(isConstant)){this.buffer(runtime.cls(classes.map(toConstant),classEscaping));}else {this.bufferExpression('jade.cls(['+classes.join(',')+'], '+utils.stringify(classEscaping)+')');}}else if(classes.length){if(classes.every(isConstant)){classes=utils.stringify(runtime.joinClasses(classes.map(toConstant).map(runtime.joinClasses).map(function(cls,i){return classEscaping[i]?runtime.escape(cls):cls;})));}else {classes='(jade_interp = '+utils.stringify(classEscaping)+','+' jade.joinClasses(['+classes.join(',')+'].map(jade.joinClasses).map(function (cls, i) {'+'   return jade_interp[i] ? jade.escape(cls) : cls'+' }))'+')';}if(classes.length)buf.push('"class": '+classes);}return '{'+buf.join(',')+'}';}};},{"./doctypes":3,"./filters":4,"./nodes":16,"./runtime":24,"./utils":25,"character-parser":29,"constantinople":30,"void-elements":34}],3:[function(require,module,exports){'use strict';module.exports={'default':'<!DOCTYPE html>','xml':'<?xml version="1.0" encoding="utf-8" ?>','transitional':'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">','strict':'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">','frameset':'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">','1.1':'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">','basic':'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">','mobile':'<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'};},{}],4:[function(require,module,exports){'use strict';module.exports=filter;function filter(name,str,options){if(typeof filter[name]==='function'){return filter[name](str,options);}else {throw new Error('unknown filter ":'+name+'"');}}},{}],5:[function(require,module,exports){'use strict';module.exports=['a','abbr','acronym','b','br','code','em','font','i','img','ins','kbd','map','samp','small','span','strong','sub','sup'];},{}],6:[function(require,module,exports){'use strict';var utils=require('./utils');var characterParser=require('character-parser'); /**
	 * Initialize `Lexer` with the given `str`.
	 *
	 * @param {String} str
	 * @param {String} filename
	 * @api private
	 */var Lexer=module.exports=function Lexer(str,filename){this.input=str.replace(/\r\n|\r/g,'\n');this.filename=filename;this.deferredTokens=[];this.lastIndents=0;this.lineno=1;this.stash=[];this.indentStack=[];this.indentRe=null;this.pipeless=false;};function assertExpression(exp){ //this verifies that a JavaScript expression is valid
Function('','return ('+exp+')');}function assertNestingCorrect(exp){ //this verifies that code is properly nested, but allows
//invalid JavaScript such as the contents of `attributes`
var res=characterParser(exp);if(res.isNesting()){throw new Error('Nesting must match on expression `'+exp+'`');}} /**
	 * Lexer prototype.
	 */Lexer.prototype={ /**
	   * Construct a token with the given `type` and `val`.
	   *
	   * @param {String} type
	   * @param {String} val
	   * @return {Object}
	   * @api private
	   */tok:function tok(type,val){return {type:type,line:this.lineno,val:val};}, /**
	   * Consume the given `len` of input.
	   *
	   * @param {Number} len
	   * @api private
	   */consume:function consume(len){this.input=this.input.substr(len);}, /**
	   * Scan for `type` with the given `regexp`.
	   *
	   * @param {String} type
	   * @param {RegExp} regexp
	   * @return {Object}
	   * @api private
	   */scan:function scan(regexp,type){var captures;if(captures=regexp.exec(this.input)){this.consume(captures[0].length);return this.tok(type,captures[1]);}}, /**
	   * Defer the given `tok`.
	   *
	   * @param {Object} tok
	   * @api private
	   */defer:function defer(tok){this.deferredTokens.push(tok);}, /**
	   * Lookahead `n` tokens.
	   *
	   * @param {Number} n
	   * @return {Object}
	   * @api private
	   */lookahead:function lookahead(n){var fetch=n-this.stash.length;while(fetch-->0){this.stash.push(this.next());}return this.stash[--n];}, /**
	   * Return the indexOf `(` or `{` or `[` / `)` or `}` or `]` delimiters.
	   *
	   * @return {Number}
	   * @api private
	   */bracketExpression:function bracketExpression(skip){skip=skip||0;var start=this.input[skip];if(start!='('&&start!='{'&&start!='[')throw new Error('unrecognized start character');var end={'(':')','{':'}','[':']'}[start];var range=characterParser.parseMax(this.input,{start:skip+1});if(this.input[range.end]!==end)throw new Error('start character '+start+' does not match end character '+this.input[range.end]);return range;}, /**
	   * Stashed token.
	   */stashed:function stashed(){return this.stash.length&&this.stash.shift();}, /**
	   * Deferred token.
	   */deferred:function deferred(){return this.deferredTokens.length&&this.deferredTokens.shift();}, /**
	   * end-of-source.
	   */eos:function eos(){if(this.input.length)return;if(this.indentStack.length){this.indentStack.shift();return this.tok('outdent');}else {return this.tok('eos');}}, /**
	   * Blank line.
	   */blank:function blank(){var captures;if(captures=/^\n *\n/.exec(this.input)){this.consume(captures[0].length-1);++this.lineno;if(this.pipeless)return this.tok('text','');return this.next();}}, /**
	   * Comment.
	   */comment:function comment(){var captures;if(captures=/^\/\/(-)?([^\n]*)/.exec(this.input)){this.consume(captures[0].length);var tok=this.tok('comment',captures[2]);tok.buffer='-'!=captures[1];this.pipeless=true;return tok;}}, /**
	   * Interpolated tag.
	   */interpolation:function interpolation(){if(/^#\{/.test(this.input)){var match=this.bracketExpression(1);this.consume(match.end+1);return this.tok('interpolation',match.src);}}, /**
	   * Tag.
	   */tag:function tag(){var captures;if(captures=/^(\w[-:\w]*)(\/?)/.exec(this.input)){this.consume(captures[0].length);var tok,name=captures[1];if(':'==name[name.length-1]){name=name.slice(0,-1);tok=this.tok('tag',name);this.defer(this.tok(':'));if(this.input[0]!==' '){console.warn('Warning: space required after `:` on line '+this.lineno+' of jade file "'+this.filename+'"');}while(' '==this.input[0]){this.input=this.input.substr(1);}}else {tok=this.tok('tag',name);}tok.selfClosing=!!captures[2];return tok;}}, /**
	   * Filter.
	   */filter:function filter(){var tok=this.scan(/^:([\w\-]+)/,'filter');if(tok){this.pipeless=true;return tok;}}, /**
	   * Doctype.
	   */doctype:function doctype(){if(this.scan(/^!!! *([^\n]+)?/,'doctype')){throw new Error('`!!!` is deprecated, you must now use `doctype`');}var node=this.scan(/^(?:doctype) *([^\n]+)?/,'doctype');if(node&&node.val&&node.val.trim()==='5'){throw new Error('`doctype 5` is deprecated, you must now use `doctype html`');}return node;}, /**
	   * Id.
	   */id:function id(){return this.scan(/^#([\w-]+)/,'id');}, /**
	   * Class.
	   */className:function className(){return this.scan(/^\.([\w-]+)/,'class');}, /**
	   * Text.
	   */text:function text(){return this.scan(/^(?:\| ?| )([^\n]+)/,'text')||this.scan(/^\|?( )/,'text')||this.scan(/^(<[^\n]*)/,'text');},textFail:function textFail(){var tok;if(tok=this.scan(/^([^\.\n][^\n]+)/,'text')){console.warn('Warning: missing space before text for line '+this.lineno+' of jade file "'+this.filename+'"');return tok;}}, /**
	   * Dot.
	   */dot:function dot(){var match;if(match=this.scan(/^\./,'dot')){this.pipeless=true;return match;}}, /**
	   * Extends.
	   */"extends":function _extends(){return this.scan(/^extends? +([^\n]+)/,'extends');}, /**
	   * Block prepend.
	   */prepend:function prepend(){var captures;if(captures=/^prepend +([^\n]+)/.exec(this.input)){this.consume(captures[0].length);var mode='prepend',name=captures[1],tok=this.tok('block',name);tok.mode=mode;return tok;}}, /**
	   * Block append.
	   */append:function append(){var captures;if(captures=/^append +([^\n]+)/.exec(this.input)){this.consume(captures[0].length);var mode='append',name=captures[1],tok=this.tok('block',name);tok.mode=mode;return tok;}}, /**
	   * Block.
	   */block:function block(){var captures;if(captures=/^block\b *(?:(prepend|append) +)?([^\n]+)/.exec(this.input)){this.consume(captures[0].length);var mode=captures[1]||'replace',name=captures[2],tok=this.tok('block',name);tok.mode=mode;return tok;}}, /**
	   * Mixin Block.
	   */mixinBlock:function mixinBlock(){var captures;if(captures=/^block[ \t]*(\n|$)/.exec(this.input)){this.consume(captures[0].length-captures[1].length);return this.tok('mixin-block');}}, /**
	   * Yield.
	   */'yield':function _yield(){return this.scan(/^yield */,'yield');}, /**
	   * Include.
	   */include:function include(){return this.scan(/^include +([^\n]+)/,'include');}, /**
	   * Include with filter
	   */includeFiltered:function includeFiltered(){var captures;if(captures=/^include:([\w\-]+)([\( ])/.exec(this.input)){this.consume(captures[0].length-1);var filter=captures[1];var attrs=captures[2]==='('?this.attrs():null;if(!(captures[2]===' '||this.input[0]===' ')){throw new Error('expected space after include:filter but got '+utils.stringify(this.input[0]));}captures=/^ *([^\n]+)/.exec(this.input);if(!captures||captures[1].trim()===''){throw new Error('missing path for include:filter');}this.consume(captures[0].length);var path=captures[1];var tok=this.tok('include',path);tok.filter=filter;tok.attrs=attrs;return tok;}}, /**
	   * Case.
	   */"case":function _case(){return this.scan(/^case +([^\n]+)/,'case');}, /**
	   * When.
	   */when:function when(){return this.scan(/^when +([^:\n]+)/,'when');}, /**
	   * Default.
	   */"default":function _default(){return this.scan(/^default */,'default');}, /**
	   * Call mixin.
	   */call:function call(){var tok,captures;if(captures=/^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)){ // try to consume simple or interpolated call
if(captures[3]){ // simple call
this.consume(captures[0].length);tok=this.tok('call',captures[3]);}else { // interpolated call
var match=this.bracketExpression(2+captures[1].length);this.consume(match.end+1);assertExpression(match.src);tok=this.tok('call','#{'+match.src+'}');} // Check for args (not attributes)
if(captures=/^ *\(/.exec(this.input)){var range=this.bracketExpression(captures[0].length-1);if(!/^\s*[-\w]+ *=/.test(range.src)){ // not attributes
this.consume(range.end+1);tok.args=range.src;}if(tok.args){assertExpression('['+tok.args+']');}}return tok;}}, /**
	   * Mixin.
	   */mixin:function mixin(){var captures;if(captures=/^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)){this.consume(captures[0].length);var tok=this.tok('mixin',captures[1]);tok.args=captures[2];return tok;}}, /**
	   * Conditional.
	   */conditional:function conditional(){var captures;if(captures=/^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)){this.consume(captures[0].length);var type=captures[1];var js=captures[2];var isIf=false;var isElse=false;switch(type){case 'if':assertExpression(js);js='if ('+js+')';isIf=true;break;case 'unless':assertExpression(js);js='if (!('+js+'))';isIf=true;break;case 'else if':assertExpression(js);js='else if ('+js+')';isIf=true;isElse=true;break;case 'else':if(js&&js.trim()){throw new Error('`else` cannot have a condition, perhaps you meant `else if`');}js='else';isElse=true;break;}var tok=this.tok('code',js);tok.isElse=isElse;tok.isIf=isIf;tok.requiresBlock=true;return tok;}}, /**
	   * While.
	   */"while":function _while(){var captures;if(captures=/^while +([^\n]+)/.exec(this.input)){this.consume(captures[0].length);assertExpression(captures[1]);var tok=this.tok('code','while ('+captures[1]+')');tok.requiresBlock=true;return tok;}}, /**
	   * Each.
	   */each:function each(){var captures;if(captures=/^(?:- *)?(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)){this.consume(captures[0].length);var tok=this.tok('each',captures[1]);tok.key=captures[2]||'$index';assertExpression(captures[3]);tok.code=captures[3];return tok;}}, /**
	   * Code.
	   */code:function code(){var captures;if(captures=/^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)){this.consume(captures[0].length);var flags=captures[1];captures[1]=captures[2];var tok=this.tok('code',captures[1]);tok.escape=flags.charAt(0)==='=';tok.buffer=flags.charAt(0)==='='||flags.charAt(1)==='=';if(tok.buffer)assertExpression(captures[1]);return tok;}}, /**
	   * Block code.
	   */blockCode:function blockCode(){var captures;if(captures=/^-\n/.exec(this.input)){this.consume(captures[0].length-1);var tok=this.tok('blockCode');this.pipeless=true;return tok;}}, /**
	   * Attributes.
	   */attrs:function attrs(){if('('==this.input.charAt(0)){var index=this.bracketExpression().end,str=this.input.substr(1,index-1),tok=this.tok('attrs');assertNestingCorrect(str);var quote='';var interpolate=function interpolate(attr){return attr.replace(/(\\)?#\{(.+)/g,function(_,escape,expr){if(escape)return _;try{var range=characterParser.parseMax(expr);if(expr[range.end]!=='}')return _.substr(0,2)+interpolate(_.substr(2));assertExpression(range.src);return quote+" + ("+range.src+") + "+quote+interpolate(expr.substr(range.end+1));}catch(ex){return _.substr(0,2)+interpolate(_.substr(2));}});};this.consume(index+1);tok.attrs=[];var escapedAttr=true;var key='';var val='';var interpolatable='';var state=characterParser.defaultState();var loc='key';var isEndOfAttribute=function isEndOfAttribute(i){if(key.trim()==='')return false;if(i===str.length)return true;if(loc==='key'){if(str[i]===' '||str[i]==='\n'){for(var x=i;x<str.length;x++){if(str[x]!=' '&&str[x]!='\n'){if(str[x]==='='||str[x]==='!'||str[x]===',')return false;else return true;}}}return str[i]===',';}else if(loc==='value'&&!state.isNesting()){try{assertExpression(val);if(str[i]===' '||str[i]==='\n'){for(var x=i;x<str.length;x++){if(str[x]!=' '&&str[x]!='\n'){if(characterParser.isPunctuator(str[x])&&str[x]!='"'&&str[x]!="'")return false;else return true;}}}return str[i]===',';}catch(ex){return false;}}};this.lineno+=str.split("\n").length-1;for(var i=0;i<=str.length;i++){if(isEndOfAttribute(i)){val=val.trim();if(val)assertExpression(val);key=key.trim();key=key.replace(/^['"]|['"]$/g,'');tok.attrs.push({name:key,val:''==val?true:val,escaped:escapedAttr});key=val='';loc='key';escapedAttr=false;}else {switch(loc){case 'key-char':if(str[i]===quote){loc='key';if(i+1<str.length&&[' ',',','!','=','\n'].indexOf(str[i+1])===-1)throw new Error('Unexpected character '+str[i+1]+' expected ` `, `\\n`, `,`, `!` or `=`');}else {key+=str[i];}break;case 'key':if(key===''&&(str[i]==='"'||str[i]==="'")){loc='key-char';quote=str[i];}else if(str[i]==='!'||str[i]==='='){escapedAttr=str[i]!=='!';if(str[i]==='!')i++;if(str[i]!=='=')throw new Error('Unexpected character '+str[i]+' expected `=`');loc='value';state=characterParser.defaultState();}else {key+=str[i];}break;case 'value':state=characterParser.parseChar(str[i],state);if(state.isString()){loc='string';quote=str[i];interpolatable=str[i];}else {val+=str[i];}break;case 'string':state=characterParser.parseChar(str[i],state);interpolatable+=str[i];if(!state.isString()){loc='value';val+=interpolate(interpolatable);}break;}}}if('/'==this.input.charAt(0)){this.consume(1);tok.selfClosing=true;}return tok;}}, /**
	   * &attributes block
	   */attributesBlock:function attributesBlock(){var captures;if(/^&attributes\b/.test(this.input)){this.consume(11);var args=this.bracketExpression();this.consume(args.end+1);return this.tok('&attributes',args.src);}}, /**
	   * Indent | Outdent | Newline.
	   */indent:function indent(){var captures,re; // established regexp
if(this.indentRe){captures=this.indentRe.exec(this.input); // determine regexp
}else { // tabs
re=/^\n(\t*) */;captures=re.exec(this.input); // spaces
if(captures&&!captures[1].length){re=/^\n( *)/;captures=re.exec(this.input);} // established
if(captures&&captures[1].length)this.indentRe=re;}if(captures){var tok,indents=captures[1].length;++this.lineno;this.consume(indents+1);if(' '==this.input[0]||'\t'==this.input[0]){throw new Error('Invalid indentation, you can use tabs or spaces but not both');} // blank line
if('\n'==this.input[0]){this.pipeless=false;return this.tok('newline');} // outdent
if(this.indentStack.length&&indents<this.indentStack[0]){while(this.indentStack.length&&this.indentStack[0]>indents){this.stash.push(this.tok('outdent'));this.indentStack.shift();}tok=this.stash.pop(); // indent
}else if(indents&&indents!=this.indentStack[0]){this.indentStack.unshift(indents);tok=this.tok('indent',indents); // newline
}else {tok=this.tok('newline');}this.pipeless=false;return tok;}}, /**
	   * Pipe-less text consumed only when
	   * pipeless is true;
	   */pipelessText:function pipelessText(){if(!this.pipeless)return;var captures,re; // established regexp
if(this.indentRe){captures=this.indentRe.exec(this.input); // determine regexp
}else { // tabs
re=/^\n(\t*) */;captures=re.exec(this.input); // spaces
if(captures&&!captures[1].length){re=/^\n( *)/;captures=re.exec(this.input);} // established
if(captures&&captures[1].length)this.indentRe=re;}var indents=captures&&captures[1].length;if(indents&&(this.indentStack.length===0||indents>this.indentStack[0])){var indent=captures[1];var line;var tokens=[];var isMatch;do { // text has `\n` as a prefix
var i=this.input.substr(1).indexOf('\n');if(-1==i)i=this.input.length-1;var str=this.input.substr(1,i);isMatch=str.substr(0,indent.length)===indent||!str.trim();if(isMatch){ // consume test along with `\n` prefix if match
this.consume(str.length+1);++this.lineno;tokens.push(str.substr(indent.length));}}while(this.input.length&&isMatch);while(this.input.length===0&&tokens[tokens.length-1]===''){tokens.pop();}return this.tok('pipeless-text',tokens);}}, /**
	   * ':'
	   */colon:function colon(){var good=/^: +/.test(this.input);var res=this.scan(/^: */,':');if(res&&!good){console.warn('Warning: space required after `:` on line '+this.lineno+' of jade file "'+this.filename+'"');}return res;},fail:function fail(){throw new Error('unexpected text '+this.input.substr(0,5));}, /**
	   * Return the next token object, or those
	   * previously stashed by lookahead.
	   *
	   * @return {Object}
	   * @api private
	   */advance:function advance(){return this.stashed()||this.next();}, /**
	   * Return the next token object.
	   *
	   * @return {Object}
	   * @api private
	   */next:function next(){return this.deferred()||this.blank()||this.eos()||this.pipelessText()||this.yield()||this.doctype()||this.interpolation()||this["case"]()||this.when()||this["default"]()||this["extends"]()||this.append()||this.prepend()||this.block()||this.mixinBlock()||this.include()||this.includeFiltered()||this.mixin()||this.call()||this.conditional()||this.each()||this["while"]()||this.tag()||this.filter()||this.blockCode()||this.code()||this.id()||this.className()||this.attrs()||this.attributesBlock()||this.indent()||this.text()||this.comment()||this.colon()||this.dot()||this.textFail()||this.fail();}};},{"./utils":25,"character-parser":29}],7:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Attrs` node.
	 *
	 * @api public
	 */var Attrs=module.exports=function Attrs(){this.attributeNames=[];this.attrs=[];this.attributeBlocks=[];}; // Inherit from `Node`.
Attrs.prototype=Object.create(Node.prototype);Attrs.prototype.constructor=Attrs;Attrs.prototype.type='Attrs'; /**
	 * Set attribute `name` to `val`, keep in mind these become
	 * part of a raw js object literal, so to quote a value you must
	 * '"quote me"', otherwise or example 'user.name' is literal JavaScript.
	 *
	 * @param {String} name
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @return {Tag} for chaining
	 * @api public
	 */Attrs.prototype.setAttribute=function(name,val,escaped){if(name!=='class'&&this.attributeNames.indexOf(name)!==-1){throw new Error('Duplicate attribute "'+name+'" is not allowed.');}this.attributeNames.push(name);this.attrs.push({name:name,val:val,escaped:escaped});return this;}; /**
	 * Remove attribute `name` when present.
	 *
	 * @param {String} name
	 * @api public
	 */Attrs.prototype.removeAttribute=function(name){var err=new Error('attrs.removeAttribute is deprecated and will be removed in v2.0.0');console.warn(err.stack);for(var i=0,len=this.attrs.length;i<len;++i){if(this.attrs[i]&&this.attrs[i].name==name){delete this.attrs[i];}}}; /**
	 * Get attribute value by `name`.
	 *
	 * @param {String} name
	 * @return {String}
	 * @api public
	 */Attrs.prototype.getAttribute=function(name){var err=new Error('attrs.getAttribute is deprecated and will be removed in v2.0.0');console.warn(err.stack);for(var i=0,len=this.attrs.length;i<len;++i){if(this.attrs[i]&&this.attrs[i].name==name){return this.attrs[i].val;}}};Attrs.prototype.addAttributes=function(src){this.attributeBlocks.push(src);};},{"./node":20}],8:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `BlockComment` with the given `block`.
	 *
	 * @param {String} val
	 * @param {Block} block
	 * @param {Boolean} buffer
	 * @api public
	 */var BlockComment=module.exports=function BlockComment(val,block,buffer){this.block=block;this.val=val;this.buffer=buffer;}; // Inherit from `Node`.
BlockComment.prototype=Object.create(Node.prototype);BlockComment.prototype.constructor=BlockComment;BlockComment.prototype.type='BlockComment';},{"./node":20}],9:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a new `Block` with an optional `node`.
	 *
	 * @param {Node} node
	 * @api public
	 */var Block=module.exports=function Block(node){this.nodes=[];if(node)this.push(node);}; // Inherit from `Node`.
Block.prototype=Object.create(Node.prototype);Block.prototype.constructor=Block;Block.prototype.type='Block'; /**
	 * Block flag.
	 */Block.prototype.isBlock=true; /**
	 * Replace the nodes in `other` with the nodes
	 * in `this` block.
	 *
	 * @param {Block} other
	 * @api private
	 */Block.prototype.replace=function(other){var err=new Error('block.replace is deprecated and will be removed in v2.0.0');console.warn(err.stack);other.nodes=this.nodes;}; /**
	 * Push the given `node`.
	 *
	 * @param {Node} node
	 * @return {Number}
	 * @api public
	 */Block.prototype.push=function(node){return this.nodes.push(node);}; /**
	 * Check if this block is empty.
	 *
	 * @return {Boolean}
	 * @api public
	 */Block.prototype.isEmpty=function(){return 0==this.nodes.length;}; /**
	 * Unshift the given `node`.
	 *
	 * @param {Node} node
	 * @return {Number}
	 * @api public
	 */Block.prototype.unshift=function(node){return this.nodes.unshift(node);}; /**
	 * Return the "last" block, or the first `yield` node.
	 *
	 * @return {Block}
	 * @api private
	 */Block.prototype.includeBlock=function(){var ret=this,node;for(var i=0,len=this.nodes.length;i<len;++i){node=this.nodes[i];if(node.yield)return node;else if(node.textOnly)continue;else if(node.includeBlock)ret=node.includeBlock();else if(node.block&&!node.block.isEmpty())ret=node.block.includeBlock();if(ret.yield)return ret;}return ret;}; /**
	 * Return a clone of this block.
	 *
	 * @return {Block}
	 * @api private
	 */Block.prototype.clone=function(){var err=new Error('block.clone is deprecated and will be removed in v2.0.0');console.warn(err.stack);var clone=new Block();for(var i=0,len=this.nodes.length;i<len;++i){clone.push(this.nodes[i].clone());}return clone;};},{"./node":20}],10:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a new `Case` with `expr`.
	 *
	 * @param {String} expr
	 * @api public
	 */var Case=exports=module.exports=function Case(expr,block){this.expr=expr;this.block=block;}; // Inherit from `Node`.
Case.prototype=Object.create(Node.prototype);Case.prototype.constructor=Case;Case.prototype.type='Case';var When=exports.When=function When(expr,block){this.expr=expr;this.block=block;this.debug=false;}; // Inherit from `Node`.
When.prototype=Object.create(Node.prototype);When.prototype.constructor=When;When.prototype.type='When';},{"./node":20}],11:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Code` node with the given code `val`.
	 * Code may also be optionally buffered and escaped.
	 *
	 * @param {String} val
	 * @param {Boolean} buffer
	 * @param {Boolean} escape
	 * @api public
	 */var Code=module.exports=function Code(val,buffer,escape){this.val=val;this.buffer=buffer;this.escape=escape;if(val.match(/^ *else/))this.debug=false;}; // Inherit from `Node`.
Code.prototype=Object.create(Node.prototype);Code.prototype.constructor=Code;Code.prototype.type='Code'; // prevent the minifiers removing this
},{"./node":20}],12:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Comment` with the given `val`, optionally `buffer`,
	 * otherwise the comment may render in the output.
	 *
	 * @param {String} val
	 * @param {Boolean} buffer
	 * @api public
	 */var Comment=module.exports=function Comment(val,buffer){this.val=val;this.buffer=buffer;}; // Inherit from `Node`.
Comment.prototype=Object.create(Node.prototype);Comment.prototype.constructor=Comment;Comment.prototype.type='Comment';},{"./node":20}],13:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Doctype` with the given `val`. 
	 *
	 * @param {String} val
	 * @api public
	 */var Doctype=module.exports=function Doctype(val){this.val=val;}; // Inherit from `Node`.
Doctype.prototype=Object.create(Node.prototype);Doctype.prototype.constructor=Doctype;Doctype.prototype.type='Doctype';},{"./node":20}],14:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize an `Each` node, representing iteration
	 *
	 * @param {String} obj
	 * @param {String} val
	 * @param {String} key
	 * @param {Block} block
	 * @api public
	 */var Each=module.exports=function Each(obj,val,key,block){this.obj=obj;this.val=val;this.key=key;this.block=block;}; // Inherit from `Node`.
Each.prototype=Object.create(Node.prototype);Each.prototype.constructor=Each;Each.prototype.type='Each';},{"./node":20}],15:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Filter` node with the given
	 * filter `name` and `block`.
	 *
	 * @param {String} name
	 * @param {Block|Node} block
	 * @api public
	 */var Filter=module.exports=function Filter(name,block,attrs){this.name=name;this.block=block;this.attrs=attrs;}; // Inherit from `Node`.
Filter.prototype=Object.create(Node.prototype);Filter.prototype.constructor=Filter;Filter.prototype.type='Filter';},{"./node":20}],16:[function(require,module,exports){'use strict';exports.Node=require('./node');exports.Tag=require('./tag');exports.Code=require('./code');exports.Each=require('./each');exports.Case=require('./case');exports.Text=require('./text');exports.Block=require('./block');exports.MixinBlock=require('./mixin-block');exports.Mixin=require('./mixin');exports.Filter=require('./filter');exports.Comment=require('./comment');exports.Literal=require('./literal');exports.BlockComment=require('./block-comment');exports.Doctype=require('./doctype');},{"./block":9,"./block-comment":8,"./case":10,"./code":11,"./comment":12,"./doctype":13,"./each":14,"./filter":15,"./literal":17,"./mixin":19,"./mixin-block":18,"./node":20,"./tag":21,"./text":22}],17:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Literal` node with the given `str.
	 *
	 * @param {String} str
	 * @api public
	 */var Literal=module.exports=function Literal(str){this.str=str;}; // Inherit from `Node`.
Literal.prototype=Object.create(Node.prototype);Literal.prototype.constructor=Literal;Literal.prototype.type='Literal';},{"./node":20}],18:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a new `Block` with an optional `node`.
	 *
	 * @param {Node} node
	 * @api public
	 */var MixinBlock=module.exports=function MixinBlock(){}; // Inherit from `Node`.
MixinBlock.prototype=Object.create(Node.prototype);MixinBlock.prototype.constructor=MixinBlock;MixinBlock.prototype.type='MixinBlock';},{"./node":20}],19:[function(require,module,exports){'use strict';var Attrs=require('./attrs'); /**
	 * Initialize a new `Mixin` with `name` and `block`.
	 *
	 * @param {String} name
	 * @param {String} args
	 * @param {Block} block
	 * @api public
	 */var Mixin=module.exports=function Mixin(name,args,block,call){Attrs.call(this);this.name=name;this.args=args;this.block=block;this.call=call;}; // Inherit from `Attrs`.
Mixin.prototype=Object.create(Attrs.prototype);Mixin.prototype.constructor=Mixin;Mixin.prototype.type='Mixin';},{"./attrs":7}],20:[function(require,module,exports){'use strict';var Node=module.exports=function Node(){}; /**
	 * Clone this node (return itself)
	 *
	 * @return {Node}
	 * @api private
	 */Node.prototype.clone=function(){var err=new Error('node.clone is deprecated and will be removed in v2.0.0');console.warn(err.stack);return this;};Node.prototype.type='';},{}],21:[function(require,module,exports){'use strict';var Attrs=require('./attrs');var Block=require('./block');var inlineTags=require('../inline-tags'); /**
	 * Initialize a `Tag` node with the given tag `name` and optional `block`.
	 *
	 * @param {String} name
	 * @param {Block} block
	 * @api public
	 */var Tag=module.exports=function Tag(name,block){Attrs.call(this);this.name=name;this.block=block||new Block();}; // Inherit from `Attrs`.
Tag.prototype=Object.create(Attrs.prototype);Tag.prototype.constructor=Tag;Tag.prototype.type='Tag'; /**
	 * Clone this tag.
	 *
	 * @return {Tag}
	 * @api private
	 */Tag.prototype.clone=function(){var err=new Error('tag.clone is deprecated and will be removed in v2.0.0');console.warn(err.stack);var clone=new Tag(this.name,this.block.clone());clone.line=this.line;clone.attrs=this.attrs;clone.textOnly=this.textOnly;return clone;}; /**
	 * Check if this tag is an inline tag.
	 *
	 * @return {Boolean}
	 * @api private
	 */Tag.prototype.isInline=function(){return ~inlineTags.indexOf(this.name);}; /**
	 * Check if this tag's contents can be inlined.  Used for pretty printing.
	 *
	 * @return {Boolean}
	 * @api private
	 */Tag.prototype.canInline=function(){var nodes=this.block.nodes;function isInline(node){ // Recurse if the node is a block
if(node.isBlock)return node.nodes.every(isInline);return node.isText||node.isInline&&node.isInline();} // Empty tag
if(!nodes.length)return true; // Text-only or inline-only tag
if(1==nodes.length)return isInline(nodes[0]); // Multi-line inline-only tag
if(this.block.nodes.every(isInline)){for(var i=1,len=nodes.length;i<len;++i){if(nodes[i-1].isText&&nodes[i].isText)return false;}return true;} // Mixed tag
return false;};},{"../inline-tags":5,"./attrs":7,"./block":9}],22:[function(require,module,exports){'use strict';var Node=require('./node'); /**
	 * Initialize a `Text` node with optional `line`.
	 *
	 * @param {String} line
	 * @api public
	 */var Text=module.exports=function Text(line){this.val=line;}; // Inherit from `Node`.
Text.prototype=Object.create(Node.prototype);Text.prototype.constructor=Text;Text.prototype.type='Text'; /**
	 * Flag as text.
	 */Text.prototype.isText=true;},{"./node":20}],23:[function(require,module,exports){'use strict';var Lexer=require('./lexer');var nodes=require('./nodes');var utils=require('./utils');var filters=require('./filters');var path=require('path');var constantinople=require('constantinople');var parseJSExpression=require('character-parser').parseMax;var extname=path.extname; /**
	 * Initialize `Parser` with the given input `str` and `filename`.
	 *
	 * @param {String} str
	 * @param {String} filename
	 * @param {Object} options
	 * @api public
	 */var Parser=exports=module.exports=function Parser(str,filename,options){ //Strip any UTF-8 BOM off of the start of `str`, if it exists.
this.input=str.replace(/^\uFEFF/,'');this.lexer=new Lexer(this.input,filename);this.filename=filename;this.blocks={};this.mixins={};this.options=options;this.contexts=[this];this.inMixin=0;this.dependencies=[];this.inBlock=0;}; /**
	 * Parser prototype.
	 */Parser.prototype={ /**
	   * Save original constructor
	   */constructor:Parser, /**
	   * Push `parser` onto the context stack,
	   * or pop and return a `Parser`.
	   */context:function context(parser){if(parser){this.contexts.push(parser);}else {return this.contexts.pop();}}, /**
	   * Return the next token object.
	   *
	   * @return {Object}
	   * @api private
	   */advance:function advance(){return this.lexer.advance();}, /**
	   * Single token lookahead.
	   *
	   * @return {Object}
	   * @api private
	   */peek:function peek(){return this.lookahead(1);}, /**
	   * Return lexer lineno.
	   *
	   * @return {Number}
	   * @api private
	   */line:function line(){return this.lexer.lineno;}, /**
	   * `n` token lookahead.
	   *
	   * @param {Number} n
	   * @return {Object}
	   * @api private
	   */lookahead:function lookahead(n){return this.lexer.lookahead(n);}, /**
	   * Parse input returning a string of js for evaluation.
	   *
	   * @return {String}
	   * @api public
	   */parse:function parse(){var block=new nodes.Block(),parser;block.line=0;block.filename=this.filename;while('eos'!=this.peek().type){if('newline'==this.peek().type){this.advance();}else {var next=this.peek();var expr=this.parseExpr();expr.filename=expr.filename||this.filename;expr.line=next.line;block.push(expr);}}if(parser=this.extending){this.context(parser);var ast=parser.parse();this.context(); // hoist mixins
for(var name in this.mixins){ast.unshift(this.mixins[name]);}return ast;}if(!this.extending&&!this.included&&Object.keys(this.blocks).length){var blocks=[];utils.walkAST(block,function(node){if(node.type==='Block'&&node.name){blocks.push(node.name);}});Object.keys(this.blocks).forEach(function(name){if(blocks.indexOf(name)===-1&&!this.blocks[name].isSubBlock){console.warn('Warning: Unexpected block "'+name+'" '+' on line '+this.blocks[name].line+' of '+this.blocks[name].filename+'. This block is never used. This warning will be an error in v2.0.0');}}.bind(this));}return block;}, /**
	   * Expect the given type, or throw an exception.
	   *
	   * @param {String} type
	   * @api private
	   */expect:function expect(type){if(this.peek().type===type){return this.advance();}else {throw new Error('expected "'+type+'", but got "'+this.peek().type+'"');}}, /**
	   * Accept the given `type`.
	   *
	   * @param {String} type
	   * @api private
	   */accept:function accept(type){if(this.peek().type===type){return this.advance();}}, /**
	   *   tag
	   * | doctype
	   * | mixin
	   * | include
	   * | filter
	   * | comment
	   * | text
	   * | each
	   * | code
	   * | yield
	   * | id
	   * | class
	   * | interpolation
	   */parseExpr:function parseExpr(){switch(this.peek().type){case 'tag':return this.parseTag();case 'mixin':return this.parseMixin();case 'block':return this.parseBlock();case 'mixin-block':return this.parseMixinBlock();case 'case':return this.parseCase();case 'extends':return this.parseExtends();case 'include':return this.parseInclude();case 'doctype':return this.parseDoctype();case 'filter':return this.parseFilter();case 'comment':return this.parseComment();case 'text':return this.parseText();case 'each':return this.parseEach();case 'code':return this.parseCode();case 'blockCode':return this.parseBlockCode();case 'call':return this.parseCall();case 'interpolation':return this.parseInterpolation();case 'yield':this.advance();var block=new nodes.Block();block.yield=true;return block;case 'id':case 'class':var tok=this.advance();this.lexer.defer(this.lexer.tok('tag','div'));this.lexer.defer(tok);return this.parseExpr();default:throw new Error('unexpected token "'+this.peek().type+'"');}}, /**
	   * Text
	   */parseText:function parseText(){var tok=this.expect('text');var tokens=this.parseInlineTagsInText(tok.val);if(tokens.length===1)return tokens[0];var node=new nodes.Block();for(var i=0;i<tokens.length;i++){node.push(tokens[i]);};return node;}, /**
	   *   ':' expr
	   * | block
	   */parseBlockExpansion:function parseBlockExpansion(){if(':'==this.peek().type){this.advance();return new nodes.Block(this.parseExpr());}else {return this.block();}}, /**
	   * case
	   */parseCase:function parseCase(){var val=this.expect('case').val;var node=new nodes.Case(val);node.line=this.line();var block=new nodes.Block();block.line=this.line();block.filename=this.filename;this.expect('indent');while('outdent'!=this.peek().type){switch(this.peek().type){case 'comment':case 'newline':this.advance();break;case 'when':block.push(this.parseWhen());break;case 'default':block.push(this.parseDefault());break;default:throw new Error('Unexpected token "'+this.peek().type+'", expected "when", "default" or "newline"');}}this.expect('outdent');node.block=block;return node;}, /**
	   * when
	   */parseWhen:function parseWhen(){var val=this.expect('when').val;if(this.peek().type!=='newline')return new nodes.Case.When(val,this.parseBlockExpansion());else return new nodes.Case.When(val);}, /**
	   * default
	   */parseDefault:function parseDefault(){this.expect('default');return new nodes.Case.When('default',this.parseBlockExpansion());}, /**
	   * code
	   */parseCode:function parseCode(afterIf){var tok=this.expect('code');var node=new nodes.Code(tok.val,tok.buffer,tok.escape);var block;node.line=this.line(); // throw an error if an else does not have an if
if(tok.isElse&&!tok.hasIf){throw new Error('Unexpected else without if');} // handle block
block='indent'==this.peek().type;if(block){node.block=this.block();} // handle missing block
if(tok.requiresBlock&&!block){node.block=new nodes.Block();} // mark presense of if for future elses
if(tok.isIf&&this.peek().isElse){this.peek().hasIf=true;}else if(tok.isIf&&this.peek().type==='newline'&&this.lookahead(2).isElse){this.lookahead(2).hasIf=true;}return node;}, /**
	   * block code
	   */parseBlockCode:function parseBlockCode(){var tok=this.expect('blockCode');var node;var body=this.peek();var text;if(body.type==='pipeless-text'){this.advance();text=body.val.join('\n');}else {text='';}node=new nodes.Code(text,false,false);return node;}, /**
	   * comment
	   */parseComment:function parseComment(){var tok=this.expect('comment');var node;var block;if(block=this.parseTextBlock()){node=new nodes.BlockComment(tok.val,block,tok.buffer);}else {node=new nodes.Comment(tok.val,tok.buffer);}node.line=this.line();return node;}, /**
	   * doctype
	   */parseDoctype:function parseDoctype(){var tok=this.expect('doctype');var node=new nodes.Doctype(tok.val);node.line=this.line();return node;}, /**
	   * filter attrs? text-block
	   */parseFilter:function parseFilter(){var tok=this.expect('filter');var attrs=this.accept('attrs');var block;block=this.parseTextBlock()||new nodes.Block();var options={};if(attrs){attrs.attrs.forEach(function(attribute){options[attribute.name]=constantinople.toConstant(attribute.val);});}var node=new nodes.Filter(tok.val,block,options);node.line=this.line();return node;}, /**
	   * each block
	   */parseEach:function parseEach(){var tok=this.expect('each');var node=new nodes.Each(tok.code,tok.val,tok.key);node.line=this.line();node.block=this.block();if(this.peek().type=='code'&&this.peek().val=='else'){this.advance();node.alternative=this.block();}return node;}, /**
	   * Resolves a path relative to the template for use in
	   * includes and extends
	   *
	   * @param {String}  path
	   * @param {String}  purpose  Used in error messages.
	   * @return {String}
	   * @api private
	   */resolvePath:function resolvePath(path,purpose){var p=require('path');var dirname=p.dirname;var basename=p.basename;var join=p.join;if(path[0]!=='/'&&!this.filename)throw new Error('the "filename" option is required to use "'+purpose+'" with "relative" paths');if(path[0]==='/'&&!this.options.basedir)throw new Error('the "basedir" option is required to use "'+purpose+'" with "absolute" paths');path=join(path[0]==='/'?this.options.basedir:dirname(this.filename),path);if(basename(path).indexOf('.')===-1)path+='.jade';return path;}, /**
	   * 'extends' name
	   */parseExtends:function parseExtends(){var fs=require('fs');var path=this.resolvePath(this.expect('extends').val.trim(),'extends');if('.jade'!=path.substr(-5))path+='.jade';this.dependencies.push(path);var str=fs.readFileSync(path,'utf8');var parser=new this.constructor(str,path,this.options);parser.dependencies=this.dependencies;parser.blocks=this.blocks;parser.included=this.included;parser.contexts=this.contexts;this.extending=parser; // TODO: null node
return new nodes.Literal('');}, /**
	   * 'block' name block
	   */parseBlock:function parseBlock(){var block=this.expect('block');var mode=block.mode;var name=block.val.trim();var line=block.line;this.inBlock++;block='indent'==this.peek().type?this.block():new nodes.Block(new nodes.Literal(''));this.inBlock--;block.name=name;block.line=line;var prev=this.blocks[name]||{prepended:[],appended:[]};if(prev.mode==='replace')return this.blocks[name]=prev;var allNodes=prev.prepended.concat(block.nodes).concat(prev.appended);switch(mode){case 'append':prev.appended=prev.parser===this?prev.appended.concat(block.nodes):block.nodes.concat(prev.appended);break;case 'prepend':prev.prepended=prev.parser===this?block.nodes.concat(prev.prepended):prev.prepended.concat(block.nodes);break;}block.nodes=allNodes;block.appended=prev.appended;block.prepended=prev.prepended;block.mode=mode;block.parser=this;block.isSubBlock=this.inBlock>0;return this.blocks[name]=block;},parseMixinBlock:function parseMixinBlock(){var block=this.expect('mixin-block');if(!this.inMixin){throw new Error('Anonymous blocks are not allowed unless they are part of a mixin.');}return new nodes.MixinBlock();}, /**
	   * include block?
	   */parseInclude:function parseInclude(){var fs=require('fs');var tok=this.expect('include');var path=this.resolvePath(tok.val.trim(),'include');this.dependencies.push(path); // has-filter
if(tok.filter){var str=fs.readFileSync(path,'utf8').replace(/\r/g,'');var options={filename:path};if(tok.attrs){tok.attrs.attrs.forEach(function(attribute){options[attribute.name]=constantinople.toConstant(attribute.val);});}str=filters(tok.filter,str,options);return new nodes.Literal(str);} // non-jade
if('.jade'!=path.substr(-5)){var str=fs.readFileSync(path,'utf8').replace(/\r/g,'');return new nodes.Literal(str);}var str=fs.readFileSync(path,'utf8');var parser=new this.constructor(str,path,this.options);parser.dependencies=this.dependencies;parser.blocks=utils.merge({},this.blocks);parser.included=true;parser.mixins=this.mixins;this.context(parser);var ast=parser.parse();this.context();ast.filename=path;if('indent'==this.peek().type){ast.includeBlock().push(this.block());}return ast;}, /**
	   * call ident block
	   */parseCall:function parseCall(){var tok=this.expect('call');var name=tok.val;var args=tok.args;var mixin=new nodes.Mixin(name,args,new nodes.Block(),true);this.tag(mixin);if(mixin.code){mixin.block.push(mixin.code);mixin.code=null;}if(mixin.block.isEmpty())mixin.block=null;return mixin;}, /**
	   * mixin block
	   */parseMixin:function parseMixin(){var tok=this.expect('mixin');var name=tok.val;var args=tok.args;var mixin; // definition
if('indent'==this.peek().type){this.inMixin++;mixin=new nodes.Mixin(name,args,this.block(),false);this.mixins[name]=mixin;this.inMixin--;return mixin; // call
}else {return new nodes.Mixin(name,args,null,true);}},parseInlineTagsInText:function parseInlineTagsInText(str){var line=this.line();var match=/(\\)?#\[((?:.|\n)*)$/.exec(str);if(match){if(match[1]){ // escape
var text=new nodes.Text(str.substr(0,match.index)+'#[');text.line=line;var rest=this.parseInlineTagsInText(match[2]);if(rest[0].type==='Text'){text.val+=rest[0].val;rest.shift();}return [text].concat(rest);}else {var text=new nodes.Text(str.substr(0,match.index));text.line=line;var buffer=[text];var rest=match[2];var range=parseJSExpression(rest);var inner=new Parser(range.src,this.filename,this.options);buffer.push(inner.parse());return buffer.concat(this.parseInlineTagsInText(rest.substr(range.end+1)));}}else {var text=new nodes.Text(str);text.line=line;return [text];}}, /**
	   * indent (text | newline)* outdent
	   */parseTextBlock:function parseTextBlock(){var block=new nodes.Block();block.line=this.line();var body=this.peek();if(body.type!=='pipeless-text')return;this.advance();block.nodes=body.val.reduce(function(accumulator,text){return accumulator.concat(this.parseInlineTagsInText(text));}.bind(this),[]);return block;}, /**
	   * indent expr* outdent
	   */block:function block(){var block=new nodes.Block();block.line=this.line();block.filename=this.filename;this.expect('indent');while('outdent'!=this.peek().type){if('newline'==this.peek().type){this.advance();}else {var expr=this.parseExpr();expr.filename=this.filename;block.push(expr);}}this.expect('outdent');return block;}, /**
	   * interpolation (attrs | class | id)* (text | code | ':')? newline* block?
	   */parseInterpolation:function parseInterpolation(){var tok=this.advance();var tag=new nodes.Tag(tok.val);tag.buffer=true;return this.tag(tag);}, /**
	   * tag (attrs | class | id)* (text | code | ':')? newline* block?
	   */parseTag:function parseTag(){var tok=this.advance();var tag=new nodes.Tag(tok.val);tag.selfClosing=tok.selfClosing;return this.tag(tag);}, /**
	   * Parse tag.
	   */tag:function tag(_tag){_tag.line=this.line();var seenAttrs=false; // (attrs | class | id)*
out: while(true){switch(this.peek().type){case 'id':case 'class':var tok=this.advance();_tag.setAttribute(tok.type,"'"+tok.val+"'");continue;case 'attrs':if(seenAttrs){console.warn(this.filename+', line '+this.peek().line+':\nYou should not have jade tags with multiple attributes.');}seenAttrs=true;var tok=this.advance();var attrs=tok.attrs;if(tok.selfClosing)_tag.selfClosing=true;for(var i=0;i<attrs.length;i++){_tag.setAttribute(attrs[i].name,attrs[i].val,attrs[i].escaped);}continue;case '&attributes':var tok=this.advance();_tag.addAttributes(tok.val);break;default:break out;}} // check immediate '.'
if('dot'==this.peek().type){_tag.textOnly=true;this.advance();} // (text | code | ':')?
switch(this.peek().type){case 'text':_tag.block.push(this.parseText());break;case 'code':_tag.code=this.parseCode();break;case ':':this.advance();_tag.block=new nodes.Block();_tag.block.push(this.parseExpr());break;case 'newline':case 'indent':case 'outdent':case 'eos':case 'pipeless-text':break;default:throw new Error('Unexpected token `'+this.peek().type+'` expected `text`, `code`, `:`, `newline` or `eos`');} // newline*
while('newline'==this.peek().type){this.advance();} // block?
if(_tag.textOnly){_tag.block=this.parseTextBlock()||new nodes.Block();}else if('indent'==this.peek().type){var block=this.block();for(var i=0,len=block.nodes.length;i<len;++i){_tag.block.push(block.nodes[i]);}}return _tag;}};},{"./filters":4,"./lexer":6,"./nodes":16,"./utils":25,"character-parser":29,"constantinople":30,"fs":26,"path":27}],24:[function(require,module,exports){'use strict'; /**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */exports.merge=function merge(a,b){if(arguments.length===1){var attrs=a[0];for(var i=1;i<a.length;i++){attrs=merge(attrs,a[i]);}return attrs;}var ac=a['class'];var bc=b['class'];if(ac||bc){ac=ac||[];bc=bc||[];if(!Array.isArray(ac))ac=[ac];if(!Array.isArray(bc))bc=[bc];a['class']=ac.concat(bc).filter(nulls);}for(var key in b){if(key!='class'){a[key]=b[key];}}return a;}; /**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */function nulls(val){return val!=null&&val!=='';} /**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */exports.joinClasses=joinClasses;function joinClasses(val){return (Array.isArray(val)?val.map(joinClasses):val&&(typeof val==='undefined'?'undefined':_typeof2(val))==='object'?Object.keys(val).filter(function(key){return val[key];}):[val]).filter(nulls).join(' ');} /**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */exports.cls=function cls(classes,escaped){var buf=[];for(var i=0;i<classes.length;i++){if(escaped&&escaped[i]){buf.push(exports.escape(joinClasses([classes[i]])));}else {buf.push(joinClasses(classes[i]));}}var text=joinClasses(buf);if(text.length){return ' class="'+text+'"';}else {return '';}};exports.style=function(val){if(val&&(typeof val==='undefined'?'undefined':_typeof2(val))==='object'){return Object.keys(val).map(function(style){return style+':'+val[style];}).join(';');}else {return val;}}; /**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */exports.attr=function attr(key,val,escaped,terse){if(key==='style'){val=exports.style(val);}if('boolean'==typeof val||null==val){if(val){return ' '+(terse?key:key+'="'+key+'"');}else {return '';}}else if(0==key.indexOf('data')&&'string'!=typeof val){if(JSON.stringify(val).indexOf('&')!==-1){console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes '+'will be escaped to `&amp;`');};if(val&&typeof val.toISOString==='function'){console.warn('Jade will eliminate the double quotes around dates in '+'ISO form after 2.0.0');}return ' '+key+"='"+JSON.stringify(val).replace(/'/g,'&apos;')+"'";}else if(escaped){if(val&&typeof val.toISOString==='function'){console.warn('Jade will stringify dates in ISO form after 2.0.0');}return ' '+key+'="'+exports.escape(val)+'"';}else {if(val&&typeof val.toISOString==='function'){console.warn('Jade will stringify dates in ISO form after 2.0.0');}return ' '+key+'="'+val+'"';}}; /**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */exports.attrs=function attrs(obj,terse){var buf=[];var keys=Object.keys(obj);if(keys.length){for(var i=0;i<keys.length;++i){var key=keys[i],val=obj[key];if('class'==key){if(val=joinClasses(val)){buf.push(' '+key+'="'+val+'"');}}else {buf.push(exports.attr(key,val,false,terse));}}}return buf.join('');}; /**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */var jade_encode_html_rules={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'};var jade_match_html=/[&<>"]/g;function jade_encode_char(c){return jade_encode_html_rules[c]||c;}exports.escape=jade_escape;function jade_escape(html){var result=String(html).replace(jade_match_html,jade_encode_char);if(result===''+html)return html;else return result;}; /**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */exports.rethrow=function rethrow(err,filename,lineno,str){if(!(err instanceof Error))throw err;if((typeof window!='undefined'||!filename)&&!str){err.message+=' on line '+lineno;throw err;}try{str=str||require('fs').readFileSync(filename,'utf8');}catch(ex){rethrow(err,null,lineno);}var context=3,lines=str.split('\n'),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context); // Error context
var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return (curr==lineno?'  > ':'    ')+curr+'| '+line;}).join('\n'); // Alter exception message
err.path=filename;err.message=(filename||'Jade')+':'+lineno+'\n'+context+'\n\n'+err.message;throw err;};exports.DebugItem=function DebugItem(lineno,filename){this.lineno=lineno;this.filename=filename;};},{"fs":26}],25:[function(require,module,exports){'use strict'; /**
	 * Merge `b` into `a`.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object}
	 * @api public
	 */exports.merge=function(a,b){for(var key in b){a[key]=b[key];}return a;};exports.stringify=function(str){return JSON.stringify(str).replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');};exports.walkAST=function walkAST(ast,before,after){before&&before(ast);switch(ast.type){case 'Block':ast.nodes.forEach(function(node){walkAST(node,before,after);});break;case 'Case':case 'Each':case 'Mixin':case 'Tag':case 'When':case 'Code':ast.block&&walkAST(ast.block,before,after);break;case 'Attrs':case 'BlockComment':case 'Comment':case 'Doctype':case 'Filter':case 'Literal':case 'MixinBlock':case 'Text':break;default:throw new Error('Unexpected node type '+ast.type);break;}after&&after(ast);};},{}],26:[function(require,module,exports){},{}],27:[function(require,module,exports){(function(process){ // Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts,allowAboveRoot){ // if the path tries to go above the root, `up` ends up > 0
var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==='.'){parts.splice(i,1);}else if(last==='..'){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}} // if the path is allowed to go above the root, restore leading ..s
if(allowAboveRoot){for(;up--;up){parts.unshift('..');}}return parts;} // Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var splitPath=function splitPath(filename){return splitPathRe.exec(filename).slice(1);}; // path.resolve([from ...], to)
// posix version
exports.resolve=function(){var resolvedPath='',resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd(); // Skip empty and invalid entries
if(typeof path!=='string'){throw new TypeError('Arguments to path.resolve must be strings');}else if(!path){continue;}resolvedPath=path+'/'+resolvedPath;resolvedAbsolute=path.charAt(0)==='/';} // At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)
// Normalize the path
resolvedPath=normalizeArray(filter(resolvedPath.split('/'),function(p){return !!p;}),!resolvedAbsolute).join('/');return (resolvedAbsolute?'/':'')+resolvedPath||'.';}; // path.normalize(path)
// posix version
exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==='/'; // Normalize the path
path=normalizeArray(filter(path.split('/'),function(p){return !!p;}),!isAbsolute).join('/');if(!path&&!isAbsolute){path='.';}if(path&&trailingSlash){path+='/';}return (isAbsolute?'/':'')+path;}; // posix version
exports.isAbsolute=function(path){return path.charAt(0)==='/';}; // posix version
exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=='string'){throw new TypeError('Arguments to path.join must be strings');}return p;}).join('/'));}; // path.relative(from, to)
// posix version
exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=='')break;}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=='')break;}if(start>end)return [];return arr.slice(start,end-start+1);}var fromParts=trim(from.split('/'));var toParts=trim(to.split('/'));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break;}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push('..');}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join('/');};exports.sep='/';exports.delimiter=':';exports.dirname=function(path){var result=splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){ // No dirname whatsoever
return '.';}if(dir){ // It has a dirname, strip trailing slash
dir=dir.substr(0,dir.length-1);}return root+dir;};exports.basename=function(path,ext){var f=splitPath(path)[2]; // TODO: make this comparison case-insensitive on windows?
if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f;};exports.extname=function(path){return splitPath(path)[3];};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res;} // String.prototype.substr - negative index don't work in IE8
var substr='ab'.substr(-1)==='b'?function(str,start,len){return str.substr(start,len);}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len);};}).call(this,require('_process'));},{"_process":28}],28:[function(require,module,exports){ // shim for using process in browser
var process=module.exports={};var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else {queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=setTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){currentQueue[queueIndex].run();}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;clearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){setTimeout(drainQueue,0);}}; // v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version=''; // empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');}; // TODO(shtylman)
process.cwd=function(){return '/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],29:[function(require,module,exports){exports=module.exports=parse;exports.parse=parse;function parse(src,state,options){options=options||{};state=state||exports.defaultState();var start=options.start||0;var end=options.end||src.length;var index=start;while(index<end){if(state.roundDepth<0||state.curlyDepth<0||state.squareDepth<0){throw new SyntaxError('Mismatched Bracket: '+src[index-1]);}exports.parseChar(src[index++],state);}return state;}exports.parseMax=parseMax;function parseMax(src,options){options=options||{};var start=options.start||0;var index=start;var state=exports.defaultState();while(state.roundDepth>=0&&state.curlyDepth>=0&&state.squareDepth>=0){if(index>=src.length){throw new Error('The end of the string was reached with no closing bracket found.');}exports.parseChar(src[index++],state);}var end=index-1;return {start:start,end:end,src:src.substring(start,end)};}exports.parseUntil=parseUntil;function parseUntil(src,delimiter,options){options=options||{};var includeLineComment=options.includeLineComment||false;var start=options.start||0;var index=start;var state=exports.defaultState();while(state.isString()||state.regexp||state.blockComment||!includeLineComment&&state.lineComment||!startsWith(src,delimiter,index)){exports.parseChar(src[index++],state);}var end=index;return {start:start,end:end,src:src.substring(start,end)};}exports.parseChar=parseChar;function parseChar(character,state){if(character.length!==1)throw new Error('Character must be a string of length 1');state=state||exports.defaultState();state.src=state.src||'';state.src+=character;var wasComment=state.blockComment||state.lineComment;var lastChar=state.history?state.history[0]:'';if(state.regexpStart){if(character==='/'||character=='*'){state.regexp=false;}state.regexpStart=false;}if(state.lineComment){if(character==='\n'){state.lineComment=false;}}else if(state.blockComment){if(state.lastChar==='*'&&character==='/'){state.blockComment=false;}}else if(state.singleQuote){if(character==='\''&&!state.escaped){state.singleQuote=false;}else if(character==='\\'&&!state.escaped){state.escaped=true;}else {state.escaped=false;}}else if(state.doubleQuote){if(character==='"'&&!state.escaped){state.doubleQuote=false;}else if(character==='\\'&&!state.escaped){state.escaped=true;}else {state.escaped=false;}}else if(state.regexp){if(character==='/'&&!state.escaped){state.regexp=false;}else if(character==='\\'&&!state.escaped){state.escaped=true;}else {state.escaped=false;}}else if(lastChar==='/'&&character==='/'){state.history=state.history.substr(1);state.lineComment=true;}else if(lastChar==='/'&&character==='*'){state.history=state.history.substr(1);state.blockComment=true;}else if(character==='/'&&isRegexp(state.history)){state.regexp=true;state.regexpStart=true;}else if(character==='\''){state.singleQuote=true;}else if(character==='"'){state.doubleQuote=true;}else if(character==='('){state.roundDepth++;}else if(character===')'){state.roundDepth--;}else if(character==='{'){state.curlyDepth++;}else if(character==='}'){state.curlyDepth--;}else if(character==='['){state.squareDepth++;}else if(character===']'){state.squareDepth--;}if(!state.blockComment&&!state.lineComment&&!wasComment)state.history=character+state.history;state.lastChar=character; // store last character for ending block comments
return state;}exports.defaultState=function(){return new State();};function State(){this.lineComment=false;this.blockComment=false;this.singleQuote=false;this.doubleQuote=false;this.regexp=false;this.escaped=false;this.roundDepth=0;this.curlyDepth=0;this.squareDepth=0;this.history='';this.lastChar='';}State.prototype.isString=function(){return this.singleQuote||this.doubleQuote;};State.prototype.isComment=function(){return this.lineComment||this.blockComment;};State.prototype.isNesting=function(){return this.isString()||this.isComment()||this.regexp||this.roundDepth>0||this.curlyDepth>0||this.squareDepth>0;};function startsWith(str,start,i){return str.substr(i||0,start.length)===start;}exports.isPunctuator=isPunctuator;function isPunctuator(c){if(!c)return true; // the start of a string is a punctuator
var code=c.charCodeAt(0);switch(code){case 46: // . dot
case 40: // ( open bracket
case 41: // ) close bracket
case 59: // ; semicolon
case 44: // , comma
case 123: // { open curly brace
case 125: // } close curly brace
case 91: // [
case 93: // ]
case 58: // :
case 63: // ?
case 126: // ~
case 37: // %
case 38: // &
case 42: // *:
case 43: // +
case 45: // -
case 47: // /
case 60: // <
case 62: // >
case 94: // ^
case 124: // |
case 33: // !
case 61: // =
return true;default:return false;}}exports.isKeyword=isKeyword;function isKeyword(id){return id==='if'||id==='in'||id==='do'||id==='var'||id==='for'||id==='new'||id==='try'||id==='let'||id==='this'||id==='else'||id==='case'||id==='void'||id==='with'||id==='enum'||id==='while'||id==='break'||id==='catch'||id==='throw'||id==='const'||id==='yield'||id==='class'||id==='super'||id==='return'||id==='typeof'||id==='delete'||id==='switch'||id==='export'||id==='import'||id==='default'||id==='finally'||id==='extends'||id==='function'||id==='continue'||id==='debugger'||id==='package'||id==='private'||id==='interface'||id==='instanceof'||id==='implements'||id==='protected'||id==='public'||id==='static'||id==='yield'||id==='let';}function isRegexp(history){ //could be start of regexp or divide sign
history=history.replace(/^\s*/,''); //unless its an `if`, `while`, `for` or `with` it's a divide, so we assume it's a divide
if(history[0]===')')return false; //unless it's a function expression, it's a regexp, so we assume it's a regexp
if(history[0]==='}')return true; //any punctuation means it's a regexp
if(isPunctuator(history[0]))return true; //if the last thing was a keyword then it must be a regexp (e.g. `typeof /foo/`)
if(/^\w+\b/.test(history)&&isKeyword(/^\w+\b/.exec(history)[0].split('').reverse().join('')))return true;return false;}},{}],30:[function(require,module,exports){'use strict';var detect=require('acorn-globals');var lastSRC='(null)';var lastRes=true;var lastConstants=undefined;module.exports=isConstant;function isConstant(src,constants){src='('+src+')';if(lastSRC===src&&lastConstants===constants)return lastRes;lastSRC=src;lastConstants=constants;try{isExpression(src);return lastRes=detect(src).filter(function(key){return !constants||!(key.name in constants);}).length===0;}catch(ex){return lastRes=false;}}isConstant.isConstant=isConstant;isConstant.toConstant=toConstant;function toConstant(src,constants){if(!isConstant(src,constants))throw new Error(JSON.stringify(src)+' is not constant.');return Function(Object.keys(constants||{}).join(','),'return ('+src+')').apply(null,Object.keys(constants||{}).map(function(key){return constants[key];}));}function isExpression(src){try{eval('throw "STOP"; (function () { return ('+src+'); })()');return false;}catch(err){return err==='STOP';}}},{"acorn-globals":31}],31:[function(require,module,exports){'use strict';var acorn=require('acorn');var walk=require('acorn/dist/walk'); // polyfill for https://github.com/marijnh/acorn/pull/231
walk.base.ExportNamedDeclaration=walk.base.ExportDefaultDeclaration=function(node,st,c){return c(node.declaration,st);};walk.base.ImportDefaultSpecifier=walk.base.ImportNamespaceSpecifier=function(){};function isScope(node){return node.type==='FunctionExpression'||node.type==='FunctionDeclaration'||node.type==='Program';}function isBlockScope(node){return node.type==='BlockStatement'||isScope(node);}function declaresArguments(node){return node.type==='FunctionExpression'||node.type==='FunctionDeclaration'||node.type==='ArrowFunction';}function declaresThis(node){return node.type==='FunctionExpression'||node.type==='FunctionDeclaration';}function reallyParse(source){try{return acorn.parse(source,{ecmaVersion:6,allowReturnOutsideFunction:true,sourceType:'module'});}catch(ex){if(ex.name!=='SyntaxError'){throw ex;}try{return acorn.parse(source,{ecmaVersion:6,allowReturnOutsideFunction:true});}catch(ex){if(ex.name!=='SyntaxError'){throw ex;}return acorn.parse(source,{ecmaVersion:5,allowReturnOutsideFunction:true});}}}module.exports=findGlobals;module.exports.parse=reallyParse;function findGlobals(source){var globals=[];var ast=typeof source==='string'?ast=reallyParse(source):source;if(!(ast&&(typeof ast==='undefined'?'undefined':_typeof2(ast))==='object'&&ast.type==='Program')){throw new TypeError('Source must be either a string of JavaScript or an acorn AST');}var declareFunction=function declareFunction(node){var fn=node;fn.locals=fn.locals||{};node.params.forEach(function(node){fn.locals[node.name]=true;});if(node.id){fn.locals[node.id.name]=true;}};walk.ancestor(ast,{'VariableDeclaration':function VariableDeclaration(node,parents){var parent=null;for(var i=parents.length-1;i>=0&&parent===null;i--){if(node.kind==='var'?isScope(parents[i]):isBlockScope(parents[i])){parent=parents[i];}}parent.locals=parent.locals||{};node.declarations.forEach(function(declaration){parent.locals[declaration.id.name]=true;});},'FunctionDeclaration':function FunctionDeclaration(node,parents){var parent=null;for(var i=parents.length-2;i>=0&&parent===null;i--){if(isScope(parents[i])){parent=parents[i];}}parent.locals=parent.locals||{};parent.locals[node.id.name]=true;declareFunction(node);},'Function':declareFunction,'TryStatement':function TryStatement(node){node.handler.body.locals=node.handler.body.locals||{};node.handler.body.locals[node.handler.param.name]=true;},'ImportDefaultSpecifier':function ImportDefaultSpecifier(node){if(node.local.type==='Identifier'){ast.locals=ast.locals||{};ast.locals[node.local.name]=true;}},'ImportSpecifier':function ImportSpecifier(node){var id=node.local?node.local:node.imported;if(id.type==='Identifier'){ast.locals=ast.locals||{};ast.locals[id.name]=true;}},'ImportNamespaceSpecifier':function ImportNamespaceSpecifier(node){if(node.local.type==='Identifier'){ast.locals=ast.locals||{};ast.locals[node.local.name]=true;}}});walk.ancestor(ast,{'Identifier':function Identifier(node,parents){var name=node.name;if(name==='undefined')return;for(var i=0;i<parents.length;i++){if(name==='arguments'&&declaresArguments(parents[i])){return;}if(parents[i].locals&&name in parents[i].locals){return;}}node.parents=parents;globals.push(node);},ThisExpression:function ThisExpression(node,parents){for(var i=0;i<parents.length;i++){if(declaresThis(parents[i])){return;}}node.parents=parents;globals.push(node);}});var groupedGlobals={};globals.forEach(function(node){groupedGlobals[node.name]=groupedGlobals[node.name]||[];groupedGlobals[node.name].push(node);});return Object.keys(groupedGlobals).sort().map(function(name){return {name:name,nodes:groupedGlobals[name]};});}},{"acorn":32,"acorn/dist/walk":33}],32:[function(require,module,exports){(function(global){(function(f){if((typeof exports==='undefined'?'undefined':_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.acorn=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(_dereq_,module,exports){ // The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
"use strict";exports.parse=parse; // This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.
exports.parseExpressionAt=parseExpressionAt; // Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenize` export provides an interface to the tokenizer.
exports.tokenizer=tokenizer;exports.__esModule=true; // Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/marijnh/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js
var _state=_dereq_("./state");var Parser=_state.Parser;var _options=_dereq_("./options");var getOptions=_options.getOptions;_dereq_("./parseutil");_dereq_("./statement");_dereq_("./lval");_dereq_("./expression");exports.Parser=_state.Parser;exports.plugins=_state.plugins;exports.defaultOptions=_options.defaultOptions;var _location=_dereq_("./location");exports.SourceLocation=_location.SourceLocation;exports.getLineInfo=_location.getLineInfo;exports.Node=_dereq_("./node").Node;var _tokentype=_dereq_("./tokentype");exports.TokenType=_tokentype.TokenType;exports.tokTypes=_tokentype.types;var _tokencontext=_dereq_("./tokencontext");exports.TokContext=_tokencontext.TokContext;exports.tokContexts=_tokencontext.types;var _identifier=_dereq_("./identifier");exports.isIdentifierChar=_identifier.isIdentifierChar;exports.isIdentifierStart=_identifier.isIdentifierStart;exports.Token=_dereq_("./tokenize").Token;var _whitespace=_dereq_("./whitespace");exports.isNewLine=_whitespace.isNewLine;exports.lineBreak=_whitespace.lineBreak;exports.lineBreakG=_whitespace.lineBreakG;var version="1.2.2";exports.version=version;function parse(input,options){var p=parser(options,input);var startPos=p.pos,startLoc=p.options.locations&&p.curPosition();p.nextToken();return p.parseTopLevel(p.options.program||p.startNodeAt(startPos,startLoc));}function parseExpressionAt(input,pos,options){var p=parser(options,input,pos);p.nextToken();return p.parseExpression();}function tokenizer(input,options){return parser(options,input);}function parser(options,input){return new Parser(getOptions(options),String(input));}},{"./expression":6,"./identifier":7,"./location":8,"./lval":9,"./node":10,"./options":11,"./parseutil":12,"./state":13,"./statement":14,"./tokencontext":15,"./tokenize":16,"./tokentype":17,"./whitespace":19}],2:[function(_dereq_,module,exports){if(typeof Object.create==='function'){ // implementation from standard node.js 'util' module
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else { // old school shim for old browsers
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],3:[function(_dereq_,module,exports){ // shim for using process in browser
var process=module.exports={};var queue=[];var draining=false;function drainQueue(){if(draining){return;}draining=true;var currentQueue;var len=queue.length;while(len){currentQueue=queue;queue=[];var i=-1;while(++i<len){currentQueue[i]();}len=queue.length;}draining=false;}process.nextTick=function(fun){queue.push(fun);if(!draining){setTimeout(drainQueue,0);}};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version=''; // empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');}; // TODO(shtylman)
process.cwd=function(){return '/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],4:[function(_dereq_,module,exports){module.exports=function isBuffer(arg){return arg&&(typeof arg==='undefined'?'undefined':_typeof2(arg))==='object'&&typeof arg.copy==='function'&&typeof arg.fill==='function'&&typeof arg.readUInt8==='function';};},{}],5:[function(_dereq_,module,exports){(function(process,global){ // Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]));}return objects.join(' ');}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==='%%')return '%';if(i>=len)return x;switch(x){case '%s':return String(args[i++]);case '%d':return Number(args[i++]);case '%j':try{return JSON.stringify(args[i++]);}catch(_){return '[Circular]';}default:return x;}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=' '+x;}else {str+=' '+inspect(x);}}return str;}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate=function(fn,msg){ // Allow for deprecating things in the process of starting up.
if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments);};}if(process.noDeprecation===true){return fn;}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg);}else if(process.traceDeprecation){console.trace(msg);}else {console.error(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||'';set=set.toUpperCase();if(!debugs[set]){if(new RegExp('\\b'+set+'\\b','i').test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error('%s %d: %s',set,pid,msg);};}else {debugs[set]=function(){};}}return debugs[set];}; /**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */ /* legacy: obj, showHidden, depth, colors*/function inspect(obj,opts){ // default options
var ctx={seen:[],stylize:stylizeNoColor}; // legacy...
if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){ // legacy...
ctx.showHidden=opts;}else if(opts){ // got an "options" object
exports._extend(ctx,opts);} // set default options
if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth);}exports.inspect=inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors={'bold':[1,22],'italic':[3,23],'underline':[4,24],'inverse':[7,27],'white':[37,39],'grey':[90,39],'black':[30,39],'blue':[34,39],'cyan':[36,39],'green':[32,39],'magenta':[35,39],'red':[31,39],'yellow':[33,39]}; // Don't use 'blue' not visible on cmd.exe
inspect.styles={'special':'cyan','number':'yellow','boolean':'yellow','undefined':'grey','null':'bold','string':'green','date':'magenta', // "name": intentionally not styling
'regexp':'red'};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return '\u001b['+inspect.colors[style][0]+'m'+str+'\u001b['+inspect.colors[style][1]+'m';}else {return str;}}function stylizeNoColor(str,styleType){return str;}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true;});return hash;}function formatValue(ctx,value,recurseTimes){ // Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(ctx.customInspect&&value&&isFunction(value.inspect)&& // Filter out the util module, it's inspect function is special
value.inspect!==exports.inspect&& // Also filter out any prototype objects using the circular check.
!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes);}return ret;} // Primitive types cannot have properties
var primitive=formatPrimitive(ctx,value);if(primitive){return primitive;} // Look up the keys of the object.
var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value);} // IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(isError(value)&&(keys.indexOf('message')>=0||keys.indexOf('description')>=0)){return formatError(value);} // Some type of object without properties can be shortcutted.
if(keys.length===0){if(isFunction(value)){var name=value.name?': '+value.name:'';return ctx.stylize('[Function'+name+']','special');}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),'date');}if(isError(value)){return formatError(value);}}var base='',array=false,braces=['{','}']; // Make Array say that they are Array
if(isArray(value)){array=true;braces=['[',']'];} // Make functions say that they are functions
if(isFunction(value)){var n=value.name?': '+value.name:'';base=' [Function'+n+']';} // Make RegExps say that they are RegExps
if(isRegExp(value)){base=' '+RegExp.prototype.toString.call(value);} // Make dates with properties first say the date
if(isDate(value)){base=' '+Date.prototype.toUTCString.call(value);} // Make error with message first say the error
if(isError(value)){base=' '+formatError(value);}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1];}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}else {return ctx.stylize('[Object]','special');}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys);}else {output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);});}ctx.seen.pop();return reduceToSingleString(output,base,braces);}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize('undefined','undefined');if(isString(value)){var simple='\''+JSON.stringify(value).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+'\'';return ctx.stylize(simple,'string');}if(isNumber(value))return ctx.stylize(''+value,'number');if(isBoolean(value))return ctx.stylize(''+value,'boolean'); // For some reason typeof null is "object", so special case here.
if(isNull(value))return ctx.stylize('null','null');}function formatError(value){return '['+Error.prototype.toString.call(value)+']';}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true));}else {output.push('');}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true));}});return output;}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize('[Getter/Setter]','special');}else {str=ctx.stylize('[Getter]','special');}}else {if(desc.set){str=ctx.stylize('[Setter]','special');}}if(!hasOwnProperty(visibleKeys,key)){name='['+key+']';}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null);}else {str=formatValue(ctx,desc.value,recurseTimes-1);}if(str.indexOf('\n')>-1){if(array){str=str.split('\n').map(function(line){return '  '+line;}).join('\n').substr(2);}else {str='\n'+str.split('\n').map(function(line){return '   '+line;}).join('\n');}}}else {str=ctx.stylize('[Circular]','special');}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str;}name=JSON.stringify(''+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,'name');}else {name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,'string');}}return name+': '+str;}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf('\n')>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,'').length+1;},0);if(length>60){return braces[0]+(base===''?'':base+'\n ')+' '+output.join(',\n  ')+' '+braces[1];}return braces[0]+base+' '+output.join(', ')+' '+braces[1];} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar){return Array.isArray(ar);}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return (typeof arg==='undefined'?'undefined':_typeof2(arg))==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return (typeof arg==='undefined'?'undefined':_typeof2(arg))==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==='[object Error]'||e instanceof Error);}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||(typeof arg==='undefined'?'undefined':_typeof2(arg))==='symbol'|| // ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=_dereq_('./support/isBuffer');function objectToString(o){return Object.prototype.toString.call(o);}function pad(n){return n<10?'0'+n.toString(10):n.toString(10);}var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; // 26 Feb 16:19:34
function timestamp(){var d=new Date();var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');return [d.getDate(),months[d.getMonth()],time].join(' ');} // log is just a thin wrapper to console.log that prepends a timestamp
exports.log=function(){console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));}; /**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */exports.inherits=_dereq_('inherits');exports._extend=function(origin,add){ // Don't do anything if add isn't an object
if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]];}return origin;};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}).call(this,_dereq_('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./support/isBuffer":4,"_process":3,"inherits":2}],6:[function(_dereq_,module,exports){ // A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser
"use strict";var tt=_dereq_("./tokentype").types;var Parser=_dereq_("./state").Parser;var reservedWords=_dereq_("./identifier").reservedWords;var has=_dereq_("./util").has;var pp=Parser.prototype; // Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.
pp.checkPropClash=function(prop,propHash){if(this.options.ecmaVersion>=6)return;var key=prop.key,name=undefined;switch(key.type){case "Identifier":name=key.name;break;case "Literal":name=String(key.value);break;default:return;}var kind=prop.kind||"init",other=undefined;if(has(propHash,name)){other=propHash[name];var isGetSet=kind!=="init";if((this.strict||isGetSet)&&other[kind]||!(isGetSet^other.init))this.raise(key.start,"Redefinition of property");}else {other=propHash[name]={init:false,get:false,set:false};}other[kind]=true;}; // ### Expression parsing
// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.
// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).
pp.parseExpression=function(noIn,refShorthandDefaultPos){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeAssign(noIn,refShorthandDefaultPos);if(this.type===tt.comma){var node=this.startNodeAt(startPos,startLoc);node.expressions=[expr];while(this.eat(tt.comma)){node.expressions.push(this.parseMaybeAssign(noIn,refShorthandDefaultPos));}return this.finishNode(node,"SequenceExpression");}return expr;}; // Parse an assignment expression. This includes applications of
// operators like `+=`.
pp.parseMaybeAssign=function(noIn,refShorthandDefaultPos,afterLeftParse){if(this.type==tt._yield&&this.inGenerator)return this.parseYield();var failOnShorthandAssign=undefined;if(!refShorthandDefaultPos){refShorthandDefaultPos={start:0};failOnShorthandAssign=true;}else {failOnShorthandAssign=false;}var startPos=this.start,startLoc=this.startLoc;if(this.type==tt.parenL||this.type==tt.name)this.potentialArrowAt=this.start;var left=this.parseMaybeConditional(noIn,refShorthandDefaultPos);if(afterLeftParse)left=afterLeftParse.call(this,left,startPos,startLoc);if(this.type.isAssign){var node=this.startNodeAt(startPos,startLoc);node.operator=this.value;node.left=this.type===tt.eq?this.toAssignable(left):left;refShorthandDefaultPos.start=0; // reset because shorthand default was used correctly
this.checkLVal(left);this.next();node.right=this.parseMaybeAssign(noIn);return this.finishNode(node,"AssignmentExpression");}else if(failOnShorthandAssign&&refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}return left;}; // Parse a ternary conditional (`?:`) operator.
pp.parseMaybeConditional=function(noIn,refShorthandDefaultPos){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprOps(noIn,refShorthandDefaultPos);if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;if(this.eat(tt.question)){var node=this.startNodeAt(startPos,startLoc);node.test=expr;node.consequent=this.parseMaybeAssign();this.expect(tt.colon);node.alternate=this.parseMaybeAssign(noIn);return this.finishNode(node,"ConditionalExpression");}return expr;}; // Start the precedence parser.
pp.parseExprOps=function(noIn,refShorthandDefaultPos){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeUnary(refShorthandDefaultPos);if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;return this.parseExprOp(expr,startPos,startLoc,-1,noIn);}; // Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.
pp.parseExprOp=function(left,leftStartPos,leftStartLoc,minPrec,noIn){var prec=this.type.binop;if(Array.isArray(leftStartPos)){if(this.options.locations&&noIn===undefined){ // shift arguments to left by one
noIn=minPrec;minPrec=leftStartLoc; // flatten leftStartPos
leftStartLoc=leftStartPos[1];leftStartPos=leftStartPos[0];}}if(prec!=null&&(!noIn||this.type!==tt._in)){if(prec>minPrec){var node=this.startNodeAt(leftStartPos,leftStartLoc);node.left=left;node.operator=this.value;var op=this.type;this.next();var startPos=this.start,startLoc=this.startLoc;node.right=this.parseExprOp(this.parseMaybeUnary(),startPos,startLoc,prec,noIn);this.finishNode(node,op===tt.logicalOR||op===tt.logicalAND?"LogicalExpression":"BinaryExpression");return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn);}}return left;}; // Parse unary operators, both prefix and postfix.
pp.parseMaybeUnary=function(refShorthandDefaultPos){if(this.type.prefix){var node=this.startNode(),update=this.type===tt.incDec;node.operator=this.value;node.prefix=true;this.next();node.argument=this.parseMaybeUnary();if(refShorthandDefaultPos&&refShorthandDefaultPos.start)this.unexpected(refShorthandDefaultPos.start);if(update)this.checkLVal(node.argument);else if(this.strict&&node.operator==="delete"&&node.argument.type==="Identifier")this.raise(node.start,"Deleting local variable in strict mode");return this.finishNode(node,update?"UpdateExpression":"UnaryExpression");}var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprSubscripts(refShorthandDefaultPos);if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;while(this.type.postfix&&!this.canInsertSemicolon()){var node=this.startNodeAt(startPos,startLoc);node.operator=this.value;node.prefix=false;node.argument=expr;this.checkLVal(expr);this.next();expr=this.finishNode(node,"UpdateExpression");}return expr;}; // Parse call, dot, and `[]`-subscript expressions.
pp.parseExprSubscripts=function(refShorthandDefaultPos){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprAtom(refShorthandDefaultPos);if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;return this.parseSubscripts(expr,startPos,startLoc);};pp.parseSubscripts=function(base,startPos,startLoc,noCalls){if(Array.isArray(startPos)){if(this.options.locations&&noCalls===undefined){ // shift arguments to left by one
noCalls=startLoc; // flatten startPos
startLoc=startPos[1];startPos=startPos[0];}}for(;;){if(this.eat(tt.dot)){var node=this.startNodeAt(startPos,startLoc);node.object=base;node.property=this.parseIdent(true);node.computed=false;base=this.finishNode(node,"MemberExpression");}else if(this.eat(tt.bracketL)){var node=this.startNodeAt(startPos,startLoc);node.object=base;node.property=this.parseExpression();node.computed=true;this.expect(tt.bracketR);base=this.finishNode(node,"MemberExpression");}else if(!noCalls&&this.eat(tt.parenL)){var node=this.startNodeAt(startPos,startLoc);node.callee=base;node.arguments=this.parseExprList(tt.parenR,false);base=this.finishNode(node,"CallExpression");}else if(this.type===tt.backQuote){var node=this.startNodeAt(startPos,startLoc);node.tag=base;node.quasi=this.parseTemplate();base=this.finishNode(node,"TaggedTemplateExpression");}else {return base;}}}; // Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.
pp.parseExprAtom=function(refShorthandDefaultPos){var node=undefined,canBeArrow=this.potentialArrowAt==this.start;switch(this.type){case tt._this:case tt._super:var type=this.type===tt._this?"ThisExpression":"Super";node=this.startNode();this.next();return this.finishNode(node,type);case tt._yield:if(this.inGenerator)this.unexpected();case tt.name:var startPos=this.start,startLoc=this.startLoc;var id=this.parseIdent(this.type!==tt.name);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(tt.arrow))return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id]);return id;case tt.regexp:var value=this.value;node=this.parseLiteral(value.value);node.regex={pattern:value.pattern,flags:value.flags};return node;case tt.num:case tt.string:return this.parseLiteral(this.value);case tt._null:case tt._true:case tt._false:node=this.startNode();node.value=this.type===tt._null?null:this.type===tt._true;node.raw=this.type.keyword;this.next();return this.finishNode(node,"Literal");case tt.parenL:return this.parseParenAndDistinguishExpression(canBeArrow);case tt.bracketL:node=this.startNode();this.next(); // check whether this is array comprehension or regular array
if(this.options.ecmaVersion>=7&&this.type===tt._for){return this.parseComprehension(node,false);}node.elements=this.parseExprList(tt.bracketR,true,true,refShorthandDefaultPos);return this.finishNode(node,"ArrayExpression");case tt.braceL:return this.parseObj(false,refShorthandDefaultPos);case tt._function:node=this.startNode();this.next();return this.parseFunction(node,false);case tt._class:return this.parseClass(this.startNode(),false);case tt._new:return this.parseNew();case tt.backQuote:return this.parseTemplate();default:this.unexpected();}};pp.parseLiteral=function(value){var node=this.startNode();node.value=value;node.raw=this.input.slice(this.start,this.end);this.next();return this.finishNode(node,"Literal");};pp.parseParenExpression=function(){this.expect(tt.parenL);var val=this.parseExpression();this.expect(tt.parenR);return val;};pp.parseParenAndDistinguishExpression=function(canBeArrow){var startPos=this.start,startLoc=this.startLoc,val=undefined;if(this.options.ecmaVersion>=6){this.next();if(this.options.ecmaVersion>=7&&this.type===tt._for){return this.parseComprehension(this.startNodeAt(startPos,startLoc),true);}var innerStartPos=this.start,innerStartLoc=this.startLoc;var exprList=[],first=true;var refShorthandDefaultPos={start:0},spreadStart=undefined,innerParenStart=undefined;while(this.type!==tt.parenR){first?first=false:this.expect(tt.comma);if(this.type===tt.ellipsis){spreadStart=this.start;exprList.push(this.parseParenItem(this.parseRest()));break;}else {if(this.type===tt.parenL&&!innerParenStart){innerParenStart=this.start;}exprList.push(this.parseMaybeAssign(false,refShorthandDefaultPos,this.parseParenItem));}}var innerEndPos=this.start,innerEndLoc=this.startLoc;this.expect(tt.parenR);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(tt.arrow)){if(innerParenStart)this.unexpected(innerParenStart);return this.parseParenArrowList(startPos,startLoc,exprList);}if(!exprList.length)this.unexpected(this.lastTokStart);if(spreadStart)this.unexpected(spreadStart);if(refShorthandDefaultPos.start)this.unexpected(refShorthandDefaultPos.start);if(exprList.length>1){val=this.startNodeAt(innerStartPos,innerStartLoc);val.expressions=exprList;this.finishNodeAt(val,"SequenceExpression",innerEndPos,innerEndLoc);}else {val=exprList[0];}}else {val=this.parseParenExpression();}if(this.options.preserveParens){var par=this.startNodeAt(startPos,startLoc);par.expression=val;return this.finishNode(par,"ParenthesizedExpression");}else {return val;}};pp.parseParenItem=function(item){return item;};pp.parseParenArrowList=function(startPos,startLoc,exprList){return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),exprList);}; // New's precedence is slightly tricky. It must allow its argument
// to be a `[]` or dot subscript expression, but not a call — at
// least, not without wrapping it in parentheses. Thus, it uses the
var empty=[];pp.parseNew=function(){var node=this.startNode();var meta=this.parseIdent(true);if(this.options.ecmaVersion>=6&&this.eat(tt.dot)){node.meta=meta;node.property=this.parseIdent(true);if(node.property.name!=="target")this.raise(node.property.start,"The only valid meta property for new is new.target");return this.finishNode(node,"MetaProperty");}var startPos=this.start,startLoc=this.startLoc;node.callee=this.parseSubscripts(this.parseExprAtom(),startPos,startLoc,true);if(this.eat(tt.parenL))node.arguments=this.parseExprList(tt.parenR,false);else node.arguments=empty;return this.finishNode(node,"NewExpression");}; // Parse template expression.
pp.parseTemplateElement=function(){var elem=this.startNode();elem.value={raw:this.input.slice(this.start,this.end),cooked:this.value};this.next();elem.tail=this.type===tt.backQuote;return this.finishNode(elem,"TemplateElement");};pp.parseTemplate=function(){var node=this.startNode();this.next();node.expressions=[];var curElt=this.parseTemplateElement();node.quasis=[curElt];while(!curElt.tail){this.expect(tt.dollarBraceL);node.expressions.push(this.parseExpression());this.expect(tt.braceR);node.quasis.push(curElt=this.parseTemplateElement());}this.next();return this.finishNode(node,"TemplateLiteral");}; // Parse an object literal or binding pattern.
pp.parseObj=function(isPattern,refShorthandDefaultPos){var node=this.startNode(),first=true,propHash={};node.properties=[];this.next();while(!this.eat(tt.braceR)){if(!first){this.expect(tt.comma);if(this.afterTrailingComma(tt.braceR))break;}else first=false;var prop=this.startNode(),isGenerator=undefined,startPos=undefined,startLoc=undefined;if(this.options.ecmaVersion>=6){prop.method=false;prop.shorthand=false;if(isPattern||refShorthandDefaultPos){startPos=this.start;startLoc=this.startLoc;}if(!isPattern)isGenerator=this.eat(tt.star);}this.parsePropertyName(prop);this.parsePropertyValue(prop,isPattern,isGenerator,startPos,startLoc,refShorthandDefaultPos);this.checkPropClash(prop,propHash);node.properties.push(this.finishNode(prop,"Property"));}return this.finishNode(node,isPattern?"ObjectPattern":"ObjectExpression");};pp.parsePropertyValue=function(prop,isPattern,isGenerator,startPos,startLoc,refShorthandDefaultPos){if(this.eat(tt.colon)){prop.value=isPattern?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(false,refShorthandDefaultPos);prop.kind="init";}else if(this.options.ecmaVersion>=6&&this.type===tt.parenL){if(isPattern)this.unexpected();prop.kind="init";prop.method=true;prop.value=this.parseMethod(isGenerator);}else if(this.options.ecmaVersion>=5&&!prop.computed&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")&&this.type!=tt.comma&&this.type!=tt.braceR){if(isGenerator||isPattern)this.unexpected();prop.kind=prop.key.name;this.parsePropertyName(prop);prop.value=this.parseMethod(false);}else if(this.options.ecmaVersion>=6&&!prop.computed&&prop.key.type==="Identifier"){prop.kind="init";if(isPattern){if(this.isKeyword(prop.key.name)||this.strict&&(reservedWords.strictBind(prop.key.name)||reservedWords.strict(prop.key.name))||!this.options.allowReserved&&this.isReservedWord(prop.key.name))this.raise(prop.key.start,"Binding "+prop.key.name);prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else if(this.type===tt.eq&&refShorthandDefaultPos){if(!refShorthandDefaultPos.start)refShorthandDefaultPos.start=this.start;prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else {prop.value=prop.key;}prop.shorthand=true;}else this.unexpected();};pp.parsePropertyName=function(prop){if(this.options.ecmaVersion>=6){if(this.eat(tt.bracketL)){prop.computed=true;prop.key=this.parseMaybeAssign();this.expect(tt.bracketR);return prop.key;}else {prop.computed=false;}}return prop.key=this.type===tt.num||this.type===tt.string?this.parseExprAtom():this.parseIdent(true);}; // Initialize empty function node.
pp.initFunction=function(node){node.id=null;if(this.options.ecmaVersion>=6){node.generator=false;node.expression=false;}}; // Parse object or class method.
pp.parseMethod=function(isGenerator){var node=this.startNode();this.initFunction(node);this.expect(tt.parenL);node.params=this.parseBindingList(tt.parenR,false,false);var allowExpressionBody=undefined;if(this.options.ecmaVersion>=6){node.generator=isGenerator;allowExpressionBody=true;}else {allowExpressionBody=false;}this.parseFunctionBody(node,allowExpressionBody);return this.finishNode(node,"FunctionExpression");}; // Parse arrow function expression with given parameters.
pp.parseArrowExpression=function(node,params){this.initFunction(node);node.params=this.toAssignableList(params,true);this.parseFunctionBody(node,true);return this.finishNode(node,"ArrowFunctionExpression");}; // Parse function body and check parameters.
pp.parseFunctionBody=function(node,allowExpression){var isExpression=allowExpression&&this.type!==tt.braceL;if(isExpression){node.body=this.parseMaybeAssign();node.expression=true;}else { // Start a new scope with regard to labels and the `inFunction`
// flag (restore them to their old value afterwards).
var oldInFunc=this.inFunction,oldInGen=this.inGenerator,oldLabels=this.labels;this.inFunction=true;this.inGenerator=node.generator;this.labels=[];node.body=this.parseBlock(true);node.expression=false;this.inFunction=oldInFunc;this.inGenerator=oldInGen;this.labels=oldLabels;} // If this is a strict mode function, verify that argument names
// are not repeated, and it does not try to bind the words `eval`
// or `arguments`.
if(this.strict||!isExpression&&node.body.body.length&&this.isUseStrict(node.body.body[0])){var nameHash={},oldStrict=this.strict;this.strict=true;if(node.id)this.checkLVal(node.id,true);for(var i=0;i<node.params.length;i++){this.checkLVal(node.params[i],true,nameHash);}this.strict=oldStrict;}}; // Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).
pp.parseExprList=function(close,allowTrailingComma,allowEmpty,refShorthandDefaultPos){var elts=[],first=true;while(!this.eat(close)){if(!first){this.expect(tt.comma);if(allowTrailingComma&&this.afterTrailingComma(close))break;}else first=false;if(allowEmpty&&this.type===tt.comma){elts.push(null);}else {if(this.type===tt.ellipsis)elts.push(this.parseSpread(refShorthandDefaultPos));else elts.push(this.parseMaybeAssign(false,refShorthandDefaultPos));}}return elts;}; // Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.
pp.parseIdent=function(liberal){var node=this.startNode();if(liberal&&this.options.allowReserved=="never")liberal=false;if(this.type===tt.name){if(!liberal&&(!this.options.allowReserved&&this.isReservedWord(this.value)||this.strict&&reservedWords.strict(this.value)&&(this.options.ecmaVersion>=6||this.input.slice(this.start,this.end).indexOf("\\")==-1)))this.raise(this.start,"The keyword '"+this.value+"' is reserved");node.name=this.value;}else if(liberal&&this.type.keyword){node.name=this.type.keyword;}else {this.unexpected();}this.next();return this.finishNode(node,"Identifier");}; // Parses yield expression inside generator.
pp.parseYield=function(){var node=this.startNode();this.next();if(this.type==tt.semi||this.canInsertSemicolon()||this.type!=tt.star&&!this.type.startsExpr){node.delegate=false;node.argument=null;}else {node.delegate=this.eat(tt.star);node.argument=this.parseMaybeAssign();}return this.finishNode(node,"YieldExpression");}; // Parses array and generator comprehensions.
pp.parseComprehension=function(node,isGenerator){node.blocks=[];while(this.type===tt._for){var block=this.startNode();this.next();this.expect(tt.parenL);block.left=this.parseBindingAtom();this.checkLVal(block.left,true);this.expectContextual("of");block.right=this.parseExpression();this.expect(tt.parenR);node.blocks.push(this.finishNode(block,"ComprehensionBlock"));}node.filter=this.eat(tt._if)?this.parseParenExpression():null;node.body=this.parseExpression();this.expect(isGenerator?tt.parenR:tt.bracketR);node.generator=isGenerator;return this.finishNode(node,"ComprehensionExpression");};},{"./identifier":7,"./state":13,"./tokentype":17,"./util":18}],7:[function(_dereq_,module,exports){ // Test whether a given character code starts an identifier.
"use strict";exports.isIdentifierStart=isIdentifierStart; // Test whether a given character is part of an identifier.
exports.isIdentifierChar=isIdentifierChar;exports.__esModule=true; // This is a trick taken from Esprima. It turns out that, on
// non-Chrome browsers, to check whether a string is in a set, a
// predicate containing a big ugly `switch` statement is faster than
// a regular expression, and on Chrome the two are about on par.
// This function uses `eval` (non-lexical) to produce such a
// predicate from a space-separated string of words.
//
// It starts by sorting the words by length.
function makePredicate(words){words=words.split(" ");var f="",cats=[];out: for(var i=0;i<words.length;++i){for(var j=0;j<cats.length;++j){if(cats[j][0].length==words[i].length){cats[j].push(words[i]);continue out;}}cats.push([words[i]]);}function compareTo(arr){if(arr.length==1){return f+="return str === "+JSON.stringify(arr[0])+";";}f+="switch(str){";for(var i=0;i<arr.length;++i){f+="case "+JSON.stringify(arr[i])+":";}f+="return true}return false;";} // When there are more than three length categories, an outer
// switch first dispatches on the lengths, to save on comparisons.
if(cats.length>3){cats.sort(function(a,b){return b.length-a.length;});f+="switch(str.length){";for(var i=0;i<cats.length;++i){var cat=cats[i];f+="case "+cat[0].length+":";compareTo(cat);}f+="}" // Otherwise, simply generate a flat `switch` statement.
;}else {compareTo(words);}return new Function("str",f);} // Reserved word lists for various dialects of the language
var reservedWords={3:makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),5:makePredicate("class enum extends super const export import"),6:makePredicate("enum await"),strict:makePredicate("implements interface let package private protected public static yield"),strictBind:makePredicate("eval arguments")};exports.reservedWords=reservedWords; // And the keywords
var ecma5AndLessKeywords="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var keywords={5:makePredicate(ecma5AndLessKeywords),6:makePredicate(ecma5AndLessKeywords+" let const class extends export import yield super")};exports.keywords=keywords; // ## Character categories
// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `tools/generate-identifier-regex.js`.
var nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢲऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";var nonASCIIidentifierChars="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏ᦰ-ᧀᧈᧉ᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷼-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︭︳︴﹍-﹏０-９＿";var nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]");var nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null; // These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by tools/generate-identifier-regex.js
var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,99,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,98,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,955,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,38,17,2,24,133,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,32,4,287,47,21,1,2,0,185,46,82,47,21,0,60,42,502,63,32,0,449,56,1288,920,104,110,2962,1070,13266,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,16481,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,1340,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,16355,541];var astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,16,9,83,11,168,11,6,9,8,2,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,316,19,13,9,214,6,3,8,112,16,16,9,82,12,9,9,535,9,20855,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,4305,6,792618,239]; // This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code,set){var pos=65536;for(var i=0;i<set.length;i+=2){pos+=set[i];if(pos>code){return false;}pos+=set[i+1];if(pos>=code){return true;}}}function isIdentifierStart(code,astral){if(code<65){return code===36;}if(code<91){return true;}if(code<97){return code===95;}if(code<123){return true;}if(code<=65535){return code>=170&&nonASCIIidentifierStart.test(String.fromCharCode(code));}if(astral===false){return false;}return isInAstralSet(code,astralIdentifierStartCodes);}function isIdentifierChar(code,astral){if(code<48){return code===36;}if(code<58){return true;}if(code<65){return false;}if(code<91){return true;}if(code<97){return code===95;}if(code<123){return true;}if(code<=65535){return code>=170&&nonASCIIidentifier.test(String.fromCharCode(code));}if(astral===false){return false;}return isInAstralSet(code,astralIdentifierStartCodes)||isInAstralSet(code,astralIdentifierCodes);}},{}],8:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}; // The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.
exports.getLineInfo=getLineInfo;exports.__esModule=true;var Parser=_dereq_("./state").Parser;var lineBreakG=_dereq_("./whitespace").lineBreakG;var deprecate=_dereq_("util").deprecate; // These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.
var Position=exports.Position=function(){function Position(line,col){_classCallCheck(this,Position);this.line=line;this.column=col;}Position.prototype.offset=function offset(n){return new Position(this.line,this.column+n);};return Position;}();var SourceLocation=exports.SourceLocation=function SourceLocation(p,start,end){_classCallCheck(this,SourceLocation);this.start=start;this.end=end;if(p.sourceFile!==null)this.source=p.sourceFile;};function getLineInfo(input,offset){for(var line=1,cur=0;;){lineBreakG.lastIndex=cur;var match=lineBreakG.exec(input);if(match&&match.index<offset){++line;cur=match.index+match[0].length;}else {return new Position(line,offset-cur);}}}var pp=Parser.prototype; // This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.
pp.raise=function(pos,message){var loc=getLineInfo(this.input,pos);message+=" ("+loc.line+":"+loc.column+")";var err=new SyntaxError(message);err.pos=pos;err.loc=loc;err.raisedAt=this.pos;throw err;};pp.curPosition=function(){return new Position(this.curLine,this.pos-this.lineStart);};pp.markPosition=function(){return this.options.locations?[this.start,this.startLoc]:this.start;};},{"./state":13,"./whitespace":19,"util":5}],9:[function(_dereq_,module,exports){"use strict";var tt=_dereq_("./tokentype").types;var Parser=_dereq_("./state").Parser;var reservedWords=_dereq_("./identifier").reservedWords;var has=_dereq_("./util").has;var pp=Parser.prototype; // Convert existing expression atom to assignable pattern
// if possible.
pp.toAssignable=function(node,isBinding){if(this.options.ecmaVersion>=6&&node){switch(node.type){case "Identifier":case "ObjectPattern":case "ArrayPattern":case "AssignmentPattern":break;case "ObjectExpression":node.type="ObjectPattern";for(var i=0;i<node.properties.length;i++){var prop=node.properties[i];if(prop.kind!=="init")this.raise(prop.key.start,"Object pattern can't contain getter or setter");this.toAssignable(prop.value,isBinding);}break;case "ArrayExpression":node.type="ArrayPattern";this.toAssignableList(node.elements,isBinding);break;case "AssignmentExpression":if(node.operator==="="){node.type="AssignmentPattern";}else {this.raise(node.left.end,"Only '=' operator can be used for specifying default value.");}break;case "ParenthesizedExpression":node.expression=this.toAssignable(node.expression,isBinding);break;case "MemberExpression":if(!isBinding)break;default:this.raise(node.start,"Assigning to rvalue");}}return node;}; // Convert list of expression atoms to binding list.
pp.toAssignableList=function(exprList,isBinding){var end=exprList.length;if(end){var last=exprList[end-1];if(last&&last.type=="RestElement"){--end;}else if(last&&last.type=="SpreadElement"){last.type="RestElement";var arg=last.argument;this.toAssignable(arg,isBinding);if(arg.type!=="Identifier"&&arg.type!=="MemberExpression"&&arg.type!=="ArrayPattern")this.unexpected(arg.start);--end;}}for(var i=0;i<end;i++){var elt=exprList[i];if(elt)this.toAssignable(elt,isBinding);}return exprList;}; // Parses spread element.
pp.parseSpread=function(refShorthandDefaultPos){var node=this.startNode();this.next();node.argument=this.parseMaybeAssign(refShorthandDefaultPos);return this.finishNode(node,"SpreadElement");};pp.parseRest=function(){var node=this.startNode();this.next();node.argument=this.type===tt.name||this.type===tt.bracketL?this.parseBindingAtom():this.unexpected();return this.finishNode(node,"RestElement");}; // Parses lvalue (assignable) atom.
pp.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case tt.name:return this.parseIdent();case tt.bracketL:var node=this.startNode();this.next();node.elements=this.parseBindingList(tt.bracketR,true,true);return this.finishNode(node,"ArrayPattern");case tt.braceL:return this.parseObj(true);default:this.unexpected();}};pp.parseBindingList=function(close,allowEmpty,allowTrailingComma){var elts=[],first=true;while(!this.eat(close)){if(first)first=false;else this.expect(tt.comma);if(allowEmpty&&this.type===tt.comma){elts.push(null);}else if(allowTrailingComma&&this.afterTrailingComma(close)){break;}else if(this.type===tt.ellipsis){var rest=this.parseRest();this.parseBindingListItem(rest);elts.push(rest);this.expect(close);break;}else {var elem=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(elem);elts.push(elem);}}return elts;};pp.parseBindingListItem=function(param){return param;}; // Parses assignment pattern around given atom if possible.
pp.parseMaybeDefault=function(startPos,startLoc,left){if(Array.isArray(startPos)){if(this.options.locations&&noCalls===undefined){ // shift arguments to left by one
left=startLoc; // flatten startPos
startLoc=startPos[1];startPos=startPos[0];}}left=left||this.parseBindingAtom();if(!this.eat(tt.eq))return left;var node=this.startNodeAt(startPos,startLoc);node.operator="=";node.left=left;node.right=this.parseMaybeAssign();return this.finishNode(node,"AssignmentPattern");}; // Verify that a node is an lval — something that can be assigned
// to.
pp.checkLVal=function(expr,isBinding,checkClashes){switch(expr.type){case "Identifier":if(this.strict&&(reservedWords.strictBind(expr.name)||reservedWords.strict(expr.name)))this.raise(expr.start,(isBinding?"Binding ":"Assigning to ")+expr.name+" in strict mode");if(checkClashes){if(has(checkClashes,expr.name))this.raise(expr.start,"Argument name clash in strict mode");checkClashes[expr.name]=true;}break;case "MemberExpression":if(isBinding)this.raise(expr.start,(isBinding?"Binding":"Assigning to")+" member expression");break;case "ObjectPattern":for(var i=0;i<expr.properties.length;i++){this.checkLVal(expr.properties[i].value,isBinding,checkClashes);}break;case "ArrayPattern":for(var i=0;i<expr.elements.length;i++){var elem=expr.elements[i];if(elem)this.checkLVal(elem,isBinding,checkClashes);}break;case "AssignmentPattern":this.checkLVal(expr.left,isBinding,checkClashes);break;case "RestElement":this.checkLVal(expr.argument,isBinding,checkClashes);break;case "ParenthesizedExpression":this.checkLVal(expr.expression,isBinding,checkClashes);break;default:this.raise(expr.start,(isBinding?"Binding":"Assigning to")+" rvalue");}};},{"./identifier":7,"./state":13,"./tokentype":17,"./util":18}],10:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule=true;var Parser=_dereq_("./state").Parser;var SourceLocation=_dereq_("./location").SourceLocation; // Start an AST node, attaching a start offset.
var pp=Parser.prototype;var Node=exports.Node=function Node(){_classCallCheck(this,Node);};pp.startNode=function(){var node=new Node();node.start=this.start;if(this.options.locations)node.loc=new SourceLocation(this,this.startLoc);if(this.options.directSourceFile)node.sourceFile=this.options.directSourceFile;if(this.options.ranges)node.range=[this.start,0];return node;};pp.startNodeAt=function(pos,loc){var node=new Node();if(Array.isArray(pos)){if(this.options.locations&&loc===undefined){ // flatten pos
loc=pos[1];pos=pos[0];}}node.start=pos;if(this.options.locations)node.loc=new SourceLocation(this,loc);if(this.options.directSourceFile)node.sourceFile=this.options.directSourceFile;if(this.options.ranges)node.range=[pos,0];return node;}; // Finish an AST node, adding `type` and `end` properties.
pp.finishNode=function(node,type){node.type=type;node.end=this.lastTokEnd;if(this.options.locations)node.loc.end=this.lastTokEndLoc;if(this.options.ranges)node.range[1]=this.lastTokEnd;return node;}; // Finish node at given position
pp.finishNodeAt=function(node,type,pos,loc){node.type=type;if(Array.isArray(pos)){if(this.options.locations&&loc===undefined){ // flatten pos
loc=pos[1];pos=pos[0];}}node.end=pos;if(this.options.locations)node.loc.end=loc;if(this.options.ranges)node.range[1]=pos;return node;};},{"./location":8,"./state":13}],11:[function(_dereq_,module,exports){ // Interpret and default an options object
"use strict";exports.getOptions=getOptions;exports.__esModule=true;var _util=_dereq_("./util");var has=_util.has;var isArray=_util.isArray;var SourceLocation=_dereq_("./location").SourceLocation; // A second optional argument can be given to further configure
// the parser process. These options are recognized:
var defaultOptions={ // `ecmaVersion` indicates the ECMAScript version to parse. Must
// be either 3, or 5, or 6. This influences support for strict
// mode, the set of reserved words, support for getters and
// setters and other features.
ecmaVersion:5, // Source type ("script" or "module") for different semantics
sourceType:"script", // `onInsertedSemicolon` can be a callback that will be called
// when a semicolon is automatically inserted. It will be passed
// th position of the comma as an offset, and if `locations` is
// enabled, it is given the location as a `{line, column}` object
// as second argument.
onInsertedSemicolon:null, // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
// trailing commas.
onTrailingComma:null, // By default, reserved words are not enforced. Disable
// `allowReserved` to enforce them. When this option has the
// value "never", reserved words and keywords can also not be
// used as property names.
allowReserved:true, // When enabled, a return at the top level is not considered an
// error.
allowReturnOutsideFunction:false, // When enabled, import/export statements are not constrained to
// appearing at the top of the program.
allowImportExportEverywhere:false, // When enabled, hashbang directive in the beginning of file
// is allowed and treated as a line comment.
allowHashBang:false, // When `locations` is on, `loc` properties holding objects with
// `start` and `end` properties in `{line, column}` form (with
// line being 1-based and column 0-based) will be attached to the
// nodes.
locations:false, // A function can be passed as `onToken` option, which will
// cause Acorn to call that function with object in the same
// format as tokenize() returns. Note that you are not
// allowed to call the parser from the callback—that will
// corrupt its internal state.
onToken:null, // A function can be passed as `onComment` option, which will
// cause Acorn to call that function with `(block, text, start,
// end)` parameters whenever a comment is skipped. `block` is a
// boolean indicating whether this is a block (`/* */`) comment,
// `text` is the content of the comment, and `start` and `end` are
// character offsets that denote the start and end of the comment.
// When the `locations` option is on, two more parameters are
// passed, the full `{line, column}` locations of the start and
// end of the comments. Note that you are not allowed to call the
// parser from the callback—that will corrupt its internal state.
onComment:null, // Nodes have their start and end characters offsets recorded in
// `start` and `end` properties (directly on the node, rather than
// the `loc` object, which holds line/column data. To also add a
// [semi-standardized][range] `range` property holding a `[start,
// end]` array with the same numbers, set the `ranges` option to
// `true`.
//
// [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
ranges:false, // It is possible to parse multiple files into a single AST by
// passing the tree produced by parsing the first file as
// `program` option in subsequent parses. This will add the
// toplevel forms of the parsed file to the `Program` (top) node
// of an existing parse tree.
program:null, // When `locations` is on, you can pass this to record the source
// file in every node's `loc` object.
sourceFile:null, // This value, if given, is stored in every node, whether
// `locations` is on or off.
directSourceFile:null, // When enabled, parenthesized expressions are represented by
// (non-standard) ParenthesizedExpression nodes
preserveParens:false,plugins:{}};exports.defaultOptions=defaultOptions;function getOptions(opts){var options={};for(var opt in defaultOptions){options[opt]=opts&&has(opts,opt)?opts[opt]:defaultOptions[opt];}if(isArray(options.onToken)){(function(){var tokens=options.onToken;options.onToken=function(token){return tokens.push(token);};})();}if(isArray(options.onComment))options.onComment=pushComment(options,options.onComment);return options;}function pushComment(options,array){return function(block,text,start,end,startLoc,endLoc){var comment={type:block?"Block":"Line",value:text,start:start,end:end};if(options.locations)comment.loc=new SourceLocation(this,startLoc,endLoc);if(options.ranges)comment.range=[start,end];array.push(comment);};}},{"./location":8,"./util":18}],12:[function(_dereq_,module,exports){"use strict";var tt=_dereq_("./tokentype").types;var Parser=_dereq_("./state").Parser;var lineBreak=_dereq_("./whitespace").lineBreak;var pp=Parser.prototype; // ## Parser utilities
// Test whether a statement node is the string literal `"use strict"`.
pp.isUseStrict=function(stmt){return this.options.ecmaVersion>=5&&stmt.type==="ExpressionStatement"&&stmt.expression.type==="Literal"&&stmt.expression.value==="use strict";}; // Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.
pp.eat=function(type){if(this.type===type){this.next();return true;}else {return false;}}; // Tests whether parsed token is a contextual keyword.
pp.isContextual=function(name){return this.type===tt.name&&this.value===name;}; // Consumes contextual keyword if possible.
pp.eatContextual=function(name){return this.value===name&&this.eat(tt.name);}; // Asserts that following token is given contextual keyword.
pp.expectContextual=function(name){if(!this.eatContextual(name))this.unexpected();}; // Test whether a semicolon can be inserted at the current position.
pp.canInsertSemicolon=function(){return this.type===tt.eof||this.type===tt.braceR||lineBreak.test(this.input.slice(this.lastTokEnd,this.start));};pp.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon)this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc);return true;}}; // Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.
pp.semicolon=function(){if(!this.eat(tt.semi)&&!this.insertSemicolon())this.unexpected();};pp.afterTrailingComma=function(tokType){if(this.type==tokType){if(this.options.onTrailingComma)this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc);this.next();return true;}}; // Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.
pp.expect=function(type){this.eat(type)||this.unexpected();}; // Raise an unexpected token error.
pp.unexpected=function(pos){this.raise(pos!=null?pos:this.start,"Unexpected token");};},{"./state":13,"./tokentype":17,"./whitespace":19}],13:[function(_dereq_,module,exports){"use strict";exports.Parser=Parser;exports.__esModule=true;var _identifier=_dereq_("./identifier");var reservedWords=_identifier.reservedWords;var keywords=_identifier.keywords;var tt=_dereq_("./tokentype").types;var lineBreak=_dereq_("./whitespace").lineBreak;function Parser(options,input,startPos){this.options=options;this.sourceFile=this.options.sourceFile||null;this.isKeyword=keywords[this.options.ecmaVersion>=6?6:5];this.isReservedWord=reservedWords[this.options.ecmaVersion];this.input=input; // Load plugins
this.loadPlugins(this.options.plugins); // Set up token state
// The current position of the tokenizer in the input.
if(startPos){this.pos=startPos;this.lineStart=Math.max(0,this.input.lastIndexOf("\n",startPos));this.curLine=this.input.slice(0,this.lineStart).split(lineBreak).length;}else {this.pos=this.lineStart=0;this.curLine=1;} // Properties of the current token:
// Its type
this.type=tt.eof; // For tokens that include more information than their type, the value
this.value=null; // Its start and end offset
this.start=this.end=this.pos; // And, if locations are used, the {line, column} object
// corresponding to those offsets
this.startLoc=this.endLoc=null; // Position information for the previous token
this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos; // The context stack is used to superficially track syntactic
// context to predict whether a regular expression is allowed in a
// given position.
this.context=this.initialContext();this.exprAllowed=true; // Figure out if it's a module code.
this.strict=this.inModule=this.options.sourceType==="module"; // Used to signify the start of a potential arrow function
this.potentialArrowAt=-1; // Flags to track whether we are in a function, a generator.
this.inFunction=this.inGenerator=false; // Labels in scope.
this.labels=[]; // If enabled, skip leading hashbang line.
if(this.pos===0&&this.options.allowHashBang&&this.input.slice(0,2)==="#!")this.skipLineComment(2);}Parser.prototype.extend=function(name,f){this[name]=f(this[name]);}; // Registered plugins
var plugins={};exports.plugins=plugins;Parser.prototype.loadPlugins=function(plugins){for(var _name in plugins){var plugin=exports.plugins[_name];if(!plugin)throw new Error("Plugin '"+_name+"' not found");plugin(this,plugins[_name]);}};},{"./identifier":7,"./tokentype":17,"./whitespace":19}],14:[function(_dereq_,module,exports){"use strict";var tt=_dereq_("./tokentype").types;var Parser=_dereq_("./state").Parser;var lineBreak=_dereq_("./whitespace").lineBreak;var pp=Parser.prototype; // ### Statement parsing
// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.
pp.parseTopLevel=function(node){var first=true;if(!node.body)node.body=[];while(this.type!==tt.eof){var stmt=this.parseStatement(true,true);node.body.push(stmt);if(first&&this.isUseStrict(stmt))this.setStrict(true);first=false;}this.next();if(this.options.ecmaVersion>=6){node.sourceType=this.options.sourceType;}return this.finishNode(node,"Program");};var loopLabel={kind:"loop"},switchLabel={kind:"switch"}; // Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.
pp.parseStatement=function(declaration,topLevel){var starttype=this.type,node=this.startNode(); // Most types of statements are recognized by the keyword they
// start with. Many are trivial to parse, some require a bit of
// complexity.
switch(starttype){case tt._break:case tt._continue:return this.parseBreakContinueStatement(node,starttype.keyword);case tt._debugger:return this.parseDebuggerStatement(node);case tt._do:return this.parseDoStatement(node);case tt._for:return this.parseForStatement(node);case tt._function:if(!declaration&&this.options.ecmaVersion>=6)this.unexpected();return this.parseFunctionStatement(node);case tt._class:if(!declaration)this.unexpected();return this.parseClass(node,true);case tt._if:return this.parseIfStatement(node);case tt._return:return this.parseReturnStatement(node);case tt._switch:return this.parseSwitchStatement(node);case tt._throw:return this.parseThrowStatement(node);case tt._try:return this.parseTryStatement(node);case tt._let:case tt._const:if(!declaration)this.unexpected(); // NOTE: falls through to _var
case tt._var:return this.parseVarStatement(node,starttype);case tt._while:return this.parseWhileStatement(node);case tt._with:return this.parseWithStatement(node);case tt.braceL:return this.parseBlock();case tt.semi:return this.parseEmptyStatement(node);case tt._export:case tt._import:if(!this.options.allowImportExportEverywhere){if(!topLevel)this.raise(this.start,"'import' and 'export' may only appear at the top level");if(!this.inModule)this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'");}return starttype===tt._import?this.parseImport(node):this.parseExport(node); // If the statement does not start with a statement keyword or a
// brace, it's an ExpressionStatement or LabeledStatement. We
// simply start parsing an expression, and afterwards, if the
// next token is a colon and the expression was a simple
// Identifier node, we switch to interpreting it as a label.
default:var maybeName=this.value,expr=this.parseExpression();if(starttype===tt.name&&expr.type==="Identifier"&&this.eat(tt.colon))return this.parseLabeledStatement(node,maybeName,expr);else return this.parseExpressionStatement(node,expr);}};pp.parseBreakContinueStatement=function(node,keyword){var isBreak=keyword=="break";this.next();if(this.eat(tt.semi)||this.insertSemicolon())node.label=null;else if(this.type!==tt.name)this.unexpected();else {node.label=this.parseIdent();this.semicolon();} // Verify that there is an actual destination to break or
// continue to.
for(var i=0;i<this.labels.length;++i){var lab=this.labels[i];if(node.label==null||lab.name===node.label.name){if(lab.kind!=null&&(isBreak||lab.kind==="loop"))break;if(node.label&&isBreak)break;}}if(i===this.labels.length)this.raise(node.start,"Unsyntactic "+keyword);return this.finishNode(node,isBreak?"BreakStatement":"ContinueStatement");};pp.parseDebuggerStatement=function(node){this.next();this.semicolon();return this.finishNode(node,"DebuggerStatement");};pp.parseDoStatement=function(node){this.next();this.labels.push(loopLabel);node.body=this.parseStatement(false);this.labels.pop();this.expect(tt._while);node.test=this.parseParenExpression();if(this.options.ecmaVersion>=6)this.eat(tt.semi);else this.semicolon();return this.finishNode(node,"DoWhileStatement");}; // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.
pp.parseForStatement=function(node){this.next();this.labels.push(loopLabel);this.expect(tt.parenL);if(this.type===tt.semi)return this.parseFor(node,null);if(this.type===tt._var||this.type===tt._let||this.type===tt._const){var _init=this.startNode(),varKind=this.type;this.next();this.parseVar(_init,true,varKind);this.finishNode(_init,"VariableDeclaration");if((this.type===tt._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&_init.declarations.length===1&&!(varKind!==tt._var&&_init.declarations[0].init))return this.parseForIn(node,_init);return this.parseFor(node,_init);}var refShorthandDefaultPos={start:0};var init=this.parseExpression(true,refShorthandDefaultPos);if(this.type===tt._in||this.options.ecmaVersion>=6&&this.isContextual("of")){this.toAssignable(init);this.checkLVal(init);return this.parseForIn(node,init);}else if(refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}return this.parseFor(node,init);};pp.parseFunctionStatement=function(node){this.next();return this.parseFunction(node,true);};pp.parseIfStatement=function(node){this.next();node.test=this.parseParenExpression();node.consequent=this.parseStatement(false);node.alternate=this.eat(tt._else)?this.parseStatement(false):null;return this.finishNode(node,"IfStatement");};pp.parseReturnStatement=function(node){if(!this.inFunction&&!this.options.allowReturnOutsideFunction)this.raise(this.start,"'return' outside of function");this.next(); // In `return` (and `break`/`continue`), the keywords with
// optional arguments, we eagerly look for a semicolon or the
// possibility to insert one.
if(this.eat(tt.semi)||this.insertSemicolon())node.argument=null;else {node.argument=this.parseExpression();this.semicolon();}return this.finishNode(node,"ReturnStatement");};pp.parseSwitchStatement=function(node){this.next();node.discriminant=this.parseParenExpression();node.cases=[];this.expect(tt.braceL);this.labels.push(switchLabel); // Statements under must be grouped (by label) in SwitchCase
// nodes. `cur` is used to keep the node that we are currently
// adding statements to.
for(var cur,sawDefault;this.type!=tt.braceR;){if(this.type===tt._case||this.type===tt._default){var isCase=this.type===tt._case;if(cur)this.finishNode(cur,"SwitchCase");node.cases.push(cur=this.startNode());cur.consequent=[];this.next();if(isCase){cur.test=this.parseExpression();}else {if(sawDefault)this.raise(this.lastTokStart,"Multiple default clauses");sawDefault=true;cur.test=null;}this.expect(tt.colon);}else {if(!cur)this.unexpected();cur.consequent.push(this.parseStatement(true));}}if(cur)this.finishNode(cur,"SwitchCase");this.next(); // Closing brace
this.labels.pop();return this.finishNode(node,"SwitchStatement");};pp.parseThrowStatement=function(node){this.next();if(lineBreak.test(this.input.slice(this.lastTokEnd,this.start)))this.raise(this.lastTokEnd,"Illegal newline after throw");node.argument=this.parseExpression();this.semicolon();return this.finishNode(node,"ThrowStatement");}; // Reused empty array added for node fields that are always empty.
var empty=[];pp.parseTryStatement=function(node){this.next();node.block=this.parseBlock();node.handler=null;if(this.type===tt._catch){var clause=this.startNode();this.next();this.expect(tt.parenL);clause.param=this.parseBindingAtom();this.checkLVal(clause.param,true);this.expect(tt.parenR);clause.guard=null;clause.body=this.parseBlock();node.handler=this.finishNode(clause,"CatchClause");}node.guardedHandlers=empty;node.finalizer=this.eat(tt._finally)?this.parseBlock():null;if(!node.handler&&!node.finalizer)this.raise(node.start,"Missing catch or finally clause");return this.finishNode(node,"TryStatement");};pp.parseVarStatement=function(node,kind){this.next();this.parseVar(node,false,kind);this.semicolon();return this.finishNode(node,"VariableDeclaration");};pp.parseWhileStatement=function(node){this.next();node.test=this.parseParenExpression();this.labels.push(loopLabel);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,"WhileStatement");};pp.parseWithStatement=function(node){if(this.strict)this.raise(this.start,"'with' in strict mode");this.next();node.object=this.parseParenExpression();node.body=this.parseStatement(false);return this.finishNode(node,"WithStatement");};pp.parseEmptyStatement=function(node){this.next();return this.finishNode(node,"EmptyStatement");};pp.parseLabeledStatement=function(node,maybeName,expr){for(var i=0;i<this.labels.length;++i){if(this.labels[i].name===maybeName)this.raise(expr.start,"Label '"+maybeName+"' is already declared");}var kind=this.type.isLoop?"loop":this.type===tt._switch?"switch":null;this.labels.push({name:maybeName,kind:kind});node.body=this.parseStatement(true);this.labels.pop();node.label=expr;return this.finishNode(node,"LabeledStatement");};pp.parseExpressionStatement=function(node,expr){node.expression=expr;this.semicolon();return this.finishNode(node,"ExpressionStatement");}; // Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).
pp.parseBlock=function(allowStrict){var node=this.startNode(),first=true,oldStrict=undefined;node.body=[];this.expect(tt.braceL);while(!this.eat(tt.braceR)){var stmt=this.parseStatement(true);node.body.push(stmt);if(first&&allowStrict&&this.isUseStrict(stmt)){oldStrict=this.strict;this.setStrict(this.strict=true);}first=false;}if(oldStrict===false)this.setStrict(false);return this.finishNode(node,"BlockStatement");}; // Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.
pp.parseFor=function(node,init){node.init=init;this.expect(tt.semi);node.test=this.type===tt.semi?null:this.parseExpression();this.expect(tt.semi);node.update=this.type===tt.parenR?null:this.parseExpression();this.expect(tt.parenR);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,"ForStatement");}; // Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.
pp.parseForIn=function(node,init){var type=this.type===tt._in?"ForInStatement":"ForOfStatement";this.next();node.left=init;node.right=this.parseExpression();this.expect(tt.parenR);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,type);}; // Parse a list of variable declarations.
pp.parseVar=function(node,isFor,kind){node.declarations=[];node.kind=kind.keyword;for(;;){var decl=this.startNode();this.parseVarId(decl);if(this.eat(tt.eq)){decl.init=this.parseMaybeAssign(isFor);}else if(kind===tt._const&&!(this.type===tt._in||this.options.ecmaVersion>=6&&this.isContextual("of"))){this.unexpected();}else if(decl.id.type!="Identifier"&&!(isFor&&(this.type===tt._in||this.isContextual("of")))){this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value");}else {decl.init=null;}node.declarations.push(this.finishNode(decl,"VariableDeclarator"));if(!this.eat(tt.comma))break;}return node;};pp.parseVarId=function(decl){decl.id=this.parseBindingAtom();this.checkLVal(decl.id,true);}; // Parse a function declaration or literal (depending on the
// `isStatement` parameter).
pp.parseFunction=function(node,isStatement,allowExpressionBody){this.initFunction(node);if(this.options.ecmaVersion>=6)node.generator=this.eat(tt.star);if(isStatement||this.type===tt.name)node.id=this.parseIdent();this.parseFunctionParams(node);this.parseFunctionBody(node,allowExpressionBody);return this.finishNode(node,isStatement?"FunctionDeclaration":"FunctionExpression");};pp.parseFunctionParams=function(node){this.expect(tt.parenL);node.params=this.parseBindingList(tt.parenR,false,false);}; // Parse a class declaration or literal (depending on the
// `isStatement` parameter).
pp.parseClass=function(node,isStatement){this.next();this.parseClassId(node,isStatement);this.parseClassSuper(node);var classBody=this.startNode();var hadConstructor=false;classBody.body=[];this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(this.eat(tt.semi))continue;var method=this.startNode();var isGenerator=this.eat(tt.star);var isMaybeStatic=this.type===tt.name&&this.value==="static";this.parsePropertyName(method);method["static"]=isMaybeStatic&&this.type!==tt.parenL;if(method["static"]){if(isGenerator)this.unexpected();isGenerator=this.eat(tt.star);this.parsePropertyName(method);}method.kind="method";if(!method.computed){var key=method.key;var isGetSet=false;if(!isGenerator&&key.type==="Identifier"&&this.type!==tt.parenL&&(key.name==="get"||key.name==="set")){isGetSet=true;method.kind=key.name;key=this.parsePropertyName(method);}if(!method["static"]&&(key.type==="Identifier"&&key.name==="constructor"||key.type==="Literal"&&key.value==="constructor")){if(hadConstructor)this.raise(key.start,"Duplicate constructor in the same class");if(isGetSet)this.raise(key.start,"Constructor can't have get/set modifier");if(isGenerator)this.raise(key.start,"Constructor can't be a generator");method.kind="constructor";hadConstructor=true;}}this.parseClassMethod(classBody,method,isGenerator);}node.body=this.finishNode(classBody,"ClassBody");return this.finishNode(node,isStatement?"ClassDeclaration":"ClassExpression");};pp.parseClassMethod=function(classBody,method,isGenerator){method.value=this.parseMethod(isGenerator);classBody.body.push(this.finishNode(method,"MethodDefinition"));};pp.parseClassId=function(node,isStatement){node.id=this.type===tt.name?this.parseIdent():isStatement?this.unexpected():null;};pp.parseClassSuper=function(node){node.superClass=this.eat(tt._extends)?this.parseExprSubscripts():null;}; // Parses module export declaration.
pp.parseExport=function(node){this.next(); // export * from '...'
if(this.eat(tt.star)){this.expectContextual("from");node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();this.semicolon();return this.finishNode(node,"ExportAllDeclaration");}if(this.eat(tt._default)){ // export default ...
var expr=this.parseMaybeAssign();var needsSemi=true;if(expr.type=="FunctionExpression"||expr.type=="ClassExpression"){needsSemi=false;if(expr.id){expr.type=expr.type=="FunctionExpression"?"FunctionDeclaration":"ClassDeclaration";}}node.declaration=expr;if(needsSemi)this.semicolon();return this.finishNode(node,"ExportDefaultDeclaration");} // export var|const|let|function|class ...
if(this.shouldParseExportStatement()){node.declaration=this.parseStatement(true);node.specifiers=[];node.source=null;}else { // export { x, y as z } [from '...']
node.declaration=null;node.specifiers=this.parseExportSpecifiers();if(this.eatContextual("from")){node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();}else {node.source=null;}this.semicolon();}return this.finishNode(node,"ExportNamedDeclaration");};pp.shouldParseExportStatement=function(){return this.type.keyword;}; // Parses a comma-separated list of module exports.
pp.parseExportSpecifiers=function(){var nodes=[],first=true; // export { x, y as z } [from '...']
this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(!first){this.expect(tt.comma);if(this.afterTrailingComma(tt.braceR))break;}else first=false;var node=this.startNode();node.local=this.parseIdent(this.type===tt._default);node.exported=this.eatContextual("as")?this.parseIdent(true):node.local;nodes.push(this.finishNode(node,"ExportSpecifier"));}return nodes;}; // Parses import declaration.
pp.parseImport=function(node){this.next(); // import '...'
if(this.type===tt.string){node.specifiers=empty;node.source=this.parseExprAtom();node.kind="";}else {node.specifiers=this.parseImportSpecifiers();this.expectContextual("from");node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();}this.semicolon();return this.finishNode(node,"ImportDeclaration");}; // Parses a comma-separated list of module imports.
pp.parseImportSpecifiers=function(){var nodes=[],first=true;if(this.type===tt.name){ // import defaultObj, { x, y as z } from '...'
var node=this.startNode();node.local=this.parseIdent();this.checkLVal(node.local,true);nodes.push(this.finishNode(node,"ImportDefaultSpecifier"));if(!this.eat(tt.comma))return nodes;}if(this.type===tt.star){var node=this.startNode();this.next();this.expectContextual("as");node.local=this.parseIdent();this.checkLVal(node.local,true);nodes.push(this.finishNode(node,"ImportNamespaceSpecifier"));return nodes;}this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(!first){this.expect(tt.comma);if(this.afterTrailingComma(tt.braceR))break;}else first=false;var node=this.startNode();node.imported=this.parseIdent(true);node.local=this.eatContextual("as")?this.parseIdent():node.imported;this.checkLVal(node.local,true);nodes.push(this.finishNode(node,"ImportSpecifier"));}return nodes;};},{"./state":13,"./tokentype":17,"./whitespace":19}],15:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule=true; // The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design
var Parser=_dereq_("./state").Parser;var tt=_dereq_("./tokentype").types;var lineBreak=_dereq_("./whitespace").lineBreak;var TokContext=exports.TokContext=function TokContext(token,isExpr,preserveSpace,override){_classCallCheck(this,TokContext);this.token=token;this.isExpr=isExpr;this.preserveSpace=preserveSpace;this.override=override;};var types={b_stat:new TokContext("{",false),b_expr:new TokContext("{",true),b_tmpl:new TokContext("${",true),p_stat:new TokContext("(",false),p_expr:new TokContext("(",true),q_tmpl:new TokContext("`",true,true,function(p){return p.readTmplToken();}),f_expr:new TokContext("function",true)};exports.types=types;var pp=Parser.prototype;pp.initialContext=function(){return [types.b_stat];};pp.braceIsBlock=function(prevType){var parent=undefined;if(prevType===tt.colon&&(parent=this.curContext()).token=="{")return !parent.isExpr;if(prevType===tt._return)return lineBreak.test(this.input.slice(this.lastTokEnd,this.start));if(prevType===tt._else||prevType===tt.semi||prevType===tt.eof)return true;if(prevType==tt.braceL)return this.curContext()===types.b_stat;return !this.exprAllowed;};pp.updateContext=function(prevType){var update=undefined,type=this.type;if(type.keyword&&prevType==tt.dot)this.exprAllowed=false;else if(update=type.updateContext)update.call(this,prevType);else this.exprAllowed=type.beforeExpr;}; // Token-specific context update code
tt.parenR.updateContext=tt.braceR.updateContext=function(){if(this.context.length==1){this.exprAllowed=true;return;}var out=this.context.pop();if(out===types.b_stat&&this.curContext()===types.f_expr){this.context.pop();this.exprAllowed=false;}else if(out===types.b_tmpl){this.exprAllowed=true;}else {this.exprAllowed=!out.isExpr;}};tt.braceL.updateContext=function(prevType){this.context.push(this.braceIsBlock(prevType)?types.b_stat:types.b_expr);this.exprAllowed=true;};tt.dollarBraceL.updateContext=function(){this.context.push(types.b_tmpl);this.exprAllowed=true;};tt.parenL.updateContext=function(prevType){var statementParens=prevType===tt._if||prevType===tt._for||prevType===tt._with||prevType===tt._while;this.context.push(statementParens?types.p_stat:types.p_expr);this.exprAllowed=true;};tt.incDec.updateContext=function(){};tt._function.updateContext=function(){if(this.curContext()!==types.b_stat)this.context.push(types.f_expr);this.exprAllowed=false;};tt.backQuote.updateContext=function(){if(this.curContext()===types.q_tmpl)this.context.pop();else this.context.push(types.q_tmpl);this.exprAllowed=false;}; // tokExprAllowed stays unchanged
},{"./state":13,"./tokentype":17,"./whitespace":19}],16:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule=true;var _identifier=_dereq_("./identifier");var isIdentifierStart=_identifier.isIdentifierStart;var isIdentifierChar=_identifier.isIdentifierChar;var _tokentype=_dereq_("./tokentype");var tt=_tokentype.types;var keywordTypes=_tokentype.keywords;var Parser=_dereq_("./state").Parser;var SourceLocation=_dereq_("./location").SourceLocation;var _whitespace=_dereq_("./whitespace");var lineBreak=_whitespace.lineBreak;var lineBreakG=_whitespace.lineBreakG;var isNewLine=_whitespace.isNewLine;var nonASCIIwhitespace=_whitespace.nonASCIIwhitespace; // Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.
var Token=exports.Token=function Token(p){_classCallCheck(this,Token);this.type=p.type;this.value=p.value;this.start=p.start;this.end=p.end;if(p.options.locations)this.loc=new SourceLocation(p,p.startLoc,p.endLoc);if(p.options.ranges)this.range=[p.start,p.end];}; // ## Tokenizer
var pp=Parser.prototype; // Are we running under Rhino?
var isRhino=typeof Packages!=="undefined"; // Move to the next token
pp.next=function(){if(this.options.onToken)this.options.onToken(new Token(this));this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken();};pp.getToken=function(){this.next();return new Token(this);}; // If we're in an ES6 environment, make parsers iterable
if(typeof Symbol!=="undefined")pp[Symbol.iterator]=function(){var self=this;return {next:function next(){var token=self.getToken();return {done:token.type===tt.eof,value:token};}};}; // Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).
pp.setStrict=function(strict){this.strict=strict;if(this.type!==tt.num&&this.type!==tt.string)return;this.pos=this.start;if(this.options.locations){while(this.pos<this.lineStart){this.lineStart=this.input.lastIndexOf("\n",this.lineStart-2)+1;--this.curLine;}}this.nextToken();};pp.curContext=function(){return this.context[this.context.length-1];}; // Read a single token, updating the parser object's token-related
// properties.
pp.nextToken=function(){var curContext=this.curContext();if(!curContext||!curContext.preserveSpace)this.skipSpace();this.start=this.pos;if(this.options.locations)this.startLoc=this.curPosition();if(this.pos>=this.input.length)return this.finishToken(tt.eof);if(curContext.override)return curContext.override(this);else this.readToken(this.fullCharCodeAtPos());};pp.readToken=function(code){ // Identifier or keyword. '\uXXXX' sequences are allowed in
// identifiers, so '\' also dispatches to that.
if(isIdentifierStart(code,this.options.ecmaVersion>=6)||code===92 /* '\' */)return this.readWord();return this.getTokenFromCode(code);};pp.fullCharCodeAtPos=function(){var code=this.input.charCodeAt(this.pos);if(code<=55295||code>=57344)return code;var next=this.input.charCodeAt(this.pos+1);return (code<<10)+next-56613888;};pp.skipBlockComment=function(){var startLoc=this.options.onComment&&this.options.locations&&this.curPosition();var start=this.pos,end=this.input.indexOf("*/",this.pos+=2);if(end===-1)this.raise(this.pos-2,"Unterminated comment");this.pos=end+2;if(this.options.locations){lineBreakG.lastIndex=start;var match=undefined;while((match=lineBreakG.exec(this.input))&&match.index<this.pos){++this.curLine;this.lineStart=match.index+match[0].length;}}if(this.options.onComment)this.options.onComment(true,this.input.slice(start+2,end),start,this.pos,startLoc,this.options.locations&&this.curPosition());};pp.skipLineComment=function(startSkip){var start=this.pos;var startLoc=this.options.onComment&&this.options.locations&&this.curPosition();var ch=this.input.charCodeAt(this.pos+=startSkip);while(this.pos<this.input.length&&ch!==10&&ch!==13&&ch!==8232&&ch!==8233){++this.pos;ch=this.input.charCodeAt(this.pos);}if(this.options.onComment)this.options.onComment(false,this.input.slice(start+startSkip,this.pos),start,this.pos,startLoc,this.options.locations&&this.curPosition());}; // Called at the start of the parse and after every token. Skips
// whitespace and comments, and.
pp.skipSpace=function(){while(this.pos<this.input.length){var ch=this.input.charCodeAt(this.pos);if(ch===32){ // ' '
++this.pos;}else if(ch===13){++this.pos;var next=this.input.charCodeAt(this.pos);if(next===10){++this.pos;}if(this.options.locations){++this.curLine;this.lineStart=this.pos;}}else if(ch===10||ch===8232||ch===8233){++this.pos;if(this.options.locations){++this.curLine;this.lineStart=this.pos;}}else if(ch>8&&ch<14){++this.pos;}else if(ch===47){ // '/'
var next=this.input.charCodeAt(this.pos+1);if(next===42){ // '*'
this.skipBlockComment();}else if(next===47){ // '/'
this.skipLineComment(2);}else break;}else if(ch===160){ // '\xa0'
++this.pos;}else if(ch>=5760&&nonASCIIwhitespace.test(String.fromCharCode(ch))){++this.pos;}else {break;}}}; // Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.
pp.finishToken=function(type,val){this.end=this.pos;if(this.options.locations)this.endLoc=this.curPosition();var prevType=this.type;this.type=type;this.value=val;this.updateContext(prevType);}; // ### Token reading
// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp.readToken_dot=function(){var next=this.input.charCodeAt(this.pos+1);if(next>=48&&next<=57)return this.readNumber(true);var next2=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&next===46&&next2===46){ // 46 = dot '.'
this.pos+=3;return this.finishToken(tt.ellipsis);}else {++this.pos;return this.finishToken(tt.dot);}};pp.readToken_slash=function(){ // '/'
var next=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp();}if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.slash,1);};pp.readToken_mult_modulo=function(code){ // '%*'
var next=this.input.charCodeAt(this.pos+1);if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(code===42?tt.star:tt.modulo,1);};pp.readToken_pipe_amp=function(code){ // '|&'
var next=this.input.charCodeAt(this.pos+1);if(next===code)return this.finishOp(code===124?tt.logicalOR:tt.logicalAND,2);if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(code===124?tt.bitwiseOR:tt.bitwiseAND,1);};pp.readToken_caret=function(){ // '^'
var next=this.input.charCodeAt(this.pos+1);if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.bitwiseXOR,1);};pp.readToken_plus_min=function(code){ // '+-'
var next=this.input.charCodeAt(this.pos+1);if(next===code){if(next==45&&this.input.charCodeAt(this.pos+2)==62&&lineBreak.test(this.input.slice(this.lastTokEnd,this.pos))){ // A `-->` line comment
this.skipLineComment(3);this.skipSpace();return this.nextToken();}return this.finishOp(tt.incDec,2);}if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.plusMin,1);};pp.readToken_lt_gt=function(code){ // '<>'
var next=this.input.charCodeAt(this.pos+1);var size=1;if(next===code){size=code===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+size)===61)return this.finishOp(tt.assign,size+1);return this.finishOp(tt.bitShift,size);}if(next==33&&code==60&&this.input.charCodeAt(this.pos+2)==45&&this.input.charCodeAt(this.pos+3)==45){if(this.inModule)this.unexpected(); // `<!--`, an XML-style comment that should be interpreted as a line comment
this.skipLineComment(4);this.skipSpace();return this.nextToken();}if(next===61)size=this.input.charCodeAt(this.pos+2)===61?3:2;return this.finishOp(tt.relational,size);};pp.readToken_eq_excl=function(code){ // '=!'
var next=this.input.charCodeAt(this.pos+1);if(next===61)return this.finishOp(tt.equality,this.input.charCodeAt(this.pos+2)===61?3:2);if(code===61&&next===62&&this.options.ecmaVersion>=6){ // '=>'
this.pos+=2;return this.finishToken(tt.arrow);}return this.finishOp(code===61?tt.eq:tt.prefix,1);};pp.getTokenFromCode=function(code){switch(code){ // The interpretation of a dot depends on whether it is followed
// by a digit or another two dots.
case 46: // '.'
return this.readToken_dot(); // Punctuation tokens.
case 40:++this.pos;return this.finishToken(tt.parenL);case 41:++this.pos;return this.finishToken(tt.parenR);case 59:++this.pos;return this.finishToken(tt.semi);case 44:++this.pos;return this.finishToken(tt.comma);case 91:++this.pos;return this.finishToken(tt.bracketL);case 93:++this.pos;return this.finishToken(tt.bracketR);case 123:++this.pos;return this.finishToken(tt.braceL);case 125:++this.pos;return this.finishToken(tt.braceR);case 58:++this.pos;return this.finishToken(tt.colon);case 63:++this.pos;return this.finishToken(tt.question);case 96: // '`'
if(this.options.ecmaVersion<6)break;++this.pos;return this.finishToken(tt.backQuote);case 48: // '0'
var next=this.input.charCodeAt(this.pos+1);if(next===120||next===88)return this.readRadixNumber(16); // '0x', '0X' - hex number
if(this.options.ecmaVersion>=6){if(next===111||next===79)return this.readRadixNumber(8); // '0o', '0O' - octal number
if(next===98||next===66)return this.readRadixNumber(2); // '0b', '0B' - binary number
} // Anything else beginning with a digit is an integer, octal
// number, or float.
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57: // 1-9
return this.readNumber(false); // Quotes produce strings.
case 34:case 39: // '"', "'"
return this.readString(code); // Operators are parsed inline in tiny state machines. '=' (61) is
// often referred to. `finishOp` simply skips the amount of
// characters it is given as second argument, and returns a token
// of the type given by its first argument.
case 47: // '/'
return this.readToken_slash();case 37:case 42: // '%*'
return this.readToken_mult_modulo(code);case 124:case 38: // '|&'
return this.readToken_pipe_amp(code);case 94: // '^'
return this.readToken_caret();case 43:case 45: // '+-'
return this.readToken_plus_min(code);case 60:case 62: // '<>'
return this.readToken_lt_gt(code);case 61:case 33: // '=!'
return this.readToken_eq_excl(code);case 126: // '~'
return this.finishOp(tt.prefix,1);}this.raise(this.pos,"Unexpected character '"+codePointToString(code)+"'");};pp.finishOp=function(type,size){var str=this.input.slice(this.pos,this.pos+size);this.pos+=size;return this.finishToken(type,str);};var regexpUnicodeSupport=false;try{new RegExp("￿","u");regexpUnicodeSupport=true;}catch(e){} // Parse a regular expression. Some context-awareness is necessary,
// since a '/' inside a '[]' set does not end the expression.
pp.readRegexp=function(){var escaped=undefined,inClass=undefined,start=this.pos;for(;;){if(this.pos>=this.input.length)this.raise(start,"Unterminated regular expression");var ch=this.input.charAt(this.pos);if(lineBreak.test(ch))this.raise(start,"Unterminated regular expression");if(!escaped){if(ch==="[")inClass=true;else if(ch==="]"&&inClass)inClass=false;else if(ch==="/"&&!inClass)break;escaped=ch==="\\";}else escaped=false;++this.pos;}var content=this.input.slice(start,this.pos);++this.pos; // Need to use `readWord1` because '\uXXXX' sequences are allowed
// here (don't ask).
var mods=this.readWord1();var tmp=content;if(mods){var validFlags=/^[gmsiy]*$/;if(this.options.ecmaVersion>=6)validFlags=/^[gmsiyu]*$/;if(!validFlags.test(mods))this.raise(start,"Invalid regular expression flag");if(mods.indexOf("u")>=0&&!regexpUnicodeSupport){ // Replace each astral symbol and every Unicode escape sequence that
// possibly represents an astral symbol or a paired surrogate with a
// single ASCII symbol to avoid throwing on regular expressions that
// are only valid in combination with the `/u` flag.
// Note: replacing with the ASCII symbol `x` might cause false
// negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
// perfectly valid pattern that is equivalent to `[a-b]`, but it would
// be replaced by `[x-b]` which throws an error.
tmp=tmp.replace(/\\u([a-fA-F0-9]{4})|\\u\{([0-9a-fA-F]+)\}|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x");}} // Detect invalid regular expressions.
var value=null; // Rhino's regular expression parser is flaky and throws uncatchable exceptions,
// so don't do detection if we are running under Rhino
if(!isRhino){try{new RegExp(tmp);}catch(e){if(e instanceof SyntaxError)this.raise(start,"Error parsing regular expression: "+e.message);this.raise(e);} // Get a regular expression object for this pattern-flag pair, or `null` in
// case the current environment doesn't support the flags it uses.
try{value=new RegExp(content,mods);}catch(err){}}return this.finishToken(tt.regexp,{pattern:content,flags:mods,value:value});}; // Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.
pp.readInt=function(radix,len){var start=this.pos,total=0;for(var i=0,e=len==null?Infinity:len;i<e;++i){var code=this.input.charCodeAt(this.pos),val=undefined;if(code>=97)val=code-97+10; // a
else if(code>=65)val=code-65+10; // A
else if(code>=48&&code<=57)val=code-48; // 0-9
else val=Infinity;if(val>=radix)break;++this.pos;total=total*radix+val;}if(this.pos===start||len!=null&&this.pos-start!==len)return null;return total;};pp.readRadixNumber=function(radix){this.pos+=2; // 0x
var val=this.readInt(radix);if(val==null)this.raise(this.start+2,"Expected number in radix "+radix);if(isIdentifierStart(this.fullCharCodeAtPos()))this.raise(this.pos,"Identifier directly after number");return this.finishToken(tt.num,val);}; // Read an integer, octal integer, or floating-point number.
pp.readNumber=function(startsWithDot){var start=this.pos,isFloat=false,octal=this.input.charCodeAt(this.pos)===48;if(!startsWithDot&&this.readInt(10)===null)this.raise(start,"Invalid number");if(this.input.charCodeAt(this.pos)===46){++this.pos;this.readInt(10);isFloat=true;}var next=this.input.charCodeAt(this.pos);if(next===69||next===101){ // 'eE'
next=this.input.charCodeAt(++this.pos);if(next===43||next===45)++this.pos; // '+-'
if(this.readInt(10)===null)this.raise(start,"Invalid number");isFloat=true;}if(isIdentifierStart(this.fullCharCodeAtPos()))this.raise(this.pos,"Identifier directly after number");var str=this.input.slice(start,this.pos),val=undefined;if(isFloat)val=parseFloat(str);else if(!octal||str.length===1)val=parseInt(str,10);else if(/[89]/.test(str)||this.strict)this.raise(start,"Invalid number");else val=parseInt(str,8);return this.finishToken(tt.num,val);}; // Read a string value, interpreting backslash-escapes.
pp.readCodePoint=function(){var ch=this.input.charCodeAt(this.pos),code=undefined;if(ch===123){if(this.options.ecmaVersion<6)this.unexpected();++this.pos;code=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos);++this.pos;if(code>1114111)this.unexpected();}else {code=this.readHexChar(4);}return code;};function codePointToString(code){ // UTF-16 Decoding
if(code<=65535){return String.fromCharCode(code);}return String.fromCharCode((code-65536>>10)+55296,(code-65536&1023)+56320);}pp.readString=function(quote){var out="",chunkStart=++this.pos;for(;;){if(this.pos>=this.input.length)this.raise(this.start,"Unterminated string constant");var ch=this.input.charCodeAt(this.pos);if(ch===quote)break;if(ch===92){ // '\'
out+=this.input.slice(chunkStart,this.pos);out+=this.readEscapedChar();chunkStart=this.pos;}else {if(isNewLine(ch))this.raise(this.start,"Unterminated string constant");++this.pos;}}out+=this.input.slice(chunkStart,this.pos++);return this.finishToken(tt.string,out);}; // Reads template string tokens.
pp.readTmplToken=function(){var out="",chunkStart=this.pos;for(;;){if(this.pos>=this.input.length)this.raise(this.start,"Unterminated template");var ch=this.input.charCodeAt(this.pos);if(ch===96||ch===36&&this.input.charCodeAt(this.pos+1)===123){ // '`', '${'
if(this.pos===this.start&&this.type===tt.template){if(ch===36){this.pos+=2;return this.finishToken(tt.dollarBraceL);}else {++this.pos;return this.finishToken(tt.backQuote);}}out+=this.input.slice(chunkStart,this.pos);return this.finishToken(tt.template,out);}if(ch===92){ // '\'
out+=this.input.slice(chunkStart,this.pos);out+=this.readEscapedChar();chunkStart=this.pos;}else if(isNewLine(ch)){out+=this.input.slice(chunkStart,this.pos);++this.pos;if(ch===13&&this.input.charCodeAt(this.pos)===10){++this.pos;out+="\n";}else {out+=String.fromCharCode(ch);}if(this.options.locations){++this.curLine;this.lineStart=this.pos;}chunkStart=this.pos;}else {++this.pos;}}}; // Used to read escaped characters
pp.readEscapedChar=function(){var ch=this.input.charCodeAt(++this.pos);var octal=/^[0-7]+/.exec(this.input.slice(this.pos,this.pos+3));if(octal)octal=octal[0];while(octal&&parseInt(octal,8)>255){octal=octal.slice(0,-1);}if(octal==="0")octal=null;++this.pos;if(octal){if(this.strict)this.raise(this.pos-2,"Octal literal in strict mode");this.pos+=octal.length-1;return String.fromCharCode(parseInt(octal,8));}else {switch(ch){case 110:return "\n"; // 'n' -> '\n'
case 114:return "\r"; // 'r' -> '\r'
case 120:return String.fromCharCode(this.readHexChar(2)); // 'x'
case 117:return codePointToString(this.readCodePoint()); // 'u'
case 116:return "\t"; // 't' -> '\t'
case 98:return "\b"; // 'b' -> '\b'
case 118:return '\u000b'; // 'v' -> '\u000b'
case 102:return "\f"; // 'f' -> '\f'
case 48:return '\u0000'; // 0 -> '\0'
case 13:if(this.input.charCodeAt(this.pos)===10)++this.pos; // '\r\n'
case 10: // ' \n'
if(this.options.locations){this.lineStart=this.pos;++this.curLine;}return "";default:return String.fromCharCode(ch);}}}; // Used to read character escape sequences ('\x', '\u', '\U').
pp.readHexChar=function(len){var n=this.readInt(16,len);if(n===null)this.raise(this.start,"Bad character escape sequence");return n;}; // Used to signal to callers of `readWord1` whether the word
// contained any escape sequences. This is needed because words with
// escape sequences must not be interpreted as keywords.
var containsEsc; // Read an identifier, and return it as a string. Sets `containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.
pp.readWord1=function(){containsEsc=false;var word="",first=true,chunkStart=this.pos;var astral=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var ch=this.fullCharCodeAtPos();if(isIdentifierChar(ch,astral)){this.pos+=ch<=65535?1:2;}else if(ch===92){ // "\"
containsEsc=true;word+=this.input.slice(chunkStart,this.pos);var escStart=this.pos;if(this.input.charCodeAt(++this.pos)!=117) // "u"
this.raise(this.pos,'Expecting Unicode escape sequence \\uXXXX');++this.pos;var esc=this.readCodePoint();if(!(first?isIdentifierStart:isIdentifierChar)(esc,astral))this.raise(escStart,"Invalid Unicode escape");word+=codePointToString(esc);chunkStart=this.pos;}else {break;}first=false;}return word+this.input.slice(chunkStart,this.pos);}; // Read an identifier or keyword token. Will check for reserved
// words when necessary.
pp.readWord=function(){var word=this.readWord1();var type=tt.name;if((this.options.ecmaVersion>=6||!containsEsc)&&this.isKeyword(word))type=keywordTypes[word];return this.finishToken(type,word);};},{"./identifier":7,"./location":8,"./state":13,"./tokentype":17,"./whitespace":19}],17:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.__esModule=true; // ## Token types
// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.
// All token type variables start with an underscore, to make them
// easy to recognize.
// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.
var TokenType=exports.TokenType=function TokenType(label){var conf=arguments[1]===undefined?{}:arguments[1];_classCallCheck(this,TokenType);this.label=label;this.keyword=conf.keyword;this.beforeExpr=!!conf.beforeExpr;this.startsExpr=!!conf.startsExpr;this.isLoop=!!conf.isLoop;this.isAssign=!!conf.isAssign;this.prefix=!!conf.prefix;this.postfix=!!conf.postfix;this.binop=conf.binop||null;this.updateContext=null;};function binop(name,prec){return new TokenType(name,{beforeExpr:true,binop:prec});}var beforeExpr={beforeExpr:true},startsExpr={startsExpr:true};var types={num:new TokenType("num",startsExpr),regexp:new TokenType("regexp",startsExpr),string:new TokenType("string",startsExpr),name:new TokenType("name",startsExpr),eof:new TokenType("eof"), // Punctuation token types.
bracketL:new TokenType("[",{beforeExpr:true,startsExpr:true}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:true,startsExpr:true}),braceR:new TokenType("}"),parenL:new TokenType("(",{beforeExpr:true,startsExpr:true}),parenR:new TokenType(")"),comma:new TokenType(",",beforeExpr),semi:new TokenType(";",beforeExpr),colon:new TokenType(":",beforeExpr),dot:new TokenType("."),question:new TokenType("?",beforeExpr),arrow:new TokenType("=>",beforeExpr),template:new TokenType("template"),ellipsis:new TokenType("...",beforeExpr),backQuote:new TokenType("`",startsExpr),dollarBraceL:new TokenType("${",{beforeExpr:true,startsExpr:true}), // Operators. These carry several kinds of properties to help the
// parser use them properly (the presence of these properties is
// what categorizes them as operators).
//
// `binop`, when present, specifies that this operator is a binary
// operator, and will refer to its precedence.
//
// `prefix` and `postfix` mark the operator as a prefix or postfix
// unary operator.
//
// `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
// binary operators with a very low precedence, that should result
// in AssignmentExpression nodes.
eq:new TokenType("=",{beforeExpr:true,isAssign:true}),assign:new TokenType("_=",{beforeExpr:true,isAssign:true}),incDec:new TokenType("++/--",{prefix:true,postfix:true,startsExpr:true}),prefix:new TokenType("prefix",{beforeExpr:true,prefix:true,startsExpr:true}),logicalOR:binop("||",1),logicalAND:binop("&&",2),bitwiseOR:binop("|",3),bitwiseXOR:binop("^",4),bitwiseAND:binop("&",5),equality:binop("==/!=",6),relational:binop("</>",7),bitShift:binop("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:true,binop:9,prefix:true,startsExpr:true}),modulo:binop("%",10),star:binop("*",10),slash:binop("/",10)};exports.types=types; // Map keyword names to token types.
var keywords={};exports.keywords=keywords; // Succinct definitions of keyword token types
function kw(name){var options=arguments[1]===undefined?{}:arguments[1];options.keyword=name;keywords[name]=types["_"+name]=new TokenType(name,options);}kw("break");kw("case",beforeExpr);kw("catch");kw("continue");kw("debugger");kw("default");kw("do",{isLoop:true});kw("else",beforeExpr);kw("finally");kw("for",{isLoop:true});kw("function",startsExpr);kw("if");kw("return",beforeExpr);kw("switch");kw("throw",beforeExpr);kw("try");kw("var");kw("let");kw("const");kw("while",{isLoop:true});kw("with");kw("new",{beforeExpr:true,startsExpr:true});kw("this",startsExpr);kw("super",startsExpr);kw("class");kw("extends",beforeExpr);kw("export");kw("import");kw("yield",{beforeExpr:true,startsExpr:true});kw("null",startsExpr);kw("true",startsExpr);kw("false",startsExpr);kw("in",{beforeExpr:true,binop:7});kw("instanceof",{beforeExpr:true,binop:7});kw("typeof",{beforeExpr:true,prefix:true,startsExpr:true});kw("void",{beforeExpr:true,prefix:true,startsExpr:true});kw("delete",{beforeExpr:true,prefix:true,startsExpr:true});},{}],18:[function(_dereq_,module,exports){"use strict";exports.isArray=isArray; // Checks if an object has a property.
exports.has=has;exports.__esModule=true;function isArray(obj){return Object.prototype.toString.call(obj)==="[object Array]";}function has(obj,propName){return Object.prototype.hasOwnProperty.call(obj,propName);}},{}],19:[function(_dereq_,module,exports){"use strict";exports.isNewLine=isNewLine;exports.__esModule=true; // Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.
var lineBreak=/\r\n?|\n|\u2028|\u2029/;exports.lineBreak=lineBreak;var lineBreakG=new RegExp(lineBreak.source,"g");exports.lineBreakG=lineBreakG;function isNewLine(code){return code===10||code===13||code===8232||code==8233;}var nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;exports.nonASCIIwhitespace=nonASCIIwhitespace;},{}]},{},[1])(1);});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],33:[function(require,module,exports){(function(global){(function(f){if((typeof exports==='undefined'?'undefined':_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}(g.acorn||(g.acorn={})).walk=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(_dereq_,module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}; // AST walker module for Mozilla Parser API compatible trees
// A simple walk is one where you simply specify callbacks to be
// called on specific nodes. The last two arguments are optional. A
// simple use would be
//
//     walk.simple(myTree, {
//         Expression: function(node) { ... }
//     });
//
// to do something with all expressions. All Parser API node types
// can be used to identify node types, as well as Expression,
// Statement, and ScopeBody, which denote categories of nodes.
//
// The base argument can be used to pass a custom (recursive)
// walker, and state can be used to give this walked an initial
// state.
exports.simple=simple; // An ancestor walk builds up an array of ancestor nodes (including
// the current node) and passes them to the callback as the state parameter.
exports.ancestor=ancestor; // A recursive walk is one where your functions override the default
// walkers. They can modify and replace the state parameter that's
// threaded through the walk, and can opt how and whether to walk
// their child nodes (by calling their third argument on these
// nodes).
exports.recursive=recursive; // Find a node with a given start, end, and type (all are optional,
// null can be used as wildcard). Returns a {node, state} object, or
// undefined when it doesn't find a matching node.
exports.findNodeAt=findNodeAt; // Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
exports.findNodeAround=findNodeAround; // Find the outermost matching node after a given position.
exports.findNodeAfter=findNodeAfter; // Find the outermost matching node before a given position.
exports.findNodeBefore=findNodeBefore; // Used to create a custom walker. Will fill in all missing node
// type properties with the defaults.
exports.make=make;exports.__esModule=true;function simple(node,visitors,base,state){if(!base)base=exports.base;(function c(node,st,override){var type=override||node.type,found=visitors[type];base[type](node,st,c);if(found)found(node,st);})(node,state);}function ancestor(node,visitors,base,state){if(!base)base=exports.base;if(!state)state=[];(function c(node,st,override){var type=override||node.type,found=visitors[type];if(node!=st[st.length-1]){st=st.slice();st.push(node);}base[type](node,st,c);if(found)found(node,st);})(node,state);}function recursive(node,state,funcs,base){var visitor=funcs?exports.make(funcs,base):base;(function c(node,st,override){visitor[override||node.type](node,st,c);})(node,state);}function makeTest(test){if(typeof test=="string"){return function(type){return type==test;};}else if(!test){return function(){return true;};}else {return test;}}var Found=function Found(node,state){_classCallCheck(this,Found);this.node=node;this.state=state;};function findNodeAt(node,start,end,test,base,state){test=makeTest(test);if(!base)base=exports.base;try{;(function c(node,st,override){var type=override||node.type;if((start==null||node.start<=start)&&(end==null||node.end>=end))base[type](node,st,c);if(test(type,node)&&(start==null||node.start==start)&&(end==null||node.end==end))throw new Found(node,st);})(node,state);}catch(e){if(e instanceof Found){return e;}throw e;}}function findNodeAround(node,pos,test,base,state){test=makeTest(test);if(!base)base=exports.base;try{;(function c(node,st,override){var type=override||node.type;if(node.start>pos||node.end<pos){return;}base[type](node,st,c);if(test(type,node))throw new Found(node,st);})(node,state);}catch(e){if(e instanceof Found){return e;}throw e;}}function findNodeAfter(node,pos,test,base,state){test=makeTest(test);if(!base)base=exports.base;try{;(function c(node,st,override){if(node.end<pos){return;}var type=override||node.type;if(node.start>=pos&&test(type,node))throw new Found(node,st);base[type](node,st,c);})(node,state);}catch(e){if(e instanceof Found){return e;}throw e;}}function findNodeBefore(node,pos,test,base,state){test=makeTest(test);if(!base)base=exports.base;var max=undefined;(function c(node,st,override){if(node.start>pos){return;}var type=override||node.type;if(node.end<=pos&&(!max||max.node.end<node.end)&&test(type,node))max=new Found(node,st);base[type](node,st,c);})(node,state);return max;}function make(funcs,base){if(!base)base=exports.base;var visitor={};for(var type in base){visitor[type]=base[type];}for(var type in funcs){visitor[type]=funcs[type];}return visitor;}function skipThrough(node,st,c){c(node,st);}function ignore(_node,_st,_c){} // Node walkers.
var base={};exports.base=base;base.Program=base.BlockStatement=function(node,st,c){for(var i=0;i<node.body.length;++i){c(node.body[i],st,"Statement");}};base.Statement=skipThrough;base.EmptyStatement=ignore;base.ExpressionStatement=base.ParenthesizedExpression=function(node,st,c){return c(node.expression,st,"Expression");};base.IfStatement=function(node,st,c){c(node.test,st,"Expression");c(node.consequent,st,"Statement");if(node.alternate)c(node.alternate,st,"Statement");};base.LabeledStatement=function(node,st,c){return c(node.body,st,"Statement");};base.BreakStatement=base.ContinueStatement=ignore;base.WithStatement=function(node,st,c){c(node.object,st,"Expression");c(node.body,st,"Statement");};base.SwitchStatement=function(node,st,c){c(node.discriminant,st,"Expression");for(var i=0;i<node.cases.length;++i){var cs=node.cases[i];if(cs.test)c(cs.test,st,"Expression");for(var j=0;j<cs.consequent.length;++j){c(cs.consequent[j],st,"Statement");}}};base.ReturnStatement=base.YieldExpression=function(node,st,c){if(node.argument)c(node.argument,st,"Expression");};base.ThrowStatement=base.SpreadElement=base.RestElement=function(node,st,c){return c(node.argument,st,"Expression");};base.TryStatement=function(node,st,c){c(node.block,st,"Statement");if(node.handler)c(node.handler.body,st,"ScopeBody");if(node.finalizer)c(node.finalizer,st,"Statement");};base.WhileStatement=base.DoWhileStatement=function(node,st,c){c(node.test,st,"Expression");c(node.body,st,"Statement");};base.ForStatement=function(node,st,c){if(node.init)c(node.init,st,"ForInit");if(node.test)c(node.test,st,"Expression");if(node.update)c(node.update,st,"Expression");c(node.body,st,"Statement");};base.ForInStatement=base.ForOfStatement=function(node,st,c){c(node.left,st,"ForInit");c(node.right,st,"Expression");c(node.body,st,"Statement");};base.ForInit=function(node,st,c){if(node.type=="VariableDeclaration")c(node,st);else c(node,st,"Expression");};base.DebuggerStatement=ignore;base.FunctionDeclaration=function(node,st,c){return c(node,st,"Function");};base.VariableDeclaration=function(node,st,c){for(var i=0;i<node.declarations.length;++i){var decl=node.declarations[i];if(decl.init)c(decl.init,st,"Expression");}};base.Function=function(node,st,c){return c(node.body,st,"ScopeBody");};base.ScopeBody=function(node,st,c){return c(node,st,"Statement");};base.Expression=skipThrough;base.ThisExpression=base.Super=base.MetaProperty=ignore;base.ArrayExpression=base.ArrayPattern=function(node,st,c){for(var i=0;i<node.elements.length;++i){var elt=node.elements[i];if(elt)c(elt,st,"Expression");}};base.ObjectExpression=base.ObjectPattern=function(node,st,c){for(var i=0;i<node.properties.length;++i){c(node.properties[i],st);}};base.FunctionExpression=base.ArrowFunctionExpression=base.FunctionDeclaration;base.SequenceExpression=base.TemplateLiteral=function(node,st,c){for(var i=0;i<node.expressions.length;++i){c(node.expressions[i],st,"Expression");}};base.UnaryExpression=base.UpdateExpression=function(node,st,c){c(node.argument,st,"Expression");};base.BinaryExpression=base.AssignmentExpression=base.AssignmentPattern=base.LogicalExpression=function(node,st,c){c(node.left,st,"Expression");c(node.right,st,"Expression");};base.ConditionalExpression=function(node,st,c){c(node.test,st,"Expression");c(node.consequent,st,"Expression");c(node.alternate,st,"Expression");};base.NewExpression=base.CallExpression=function(node,st,c){c(node.callee,st,"Expression");if(node.arguments)for(var i=0;i<node.arguments.length;++i){c(node.arguments[i],st,"Expression");}};base.MemberExpression=function(node,st,c){c(node.object,st,"Expression");if(node.computed)c(node.property,st,"Expression");};base.ExportNamedDeclaration=base.ExportDefaultDeclaration=function(node,st,c){return c(node.declaration,st);};base.ImportDeclaration=function(node,st,c){for(var i=0;i<node.specifiers.length;i++){c(node.specifiers[i],st);}};base.ImportSpecifier=base.ImportDefaultSpecifier=base.ImportNamespaceSpecifier=base.Identifier=base.Literal=ignore;base.TaggedTemplateExpression=function(node,st,c){c(node.tag,st,"Expression");c(node.quasi,st);};base.ClassDeclaration=base.ClassExpression=function(node,st,c){if(node.superClass)c(node.superClass,st,"Expression");for(var i=0;i<node.body.body.length;i++){c(node.body.body[i],st);}};base.MethodDefinition=base.Property=function(node,st,c){if(node.computed)c(node.key,st,"Expression");c(node.value,st,"Expression");};base.ComprehensionExpression=function(node,st,c){for(var i=0;i<node.blocks.length;i++){c(node.blocks[i].right,st,"Expression");}c(node.body,st,"Expression");};},{}]},{},[1])(1);});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],34:[function(require,module,exports){ /**
	 * This file automatically generated from `pre-publish.js`.
	 * Do not manually edit.
	 */module.exports={"area":true,"base":true,"br":true,"col":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"menuitem":true,"meta":true,"param":true,"source":true,"track":true,"wbr":true};},{}],35:[function(require,module,exports){'use strict';var detect=require('acorn-globals');var acorn=require('acorn');var walk=require('acorn/dist/walk'); // polyfill for https://github.com/marijnh/acorn/pull/231
walk.base.ExportNamedDeclaration=walk.base.ExportDefaultDeclaration=function(node,st,c){return c(node.declaration,st);};walk.base.ImportDefaultSpecifier=walk.base.ImportNamespaceSpecifier=function(){}; // hacky fix for https://github.com/marijnh/acorn/issues/227
function reallyParse(source){try{return acorn.parse(source,{ecmaVersion:5,allowReturnOutsideFunction:true});}catch(ex){if(ex.name!=='SyntaxError'){throw ex;}return acorn.parse(source,{ecmaVersion:6,allowReturnOutsideFunction:true});}}module.exports=addWith; /**
	 * Mimic `with` as far as possible but at compile time
	 *
	 * @param {String} obj The object part of a with expression
	 * @param {String} src The body of the with expression
	 * @param {Array.<String>} exclude A list of variable names to explicitly exclude
	 */function addWith(obj,src,exclude){obj=obj+'';src=src+'';exclude=exclude||[];exclude=exclude.concat(detect(obj).map(function(global){return global.name;}));var vars=detect(src).map(function(global){return global.name;}).filter(function(v){return exclude.indexOf(v)===-1;});if(vars.length===0)return src;var declareLocal='';var local='locals_for_with';var result='result_of_with';if(/^[a-zA-Z0-9$_]+$/.test(obj)){local=obj;}else {while(vars.indexOf(local)!=-1||exclude.indexOf(local)!=-1){local+='_';}declareLocal='var '+local+' = ('+obj+')';}while(vars.indexOf(result)!=-1||exclude.indexOf(result)!=-1){result+='_';}var inputVars=vars.map(function(v){return JSON.stringify(v)+' in '+local+'?'+local+'.'+v+':'+'typeof '+v+'!=="undefined"?'+v+':undefined';});src='(function ('+vars.join(', ')+') {'+src+'}.call(this'+inputVars.map(function(v){return ','+v;}).join('')+'))';return ';'+declareLocal+';'+unwrapReturns(src,result)+';';} /**
	 * Take a self calling function, and unwrap it such that return inside the function
	 * results in return outside the function
	 *
	 * @param {String} src    Some JavaScript code representing a self-calling function
	 * @param {String} result A temporary variable to store the result in
	 */function unwrapReturns(src,result){var originalSource=src;var hasReturn=false;var ast=reallyParse(src);var ref;src=src.split(''); // get a reference to the function that was inserted to add an inner context
if((ref=ast.body).length!==1||(ref=ref[0]).type!=='ExpressionStatement'||(ref=ref.expression).type!=='CallExpression'||(ref=ref.callee).type!=='MemberExpression'||ref.computed!==false||ref.property.name!=='call'||(ref=ref.object).type!=='FunctionExpression')throw new Error('AST does not seem to represent a self-calling function');var fn=ref;walk.recursive(ast,null,{Function:function Function(node,st,c){if(node===fn){c(node.body,st,"ScopeBody");}},ReturnStatement:function ReturnStatement(node){hasReturn=true;replace(node,'return {value: '+source(node.argument)+'};');}});function source(node){return src.slice(node.start,node.end).join('');}function replace(node,str){for(var i=node.start;i<node.end;i++){src[i]='';}src[node.start]=str;}if(!hasReturn)return originalSource;else return 'var '+result+'='+src.join('')+';if ('+result+') return '+result+'.value';}},{"acorn":37,"acorn-globals":36,"acorn/dist/walk":38}],36:[function(require,module,exports){arguments[4][31][0].apply(exports,arguments);},{"acorn":37,"acorn/dist/walk":38,"dup":31}],37:[function(require,module,exports){arguments[4][32][0].apply(exports,arguments);},{"dup":32}],38:[function(require,module,exports){arguments[4][33][0].apply(exports,arguments);},{"dup":33}]},{},[1])(1);}); /* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}()); /***/}, /* 8 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(9),__webpack_require__(27),__webpack_require__(28),__webpack_require__(33),__webpack_require__(34),__webpack_require__(31),__webpack_require__(26)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_handlebarsRuntime,_handlebarsCompilerAst,_handlebarsCompilerBase,_handlebarsCompilerCompiler,_handlebarsCompilerJavascriptCompiler,_handlebarsCompilerVisitor,_handlebarsNoConflict){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _runtime=_interopRequireDefault(_handlebarsRuntime); // Compiler imports
var _AST=_interopRequireDefault(_handlebarsCompilerAst);var _JavaScriptCompiler=_interopRequireDefault(_handlebarsCompilerJavascriptCompiler);var _Visitor=_interopRequireDefault(_handlebarsCompilerVisitor);var _noConflict=_interopRequireDefault(_handlebarsNoConflict);var _create=_runtime['default'].create;function create(){var hb=_create();hb.compile=function(input,options){return _handlebarsCompilerCompiler.compile(input,options,hb);};hb.precompile=function(input,options){return _handlebarsCompilerCompiler.precompile(input,options,hb);};hb.AST=_AST['default'];hb.Compiler=_handlebarsCompilerCompiler.Compiler;hb.JavaScriptCompiler=_JavaScriptCompiler['default'];hb.Parser=_handlebarsCompilerBase.parser;hb.parse=_handlebarsCompilerBase.parse;return hb;}var inst=create();inst.create=create;_noConflict['default'](inst);inst.Visitor=_Visitor['default'];inst['default']=inst;module.exports=inst;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 9 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(10),__webpack_require__(24),__webpack_require__(12),__webpack_require__(11),__webpack_require__(25),__webpack_require__(26)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_handlebarsBase,_handlebarsSafeString,_handlebarsException,_handlebarsUtils,_handlebarsRuntime,_handlebarsNoConflict){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};} // Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _SafeString=_interopRequireDefault(_handlebarsSafeString);var _Exception=_interopRequireDefault(_handlebarsException);var _noConflict=_interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create(){var hb=new _handlebarsBase.HandlebarsEnvironment();_handlebarsUtils.extend(hb,_handlebarsBase);hb.SafeString=_SafeString['default'];hb.Exception=_Exception['default'];hb.Utils=_handlebarsUtils;hb.escapeExpression=_handlebarsUtils.escapeExpression;hb.VM=_handlebarsRuntime;hb.template=function(spec){return _handlebarsRuntime.template(spec,hb);};return hb;}var inst=create();inst.create=create;_noConflict['default'](inst);inst['default']=inst;module.exports=inst;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 10 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(11),__webpack_require__(12),__webpack_require__(13),__webpack_require__(21),__webpack_require__(23)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_utils,_exception,_helpers,_decorators,_logger){'use strict';exports.__esModule=true;exports.HandlebarsEnvironment=HandlebarsEnvironment; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);var _logger2=_interopRequireDefault(_logger);var VERSION='4.0.5';exports.VERSION=VERSION;var COMPILER_REVISION=7;exports.COMPILER_REVISION=COMPILER_REVISION;var REVISION_CHANGES={1:'<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
2:'== 1.0.0-rc.3',3:'== 1.0.0-rc.4',4:'== 1.x.x',5:'== 2.0.0-alpha.x',6:'>= 2.0.0-beta.1',7:'>= 4.0.0'};exports.REVISION_CHANGES=REVISION_CHANGES;var objectType='[object Object]';function HandlebarsEnvironment(helpers,partials,decorators){this.helpers=helpers||{};this.partials=partials||{};this.decorators=decorators||{};_helpers.registerDefaultHelpers(this);_decorators.registerDefaultDecorators(this);}HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:_logger2['default'],log:_logger2['default'].log,registerHelper:function registerHelper(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _Exception['default']('Arg not supported with multiple helpers');}_utils.extend(this.helpers,name);}else {this.helpers[name]=fn;}},unregisterHelper:function unregisterHelper(name){delete this.helpers[name];},registerPartial:function registerPartial(name,partial){if(_utils.toString.call(name)===objectType){_utils.extend(this.partials,name);}else {if(typeof partial==='undefined'){throw new _Exception['default']('Attempting to register a partial called "'+name+'" as undefined');}this.partials[name]=partial;}},unregisterPartial:function unregisterPartial(name){delete this.partials[name];},registerDecorator:function registerDecorator(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _Exception['default']('Arg not supported with multiple decorators');}_utils.extend(this.decorators,name);}else {this.decorators[name]=fn;}},unregisterDecorator:function unregisterDecorator(name){delete this.decorators[name];}};var log=_logger2['default'].log;exports.log=log;exports.createFrame=_utils.createFrame;exports.logger=_logger2['default'];}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 11 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports],__WEBPACK_AMD_DEFINE_RESULT__=function(exports){'use strict';exports.__esModule=true;exports.extend=extend;exports.indexOf=indexOf;exports.escapeExpression=escapeExpression;exports.isEmpty=isEmpty;exports.createFrame=createFrame;exports.blockParams=blockParams;exports.appendContextPath=appendContextPath;var escape={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;','=':'&#x3D;'};var badChars=/[&<>"'`=]/g,possible=/[&<>"'`=]/;function escapeChar(chr){return escape[chr];}function extend(obj /* , ...source */){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(Object.prototype.hasOwnProperty.call(arguments[i],key)){obj[key]=arguments[i][key];}}}return obj;}var toString=Object.prototype.toString;exports.toString=toString; // Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */var isFunction=function isFunction(value){return typeof value==='function';}; // fallback for older versions of Chrome and Safari
/* istanbul ignore next */if(isFunction(/x/)){exports.isFunction=isFunction=function(value){return typeof value==='function'&&toString.call(value)==='[object Function]';};}exports.isFunction=isFunction; /* eslint-enable func-style */ /* istanbul ignore next */var isArray=Array.isArray||function(value){return value&&(typeof value==='undefined'?'undefined':_typeof2(value))==='object'?toString.call(value)==='[object Array]':false;};exports.isArray=isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array,value){for(var i=0,len=array.length;i<len;i++){if(array[i]===value){return i;}}return -1;}function escapeExpression(string){if(typeof string!=='string'){ // don't escape SafeStrings, since they're already safe
if(string&&string.toHTML){return string.toHTML();}else if(string==null){return '';}else if(!string){return string+'';} // Force a string conversion as this will be done by the append regardless and
// the regex test will do this transparently behind the scenes, causing issues if
// an object's to string has escaped characters in it.
string=''+string;}if(!possible.test(string)){return string;}return string.replace(badChars,escapeChar);}function isEmpty(value){if(!value&&value!==0){return true;}else if(isArray(value)&&value.length===0){return true;}else {return false;}}function createFrame(object){var frame=extend({},object);frame._parent=object;return frame;}function blockParams(params,ids){params.path=ids;return params;}function appendContextPath(contextPath,id){return (contextPath?contextPath+'.':'')+id;}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 12 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){'use strict';var errorProps=['description','fileName','lineNumber','message','name','number','stack'];function Exception(message,node){var loc=node&&node.loc,line=undefined,column=undefined;if(loc){line=loc.start.line;column=loc.start.column;message+=' - '+line+':'+column;}var tmp=Error.prototype.constructor.call(this,message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
for(var idx=0;idx<errorProps.length;idx++){this[errorProps[idx]]=tmp[errorProps[idx]];} /* istanbul ignore else */if(Error.captureStackTrace){Error.captureStackTrace(this,Exception);}if(loc){this.lineNumber=line;this.column=column;}}Exception.prototype=new Error();module.exports=Exception;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 13 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(14),__webpack_require__(15),__webpack_require__(16),__webpack_require__(17),__webpack_require__(18),__webpack_require__(19),__webpack_require__(20)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_helpersBlockHelperMissing,_helpersEach,_helpersHelperMissing,_helpersIf,_helpersLog,_helpersLookup,_helpersWith){'use strict';exports.__esModule=true;exports.registerDefaultHelpers=registerDefaultHelpers; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _registerBlockHelperMissing=_interopRequireDefault(_helpersBlockHelperMissing);var _registerEach=_interopRequireDefault(_helpersEach);var _registerHelperMissing=_interopRequireDefault(_helpersHelperMissing);var _registerIf=_interopRequireDefault(_helpersIf);var _registerLog=_interopRequireDefault(_helpersLog);var _registerLookup=_interopRequireDefault(_helpersLookup);var _registerWith=_interopRequireDefault(_helpersWith);function registerDefaultHelpers(instance){_registerBlockHelperMissing['default'](instance);_registerEach['default'](instance);_registerHelperMissing['default'](instance);_registerIf['default'](instance);_registerLog['default'](instance);_registerLookup['default'](instance);_registerWith['default'](instance);}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 14 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){'use strict';module.exports=function(instance){instance.registerHelper('blockHelperMissing',function(context,options){var inverse=options.inverse,fn=options.fn;if(context===true){return fn(this);}else if(context===false||context==null){return inverse(this);}else if(_utils.isArray(context)){if(context.length>0){if(options.ids){options.ids=[options.name];}return instance.helpers.each(context,options);}else {return inverse(this);}}else {if(options.data&&options.ids){var data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.name);options={data:data};}return fn(context,options);}});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 15 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11),__webpack_require__(12)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils,_exception){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);module.exports=function(instance){instance.registerHelper('each',function(context,options){if(!options){throw new _Exception['default']('Must pass iterator to #each');}var fn=options.fn,inverse=options.inverse,i=0,ret='',data=undefined,contextPath=undefined;if(options.data&&options.ids){contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0])+'.';}if(_utils.isFunction(context)){context=context.call(this);}if(options.data){data=_utils.createFrame(options.data);}function execIteration(field,index,last){if(data){data.key=field;data.index=index;data.first=index===0;data.last=!!last;if(contextPath){data.contextPath=contextPath+field;}}ret=ret+fn(context[field],{data:data,blockParams:_utils.blockParams([context[field],field],[contextPath+field,null])});}if(context&&(typeof context==='undefined'?'undefined':_typeof2(context))==='object'){if(_utils.isArray(context)){for(var j=context.length;i<j;i++){if(i in context){execIteration(i,i,i===context.length-1);}}}else {var priorKey=undefined;for(var key in context){if(context.hasOwnProperty(key)){ // We're running the iterations one step out of sync so we can detect
// the last iteration without have to scan the object twice and create
// an itermediate keys array.
if(priorKey!==undefined){execIteration(priorKey,i-1);}priorKey=key;i++;}}if(priorKey!==undefined){execIteration(priorKey,i-1,true);}}}if(i===0){ret=inverse(this);}return ret;});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 16 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(12)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_exception){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);module.exports=function(instance){instance.registerHelper('helperMissing',function() /* [args, ]options */{if(arguments.length===1){ // A missing field in a {{foo}} construct.
return undefined;}else { // Someone is actually trying to call something, blow up.
throw new _Exception['default']('Missing helper: "'+arguments[arguments.length-1].name+'"');}});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 17 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){'use strict';module.exports=function(instance){instance.registerHelper('if',function(conditional,options){if(_utils.isFunction(conditional)){conditional=conditional.call(this);} // Default behavior is to render the positive path if the value is truthy and not empty.
// The `includeZero` option may be set to treat the condtional as purely not empty based on the
// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
if(!options.hash.includeZero&&!conditional||_utils.isEmpty(conditional)){return options.inverse(this);}else {return options.fn(this);}});instance.registerHelper('unless',function(conditional,options){return instance.helpers['if'].call(this,conditional,{fn:options.inverse,inverse:options.fn,hash:options.hash});});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 18 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){'use strict';module.exports=function(instance){instance.registerHelper('log',function() /* message, options */{var args=[undefined],options=arguments[arguments.length-1];for(var i=0;i<arguments.length-1;i++){args.push(arguments[i]);}var level=1;if(options.hash.level!=null){level=options.hash.level;}else if(options.data&&options.data.level!=null){level=options.data.level;}args[0]=level;instance.log.apply(instance,args);});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 19 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){'use strict';module.exports=function(instance){instance.registerHelper('lookup',function(obj,field){return obj&&obj[field];});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 20 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){'use strict';module.exports=function(instance){instance.registerHelper('with',function(context,options){if(_utils.isFunction(context)){context=context.call(this);}var fn=options.fn;if(!_utils.isEmpty(context)){var data=options.data;if(options.data&&options.ids){data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0]);}return fn(context,{data:data,blockParams:_utils.blockParams([context],[data&&data.contextPath])});}else {return options.inverse(this);}});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 21 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(22)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_decoratorsInline){'use strict';exports.__esModule=true;exports.registerDefaultDecorators=registerDefaultDecorators; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _registerInline=_interopRequireDefault(_decoratorsInline);function registerDefaultDecorators(instance){_registerInline['default'](instance);}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 22 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){'use strict';module.exports=function(instance){instance.registerDecorator('inline',function(fn,props,container,options){var ret=fn;if(!props.partials){props.partials={};ret=function(context,options){ // Create a new partials stack frame prior to exec.
var original=container.partials;container.partials=_utils.extend({},original,props.partials);var ret=fn(context,options);container.partials=original;return ret;};}props.partials[options.args[0]]=options.fn;return ret;});};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 23 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){'use strict';var logger={methodMap:['debug','info','warn','error'],level:'info', // Maps a given level value to the `methodMap` indexes above.
lookupLevel:function lookupLevel(level){if(typeof level==='string'){var levelMap=_utils.indexOf(logger.methodMap,level.toLowerCase());if(levelMap>=0){level=levelMap;}else {level=parseInt(level,10);}}return level;}, // Can be overridden in the host environment
log:function log(level){level=logger.lookupLevel(level);if(typeof console!=='undefined'&&logger.lookupLevel(logger.level)<=level){var method=logger.methodMap[level];if(!console[method]){ // eslint-disable-line no-console
method='log';}for(var _len=arguments.length,message=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){message[_key-1]=arguments[_key];}console[method].apply(console,message); // eslint-disable-line no-console
}}};module.exports=logger;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 24 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){ // Build out our basic SafeString type
'use strict';function SafeString(string){this.string=string;}SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return ''+this.string;};module.exports=SafeString;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 25 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(11),__webpack_require__(12),__webpack_require__(10)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_utils,_exception,_base){'use strict';exports.__esModule=true;exports.checkRevision=checkRevision;exports.template=template;exports.wrapProgram=wrapProgram;exports.resolvePartial=resolvePartial;exports.invokePartial=invokePartial;exports.noop=noop; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);function checkRevision(compilerInfo){var compilerRevision=compilerInfo&&compilerInfo[0]||1,currentRevision=_base.COMPILER_REVISION;if(compilerRevision!==currentRevision){if(compilerRevision<currentRevision){var runtimeVersions=_base.REVISION_CHANGES[currentRevision],compilerVersions=_base.REVISION_CHANGES[compilerRevision];throw new _Exception['default']('Template was precompiled with an older version of Handlebars than the current runtime. '+'Please update your precompiler to a newer version ('+runtimeVersions+') or downgrade your runtime to an older version ('+compilerVersions+').');}else { // Use the embedded version info since the runtime doesn't know about this revision yet
throw new _Exception['default']('Template was precompiled with a newer version of Handlebars than the current runtime. '+'Please update your runtime to a newer version ('+compilerInfo[1]+').');}}}function template(templateSpec,env){ /* istanbul ignore next */if(!env){throw new _Exception['default']('No environment passed to template');}if(!templateSpec||!templateSpec.main){throw new _Exception['default']('Unknown template object: '+(typeof templateSpec==='undefined'?'undefined':_typeof2(templateSpec)));}templateSpec.main.decorator=templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
// for external users to override these as psuedo-supported APIs.
env.VM.checkRevision(templateSpec.compiler);function invokePartialWrapper(partial,context,options){if(options.hash){context=_utils.extend({},context,options.hash);if(options.ids){options.ids[0]=true;}}partial=env.VM.resolvePartial.call(this,partial,context,options);var result=env.VM.invokePartial.call(this,partial,context,options);if(result==null&&env.compile){options.partials[options.name]=env.compile(partial,templateSpec.compilerOptions,env);result=options.partials[options.name](context,options);}if(result!=null){if(options.indent){var lines=result.split('\n');for(var i=0,l=lines.length;i<l;i++){if(!lines[i]&&i+1===l){break;}lines[i]=options.indent+lines[i];}result=lines.join('\n');}return result;}else {throw new _Exception['default']('The partial '+options.name+' could not be compiled when running in runtime-only mode');}} // Just add water
var container={strict:function strict(obj,name){if(!(name in obj)){throw new _Exception['default']('"'+name+'" not defined in '+obj);}return obj[name];},lookup:function lookup(depths,name){var len=depths.length;for(var i=0;i<len;i++){if(depths[i]&&depths[i][name]!=null){return depths[i][name];}}},lambda:function lambda(current,context){return typeof current==='function'?current.call(context):current;},escapeExpression:_utils.escapeExpression,invokePartial:invokePartialWrapper,fn:function fn(i){var ret=templateSpec[i];ret.decorator=templateSpec[i+'_d'];return ret;},programs:[],program:function program(i,data,declaredBlockParams,blockParams,depths){var programWrapper=this.programs[i],fn=this.fn(i);if(data||depths||blockParams||declaredBlockParams){programWrapper=wrapProgram(this,i,fn,data,declaredBlockParams,blockParams,depths);}else if(!programWrapper){programWrapper=this.programs[i]=wrapProgram(this,i,fn);}return programWrapper;},data:function data(value,depth){while(value&&depth--){value=value._parent;}return value;},merge:function merge(param,common){var obj=param||common;if(param&&common&&param!==common){obj=_utils.extend({},common,param);}return obj;},noop:env.VM.noop,compilerInfo:templateSpec.compiler};function ret(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var data=options.data;ret._setup(options);if(!options.partial&&templateSpec.useData){data=initData(context,data);}var depths=undefined,blockParams=templateSpec.useBlockParams?[]:undefined;if(templateSpec.useDepths){if(options.depths){depths=context!==options.depths[0]?[context].concat(options.depths):options.depths;}else {depths=[context];}}function main(context /*, options*/){return ''+templateSpec.main(container,context,container.helpers,container.partials,data,blockParams,depths);}main=executeDecorators(templateSpec.main,main,container,options.depths||[],data,blockParams);return main(context,options);}ret.isTop=true;ret._setup=function(options){if(!options.partial){container.helpers=container.merge(options.helpers,env.helpers);if(templateSpec.usePartial){container.partials=container.merge(options.partials,env.partials);}if(templateSpec.usePartial||templateSpec.useDecorators){container.decorators=container.merge(options.decorators,env.decorators);}}else {container.helpers=options.helpers;container.partials=options.partials;container.decorators=options.decorators;}};ret._child=function(i,data,blockParams,depths){if(templateSpec.useBlockParams&&!blockParams){throw new _Exception['default']('must pass block params');}if(templateSpec.useDepths&&!depths){throw new _Exception['default']('must pass parent depths');}return wrapProgram(container,i,templateSpec[i],data,0,blockParams,depths);};return ret;}function wrapProgram(container,i,fn,data,declaredBlockParams,blockParams,depths){function prog(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var currentDepths=depths;if(depths&&context!==depths[0]){currentDepths=[context].concat(depths);}return fn(container,context,container.helpers,container.partials,options.data||data,blockParams&&[options.blockParams].concat(blockParams),currentDepths);}prog=executeDecorators(fn,prog,container,depths,data,blockParams);prog.program=i;prog.depth=depths?depths.length:0;prog.blockParams=declaredBlockParams||0;return prog;}function resolvePartial(partial,context,options){if(!partial){if(options.name==='@partial-block'){partial=options.data['partial-block'];}else {partial=options.partials[options.name];}}else if(!partial.call&&!options.name){ // This is a dynamic partial that returned a string
options.name=partial;partial=options.partials[partial];}return partial;}function invokePartial(partial,context,options){options.partial=true;if(options.ids){options.data.contextPath=options.ids[0]||options.data.contextPath;}var partialBlock=undefined;if(options.fn&&options.fn!==noop){options.data=_base.createFrame(options.data);partialBlock=options.data['partial-block']=options.fn;if(partialBlock.partials){options.partials=_utils.extend({},options.partials,partialBlock.partials);}}if(partial===undefined&&partialBlock){partial=partialBlock;}if(partial===undefined){throw new _Exception['default']('The partial '+options.name+' could not be found');}else if(partial instanceof Function){return partial(context,options);}}function noop(){return '';}function initData(context,data){if(!data||!('root' in data)){data=data?_base.createFrame(data):{};data.root=context;}return data;}function executeDecorators(fn,prog,container,depths,data,blockParams){if(fn.decorator){var props={};prog=fn.decorator(prog,props,container,depths&&depths[0],data,blockParams,depths);_utils.extend(prog,props);}return prog;}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 26 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function(global){!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){ /* global window */'use strict';module.exports=function(Handlebars){ /* istanbul ignore next */var root=typeof global!=='undefined'?global:window,$Handlebars=root.Handlebars; /* istanbul ignore next */Handlebars.noConflict=function(){if(root.Handlebars===Handlebars){root.Handlebars=$Handlebars;}return Handlebars;};};}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}()); /***/}, /* 27 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module){'use strict';var AST={ // Public API used to evaluate derived attributes regarding AST nodes
helpers:{ // a mustache is definitely a helper if:
// * it is an eligible helper, and
// * it has at least one parameter or hash segment
helperExpression:function helperExpression(node){return node.type==='SubExpression'||(node.type==='MustacheStatement'||node.type==='BlockStatement')&&!!(node.params&&node.params.length||node.hash);},scopedId:function scopedId(path){return (/^\.|this\b/.test(path.original));}, // an ID is simple if it only has one part, and that part is not
// `..` or `this`.
simpleId:function simpleId(path){return path.parts.length===1&&!AST.helpers.scopedId(path)&&!path.depth;}}}; // Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
module.exports=AST;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 28 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(29),__webpack_require__(30),__webpack_require__(32),__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_parser,_whitespaceControl,_helpers,_utils){'use strict';exports.__esModule=true;exports.parse=parse; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _parser2=_interopRequireDefault(_parser);var _WhitespaceControl=_interopRequireDefault(_whitespaceControl);exports.parser=_parser2['default'];var yy={};_utils.extend(yy,_helpers);function parse(input,options){ // Just return if an already-compiled AST was passed in.
if(input.type==='Program'){return input;}_parser2['default'].yy=yy; // Altering the shared object here, but this is ok as parser is a sync operation
yy.locInfo=function(locInfo){return new yy.SourceLocation(options&&options.srcName,locInfo);};var strip=new _WhitespaceControl['default'](options);return strip.accept(_parser2['default'].parse(input));}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 29 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports],__WEBPACK_AMD_DEFINE_RESULT__=function(exports){ /* istanbul ignore next */ /* Jison generated parser */"use strict";var handlebars=function(){var parser={trace:function trace(){},yy:{},symbols_:{"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"partialBlock":12,"content":13,"COMMENT":14,"CONTENT":15,"openRawBlock":16,"rawBlock_repetition_plus0":17,"END_RAW_BLOCK":18,"OPEN_RAW_BLOCK":19,"helperName":20,"openRawBlock_repetition0":21,"openRawBlock_option0":22,"CLOSE_RAW_BLOCK":23,"openBlock":24,"block_option0":25,"closeBlock":26,"openInverse":27,"block_option1":28,"OPEN_BLOCK":29,"openBlock_repetition0":30,"openBlock_option0":31,"openBlock_option1":32,"CLOSE":33,"OPEN_INVERSE":34,"openInverse_repetition0":35,"openInverse_option0":36,"openInverse_option1":37,"openInverseChain":38,"OPEN_INVERSE_CHAIN":39,"openInverseChain_repetition0":40,"openInverseChain_option0":41,"openInverseChain_option1":42,"inverseAndProgram":43,"INVERSE":44,"inverseChain":45,"inverseChain_option0":46,"OPEN_ENDBLOCK":47,"OPEN":48,"mustache_repetition0":49,"mustache_option0":50,"OPEN_UNESCAPED":51,"mustache_repetition1":52,"mustache_option1":53,"CLOSE_UNESCAPED":54,"OPEN_PARTIAL":55,"partialName":56,"partial_repetition0":57,"partial_option0":58,"openPartialBlock":59,"OPEN_PARTIAL_BLOCK":60,"openPartialBlock_repetition0":61,"openPartialBlock_option0":62,"param":63,"sexpr":64,"OPEN_SEXPR":65,"sexpr_repetition0":66,"sexpr_option0":67,"CLOSE_SEXPR":68,"hash":69,"hash_repetition_plus0":70,"hashSegment":71,"ID":72,"EQUALS":73,"blockParams":74,"OPEN_BLOCK_PARAMS":75,"blockParams_repetition_plus0":76,"CLOSE_BLOCK_PARAMS":77,"path":78,"dataName":79,"STRING":80,"NUMBER":81,"BOOLEAN":82,"UNDEFINED":83,"NULL":84,"DATA":85,"pathSegments":86,"SEP":87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$ /**/){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1];break;case 2:this.$=yy.prepareProgram($$[$0]);break;case 3:this.$=$$[$0];break;case 4:this.$=$$[$0];break;case 5:this.$=$$[$0];break;case 6:this.$=$$[$0];break;case 7:this.$=$$[$0];break;case 8:this.$=$$[$0];break;case 9:this.$={type:'CommentStatement',value:yy.stripComment($$[$0]),strip:yy.stripFlags($$[$0],$$[$0]),loc:yy.locInfo(this._$)};break;case 10:this.$={type:'ContentStatement',original:$$[$0],value:$$[$0],loc:yy.locInfo(this._$)};break;case 11:this.$=yy.prepareRawBlock($$[$0-2],$$[$0-1],$$[$0],this._$);break;case 12:this.$={path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1]};break;case 13:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],false,this._$);break;case 14:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],true,this._$);break;case 15:this.$={open:$$[$0-5],path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 16:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 17:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 18:this.$={strip:yy.stripFlags($$[$0-1],$$[$0-1]),program:$$[$0]};break;case 19:var inverse=yy.prepareBlock($$[$0-2],$$[$0-1],$$[$0],$$[$0],false,this._$),program=yy.prepareProgram([inverse],$$[$0-1].loc);program.chained=true;this.$={strip:$$[$0-2].strip,program:program,chain:true};break;case 20:this.$=$$[$0];break;case 21:this.$={path:$$[$0-1],strip:yy.stripFlags($$[$0-2],$$[$0])};break;case 22:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 23:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 24:this.$={type:'PartialStatement',name:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],indent:'',strip:yy.stripFlags($$[$0-4],$$[$0]),loc:yy.locInfo(this._$)};break;case 25:this.$=yy.preparePartialBlock($$[$0-2],$$[$0-1],$$[$0],this._$);break;case 26:this.$={path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],strip:yy.stripFlags($$[$0-4],$$[$0])};break;case 27:this.$=$$[$0];break;case 28:this.$=$$[$0];break;case 29:this.$={type:'SubExpression',path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],loc:yy.locInfo(this._$)};break;case 30:this.$={type:'Hash',pairs:$$[$0],loc:yy.locInfo(this._$)};break;case 31:this.$={type:'HashPair',key:yy.id($$[$0-2]),value:$$[$0],loc:yy.locInfo(this._$)};break;case 32:this.$=yy.id($$[$0-1]);break;case 33:this.$=$$[$0];break;case 34:this.$=$$[$0];break;case 35:this.$={type:'StringLiteral',value:$$[$0],original:$$[$0],loc:yy.locInfo(this._$)};break;case 36:this.$={type:'NumberLiteral',value:Number($$[$0]),original:Number($$[$0]),loc:yy.locInfo(this._$)};break;case 37:this.$={type:'BooleanLiteral',value:$$[$0]==='true',original:$$[$0]==='true',loc:yy.locInfo(this._$)};break;case 38:this.$={type:'UndefinedLiteral',original:undefined,value:undefined,loc:yy.locInfo(this._$)};break;case 39:this.$={type:'NullLiteral',original:null,value:null,loc:yy.locInfo(this._$)};break;case 40:this.$=$$[$0];break;case 41:this.$=$$[$0];break;case 42:this.$=yy.preparePath(true,$$[$0],this._$);break;case 43:this.$=yy.preparePath(false,$$[$0],this._$);break;case 44:$$[$0-2].push({part:yy.id($$[$0]),original:$$[$0],separator:$$[$0-1]});this.$=$$[$0-2];break;case 45:this.$=[{part:yy.id($$[$0]),original:$$[$0]}];break;case 46:this.$=[];break;case 47:$$[$0-1].push($$[$0]);break;case 48:this.$=[$$[$0]];break;case 49:$$[$0-1].push($$[$0]);break;case 50:this.$=[];break;case 51:$$[$0-1].push($$[$0]);break;case 58:this.$=[];break;case 59:$$[$0-1].push($$[$0]);break;case 64:this.$=[];break;case 65:$$[$0-1].push($$[$0]);break;case 70:this.$=[];break;case 71:$$[$0-1].push($$[$0]);break;case 78:this.$=[];break;case 79:$$[$0-1].push($$[$0]);break;case 82:this.$=[];break;case 83:$$[$0-1].push($$[$0]);break;case 86:this.$=[];break;case 87:$$[$0-1].push($$[$0]);break;case 90:this.$=[];break;case 91:$$[$0-1].push($$[$0]);break;case 94:this.$=[];break;case 95:$$[$0-1].push($$[$0]);break;case 98:this.$=[$$[$0]];break;case 99:$$[$0-1].push($$[$0]);break;case 100:this.$=[$$[$0]];break;case 101:$$[$0-1].push($$[$0]);break;}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n;}function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=="number"){token=self.symbols_[token]||token;}return token;}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state];}else {if(symbol===null||typeof symbol=="undefined"){symbol=lex();}action=table[state]&&table[state][symbol];}if(typeof action==="undefined"||!action.length||!action[0]){var errStr="";if(!recovering){expected=[];for(p in table[state]){if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'");}}if(this.lexer.showPosition){errStr="Parse error on line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'";}else {errStr="Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==1?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'");}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected});}}if(action[0] instanceof Array&&action.length>1){throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);}switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--;}else {symbol=preErrorSymbol;preErrorSymbol=null;}break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]];}r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=="undefined"){return r;}if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len);}stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true;}}return true;}}; /* Jison generated lexer */var lexer=function(){var lexer={EOF:1,parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash);}else {throw new Error(str);}},setInput:function setInput(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this;},input:function input(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++;}else {this.yylloc.last_column++;}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return ch;},unput:function unput(ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1); //this.yyleng -= len;
this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1)this.yylineno-=lines.length-1;var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len];}return this;},more:function more(){this._more=true;return this;},less:function less(n){this.unput(this.match.slice(n));},pastInput:function pastInput(){var past=this.matched.substr(0,this.matched.length-this.match.length);return (past.length>20?'...':'')+past.substr(-20).replace(/\n/g,"");},upcomingInput:function upcomingInput(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length);}return (next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,"");},showPosition:function showPosition(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^";},next:function next(){if(this.done){return this.EOF;}if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext='';this.match='';}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break;}}if(match){lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng];}this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return;}if(this._input===""){return this.EOF;}else {return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:"",token:null,line:this.yylineno});}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r;}else {return this.lex();}},begin:function begin(condition){this.conditionStack.push(condition);},popState:function popState(){return this.conditionStack.pop();},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;},topState:function topState(){return this.conditionStack[this.conditionStack.length-2];},pushState:function begin(condition){this.begin(condition);}};lexer.options={};lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START /**/){function strip(start,end){return yy_.yytext=yy_.yytext.substr(start,yy_.yyleng-end);}var YYSTATE=YY_START;switch($avoiding_name_collisions){case 0:if(yy_.yytext.slice(-2)==="\\\\"){strip(0,1);this.begin("mu");}else if(yy_.yytext.slice(-1)==="\\"){strip(0,1);this.begin("emu");}else {this.begin("mu");}if(yy_.yytext)return 15;break;case 1:return 15;break;case 2:this.popState();return 15;break;case 3:this.begin('raw');return 15;break;case 4:this.popState(); // Should be using `this.topState()` below, but it currently
// returns the second top instead of the first top. Opened an
// issue about it at https://github.com/zaach/jison/issues/291
if(this.conditionStack[this.conditionStack.length-1]==='raw'){return 15;}else {yy_.yytext=yy_.yytext.substr(5,yy_.yyleng-9);return 'END_RAW_BLOCK';}break;case 5:return 15;break;case 6:this.popState();return 14;break;case 7:return 65;break;case 8:return 68;break;case 9:return 19;break;case 10:this.popState();this.begin('raw');return 23;break;case 11:return 55;break;case 12:return 60;break;case 13:return 29;break;case 14:return 47;break;case 15:this.popState();return 44;break;case 16:this.popState();return 44;break;case 17:return 34;break;case 18:return 39;break;case 19:return 51;break;case 20:return 48;break;case 21:this.unput(yy_.yytext);this.popState();this.begin('com');break;case 22:this.popState();return 14;break;case 23:return 48;break;case 24:return 73;break;case 25:return 72;break;case 26:return 72;break;case 27:return 87;break;case 28: // ignore whitespace
break;case 29:this.popState();return 54;break;case 30:this.popState();return 33;break;case 31:yy_.yytext=strip(1,2).replace(/\\"/g,'"');return 80;break;case 32:yy_.yytext=strip(1,2).replace(/\\'/g,"'");return 80;break;case 33:return 85;break;case 34:return 82;break;case 35:return 82;break;case 36:return 83;break;case 37:return 84;break;case 38:return 81;break;case 39:return 75;break;case 40:return 77;break;case 41:return 72;break;case 42:yy_.yytext=yy_.yytext.replace(/\\([\\\]])/g,'$1');return 72;break;case 43:return 'INVALID';break;case 44:return 5;break;}};lexer.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/];lexer.conditions={"mu":{"rules":[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[6],"inclusive":false},"raw":{"rules":[3,4,5],"inclusive":false},"INITIAL":{"rules":[0,1,44],"inclusive":true}};return lexer;}();parser.lexer=lexer;function Parser(){this.yy={};}Parser.prototype=parser;parser.Parser=Parser;return new Parser();}();exports.__esModule=true;exports['default']=handlebars;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 30 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(31)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_visitor){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Visitor=_interopRequireDefault(_visitor);function WhitespaceControl(){var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];this.options=options;}WhitespaceControl.prototype=new _Visitor['default']();WhitespaceControl.prototype.Program=function(program){var doStandalone=!this.options.ignoreStandalone;var isRoot=!this.isRootSeen;this.isRootSeen=true;var body=program.body;for(var i=0,l=body.length;i<l;i++){var current=body[i],strip=this.accept(current);if(!strip){continue;}var _isPrevWhitespace=isPrevWhitespace(body,i,isRoot),_isNextWhitespace=isNextWhitespace(body,i,isRoot),openStandalone=strip.openStandalone&&_isPrevWhitespace,closeStandalone=strip.closeStandalone&&_isNextWhitespace,inlineStandalone=strip.inlineStandalone&&_isPrevWhitespace&&_isNextWhitespace;if(strip.close){omitRight(body,i,true);}if(strip.open){omitLeft(body,i,true);}if(doStandalone&&inlineStandalone){omitRight(body,i);if(omitLeft(body,i)){ // If we are on a standalone node, save the indent info for partials
if(current.type==='PartialStatement'){ // Pull out the whitespace from the final line
current.indent=/([ \t]+$)/.exec(body[i-1].original)[1];}}}if(doStandalone&&openStandalone){omitRight((current.program||current.inverse).body); // Strip out the previous content node if it's whitespace only
omitLeft(body,i);}if(doStandalone&&closeStandalone){ // Always strip the next node
omitRight(body,i);omitLeft((current.inverse||current.program).body);}}return program;};WhitespaceControl.prototype.BlockStatement=WhitespaceControl.prototype.DecoratorBlock=WhitespaceControl.prototype.PartialBlockStatement=function(block){this.accept(block.program);this.accept(block.inverse); // Find the inverse program that is involed with whitespace stripping.
var program=block.program||block.inverse,inverse=block.program&&block.inverse,firstInverse=inverse,lastInverse=inverse;if(inverse&&inverse.chained){firstInverse=inverse.body[0].program; // Walk the inverse chain to find the last inverse that is actually in the chain.
while(lastInverse.chained){lastInverse=lastInverse.body[lastInverse.body.length-1].program;}}var strip={open:block.openStrip.open,close:block.closeStrip.close, // Determine the standalone candiacy. Basically flag our content as being possibly standalone
// so our parent can determine if we actually are standalone
openStandalone:isNextWhitespace(program.body),closeStandalone:isPrevWhitespace((firstInverse||program).body)};if(block.openStrip.close){omitRight(program.body,null,true);}if(inverse){var inverseStrip=block.inverseStrip;if(inverseStrip.open){omitLeft(program.body,null,true);}if(inverseStrip.close){omitRight(firstInverse.body,null,true);}if(block.closeStrip.open){omitLeft(lastInverse.body,null,true);} // Find standalone else statments
if(!this.options.ignoreStandalone&&isPrevWhitespace(program.body)&&isNextWhitespace(firstInverse.body)){omitLeft(program.body);omitRight(firstInverse.body);}}else if(block.closeStrip.open){omitLeft(program.body,null,true);}return strip;};WhitespaceControl.prototype.Decorator=WhitespaceControl.prototype.MustacheStatement=function(mustache){return mustache.strip;};WhitespaceControl.prototype.PartialStatement=WhitespaceControl.prototype.CommentStatement=function(node){ /* istanbul ignore next */var strip=node.strip||{};return {inlineStandalone:true,open:strip.open,close:strip.close};};function isPrevWhitespace(body,i,isRoot){if(i===undefined){i=body.length;} // Nodes that end with newlines are considered whitespace (but are special
// cased for strip operations)
var prev=body[i-1],sibling=body[i-2];if(!prev){return isRoot;}if(prev.type==='ContentStatement'){return (sibling||!isRoot?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(prev.original);}}function isNextWhitespace(body,i,isRoot){if(i===undefined){i=-1;}var next=body[i+1],sibling=body[i+2];if(!next){return isRoot;}if(next.type==='ContentStatement'){return (sibling||!isRoot?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(next.original);}} // Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body,i,multiple){var current=body[i==null?0:i+1];if(!current||current.type!=='ContentStatement'||!multiple&&current.rightStripped){return;}var original=current.value;current.value=current.value.replace(multiple?/^\s+/:/^[ \t]*\r?\n?/,'');current.rightStripped=current.value!==original;} // Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body,i,multiple){var current=body[i==null?body.length-1:i-1];if(!current||current.type!=='ContentStatement'||!multiple&&current.leftStripped){return;} // We omit the last node if it's whitespace only and not preceeded by a non-content node.
var original=current.value;current.value=current.value.replace(multiple?/\s+$/:/[ \t]+$/,'');current.leftStripped=current.value!==original;return current.leftStripped;}module.exports=WhitespaceControl;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 31 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(12)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_exception){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);function Visitor(){this.parents=[];}Visitor.prototype={constructor:Visitor,mutating:false, // Visits a given value. If mutating, will replace the value if necessary.
acceptKey:function acceptKey(node,name){var value=this.accept(node[name]);if(this.mutating){ // Hacky sanity check: This may have a few false positives for type for the helper
// methods but will generally do the right thing without a lot of overhead.
if(value&&!Visitor.prototype[value.type]){throw new _Exception['default']('Unexpected node type "'+value.type+'" found when accepting '+name+' on '+node.type);}node[name]=value;}}, // Performs an accept operation with added sanity check to ensure
// required keys are not removed.
acceptRequired:function acceptRequired(node,name){this.acceptKey(node,name);if(!node[name]){throw new _Exception['default'](node.type+' requires '+name);}}, // Traverses a given array. If mutating, empty respnses will be removed
// for child elements.
acceptArray:function acceptArray(array){for(var i=0,l=array.length;i<l;i++){this.acceptKey(array,i);if(!array[i]){array.splice(i,1);i--;l--;}}},accept:function accept(object){if(!object){return;} /* istanbul ignore next: Sanity code */if(!this[object.type]){throw new _Exception['default']('Unknown type: '+object.type,object);}if(this.current){this.parents.unshift(this.current);}this.current=object;var ret=this[object.type](object);this.current=this.parents.shift();if(!this.mutating||ret){return ret;}else if(ret!==false){return object;}},Program:function Program(program){this.acceptArray(program.body);},MustacheStatement:visitSubExpression,Decorator:visitSubExpression,BlockStatement:visitBlock,DecoratorBlock:visitBlock,PartialStatement:visitPartial,PartialBlockStatement:function PartialBlockStatement(partial){visitPartial.call(this,partial);this.acceptKey(partial,'program');},ContentStatement:function ContentStatement() /* content */{},CommentStatement:function CommentStatement() /* comment */{},SubExpression:visitSubExpression,PathExpression:function PathExpression() /* path */{},StringLiteral:function StringLiteral() /* string */{},NumberLiteral:function NumberLiteral() /* number */{},BooleanLiteral:function BooleanLiteral() /* bool */{},UndefinedLiteral:function UndefinedLiteral() /* literal */{},NullLiteral:function NullLiteral() /* literal */{},Hash:function Hash(hash){this.acceptArray(hash.pairs);},HashPair:function HashPair(pair){this.acceptRequired(pair,'value');}};function visitSubExpression(mustache){this.acceptRequired(mustache,'path');this.acceptArray(mustache.params);this.acceptKey(mustache,'hash');}function visitBlock(block){visitSubExpression.call(this,block);this.acceptKey(block,'program');this.acceptKey(block,'inverse');}function visitPartial(partial){this.acceptRequired(partial,'name');this.acceptArray(partial.params);this.acceptKey(partial,'hash');}module.exports=Visitor;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 32 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(12)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_exception){'use strict';exports.__esModule=true;exports.SourceLocation=SourceLocation;exports.id=id;exports.stripFlags=stripFlags;exports.stripComment=stripComment;exports.preparePath=preparePath;exports.prepareMustache=prepareMustache;exports.prepareRawBlock=prepareRawBlock;exports.prepareBlock=prepareBlock;exports.prepareProgram=prepareProgram;exports.preparePartialBlock=preparePartialBlock; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);function validateClose(open,close){close=close.path?close.path.original:close;if(open.path.original!==close){var errorNode={loc:open.path.loc};throw new _Exception['default'](open.path.original+" doesn't match "+close,errorNode);}}function SourceLocation(source,locInfo){this.source=source;this.start={line:locInfo.first_line,column:locInfo.first_column};this.end={line:locInfo.last_line,column:locInfo.last_column};}function id(token){if(/^\[.*\]$/.test(token)){return token.substr(1,token.length-2);}else {return token;}}function stripFlags(open,close){return {open:open.charAt(2)==='~',close:close.charAt(close.length-3)==='~'};}function stripComment(comment){return comment.replace(/^\{\{~?\!-?-?/,'').replace(/-?-?~?\}\}$/,'');}function preparePath(data,parts,loc){loc=this.locInfo(loc);var original=data?'@':'',dig=[],depth=0,depthString='';for(var i=0,l=parts.length;i<l;i++){var part=parts[i].part, // If we have [] syntax then we do not treat path references as operators,
// i.e. foo.[this] resolves to approximately context.foo['this']
isLiteral=parts[i].original!==part;original+=(parts[i].separator||'')+part;if(!isLiteral&&(part==='..'||part==='.'||part==='this')){if(dig.length>0){throw new _Exception['default']('Invalid path: '+original,{loc:loc});}else if(part==='..'){depth++;depthString+='../';}}else {dig.push(part);}}return {type:'PathExpression',data:data,depth:depth,parts:dig,original:original,loc:loc};}function prepareMustache(path,params,hash,open,strip,locInfo){ // Must use charAt to support IE pre-10
var escapeFlag=open.charAt(3)||open.charAt(2),escaped=escapeFlag!=='{'&&escapeFlag!=='&';var decorator=/\*/.test(open);return {type:decorator?'Decorator':'MustacheStatement',path:path,params:params,hash:hash,escaped:escaped,strip:strip,loc:this.locInfo(locInfo)};}function prepareRawBlock(openRawBlock,contents,close,locInfo){validateClose(openRawBlock,close);locInfo=this.locInfo(locInfo);var program={type:'Program',body:contents,strip:{},loc:locInfo};return {type:'BlockStatement',path:openRawBlock.path,params:openRawBlock.params,hash:openRawBlock.hash,program:program,openStrip:{},inverseStrip:{},closeStrip:{},loc:locInfo};}function prepareBlock(openBlock,program,inverseAndProgram,close,inverted,locInfo){if(close&&close.path){validateClose(openBlock,close);}var decorator=/\*/.test(openBlock.open);program.blockParams=openBlock.blockParams;var inverse=undefined,inverseStrip=undefined;if(inverseAndProgram){if(decorator){throw new _Exception['default']('Unexpected inverse block on decorator',inverseAndProgram);}if(inverseAndProgram.chain){inverseAndProgram.program.body[0].closeStrip=close.strip;}inverseStrip=inverseAndProgram.strip;inverse=inverseAndProgram.program;}if(inverted){inverted=inverse;inverse=program;program=inverted;}return {type:decorator?'DecoratorBlock':'BlockStatement',path:openBlock.path,params:openBlock.params,hash:openBlock.hash,program:program,inverse:inverse,openStrip:openBlock.strip,inverseStrip:inverseStrip,closeStrip:close&&close.strip,loc:this.locInfo(locInfo)};}function prepareProgram(statements,loc){if(!loc&&statements.length){var firstLoc=statements[0].loc,lastLoc=statements[statements.length-1].loc; /* istanbul ignore else */if(firstLoc&&lastLoc){loc={source:firstLoc.source,start:{line:firstLoc.start.line,column:firstLoc.start.column},end:{line:lastLoc.end.line,column:lastLoc.end.column}};}}return {type:'Program',body:statements,strip:{},loc:loc};}function preparePartialBlock(open,program,close,locInfo){validateClose(open,close);return {type:'PartialBlockStatement',name:open.path,params:open.params,hash:open.hash,program:program,openStrip:open.strip,closeStrip:close&&close.strip,loc:this.locInfo(locInfo)};}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 33 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,__webpack_require__(12),__webpack_require__(11),__webpack_require__(27)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,_exception,_utils,_ast){ /* eslint-disable new-cap */'use strict';exports.__esModule=true;exports.Compiler=Compiler;exports.precompile=precompile;exports.compile=compile; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);var _AST=_interopRequireDefault(_ast);var slice=[].slice;function Compiler(){} // the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype={compiler:Compiler,equals:function equals(other){var len=this.opcodes.length;if(other.opcodes.length!==len){return false;}for(var i=0;i<len;i++){var opcode=this.opcodes[i],otherOpcode=other.opcodes[i];if(opcode.opcode!==otherOpcode.opcode||!argEquals(opcode.args,otherOpcode.args)){return false;}} // We know that length is the same between the two arrays because they are directly tied
// to the opcode behavior above.
len=this.children.length;for(var i=0;i<len;i++){if(!this.children[i].equals(other.children[i])){return false;}}return true;},guid:0,compile:function compile(program,options){this.sourceNode=[];this.opcodes=[];this.children=[];this.options=options;this.stringParams=options.stringParams;this.trackIds=options.trackIds;options.blockParams=options.blockParams||[]; // These changes will propagate to the other compiler components
var knownHelpers=options.knownHelpers;options.knownHelpers={'helperMissing':true,'blockHelperMissing':true,'each':true,'if':true,'unless':true,'with':true,'log':true,'lookup':true};if(knownHelpers){for(var _name in knownHelpers){ /* istanbul ignore else */if(_name in knownHelpers){options.knownHelpers[_name]=knownHelpers[_name];}}}return this.accept(program);},compileProgram:function compileProgram(program){var childCompiler=new this.compiler(), // eslint-disable-line new-cap
result=childCompiler.compile(program,this.options),guid=this.guid++;this.usePartial=this.usePartial||result.usePartial;this.children[guid]=result;this.useDepths=this.useDepths||result.useDepths;return guid;},accept:function accept(node){ /* istanbul ignore next: Sanity code */if(!this[node.type]){throw new _Exception['default']('Unknown type: '+node.type,node);}this.sourceNode.unshift(node);var ret=this[node.type](node);this.sourceNode.shift();return ret;},Program:function Program(program){this.options.blockParams.unshift(program.blockParams);var body=program.body,bodyLength=body.length;for(var i=0;i<bodyLength;i++){this.accept(body[i]);}this.options.blockParams.shift();this.isSimple=bodyLength===1;this.blockParams=program.blockParams?program.blockParams.length:0;return this;},BlockStatement:function BlockStatement(block){transformLiteralToPath(block);var program=block.program,inverse=block.inverse;program=program&&this.compileProgram(program);inverse=inverse&&this.compileProgram(inverse);var type=this.classifySexpr(block);if(type==='helper'){this.helperSexpr(block,program,inverse);}else if(type==='simple'){this.simpleSexpr(block); // now that the simple mustache is resolved, we need to
// evaluate it by executing `blockHelperMissing`
this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);this.opcode('emptyHash');this.opcode('blockValue',block.path.original);}else {this.ambiguousSexpr(block,program,inverse); // now that the simple mustache is resolved, we need to
// evaluate it by executing `blockHelperMissing`
this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);this.opcode('emptyHash');this.opcode('ambiguousBlockValue');}this.opcode('append');},DecoratorBlock:function DecoratorBlock(decorator){var program=decorator.program&&this.compileProgram(decorator.program);var params=this.setupFullMustacheParams(decorator,program,undefined),path=decorator.path;this.useDecorators=true;this.opcode('registerDecorator',params.length,path.original);},PartialStatement:function PartialStatement(partial){this.usePartial=true;var program=partial.program;if(program){program=this.compileProgram(partial.program);}var params=partial.params;if(params.length>1){throw new _Exception['default']('Unsupported number of partial arguments: '+params.length,partial);}else if(!params.length){if(this.options.explicitPartialContext){this.opcode('pushLiteral','undefined');}else {params.push({type:'PathExpression',parts:[],depth:0});}}var partialName=partial.name.original,isDynamic=partial.name.type==='SubExpression';if(isDynamic){this.accept(partial.name);}this.setupFullMustacheParams(partial,program,undefined,true);var indent=partial.indent||'';if(this.options.preventIndent&&indent){this.opcode('appendContent',indent);indent='';}this.opcode('invokePartial',isDynamic,partialName,indent);this.opcode('append');},PartialBlockStatement:function PartialBlockStatement(partialBlock){this.PartialStatement(partialBlock);},MustacheStatement:function MustacheStatement(mustache){this.SubExpression(mustache);if(mustache.escaped&&!this.options.noEscape){this.opcode('appendEscaped');}else {this.opcode('append');}},Decorator:function Decorator(decorator){this.DecoratorBlock(decorator);},ContentStatement:function ContentStatement(content){if(content.value){this.opcode('appendContent',content.value);}},CommentStatement:function CommentStatement(){},SubExpression:function SubExpression(sexpr){transformLiteralToPath(sexpr);var type=this.classifySexpr(sexpr);if(type==='simple'){this.simpleSexpr(sexpr);}else if(type==='helper'){this.helperSexpr(sexpr);}else {this.ambiguousSexpr(sexpr);}},ambiguousSexpr:function ambiguousSexpr(sexpr,program,inverse){var path=sexpr.path,name=path.parts[0],isBlock=program!=null||inverse!=null;this.opcode('getContext',path.depth);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);path.strict=true;this.accept(path);this.opcode('invokeAmbiguous',name,isBlock);},simpleSexpr:function simpleSexpr(sexpr){var path=sexpr.path;path.strict=true;this.accept(path);this.opcode('resolvePossibleLambda');},helperSexpr:function helperSexpr(sexpr,program,inverse){var params=this.setupFullMustacheParams(sexpr,program,inverse),path=sexpr.path,name=path.parts[0];if(this.options.knownHelpers[name]){this.opcode('invokeKnownHelper',params.length,name);}else if(this.options.knownHelpersOnly){throw new _Exception['default']('You specified knownHelpersOnly, but used the unknown helper '+name,sexpr);}else {path.strict=true;path.falsy=true;this.accept(path);this.opcode('invokeHelper',params.length,path.original,_AST['default'].helpers.simpleId(path));}},PathExpression:function PathExpression(path){this.addDepth(path.depth);this.opcode('getContext',path.depth);var name=path.parts[0],scoped=_AST['default'].helpers.scopedId(path),blockParamId=!path.depth&&!scoped&&this.blockParamIndex(name);if(blockParamId){this.opcode('lookupBlockParam',blockParamId,path.parts);}else if(!name){ // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
this.opcode('pushContext');}else if(path.data){this.options.data=true;this.opcode('lookupData',path.depth,path.parts,path.strict);}else {this.opcode('lookupOnContext',path.parts,path.falsy,path.strict,scoped);}},StringLiteral:function StringLiteral(string){this.opcode('pushString',string.value);},NumberLiteral:function NumberLiteral(number){this.opcode('pushLiteral',number.value);},BooleanLiteral:function BooleanLiteral(bool){this.opcode('pushLiteral',bool.value);},UndefinedLiteral:function UndefinedLiteral(){this.opcode('pushLiteral','undefined');},NullLiteral:function NullLiteral(){this.opcode('pushLiteral','null');},Hash:function Hash(hash){var pairs=hash.pairs,i=0,l=pairs.length;this.opcode('pushHash');for(;i<l;i++){this.pushParam(pairs[i].value);}while(i--){this.opcode('assignToHash',pairs[i].key);}this.opcode('popHash');}, // HELPERS
opcode:function opcode(name){this.opcodes.push({opcode:name,args:slice.call(arguments,1),loc:this.sourceNode[0].loc});},addDepth:function addDepth(depth){if(!depth){return;}this.useDepths=true;},classifySexpr:function classifySexpr(sexpr){var isSimple=_AST['default'].helpers.simpleId(sexpr.path);var isBlockParam=isSimple&&!!this.blockParamIndex(sexpr.path.parts[0]); // a mustache is an eligible helper if:
// * its id is simple (a single part, not `this` or `..`)
var isHelper=!isBlockParam&&_AST['default'].helpers.helperExpression(sexpr); // if a mustache is an eligible helper but not a definite
// helper, it is ambiguous, and will be resolved in a later
// pass or at runtime.
var isEligible=!isBlockParam&&(isHelper||isSimple); // if ambiguous, we can possibly resolve the ambiguity now
// An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
if(isEligible&&!isHelper){var _name2=sexpr.path.parts[0],options=this.options;if(options.knownHelpers[_name2]){isHelper=true;}else if(options.knownHelpersOnly){isEligible=false;}}if(isHelper){return 'helper';}else if(isEligible){return 'ambiguous';}else {return 'simple';}},pushParams:function pushParams(params){for(var i=0,l=params.length;i<l;i++){this.pushParam(params[i]);}},pushParam:function pushParam(val){var value=val.value!=null?val.value:val.original||'';if(this.stringParams){if(value.replace){value=value.replace(/^(\.?\.\/)*/g,'').replace(/\//g,'.');}if(val.depth){this.addDepth(val.depth);}this.opcode('getContext',val.depth||0);this.opcode('pushStringParam',value,val.type);if(val.type==='SubExpression'){ // SubExpressions get evaluated and passed in
// in string params mode.
this.accept(val);}}else {if(this.trackIds){var blockParamIndex=undefined;if(val.parts&&!_AST['default'].helpers.scopedId(val)&&!val.depth){blockParamIndex=this.blockParamIndex(val.parts[0]);}if(blockParamIndex){var blockParamChild=val.parts.slice(1).join('.');this.opcode('pushId','BlockParam',blockParamIndex,blockParamChild);}else {value=val.original||value;if(value.replace){value=value.replace(/^this(?:\.|$)/,'').replace(/^\.\//,'').replace(/^\.$/,'');}this.opcode('pushId',val.type,value);}}this.accept(val);}},setupFullMustacheParams:function setupFullMustacheParams(sexpr,program,inverse,omitEmpty){var params=sexpr.params;this.pushParams(params);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);if(sexpr.hash){this.accept(sexpr.hash);}else {this.opcode('emptyHash',omitEmpty);}return params;},blockParamIndex:function blockParamIndex(name){for(var depth=0,len=this.options.blockParams.length;depth<len;depth++){var blockParams=this.options.blockParams[depth],param=blockParams&&_utils.indexOf(blockParams,name);if(blockParams&&param>=0){return [depth,param];}}}};function precompile(input,options,env){if(input==null||typeof input!=='string'&&input.type!=='Program'){throw new _Exception['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed '+input);}options=options||{};if(!('data' in options)){options.data=true;}if(options.compat){options.useDepths=true;}var ast=env.parse(input,options),environment=new env.Compiler().compile(ast,options);return new env.JavaScriptCompiler().compile(environment,options);}function compile(input,options,env){if(options===undefined)options={};if(input==null||typeof input!=='string'&&input.type!=='Program'){throw new _Exception['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed '+input);}if(!('data' in options)){options.data=true;}if(options.compat){options.useDepths=true;}var compiled=undefined;function compileInput(){var ast=env.parse(input,options),environment=new env.Compiler().compile(ast,options),templateSpec=new env.JavaScriptCompiler().compile(environment,options,undefined,true);return env.template(templateSpec);} // Template is only compiled on first use and cached after that point.
function ret(context,execOptions){if(!compiled){compiled=compileInput();}return compiled.call(this,context,execOptions);}ret._setup=function(setupOptions){if(!compiled){compiled=compileInput();}return compiled._setup(setupOptions);};ret._child=function(i,data,blockParams,depths){if(!compiled){compiled=compileInput();}return compiled._child(i,data,blockParams,depths);};return ret;}function argEquals(a,b){if(a===b){return true;}if(_utils.isArray(a)&&_utils.isArray(b)&&a.length===b.length){for(var i=0;i<a.length;i++){if(!argEquals(a[i],b[i])){return false;}}return true;}}function transformLiteralToPath(sexpr){if(!sexpr.path.parts){var literal=sexpr.path; // Casting to string here to make false and 0 literal values play nicely with the rest
// of the system.
sexpr.path={type:'PathExpression',data:false,depth:0,parts:[literal.original+''],original:literal.original+'',loc:literal.loc};}}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 34 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(10),__webpack_require__(12),__webpack_require__(11),__webpack_require__(35)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_base,_exception,_utils,_codeGen){'use strict'; // istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _Exception=_interopRequireDefault(_exception);var _CodeGen=_interopRequireDefault(_codeGen);function Literal(value){this.value=value;}function JavaScriptCompiler(){}JavaScriptCompiler.prototype={ // PUBLIC API: You can override these methods in a subclass to provide
// alternative compiled forms for name lookup and buffering semantics
nameLookup:function nameLookup(parent,name /* , type*/){if(JavaScriptCompiler.isValidJavaScriptVariableName(name)){return [parent,'.',name];}else {return [parent,'[',JSON.stringify(name),']'];}},depthedLookup:function depthedLookup(name){return [this.aliasable('container.lookup'),'(depths, "',name,'")'];},compilerInfo:function compilerInfo(){var revision=_base.COMPILER_REVISION,versions=_base.REVISION_CHANGES[revision];return [revision,versions];},appendToBuffer:function appendToBuffer(source,location,explicit){ // Force a source as this simplifies the merge logic.
if(!_utils.isArray(source)){source=[source];}source=this.source.wrap(source,location);if(this.environment.isSimple){return ['return ',source,';'];}else if(explicit){ // This is a case where the buffer operation occurs as a child of another
// construct, generally braces. We have to explicitly output these buffer
// operations to ensure that the emitted code goes in the correct location.
return ['buffer += ',source,';'];}else {source.appendToBuffer=true;return source;}},initializeBuffer:function initializeBuffer(){return this.quotedString('');}, // END PUBLIC API
compile:function compile(environment,options,context,asObject){this.environment=environment;this.options=options;this.stringParams=this.options.stringParams;this.trackIds=this.options.trackIds;this.precompile=!asObject;this.name=this.environment.name;this.isChild=!!context;this.context=context||{decorators:[],programs:[],environments:[]};this.preamble();this.stackSlot=0;this.stackVars=[];this.aliases={};this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.blockParams=[];this.compileChildren(environment,options);this.useDepths=this.useDepths||environment.useDepths||environment.useDecorators||this.options.compat;this.useBlockParams=this.useBlockParams||environment.useBlockParams;var opcodes=environment.opcodes,opcode=undefined,firstLoc=undefined,i=undefined,l=undefined;for(i=0,l=opcodes.length;i<l;i++){opcode=opcodes[i];this.source.currentLocation=opcode.loc;firstLoc=firstLoc||opcode.loc;this[opcode.opcode].apply(this,opcode.args);} // Flush any trailing content that might be pending.
this.source.currentLocation=firstLoc;this.pushSource(''); /* istanbul ignore next */if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new _Exception['default']('Compile completed with content left on stack');}if(!this.decorators.isEmpty()){this.useDecorators=true;this.decorators.prepend('var decorators = container.decorators;\n');this.decorators.push('return fn;');if(asObject){this.decorators=Function.apply(this,['fn','props','container','depth0','data','blockParams','depths',this.decorators.merge()]);}else {this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');this.decorators.push('}\n');this.decorators=this.decorators.merge();}}else {this.decorators=undefined;}var fn=this.createFunctionContext(asObject);if(!this.isChild){var ret={compiler:this.compilerInfo(),main:fn};if(this.decorators){ret.main_d=this.decorators; // eslint-disable-line camelcase
ret.useDecorators=true;}var _context=this.context;var programs=_context.programs;var decorators=_context.decorators;for(i=0,l=programs.length;i<l;i++){if(programs[i]){ret[i]=programs[i];if(decorators[i]){ret[i+'_d']=decorators[i];ret.useDecorators=true;}}}if(this.environment.usePartial){ret.usePartial=true;}if(this.options.data){ret.useData=true;}if(this.useDepths){ret.useDepths=true;}if(this.useBlockParams){ret.useBlockParams=true;}if(this.options.compat){ret.compat=true;}if(!asObject){ret.compiler=JSON.stringify(ret.compiler);this.source.currentLocation={start:{line:1,column:0}};ret=this.objectLiteral(ret);if(options.srcName){ret=ret.toStringWithSourceMap({file:options.destName});ret.map=ret.map&&ret.map.toString();}else {ret=ret.toString();}}else {ret.compilerOptions=this.options;}return ret;}else {return fn;}},preamble:function preamble(){ // track the last context pushed into place to allow skipping the
// getContext opcode when it would be a noop
this.lastContext=0;this.source=new _CodeGen['default'](this.options.srcName);this.decorators=new _CodeGen['default'](this.options.srcName);},createFunctionContext:function createFunctionContext(asObject){var varDeclarations='';var locals=this.stackVars.concat(this.registers.list);if(locals.length>0){varDeclarations+=', '+locals.join(', ');} // Generate minimizer alias mappings
//
// When using true SourceNodes, this will update all references to the given alias
// as the source nodes are reused in situ. For the non-source node compilation mode,
// aliases will not be used, but this case is already being run on the client and
// we aren't concern about minimizing the template size.
var aliasCount=0;for(var alias in this.aliases){ // eslint-disable-line guard-for-in
var node=this.aliases[alias];if(this.aliases.hasOwnProperty(alias)&&node.children&&node.referenceCount>1){varDeclarations+=', alias'+ ++aliasCount+'='+alias;node.children[0]='alias'+aliasCount;}}var params=['container','depth0','helpers','partials','data'];if(this.useBlockParams||this.useDepths){params.push('blockParams');}if(this.useDepths){params.push('depths');} // Perform a second pass over the output to merge content when possible
var source=this.mergeSource(varDeclarations);if(asObject){params.push(source);return Function.apply(this,params);}else {return this.source.wrap(['function(',params.join(','),') {\n  ',source,'}']);}},mergeSource:function mergeSource(varDeclarations){var isSimple=this.environment.isSimple,appendOnly=!this.forceBuffer,appendFirst=undefined,sourceSeen=undefined,bufferStart=undefined,bufferEnd=undefined;this.source.each(function(line){if(line.appendToBuffer){if(bufferStart){line.prepend('  + ');}else {bufferStart=line;}bufferEnd=line;}else {if(bufferStart){if(!sourceSeen){appendFirst=true;}else {bufferStart.prepend('buffer += ');}bufferEnd.add(';');bufferStart=bufferEnd=undefined;}sourceSeen=true;if(!isSimple){appendOnly=false;}}});if(appendOnly){if(bufferStart){bufferStart.prepend('return ');bufferEnd.add(';');}else if(!sourceSeen){this.source.push('return "";');}}else {varDeclarations+=', buffer = '+(appendFirst?'':this.initializeBuffer());if(bufferStart){bufferStart.prepend('return buffer + ');bufferEnd.add(';');}else {this.source.push('return buffer;');}}if(varDeclarations){this.source.prepend('var '+varDeclarations.substring(2)+(appendFirst?'':';\n'));}return this.source.merge();}, // [blockValue]
//
// On stack, before: hash, inverse, program, value
// On stack, after: return value of blockHelperMissing
//
// The purpose of this opcode is to take a block of the form
// `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
// replace it on the stack with the result of properly
// invoking blockHelperMissing.
blockValue:function blockValue(name){var blockHelperMissing=this.aliasable('helpers.blockHelperMissing'),params=[this.contextName(0)];this.setupHelperArgs(name,0,params);var blockName=this.popStack();params.splice(1,0,blockName);this.push(this.source.functionCall(blockHelperMissing,'call',params));}, // [ambiguousBlockValue]
//
// On stack, before: hash, inverse, program, value
// Compiler value, before: lastHelper=value of last found helper, if any
// On stack, after, if no lastHelper: same as [blockValue]
// On stack, after, if lastHelper: value
ambiguousBlockValue:function ambiguousBlockValue(){ // We're being a bit cheeky and reusing the options value from the prior exec
var blockHelperMissing=this.aliasable('helpers.blockHelperMissing'),params=[this.contextName(0)];this.setupHelperArgs('',0,params,true);this.flushInline();var current=this.topStack();params.splice(1,0,current);this.pushSource(['if (!',this.lastHelper,') { ',current,' = ',this.source.functionCall(blockHelperMissing,'call',params),'}']);}, // [appendContent]
//
// On stack, before: ...
// On stack, after: ...
//
// Appends the string value of `content` to the current buffer
appendContent:function appendContent(content){if(this.pendingContent){content=this.pendingContent+content;}else {this.pendingLocation=this.source.currentLocation;}this.pendingContent=content;}, // [append]
//
// On stack, before: value, ...
// On stack, after: ...
//
// Coerces `value` to a String and appends it to the current buffer.
//
// If `value` is truthy, or 0, it is coerced into a string and appended
// Otherwise, the empty string is appended
append:function append(){if(this.isInline()){this.replaceStack(function(current){return [' != null ? ',current,' : ""'];});this.pushSource(this.appendToBuffer(this.popStack()));}else {var local=this.popStack();this.pushSource(['if (',local,' != null) { ',this.appendToBuffer(local,undefined,true),' }']);if(this.environment.isSimple){this.pushSource(['else { ',this.appendToBuffer("''",undefined,true),' }']);}}}, // [appendEscaped]
//
// On stack, before: value, ...
// On stack, after: ...
//
// Escape `value` and append it to the buffer
appendEscaped:function appendEscaped(){this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'),'(',this.popStack(),')']));}, // [getContext]
//
// On stack, before: ...
// On stack, after: ...
// Compiler value, after: lastContext=depth
//
// Set the value of the `lastContext` compiler value to the depth
getContext:function getContext(depth){this.lastContext=depth;}, // [pushContext]
//
// On stack, before: ...
// On stack, after: currentContext, ...
//
// Pushes the value of the current context onto the stack.
pushContext:function pushContext(){this.pushStackLiteral(this.contextName(this.lastContext));}, // [lookupOnContext]
//
// On stack, before: ...
// On stack, after: currentContext[name], ...
//
// Looks up the value of `name` on the current context and pushes
// it onto the stack.
lookupOnContext:function lookupOnContext(parts,falsy,strict,scoped){var i=0;if(!scoped&&this.options.compat&&!this.lastContext){ // The depthed query is expected to handle the undefined logic for the root level that
// is implemented below, so we evaluate that directly in compat mode
this.push(this.depthedLookup(parts[i++]));}else {this.pushContext();}this.resolvePath('context',parts,i,falsy,strict);}, // [lookupBlockParam]
//
// On stack, before: ...
// On stack, after: blockParam[name], ...
//
// Looks up the value of `parts` on the given block param and pushes
// it onto the stack.
lookupBlockParam:function lookupBlockParam(blockParamId,parts){this.useBlockParams=true;this.push(['blockParams[',blockParamId[0],'][',blockParamId[1],']']);this.resolvePath('context',parts,1);}, // [lookupData]
//
// On stack, before: ...
// On stack, after: data, ...
//
// Push the data lookup operator
lookupData:function lookupData(depth,parts,strict){if(!depth){this.pushStackLiteral('data');}else {this.pushStackLiteral('container.data(data, '+depth+')');}this.resolvePath('data',parts,0,true,strict);},resolvePath:function resolvePath(type,parts,i,falsy,strict){ // istanbul ignore next
var _this=this;if(this.options.strict||this.options.assumeObjects){this.push(strictLookup(this.options.strict&&strict,this,parts,type));return;}var len=parts.length;for(;i<len;i++){ /* eslint-disable no-loop-func */this.replaceStack(function(current){var lookup=_this.nameLookup(current,parts[i],type); // We want to ensure that zero and false are handled properly if the context (falsy flag)
// needs to have the special handling for these values.
if(!falsy){return [' != null ? ',lookup,' : ',current];}else { // Otherwise we can use generic falsy handling
return [' && ',lookup];}}); /* eslint-enable no-loop-func */}}, // [resolvePossibleLambda]
//
// On stack, before: value, ...
// On stack, after: resolved value, ...
//
// If the `value` is a lambda, replace it on the stack by
// the return value of the lambda
resolvePossibleLambda:function resolvePossibleLambda(){this.push([this.aliasable('container.lambda'),'(',this.popStack(),', ',this.contextName(0),')']);}, // [pushStringParam]
//
// On stack, before: ...
// On stack, after: string, currentContext, ...
//
// This opcode is designed for use in string mode, which
// provides the string value of a parameter along with its
// depth rather than resolving it immediately.
pushStringParam:function pushStringParam(string,type){this.pushContext();this.pushString(type); // If it's a subexpression, the string result
// will be pushed after this opcode.
if(type!=='SubExpression'){if(typeof string==='string'){this.pushString(string);}else {this.pushStackLiteral(string);}}},emptyHash:function emptyHash(omitEmpty){if(this.trackIds){this.push('{}'); // hashIds
}if(this.stringParams){this.push('{}'); // hashContexts
this.push('{}'); // hashTypes
}this.pushStackLiteral(omitEmpty?'undefined':'{}');},pushHash:function pushHash(){if(this.hash){this.hashes.push(this.hash);}this.hash={values:[],types:[],contexts:[],ids:[]};},popHash:function popHash(){var hash=this.hash;this.hash=this.hashes.pop();if(this.trackIds){this.push(this.objectLiteral(hash.ids));}if(this.stringParams){this.push(this.objectLiteral(hash.contexts));this.push(this.objectLiteral(hash.types));}this.push(this.objectLiteral(hash.values));}, // [pushString]
//
// On stack, before: ...
// On stack, after: quotedString(string), ...
//
// Push a quoted version of `string` onto the stack
pushString:function pushString(string){this.pushStackLiteral(this.quotedString(string));}, // [pushLiteral]
//
// On stack, before: ...
// On stack, after: value, ...
//
// Pushes a value onto the stack. This operation prevents
// the compiler from creating a temporary variable to hold
// it.
pushLiteral:function pushLiteral(value){this.pushStackLiteral(value);}, // [pushProgram]
//
// On stack, before: ...
// On stack, after: program(guid), ...
//
// Push a program expression onto the stack. This takes
// a compile-time guid and converts it into a runtime-accessible
// expression.
pushProgram:function pushProgram(guid){if(guid!=null){this.pushStackLiteral(this.programExpression(guid));}else {this.pushStackLiteral(null);}}, // [registerDecorator]
//
// On stack, before: hash, program, params..., ...
// On stack, after: ...
//
// Pops off the decorator's parameters, invokes the decorator,
// and inserts the decorator into the decorators list.
registerDecorator:function registerDecorator(paramSize,name){var foundDecorator=this.nameLookup('decorators',name,'decorator'),options=this.setupHelperArgs(name,paramSize);this.decorators.push(['fn = ',this.decorators.functionCall(foundDecorator,'',['fn','props','container',options]),' || fn;']);}, // [invokeHelper]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of helper invocation
//
// Pops off the helper's parameters, invokes the helper,
// and pushes the helper's return value onto the stack.
//
// If the helper is not found, `helperMissing` is called.
invokeHelper:function invokeHelper(paramSize,name,isSimple){var nonHelper=this.popStack(),helper=this.setupHelper(paramSize,name),simple=isSimple?[helper.name,' || ']:'';var lookup=['('].concat(simple,nonHelper);if(!this.options.strict){lookup.push(' || ',this.aliasable('helpers.helperMissing'));}lookup.push(')');this.push(this.source.functionCall(lookup,'call',helper.callParams));}, // [invokeKnownHelper]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of helper invocation
//
// This operation is used when the helper is known to exist,
// so a `helperMissing` fallback is not required.
invokeKnownHelper:function invokeKnownHelper(paramSize,name){var helper=this.setupHelper(paramSize,name);this.push(this.source.functionCall(helper.name,'call',helper.callParams));}, // [invokeAmbiguous]
//
// On stack, before: hash, inverse, program, params..., ...
// On stack, after: result of disambiguation
//
// This operation is used when an expression like `{{foo}}`
// is provided, but we don't know at compile-time whether it
// is a helper or a path.
//
// This operation emits more code than the other options,
// and can be avoided by passing the `knownHelpers` and
// `knownHelpersOnly` flags at compile-time.
invokeAmbiguous:function invokeAmbiguous(name,helperCall){this.useRegister('helper');var nonHelper=this.popStack();this.emptyHash();var helper=this.setupHelper(0,name,helperCall);var helperName=this.lastHelper=this.nameLookup('helpers',name,'helper');var lookup=['(','(helper = ',helperName,' || ',nonHelper,')'];if(!this.options.strict){lookup[0]='(helper = ';lookup.push(' != null ? helper : ',this.aliasable('helpers.helperMissing'));}this.push(['(',lookup,helper.paramsInit?['),(',helper.paramsInit]:[],'),','(typeof helper === ',this.aliasable('"function"'),' ? ',this.source.functionCall('helper','call',helper.callParams),' : helper))']);}, // [invokePartial]
//
// On stack, before: context, ...
// On stack after: result of partial invocation
//
// This operation pops off a context, invokes a partial with that context,
// and pushes the result of the invocation back.
invokePartial:function invokePartial(isDynamic,name,indent){var params=[],options=this.setupParams(name,1,params);if(isDynamic){name=this.popStack();delete options.name;}if(indent){options.indent=JSON.stringify(indent);}options.helpers='helpers';options.partials='partials';options.decorators='container.decorators';if(!isDynamic){params.unshift(this.nameLookup('partials',name,'partial'));}else {params.unshift(name);}if(this.options.compat){options.depths='depths';}options=this.objectLiteral(options);params.push(options);this.push(this.source.functionCall('container.invokePartial','',params));}, // [assignToHash]
//
// On stack, before: value, ..., hash, ...
// On stack, after: ..., hash, ...
//
// Pops a value off the stack and assigns it to the current hash
assignToHash:function assignToHash(key){var value=this.popStack(),context=undefined,type=undefined,id=undefined;if(this.trackIds){id=this.popStack();}if(this.stringParams){type=this.popStack();context=this.popStack();}var hash=this.hash;if(context){hash.contexts[key]=context;}if(type){hash.types[key]=type;}if(id){hash.ids[key]=id;}hash.values[key]=value;},pushId:function pushId(type,name,child){if(type==='BlockParam'){this.pushStackLiteral('blockParams['+name[0]+'].path['+name[1]+']'+(child?' + '+JSON.stringify('.'+child):''));}else if(type==='PathExpression'){this.pushString(name);}else if(type==='SubExpression'){this.pushStackLiteral('true');}else {this.pushStackLiteral('null');}}, // HELPERS
compiler:JavaScriptCompiler,compileChildren:function compileChildren(environment,options){var children=environment.children,child=undefined,compiler=undefined;for(var i=0,l=children.length;i<l;i++){child=children[i];compiler=new this.compiler(); // eslint-disable-line new-cap
var index=this.matchExistingProgram(child);if(index==null){this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
index=this.context.programs.length;child.index=index;child.name='program'+index;this.context.programs[index]=compiler.compile(child,options,this.context,!this.precompile);this.context.decorators[index]=compiler.decorators;this.context.environments[index]=child;this.useDepths=this.useDepths||compiler.useDepths;this.useBlockParams=this.useBlockParams||compiler.useBlockParams;}else {child.index=index;child.name='program'+index;this.useDepths=this.useDepths||child.useDepths;this.useBlockParams=this.useBlockParams||child.useBlockParams;}}},matchExistingProgram:function matchExistingProgram(child){for(var i=0,len=this.context.environments.length;i<len;i++){var environment=this.context.environments[i];if(environment&&environment.equals(child)){return i;}}},programExpression:function programExpression(guid){var child=this.environment.children[guid],programParams=[child.index,'data',child.blockParams];if(this.useBlockParams||this.useDepths){programParams.push('blockParams');}if(this.useDepths){programParams.push('depths');}return 'container.program('+programParams.join(', ')+')';},useRegister:function useRegister(name){if(!this.registers[name]){this.registers[name]=true;this.registers.list.push(name);}},push:function push(expr){if(!(expr instanceof Literal)){expr=this.source.wrap(expr);}this.inlineStack.push(expr);return expr;},pushStackLiteral:function pushStackLiteral(item){this.push(new Literal(item));},pushSource:function pushSource(source){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));this.pendingContent=undefined;}if(source){this.source.push(source);}},replaceStack:function replaceStack(callback){var prefix=['('],stack=undefined,createdStack=undefined,usedLiteral=undefined; /* istanbul ignore next */if(!this.isInline()){throw new _Exception['default']('replaceStack on non-inline');} // We want to merge the inline statement into the replacement statement via ','
var top=this.popStack(true);if(top instanceof Literal){ // Literals do not need to be inlined
stack=[top.value];prefix=['(',stack];usedLiteral=true;}else { // Get or create the current stack name for use by the inline
createdStack=true;var _name=this.incrStack();prefix=['((',this.push(_name),' = ',top,')'];stack=this.topStack();}var item=callback.call(this,stack);if(!usedLiteral){this.popStack();}if(createdStack){this.stackSlot--;}this.push(prefix.concat(item,')'));},incrStack:function incrStack(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push('stack'+this.stackSlot);}return this.topStackName();},topStackName:function topStackName(){return 'stack'+this.stackSlot;},flushInline:function flushInline(){var inlineStack=this.inlineStack;this.inlineStack=[];for(var i=0,len=inlineStack.length;i<len;i++){var entry=inlineStack[i]; /* istanbul ignore if */if(entry instanceof Literal){this.compileStack.push(entry);}else {var stack=this.incrStack();this.pushSource([stack,' = ',entry,';']);this.compileStack.push(stack);}}},isInline:function isInline(){return this.inlineStack.length;},popStack:function popStack(wrapped){var inline=this.isInline(),item=(inline?this.inlineStack:this.compileStack).pop();if(!wrapped&&item instanceof Literal){return item.value;}else {if(!inline){ /* istanbul ignore next */if(!this.stackSlot){throw new _Exception['default']('Invalid stack pop');}this.stackSlot--;}return item;}},topStack:function topStack(){var stack=this.isInline()?this.inlineStack:this.compileStack,item=stack[stack.length-1]; /* istanbul ignore if */if(item instanceof Literal){return item.value;}else {return item;}},contextName:function contextName(context){if(this.useDepths&&context){return 'depths['+context+']';}else {return 'depth'+context;}},quotedString:function quotedString(str){return this.source.quotedString(str);},objectLiteral:function objectLiteral(obj){return this.source.objectLiteral(obj);},aliasable:function aliasable(name){var ret=this.aliases[name];if(ret){ret.referenceCount++;return ret;}ret=this.aliases[name]=this.source.wrap(name);ret.aliasable=true;ret.referenceCount=1;return ret;},setupHelper:function setupHelper(paramSize,name,blockHelper){var params=[],paramsInit=this.setupHelperArgs(name,paramSize,params,blockHelper);var foundHelper=this.nameLookup('helpers',name,'helper'),callContext=this.aliasable(this.contextName(0)+' != null ? '+this.contextName(0)+' : {}');return {params:params,paramsInit:paramsInit,name:foundHelper,callParams:[callContext].concat(params)};},setupParams:function setupParams(helper,paramSize,params){var options={},contexts=[],types=[],ids=[],objectArgs=!params,param=undefined;if(objectArgs){params=[];}options.name=this.quotedString(helper);options.hash=this.popStack();if(this.trackIds){options.hashIds=this.popStack();}if(this.stringParams){options.hashTypes=this.popStack();options.hashContexts=this.popStack();}var inverse=this.popStack(),program=this.popStack(); // Avoid setting fn and inverse if neither are set. This allows
// helpers to do a check for `if (options.fn)`
if(program||inverse){options.fn=program||'container.noop';options.inverse=inverse||'container.noop';} // The parameters go on to the stack in order (making sure that they are evaluated in order)
// so we need to pop them off the stack in reverse order
var i=paramSize;while(i--){param=this.popStack();params[i]=param;if(this.trackIds){ids[i]=this.popStack();}if(this.stringParams){types[i]=this.popStack();contexts[i]=this.popStack();}}if(objectArgs){options.args=this.source.generateArray(params);}if(this.trackIds){options.ids=this.source.generateArray(ids);}if(this.stringParams){options.types=this.source.generateArray(types);options.contexts=this.source.generateArray(contexts);}if(this.options.data){options.data='data';}if(this.useBlockParams){options.blockParams='blockParams';}return options;},setupHelperArgs:function setupHelperArgs(helper,paramSize,params,useRegister){var options=this.setupParams(helper,paramSize,params);options=this.objectLiteral(options);if(useRegister){this.useRegister('options');params.push('options');return ['options=',options];}else if(params){params.push(options);return '';}else {return options;}}};(function(){var reservedWords=('break else new var'+' case finally return void'+' catch for switch while'+' continue function this with'+' default if throw'+' delete in try'+' do instanceof typeof'+' abstract enum int short'+' boolean export interface static'+' byte extends long super'+' char final native synchronized'+' class float package throws'+' const goto private transient'+' debugger implements protected volatile'+' double import public let yield await'+' null true false').split(' ');var compilerWords=JavaScriptCompiler.RESERVED_WORDS={};for(var i=0,l=reservedWords.length;i<l;i++){compilerWords[reservedWords[i]]=true;}})();JavaScriptCompiler.isValidJavaScriptVariableName=function(name){return !JavaScriptCompiler.RESERVED_WORDS[name]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);};function strictLookup(requireTerminal,compiler,parts,type){var stack=compiler.popStack(),i=0,len=parts.length;if(requireTerminal){len--;}for(;i<len;i++){stack=compiler.nameLookup(stack,parts[i],type);}if(requireTerminal){return [compiler.aliasable('container.strict'),'(',stack,', ',compiler.quotedString(parts[i]),')'];}else {return stack;}}module.exports=JavaScriptCompiler;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 35 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports,module,__webpack_require__(11)],__WEBPACK_AMD_DEFINE_RESULT__=function(exports,module,_utils){ /* global define */'use strict';var SourceNode=undefined;try{ /* istanbul ignore next */if(false){ // We don't support this in AMD environments. For these environments, we asusme that
// they are running on the browser and thus have no need for the source-map library.
var SourceMap=require('source-map');SourceNode=SourceMap.SourceNode;}}catch(err){} /* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */if(!SourceNode){SourceNode=function(line,column,srcFile,chunks){this.src='';if(chunks){this.add(chunks);}}; /* istanbul ignore next */SourceNode.prototype={add:function add(chunks){if(_utils.isArray(chunks)){chunks=chunks.join('');}this.src+=chunks;},prepend:function prepend(chunks){if(_utils.isArray(chunks)){chunks=chunks.join('');}this.src=chunks+this.src;},toStringWithSourceMap:function toStringWithSourceMap(){return {code:this.toString()};},toString:function toString(){return this.src;}};}function castChunk(chunk,codeGen,loc){if(_utils.isArray(chunk)){var ret=[];for(var i=0,len=chunk.length;i<len;i++){ret.push(codeGen.wrap(chunk[i],loc));}return ret;}else if(typeof chunk==='boolean'||typeof chunk==='number'){ // Handle primitives that the SourceNode will throw up on
return chunk+'';}return chunk;}function CodeGen(srcFile){this.srcFile=srcFile;this.source=[];}CodeGen.prototype={isEmpty:function isEmpty(){return !this.source.length;},prepend:function prepend(source,loc){this.source.unshift(this.wrap(source,loc));},push:function push(source,loc){this.source.push(this.wrap(source,loc));},merge:function merge(){var source=this.empty();this.each(function(line){source.add(['  ',line,'\n']);});return source;},each:function each(iter){for(var i=0,len=this.source.length;i<len;i++){iter(this.source[i]);}},empty:function empty(){var loc=this.currentLocation||{start:{}};return new SourceNode(loc.start.line,loc.start.column,this.srcFile);},wrap:function wrap(chunk){var loc=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];if(chunk instanceof SourceNode){return chunk;}chunk=castChunk(chunk,this,loc);return new SourceNode(loc.start.line,loc.start.column,this.srcFile,chunk);},functionCall:function functionCall(fn,type,params){params=this.generateList(params);return this.wrap([fn,type?'.'+type+'(':'(',params,')']);},quotedString:function quotedString(str){return '"'+(str+'').replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\u2028/g,'\\u2028') // Per Ecma-262 7.3 + 7.8.4
.replace(/\u2029/g,'\\u2029')+'"';},objectLiteral:function objectLiteral(obj){var pairs=[];for(var key in obj){if(obj.hasOwnProperty(key)){var value=castChunk(obj[key],this);if(value!=='undefined'){pairs.push([this.quotedString(key),':',value]);}}}var ret=this.generateList(pairs);ret.prepend('{');ret.add('}');return ret;},generateList:function generateList(entries){var ret=this.empty();for(var i=0,len=entries.length;i<len;i++){if(i){ret.add(',');}ret.add(castChunk(entries[i],this));}return ret;},generateArray:function generateArray(entries){var ret=this.generateList(entries);ret.prepend('[');ret.add(']');return ret;}};module.exports=CodeGen;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)); /***/}, /* 36 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module API
	 */'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}var _util=__webpack_require__(37); // Import modules to build up the API
var _array=__webpack_require__(38);var array=_interopRequireWildcard(_array);var _baseClass=__webpack_require__(40);var _baseClass2=_interopRequireDefault(_baseClass);var _domAttr=__webpack_require__(41);var attr=_interopRequireWildcard(_domAttr);var _domClass=__webpack_require__(42);var class_=_interopRequireWildcard(_domClass);var _domContains=__webpack_require__(43);var contains=_interopRequireWildcard(_domContains);var _css=__webpack_require__(44);var css=_interopRequireWildcard(_css);var _domData=__webpack_require__(45);var data=_interopRequireWildcard(_domData);var _domIndex=__webpack_require__(46);var dom=_interopRequireWildcard(_domIndex);var _domExtra=__webpack_require__(47);var dom_extra=_interopRequireWildcard(_domExtra);var _eventIndex=__webpack_require__(48);var event=_interopRequireWildcard(_eventIndex);var _domHtml=__webpack_require__(50);var html=_interopRequireWildcard(_domHtml);var _noconflict=__webpack_require__(51);var noconflict=_interopRequireWildcard(_noconflict);var _eventReady=__webpack_require__(52);var ready=_interopRequireWildcard(_eventReady);var _selectorIndex=__webpack_require__(39);var selector=_interopRequireWildcard(_selectorIndex);var _selectorClosest=__webpack_require__(49);var closest=_interopRequireWildcard(_selectorClosest);var _selectorExtra=__webpack_require__(53);var selector_extra=_interopRequireWildcard(_selectorExtra);var _eventTrigger=__webpack_require__(54);var trigger=_interopRequireWildcard(_eventTrigger);var _type=__webpack_require__(55);var type=_interopRequireWildcard(_type);var api={},$={};if(typeof selector!=='undefined'){$=selector.$;$.matches=selector.matches;api.find=selector.find;}_util.extend($,contains,noconflict,type);_util.extend(api,array,attr,class_,closest,css,data,dom,dom_extra,event,html,ready,selector_extra,trigger);$.fn=api; // Version
$.version='0.11.2'; // Util
$.extend=_util.extend; // Provide base class to extend from
if(typeof _baseClass2['default']!=='undefined'){$.BaseClass=_baseClass2['default']($.fn);} // Ugly interoperability hack, to prevent potential ES6 import issues
$['default']=$; // Export interface
exports['default']=$;module.exports=exports['default']; /***/}, /* 37 */ /***/function(module,exports){ /*
	 * @module Util
	 */ /*
	 * Reference to the global scope
	 * @private
	 */"use strict";exports.__esModule=true;var global=new Function("return this")(); /**
	 * Convert `NodeList` to `Array`.
	 *
	 * @param {NodeList|Array} collection
	 * @return {Array}
	 * @private
	 */function toArray(collection){var length=collection.length,result=new Array(length);for(var i=0;i<length;i++){result[i]=collection[i];}return result;} /**
	 * Faster alternative to [].forEach method
	 *
	 * @param {Node|NodeList|Array} collection
	 * @param {Function} callback
	 * @return {Node|NodeList|Array}
	 * @private
	 */function each(collection,callback,thisArg){var length=collection.length;if(length!==undefined&&collection.nodeType===undefined){for(var i=0;i<length;i++){callback.call(thisArg,collection[i],i,collection);}}else {callback.call(thisArg,collection,0,collection);}return collection;} /**
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
	 */function extend(target){for(var _len=arguments.length,sources=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){sources[_key-1]=arguments[_key];}sources.forEach(function(src){for(var prop in src){target[prop]=src[prop];}});return target;} /**
	 * Return the collection without duplicates
	 *
	 * @param collection Collection to remove duplicates from
	 * @return {Node|NodeList|Array}
	 * @private
	 */var uniq=function uniq(collection){return collection.filter(function(item,index){return collection.indexOf(item)===index;});}; /*
	 * Export interface
	 */exports.global=global;exports.toArray=toArray;exports.each=each;exports.extend=extend;exports.uniq=uniq; /***/}, /* 38 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Array
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _selectorIndex=__webpack_require__(39);var ArrayProto=Array.prototype; /**
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
	 */var every=ArrayProto.every; /**
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
	 */function filter(selector,thisArg){var callback=typeof selector==='function'?selector:function(element){return _selectorIndex.matches(element,selector);};return _selectorIndex.$(ArrayProto.filter.call(this,callback,thisArg));} /**
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
	 */function forEach(callback,thisArg){return _util.each(this,callback,thisArg);}var each=forEach; /**
	 * Returns the index of an element in the collection.
	 *
	 * @param {Node} element
	 * @return {Number} The zero-based index, -1 if not found.
	 * @example
	 *     $('.items').indexOf(element);
	 *     // 2
	 */var indexOf=ArrayProto.indexOf; /**
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
	 */var map=ArrayProto.map; /**
	 * Removes the last element from the collection, and returns that element.
	 *
	 * @return {Object} The last element from the collection.
	 * @example
	 *     var lastElement = $('.items').pop();
	 */var pop=ArrayProto.pop; /**
	 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').push(element);
	 */var push=ArrayProto.push; /**
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
	 */var reduce=ArrayProto.reduce; /**
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
	 */var reduceRight=ArrayProto.reduceRight; /**
	 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
	 *
	 * @return {Object} The wrapped collection, reversed
	 * @chainable
	 * @example
	 *     $('.items').reverse();
	 */function reverse(){return _selectorIndex.$(_util.toArray(this).reverse());} /**
	 * Removes the first element from the collection, and returns that element.
	 *
	 * @return {Object} The first element from the collection.
	 * @example
	 *     var firstElement = $('.items').shift();
	 */var shift=ArrayProto.shift; /**
	 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @return {Boolean} Whether any element passed the callback check.
	 * @example
	 *     $('.items').some(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 *     // true/false
	 */var some=ArrayProto.some; /**
	 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').unshift(element);
	 */var unshift=ArrayProto.unshift; /*
	 * Export interface
	 */exports.each=each;exports.every=every;exports.filter=filter;exports.forEach=forEach;exports.indexOf=indexOf;exports.map=map;exports.pop=pop;exports.push=push;exports.reduce=reduce;exports.reduceRight=reduceRight;exports.reverse=reverse;exports.shift=shift;exports.some=some;exports.unshift=unshift; /***/}, /* 39 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Selector
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var isPrototypeSet=false;var reFragment=/^\s*<(\w+|!)[^>]*>/;var reSingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var reSimpleSelector=/^[\.#]?[\w-]*$/; /*
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
	 */function $(selector){var context=arguments.length<=1||arguments[1]===undefined?document:arguments[1];var collection=undefined;if(!selector){collection=document.querySelectorAll(null);}else if(selector instanceof Wrapper){return selector;}else if(typeof selector!=='string'){collection=selector.nodeType||selector===window?[selector]:selector;}else if(reFragment.test(selector)){collection=createFragment(selector);}else {context=typeof context==='string'?document.querySelector(context):context.length?context[0]:context;collection=querySelector(selector,context);}return wrap(collection);} /*
	 * Find descendants matching the provided `selector` for each element in the collection.
	 *
	 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
	 * @return {Object} The wrapped collection
	 * @example
	 *     $('.selector').find('.deep').$('.deepest');
	 */function find(selector){var nodes=[];_util.each(this,function(node){_util.each(querySelector(selector,node),function(child){if(nodes.indexOf(child)===-1){nodes.push(child);}});});return $(nodes);} /*
	 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
	 *
	 * @param {Node} element Element to test
	 * @param {String} selector Selector to match against element
	 * @return {Boolean}
	 *
	 * @example
	 *     $.matches(element, '.match');
	 */var matches=function(){var context=typeof Element!=='undefined'?Element.prototype:_util.global,_matches=context.matches||context.matchesSelector||context.mozMatchesSelector||context.msMatchesSelector||context.oMatchesSelector||context.webkitMatchesSelector;return function(element,selector){return _matches.call(element,selector);};}(); /*
	 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
	 *
	 * @private
	 * @param {String} selector Query selector.
	 * @param {Node} context The context for the selector to query elements.
	 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
	 */function querySelector(selector,context){var isSimpleSelector=reSimpleSelector.test(selector);if(isSimpleSelector){if(selector[0]==='#'){var element=(context.getElementById?context:document).getElementById(selector.slice(1));return element?[element]:[];}if(selector[0]==='.'){return context.getElementsByClassName(selector.slice(1));}return context.getElementsByTagName(selector);}return context.querySelectorAll(selector);} /*
	 * Create DOM fragment from an HTML string
	 *
	 * @private
	 * @param {String} html String representing HTML.
	 * @return {NodeList}
	 */function createFragment(html){if(reSingleTag.test(html)){return [document.createElement(RegExp.$1)];}var elements=[],container=document.createElement('div'),children=container.childNodes;container.innerHTML=html;for(var i=0,l=children.length;i<l;i++){elements.push(children[i]);}return elements;} /*
	 * Calling `$(selector)` returns a wrapped collection of elements.
	 *
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 * @return (Object) The wrapped collection
	 */function wrap(collection){if(!isPrototypeSet){Wrapper.prototype=$.fn;Wrapper.prototype.constructor=Wrapper;isPrototypeSet=true;}return new Wrapper(collection);} /*
	 * Constructor for the Object.prototype strategy
	 *
	 * @constructor
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 */function Wrapper(collection){var i=0,length=collection.length;for(;i<length;){this[i]=collection[i++];}this.length=length;} /*
	 * Export interface
	 */exports.$=$;exports.find=find;exports.matches=matches;exports.Wrapper=Wrapper; /***/}, /* 40 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module BaseClass
	 */'use strict';exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _selectorIndex=__webpack_require__(39);var _util=__webpack_require__(37);exports['default']=function(api){ /**
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
	     */var BaseClass=function BaseClass(){_classCallCheck(this,BaseClass);_selectorIndex.Wrapper.call(this,_selectorIndex.$.apply(undefined,arguments));};_util.extend(BaseClass.prototype,api);return BaseClass;};module.exports=exports['default']; /***/}, /* 41 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Attr
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37); /**
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
	 */function attr(key,value){if(typeof key==='string'&&typeof value==='undefined'){var element=this.nodeType?this:this[0];return element?element.getAttribute(key):undefined;}_util.each(this,function(element){if((typeof key==='undefined'?'undefined':_typeof2(key))==='object'){for(var _attr in key){element.setAttribute(_attr,key[_attr]);}}else {element.setAttribute(key,value);}});return this;} /**
	 * Remove attribute from each element in the collection.
	 *
	 * @param {String} key Attribute name
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeAttr('attrName');
	 */function removeAttr(key){_util.each(this,function(element){return element.removeAttribute(key);});return this;} /*
	 * Export interface
	 */exports.attr=attr;exports.removeAttr=removeAttr; /***/}, /* 42 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Class
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37); /**
	 * Add a class to the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to add to the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').addClass('bar');
	 *     $('.item').addClass('bar foo');
	 */function addClass(value){if(value&&value.length){_util.each(value.split(' '),_each.bind(this,'add'));}return this;} /**
	 * Remove a class from the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to remove from the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeClass('bar');
	 *     $('.items').removeClass('bar foo');
	 */function removeClass(value){if(value&&value.length){_util.each(value.split(' '),_each.bind(this,'remove'));}return this;} /**
	 * Toggle a class at the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to toggle at the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').toggleClass('bar');
	 *     $('.item').toggleClass('bar foo');
	 */function toggleClass(value){if(value&&value.length){_util.each(value.split(' '),_each.bind(this,'toggle'));}return this;} /**
	 * Check if the element(s) have a class.
	 *
	 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
	 * returns `true` if _any_ of them contains the class name.
	 * @return {Boolean} Whether the element's class attribute contains the class name.
	 * @example
	 *     $('.item').hasClass('bar');
	 */function hasClass(value){return (this.nodeType?[this]:this).some(function(element){return element.classList.contains(value);});} /**
	 * Specialized iteration, applying `fn` of the classList API to each element.
	 *
	 * @param {String} fnName
	 * @param {String} className
	 * @private
	 */function _each(fnName,className){_util.each(this,function(element){return element.classList[fnName](className);});} /*
	 * Export interface
	 */exports.addClass=addClass;exports.removeClass=removeClass;exports.toggleClass=toggleClass;exports.hasClass=hasClass; /***/}, /* 43 */ /***/function(module,exports){ /**
	 * @module contains
	 */ /**
	 * Test whether an element contains another element in the DOM.
	 *
	 * @param {Element} container The element that may contain the other element.
	 * @param {Element} element The element that may be a descendant of the other element.
	 * @return {Boolean} Whether the `container` element contains the `element`.
	 * @example
	 *     $.contains(parentElement, childElement);
	 *     // true/false
	 */"use strict";exports.__esModule=true;function contains(container,element){if(!container||!element||container===element){return false;}else if(container.contains){return container.contains(element);}else if(container.compareDocumentPosition){return !(container.compareDocumentPosition(element)&Node.DOCUMENT_POSITION_DISCONNECTED);}return false;} /*
	 * Export interface
	 */exports.contains=contains; /***/}, /* 44 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module CSS
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var isNumeric=function isNumeric(value){return !isNaN(parseFloat(value))&&isFinite(value);};var camelize=function camelize(value){return value.replace(/-([\da-z])/gi,function(matches,letter){return letter.toUpperCase();});};var dasherize=function dasherize(value){return value.replace(/([a-z\d])([A-Z])/g,'$1-$2').toLowerCase();}; /**
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
	 */function css(key,value){var styleProps=undefined,prop=undefined,val=undefined;if(typeof key==='string'){key=camelize(key);if(typeof value==='undefined'){var element=this.nodeType?this:this[0];if(element){val=element.style[key];return isNumeric(val)?parseFloat(val):val;}return undefined;}styleProps={};styleProps[key]=value;}else {styleProps=key;for(prop in styleProps){val=styleProps[prop];delete styleProps[prop];styleProps[camelize(prop)]=val;}}_util.each(this,function(element){for(prop in styleProps){if(styleProps[prop]||styleProps[prop]===0){element.style[prop]=styleProps[prop];}else {element.style.removeProperty(dasherize(prop));}}});return this;} /*
	 * Export interface
	 */exports.css=css; /***/}, /* 45 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Data
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var DATAKEYPROP='__DOMTASTIC_DATA__'; /**
	 * Get data from first element, or set data for each element in the collection.
	 *
	 * @param {String} key The key for the data to get or set.
	 * @param {String} [value] The data to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').data('attrName'); // get
	 *     $('.item').data('attrName', {any: 'data'}); // set
	 */function data(key,value){if(typeof key==='string'&&typeof value==='undefined'){var element=this.nodeType?this:this[0];return element&&element[DATAKEYPROP]?element[DATAKEYPROP][key]:undefined;}_util.each(this,function(element){element[DATAKEYPROP]=element[DATAKEYPROP]||{};element[DATAKEYPROP][key]=value;});return this;} /**
	 * Get property from first element, or set property on each element in the collection.
	 *
	 * @param {String} key The name of the property to get or set.
	 * @param {String} [value] The value of the property to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prop('attrName'); // get
	 *     $('.item').prop('attrName', 'attrValue'); // set
	 */function prop(key,value){if(typeof key==='string'&&typeof value==='undefined'){var element=this.nodeType?this:this[0];return element&&element?element[key]:undefined;}_util.each(this,function(element){return element[key]=value;});return this;} /*
	 * Export interface
	 */exports.data=data;exports.prop=prop; /***/}, /* 46 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module DOM
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _selectorIndex=__webpack_require__(39);var forEach=Array.prototype.forEach; /**
	 * Append element(s) to each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to append to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').append('<p>more</p>');
	 */function append(element){if(this instanceof Node){if(typeof element==='string'){this.insertAdjacentHTML('beforeend',element);}else {if(element instanceof Node){this.appendChild(element);}else {var elements=element instanceof NodeList?_util.toArray(element):element;forEach.call(elements,this.appendChild.bind(this));}}}else {_each(this,append,element);}return this;} /**
	 * Place element(s) at the beginning of each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prepend('<span>start</span>');
	 */function prepend(element){if(this instanceof Node){if(typeof element==='string'){this.insertAdjacentHTML('afterbegin',element);}else {if(element instanceof Node){this.insertBefore(element,this.firstChild);}else {var elements=element instanceof NodeList?_util.toArray(element):element;forEach.call(elements.reverse(),prepend.bind(this));}}}else {_each(this,prepend,element);}return this;} /**
	 * Place element(s) before each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').before('<p>prefix</p>');
	 */function before(element){if(this instanceof Node){if(typeof element==='string'){this.insertAdjacentHTML('beforebegin',element);}else {if(element instanceof Node){this.parentNode.insertBefore(element,this);}else {var elements=element instanceof NodeList?_util.toArray(element):element;forEach.call(elements,before.bind(this));}}}else {_each(this,before,element);}return this;} /**
	 * Place element(s) after each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').after('<span>suf</span><span>fix</span>');
	 */function after(element){if(this instanceof Node){if(typeof element==='string'){this.insertAdjacentHTML('afterend',element);}else {if(element instanceof Node){this.parentNode.insertBefore(element,this.nextSibling);}else {var elements=element instanceof NodeList?_util.toArray(element):element;forEach.call(elements.reverse(),after.bind(this));}}}else {_each(this,after,element);}return this;} /**
	 * Clone a wrapped object.
	 *
	 * @return {Object} Wrapped collection of cloned nodes.
	 * @example
	 *     $(element).clone();
	 */function clone(){return _selectorIndex.$(_clone(this));} /**
	 * Clone an object
	 *
	 * @param {String|Node|NodeList|Array} element The element(s) to clone.
	 * @return {String|Node|NodeList|Array} The cloned element(s)
	 * @private
	 */function _clone(element){if(typeof element==='string'){return element;}else if(element instanceof Node){return element.cloneNode(true);}else if('length' in element){return [].map.call(element,function(el){return el.cloneNode(true);});}return element;} /**
	 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
	 *
	 * @param {NodeList|Array} collection
	 * @param {Function} fn
	 * @param {Node} element
	 * @private
	 */function _each(collection,fn,element){var l=collection.length;while(l--){var elm=l===0?element:_clone(element);fn.call(collection[l],elm);}} /*
	 * Export interface
	 */exports.append=append;exports.prepend=prepend;exports.before=before;exports.after=after;exports.clone=clone; /***/}, /* 47 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module DOM (extra)
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _index=__webpack_require__(46);var _selectorIndex=__webpack_require__(39); /**
	 * Append each element in the collection to the specified element(s).
	 *
	 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').appendTo(container);
	 */function appendTo(element){var context=typeof element==='string'?_selectorIndex.$(element):element;_index.append.call(context,this);return this;} /*
	 * Empty each element in the collection.
	 *
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').empty();
	 */function empty(){return _util.each(this,function(element){return element.innerHTML='';});} /**
	 * Remove the collection from the DOM.
	 *
	 * @return {Array} Array containing the removed elements
	 * @example
	 *     $('.item').remove();
	 */function remove(){return _util.each(this,function(element){if(element.parentNode){element.parentNode.removeChild(element);}});} /**
	 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
	 *
	 * @return {Array} Array containing the replaced elements
	 */function replaceWith(){return _index.before.apply(this,arguments).remove();} /**
	 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').text('New content');
	 */function text(value){if(value===undefined){return this[0].textContent;}_util.each(this,function(element){return element.textContent=''+value;});return this;} /**
	 * Get the `value` from the first, or set the `value` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('input.firstName').value('New value');
	 */function val(value){if(value===undefined){return this[0].value;}_util.each(this,function(element){return element.value=value;});return this;} /*
	 * Export interface
	 */exports.appendTo=appendTo;exports.empty=empty;exports.remove=remove;exports.replaceWith=replaceWith;exports.text=text;exports.val=val; /***/}, /* 48 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Events
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _selectorClosest=__webpack_require__(49); /**
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
	 */function on(eventNames,selector,handler,useCapture){var _this=this;if(typeof selector==='function'){handler=selector;selector=null;}var parts=undefined,namespace=undefined,eventListener=undefined;eventNames.split(' ').forEach(function(eventName){parts=eventName.split('.');eventName=parts[0]||null;namespace=parts[1]||null;eventListener=proxyHandler(handler);_util.each(_this,function(element){if(selector){eventListener=delegateHandler.bind(element,selector,eventListener);}element.addEventListener(eventName,eventListener,useCapture||false);getHandlers(element).push({eventName:eventName,handler:handler,eventListener:eventListener,selector:selector,namespace:namespace});});},this);return this;} /**
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
	 */function off(eventNames,selector,handler,useCapture){if(eventNames===undefined)eventNames='';var _this2=this;if(typeof selector==='function'){handler=selector;selector=null;}var parts=undefined,namespace=undefined,handlers=undefined;eventNames.split(' ').forEach(function(eventName){parts=eventName.split('.');eventName=parts[0]||null;namespace=parts[1]||null;_util.each(_this2,function(element){handlers=getHandlers(element);_util.each(handlers.filter(function(item){return (!eventName||item.eventName===eventName)&&(!namespace||item.namespace===namespace)&&(!handler||item.handler===handler)&&(!selector||item.selector===selector);}),function(item){element.removeEventListener(item.eventName,item.eventListener,useCapture||false);handlers.splice(handlers.indexOf(item),1);});if(!eventName&&!namespace&&!selector&&!handler){clearHandlers(element);}else if(handlers.length===0){clearHandlers(element);}});},this);return this;} /**
	 * Get event handlers from an element
	 *
	 * @private
	 * @param {Node} element
	 * @return {Array}
	 */var eventKeyProp='__domtastic_event__';var id=1;var handlers={};var unusedKeys=[];function getHandlers(element){if(!element[eventKeyProp]){element[eventKeyProp]=unusedKeys.length===0?++id:unusedKeys.pop();}var key=element[eventKeyProp];return handlers[key]||(handlers[key]=[]);} /**
	 * Clear event handlers for an element
	 *
	 * @private
	 * @param {Node} element
	 */function clearHandlers(element){var key=element[eventKeyProp];if(handlers[key]){handlers[key]=null;element[key]=null;unusedKeys.push(key);}} /**
	 * Function to create a handler that augments the event object with some extra methods,
	 * and executes the callback with the event and the event data (i.e. `event.detail`).
	 *
	 * @private
	 * @param handler Callback to execute as `handler(event, data)`
	 * @return {Function}
	 */function proxyHandler(handler){return function(event){handler.call(this,augmentEvent(event),event.detail);};} /**
	 * Attempt to augment events and implement something closer to DOM Level 3 Events.
	 *
	 * @private
	 * @param {Object} event
	 * @return {Function}
	 */var augmentEvent=function(){var methodName=undefined,eventMethods={preventDefault:'isDefaultPrevented',stopImmediatePropagation:'isImmediatePropagationStopped',stopPropagation:'isPropagationStopped'},returnTrue=function returnTrue(){return true;},returnFalse=function returnFalse(){return false;};return function(event){if(!event.isDefaultPrevented||event.stopImmediatePropagation||event.stopPropagation){for(methodName in eventMethods){(function(methodName,testMethodName,originalMethod){event[methodName]=function(){this[testMethodName]=returnTrue;return originalMethod&&originalMethod.apply(this,arguments);};event[testMethodName]=returnFalse;})(methodName,eventMethods[methodName],event[methodName]);}if(event._preventDefault){event.preventDefault();}}return event;};}(); /**
	 * Function to test whether delegated events match the provided `selector` (filter),
	 * if the event propagation was stopped, and then actually call the provided event handler.
	 * Use `this` instead of `event.currentTarget` on the event object.
	 *
	 * @private
	 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Event} event
	 */function delegateHandler(selector,handler,event){var eventTarget=event._target||event.target,currentTarget=_selectorClosest.closest.call([eventTarget],selector,this)[0];if(currentTarget&&currentTarget!==this){if(currentTarget===eventTarget||!(event.isPropagationStopped&&event.isPropagationStopped())){handler.call(currentTarget,event);}}}var bind=on,unbind=off; /*
	 * Export interface
	 */exports.on=on;exports.off=off;exports.bind=bind;exports.unbind=unbind; /***/}, /* 49 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module closest
	 */'use strict';exports.__esModule=true;var _index=__webpack_require__(39);var _util=__webpack_require__(37); /**
	 * Return the closest element matching the selector (starting by itself) for each element in the collection.
	 *
	 * @param {String} selector Filter
	 * @param {Object} [context] If provided, matching elements must be a descendant of this element
	 * @return {Object} New wrapped collection (containing zero or one element)
	 * @chainable
	 * @example
	 *     $('.selector').closest('.container');
	 */var closest=function(){function closest(selector,context){var nodes=[];_util.each(this,function(node){while(node&&node!==context){if(_index.matches(node,selector)){nodes.push(node);break;}node=node.parentElement;}});return _index.$(_util.uniq(nodes));}return !Element.prototype.closest?closest:function(selector,context){var _this=this;if(!context){var _ret=function(){var nodes=[];_util.each(_this,function(node){var n=node.closest(selector);if(n){nodes.push(n);}});return {v:_index.$(_util.uniq(nodes))};}();if((typeof _ret==='undefined'?'undefined':_typeof2(_ret))==='object')return _ret.v;}else {return closest.call(this,selector,context);}};}(); /*
	 * Export interface
	 */exports.closest=closest; /***/}, /* 50 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module HTML
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37); /*
	 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
	 *
	 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').html();
	 *     $('.item').html('<span>more</span>');
	 */function html(fragment){if(typeof fragment!=='string'){var element=this.nodeType?this:this[0];return element?element.innerHTML:undefined;}_util.each(this,function(element){return element.innerHTML=fragment;});return this;} /*
	 * Export interface
	 */exports.html=html; /***/}, /* 51 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module noConflict
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37); /*
	 * Save the previous value of the global `$` variable, so that it can be restored later on.
	 * @private
	 */var previousLib=_util.global.$; /**
	 * In case another library sets the global `$` variable before DOMtastic does,
	 * this method can be used to return the global `$` to that other library.
	 *
	 * @return {Object} Reference to DOMtastic.
	 * @example
	 *     var domtastic = $.noConflict();
	 */function noConflict(){_util.global.$=previousLib;return this;} /*
	 * Export interface
	 */exports.noConflict=noConflict; /***/}, /* 52 */ /***/function(module,exports){ /**
	 * @module Ready
	 */ /**
	 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
	 *
	 * @param handler Callback to execute when initial DOM content is loaded.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $(document).ready(callback);
	 */'use strict';exports.__esModule=true;function ready(handler){if(/complete|loaded|interactive/.test(document.readyState)&&document.body){handler();}else {document.addEventListener('DOMContentLoaded',handler,false);}return this;} /*
	 * Export interface
	 */exports.ready=ready; /***/}, /* 53 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module Selector (extra)
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _index=__webpack_require__(39); /**
	 * Return children of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').children();
	 *     $('.selector').children('.filter');
	 */function children(selector){var nodes=[];_util.each(this,function(element){if(element.children){_util.each(element.children,function(child){if(!selector||selector&&_index.matches(child,selector)){nodes.push(child);}});}});return _index.$(nodes);} /**
	 * Return child nodes of each element in the collection, including text and comment nodes.
	 *
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.selector').contents();
	 */function contents(){var nodes=[];_util.each(this,function(element){nodes.push.apply(nodes,_util.toArray(element.childNodes));});return _index.$(nodes);} /**
	 * Return a collection containing only the one at the specified index.
	 *
	 * @param {Number} index
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').eq(1)
	 *     // The second item; result is the same as doing $($('.items')[1]);
	 */function eq(index){return slice.call(this,index,index+1);} /**
	 * Return the DOM element at the specified index.
	 *
	 * @param {Number} index
	 * @return {Node} Element at the specified index
	 * @example
	 *     $('.items').get(1)
	 *     // The second element; result is the same as doing $('.items')[1];
	 */function get(index){return this[index];} /**
	 * Return the parent elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').parent();
	 *     $('.selector').parent('.filter');
	 */function parent(selector){var nodes=[];_util.each(this,function(element){if(!selector||selector&&_index.matches(element.parentNode,selector)){nodes.push(element.parentNode);}});return _index.$(nodes);} /**
	 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').siblings();
	 *     $('.selector').siblings('.filter');
	 */function siblings(selector){var nodes=[];_util.each(this,function(element){_util.each(element.parentNode.children,function(sibling){if(sibling!==element&&(!selector||selector&&_index.matches(sibling,selector))){nodes.push(sibling);}});});return _index.$(nodes);} /**
	 * Create a new, sliced collection.
	 *
	 * @param {Number} start
	 * @param {Number} end
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.items').slice(1, 3)
	 *     // New wrapped collection containing the second, third, and fourth element.
	 */function slice(start,end){return _index.$([].slice.apply(this,arguments));} /*
	 * Export interface
	 */exports.children=children;exports.contents=contents;exports.eq=eq;exports.get=get;exports.parent=parent;exports.siblings=siblings;exports.slice=slice; /***/}, /* 54 */ /***/function(module,exports,__webpack_require__){ /**
	 * @module trigger
	 */'use strict';exports.__esModule=true;var _util=__webpack_require__(37);var _domContains=__webpack_require__(43);var reMouseEvent=/^(?:mouse|pointer|contextmenu)|click/;var reKeyEvent=/^key/; /**
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
	 */function trigger(type,data){var _ref=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];var _ref$bubbles=_ref.bubbles;var bubbles=_ref$bubbles===undefined?true:_ref$bubbles;var _ref$cancelable=_ref.cancelable;var cancelable=_ref$cancelable===undefined?true:_ref$cancelable;var _ref$preventDefault=_ref.preventDefault;var preventDefault=_ref$preventDefault===undefined?false:_ref$preventDefault;var EventConstructor=getEventConstructor(type),event=new EventConstructor(type,{bubbles:bubbles,cancelable:cancelable,preventDefault:preventDefault,detail:data});event._preventDefault=preventDefault;_util.each(this,function(element){if(!bubbles||isEventBubblingInDetachedTree||isAttachedToDocument(element)){dispatchEvent(element,event);}else {triggerForPath(element,type,{bubbles:bubbles,cancelable:cancelable,preventDefault:preventDefault,detail:data});}});return this;}function getEventConstructor(type){return supportsOtherEventConstructors?reMouseEvent.test(type)?MouseEvent:reKeyEvent.test(type)?KeyboardEvent:CustomEvent:CustomEvent;} /**
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
	 */function triggerHandler(type,data){if(this[0]){trigger.call(this[0],type,data,{bubbles:false,preventDefault:true});}} /**
	 * Check whether the element is attached to (or detached from) the document
	 *
	 * @private
	 * @param {Node} element Element to test
	 * @return {Boolean}
	 */function isAttachedToDocument(element){if(element===window||element===document){return true;}return _domContains.contains(element.ownerDocument.documentElement,element);} /**
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
	 */function triggerForPath(element,type){var params=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];params.bubbles=false;var event=new CustomEvent(type,params);event._target=element;do {dispatchEvent(element,event);}while(element=element.parentNode);} /**
	 * Dispatch event to element, but call direct event methods instead if available
	 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
	 *
	 * @private
	 * @param {Node} element Element to dispatch the event at
	 * @param {Object} event Event to dispatch
	 */var directEventMethods=['blur','focus','select','submit'];function dispatchEvent(element,event){if(directEventMethods.indexOf(event.type)!==-1&&typeof element[event.type]==='function'&&!event._preventDefault&&!event.cancelable){element[event.type]();}else {element.dispatchEvent(event);}} /**
	 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill).
	 * Needed to support IE (9, 10, 11) & PhantomJS
	 */(function(){function CustomEvent(event){var params=arguments.length<=1||arguments[1]===undefined?{bubbles:false,cancelable:false,detail:undefined}:arguments[1];var customEvent=document.createEvent('CustomEvent');customEvent.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return customEvent;}CustomEvent.prototype=_util.global.CustomEvent&&_util.global.CustomEvent.prototype;_util.global.CustomEvent=CustomEvent;})(); /*
	 * Are events bubbling in detached DOM trees?
	 * @private
	 */var isEventBubblingInDetachedTree=function(){var isBubbling=false,doc=_util.global.document;if(doc){var _parent=doc.createElement('div'),child=_parent.cloneNode();_parent.appendChild(child);_parent.addEventListener('e',function(){isBubbling=true;});child.dispatchEvent(new CustomEvent('e',{bubbles:true}));}return isBubbling;}();var supportsOtherEventConstructors=function(){try{new window.MouseEvent('click');}catch(e){return false;}return true;}(); /*
	 * Export interface
	 */exports.trigger=trigger;exports.triggerHandler=triggerHandler; /***/}, /* 55 */ /***/function(module,exports){ /**
	 * @module Type
	 */ /*
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
	 */'use strict';exports.__esModule=true;var isFunction=function isFunction(obj){return typeof obj==='function';}; /*
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
	 */var isArray=Array.isArray; /*
	 * Export interface
	 */exports.isArray=isArray;exports.isFunction=isFunction; /***/}, /* 56 */ /***/function(module,exports,__webpack_require__){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var WatchJS=__webpack_require__(57);var Watch=WatchJS.watch;var Daft=Daft||window.Daft;var Dom=__webpack_require__(36);var Utility=__webpack_require__(4); // CREATES A NEW COMPONENT
var Component=function(){function Component(component,userData,cb){_classCallCheck(this,Component);var self=this;var Watcher=__webpack_require__(58)([component+Daft.attributes.data]);component=component.toLowerCase();if(!verify(component))return false; // VERIFY THAT NAMESPACE EXISTS
self.loaded={attempts:0, // HOW MANY TIMES WE'VE TRIED TO FIRE LOAD EVENT
fail:3000, // HOW MANY SECONDS TIL WE SHOULD GIVE UP
refresh:500, // HOW OFTEN TO RE-TRY
success:false // WHETHER OR NOT WE'VE SUCCEEDED YET
}; // SET EMPTY OBJECT IF NOT PROVIDED
userData=userData||{}; // ADD USER DATA TO NAMESPACE
for(var key in userData){self[key]=userData[key];}function watchData(scope,elements){ // WATCH FOR CHANGES TO DOM DATA OBJECT
for(var key in elements){elements[key].forEach(function(el,key){var element=el.element;if(typeof scope.data[el.key]!=='undefined'){Watch(scope.data[el.key],function(){var val=scope.data[el.key].value;var tag=scope.data[el.key].tag;if(typeof element.type!=='undefined'&&element.type!==''){Daft.dom(element).value(val);}else {if(typeof val==='string'){Dom(element).html(val);}else {(function(){var arrayData='';val.forEach(function(value){arrayData=arrayData+'<'+tag+' '+Daft.attributes.loopItem+'>';arrayData=arrayData+value;arrayData=arrayData+'</'+tag+'>';});Dom(element).html(arrayData);})();}}});}});}}function verify(component){var wrapper=Dom('['+Daft.attributes.component+'="'+component+'"]');if(wrapper.length<1){throwError('invalidNamespace');return false;}else {return wrapper;}} // GET ALL CUSTOM DOM TAGS FOR NAMESPACE: <component-key>
function registerTags(component){var elements=Dom('['+Daft.attributes.component+'="'+component+'"] *');var tags=[];var skip=false;elements=Array.prototype.slice.call(elements).filter(function(el){return el.localName.indexOf('-')!==-1||el.getAttribute('is');}); // LOOP THROUGH EACH CUSTOM ELEMENT
elements.forEach(function(el,key){var attrs=el.localName.split('-');var data=dataType(el);var root=false;if(el.attributes[Daft.attributes.init])root=true; // MAKE SURE IT'S IN OUR NAMESPACE
if(attrs[0]===component){ // ADD DATA TO ARRAY OF CUSTOM TAGS
tags.push({element:el,key:el.localName.split(attrs[0]+'-')[1],component:attrs[0],root:root,tag:el.localName,type:data.type,value:data.value});if(el.attributes[component+Daft.attributes.data]){if(el.localName.split(component+'-').join('')===el.attributes[component+Daft.attributes.data].value){skip=true;}}if(!skip)Dom(el).attr(component+Daft.attributes.data,el.localName.split(attrs[0]+'-')[1]);} // REGISTER ELEMENTS WITH THE DOM
try{document.registerElement(el.localName);}catch(e){ //
}});return tags;} // POPULAR DOM DATA OBJECT BASED ON component-data OBJECTS
function populateDomData(){self.data={};var domTags=Dom('['+Daft.attributes.component+'="'+component+'"]').find('['+component+'-data]');self.customTags=registerTags(component);data(self.customTags,domTags);}function dataType(el){var data='';var type='string';var value='';if(el.attributes[Daft.attributes.prefix+'-loop']){var children=Daft.dom(el).find('['+Daft.prefix+Daft.attributes.loopItem);data=[];type='array';children.forEach(function(el){if(typeof el.type!=='undefined'&&el.value!=='')value=el.value;if(typeof el.innerHTML!=='undefined'&&el.innerHTML!=='')value=el.innerHTML;data.push(value);});}else {data=el.innerHTML;}return {type:type,value:data};}function data(tags,domTags){ // COMBINE DATA FROM CUSTOM ELEMENTS & DATA ATTRIBUTES
var elementCollection=[];var added=[]; // GET EACH STANDARD ELEMENT
domTags.forEach(function(el){var data=dataType(el);var key=el.attributes[component+Daft.attributes.data].value;var root=false;if(el.attributes[Daft.attributes.init])root=true;if(typeof elementCollection[key]==='undefined'){elementCollection[key]=[];elementCollection.length++;}added.push(el); // SAVE DATA
elementCollection[key].push({element:el,key:key,component:component,root:root,tag:el.localName,type:data.type,value:data.value});}); // GET EACH CUSTOM ELEMENT
tags.forEach(function(element,key){Daft.dom(element.tag).forEach(function(el){var data=dataType(el);var root=false;var skip=false;if(el.attributes[Daft.attributes.init])root=true;if(typeof elementCollection[element.key]==='undefined'){elementCollection[element.key]=[];elementCollection.length++;}added.forEach(function(value,key){if(value===el)skip=true;});if(!skip){elementCollection[element.key].push({element:el,key:element.key,component:element.component,root:root,tag:element.tag,type:data.type,value:data.value});}});});populateData(elementCollection);}function throwError(which,data){ // ERROR HANDLER FOR NAMESPACE
if(which==='invalidNamespace'){return Daft.error('Failed to initiate component for '+component+'. Could not find a valid container.'+'Please make sure your component has a parent container with an attribute of '+Daft.attributes.component+'="'+component+'"');}if(which==='noRoot'){return Daft.error('Error populating '+data.prop+' data:\n\n'+'Found multiple elements with "'+data.prop+'" data in "'+component+'" component, and could not determine default value. If you wish to use the same key to bind data to multiple elements, please be sure to specify a default value in data object when creating the component:\n'+'data: {\n'+'  '+data.prop+': {\n'+'    value: "hello world"\n'+'  }\n'+'}\n\n'+'Alternatively, if you want to pull the default data from the dom, you can add a data-init attribute to one (and only one!) of these elements.');}}function populateData(elements){var _loop=function _loop(key){var qty=elements[key].length;var root=false;var jsData=false;elements[key].forEach(function(el,key){var element=el.element;var prop=el.key;var value='';if(qty===1||el.root===true){self.data[prop]={value:el.value,previous:null};} // ON CHANGE EVENT FOR FORM ELEMENTS
// TODO: REVISIT HOW THIS WORKS
if(typeof element.type!=='undefined'){element.addEventListener('input',function(e){self.data[prop].value=e.target.value;this.setSelectionRange(this.selectionStart,this.selectionEnd);});}if(typeof userData.data!=='undefined'&&typeof userData.data[prop]!=='undefined'){ // OVERRIDE DOM DATA WITH JS DATA IF THE EXISTS
if(typeof self.data[prop]==='undefined'){ // CREATE DOM DATA FOR PROP IF IT DOESN'T EXIST
self.data[prop]={data:'',previous:null};} // SET VALUE IF FORM FIELD
if(typeof element.type!=='undefined'&&element.type!==''){Dom(element).val(userData.data[prop].value);}else { // OTHERWISE SET HTML
// IF VALUE IS A STRING, JUST SAVE AS HTML
if(typeof userData.data[prop].value==='string'){Dom(element).html(userData.data[prop].value); // IF WE HAVE AN ARRAY OR AN OBJECT, TRY AND CREATE A LIST
}else {populateArray(userData,element,prop);}} // UPDATE DOMDATA OBJECT
self.data[prop].value=userData.data[prop].value;self.data[prop].previous=value;jsData=true;}if(el.root)root=true; // IF WE HAVE MORE THAN ONE ELEMENT, MAKE SURE WE HAVE A ROOT ELEMENT TO SET DEFAULT VALUE
if(qty>1&&key===qty-1){ // THROW AN ERROR IF WE CAN'T DETERMINE AN INITIAL DEFAULT VALUE
if(!root&&!jsData)throwError('noRoot',{prop:prop,elements:elements});}else {setData(self,elements);watchData(self,elements); // WATCH FOR CHANGES TO OUR DATA
} // JUST IN CASE WE STILL DON'T KNOW WHAT THE DOM DATA VALUE SHOULD BE
if(typeof self.data[prop]==='undefined'&&el.tag!=='content-'+prop){self.data[prop]={value:'',previous:null};}});}; // POPULATE DATA FROM DOM ELEMENTS
for(var key in elements){_loop(key);}}function populateArray(userData,element,prop){var arrayData='';userData.data[prop].value.forEach(function(value){ // IF USER HAS SUPPLIED A TEMPLATE
if(typeof userData.data[prop].template!=='undefined'){ // IF WE'RE USING RAW DATA
}else {if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){value=value[userData.data[prop].key];}arrayData=arrayData+'<'+userData.data[prop].tag+''+Daft.attributes.loopItem+'>';arrayData=arrayData+value;arrayData=arrayData+'</'+userData.data[prop].tag+'>';self.data[prop].tag=userData.data[prop].tag;}});Dom(element).html(arrayData);}function setData(self,elements){ // SET DOM DATA FOR EACH ELEMENT
for(var key in elements){elements[key].forEach(function(el,key){var element=Daft.dom(el.element)[0];if(typeof self.data[el.key]!=='undefined'){var val=self.data[el.key].value;if(typeof element.type!=='undefined'&&element.type!==''){Daft.dom(element).value(val);}else {Daft.dom(element).html(val);}}});}} // SET PARENT COMTAINER
self.container=Dom('['+Daft.attributes.component+'="'+component+'"]')[0]; // SET NAMESPACE NAME
self.name=Utility.setNamespace(component); // POPULATE DOM DATA
populateDomData(); // ADD NAMESPACE TO NS OBJECT
Daft[Daft.name][self.name]=self; // WATCH FOR ANY DOM CHANGES
self.observer=new Watcher.Observe(self.container);self.loaded.success=true; // INFORM ONLOAD FUNCTION WE'RE ALL FINISHED
}_createClass(Component,[{key:'onload',value:function onload(cb){ // CALLBACK ONE EVERYTHING IS LOADED
var self=this; // MAX SECS / REFRESH RATE = HOW MANY TIMES WE CAN TRY TRY
var fail=self.loaded.fail/self.loaded.refresh;if(self.loaded.success){if(typeof cb==='function'){cb.call(self);}}else if(!self.loaded.success&&self.loaded.attempts<fail){self.loaded.attempts++;setTimeout(function(){if(!self.loaded.success){self.onload(cb);}else {if(typeof cb==='function')cb();}},self.loaded.refresh);}else {cb.call(self,{msg:'Failed to finish loading '+self.component+' component after '+self.loaded.fail/1000+' seconds'});}}}]);return Component;}();module.exports=Component; /***/}, /* 57 */ /***/function(module,exports,__webpack_require__){ /**
	 * DEVELOPED BY
	 * GIL LOPES BUENO
	 * gilbueno.mail@gmail.com
	 *
	 * WORKS WITH:
	 * IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
	 *
	 * FORK:
	 * https://github.com/melanke/Watch.JS
	 */"use strict";(function(factory){if(true){ // Node. Does not work with strict CommonJS, but
// only CommonJS-like enviroments that support module.exports,
// like Node.
module.exports=factory();}else if(typeof define==='function'&&define.amd){ // AMD. Register as an anonymous module.
define(factory);}else { // Browser globals
window.WatchJS=factory();window.watch=window.WatchJS.watch;window.unwatch=window.WatchJS.unwatch;window.callWatchers=window.WatchJS.callWatchers;}})(function(){var WatchJS={noMore:false},defineWatcher,unwatchOne,callWatchers;var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)=='[object Function]';};var isInt=function isInt(x){return x%1===0;};var isArray=function isArray(obj){return Object.prototype.toString.call(obj)==='[object Array]';};var isModernBrowser=function isModernBrowser(){return Object.defineProperty||Object.prototype.__defineGetter__;};var defineGetAndSet=function defineGetAndSet(obj,propName,getter,setter){try{Object.defineProperty(obj,propName,{get:getter,set:setter,enumerable:true,configurable:true});}catch(error){try{Object.prototype.__defineGetter__.call(obj,propName,getter);Object.prototype.__defineSetter__.call(obj,propName,setter);}catch(error2){throw "watchJS error: browser not supported :/";}}};var defineProp=function defineProp(obj,propName,value){try{Object.defineProperty(obj,propName,{enumerable:false,configurable:true,writable:false,value:value});}catch(error){obj[propName]=value;}};var watch=function watch(){if(isFunction(arguments[1])){watchAll.apply(this,arguments);}else if(isArray(arguments[1])){watchMany.apply(this,arguments);}else {watchOne.apply(this,arguments);}};var watchAll=function watchAll(obj,watcher,level){if(obj instanceof String||!(obj instanceof Object)&&!isArray(obj)){ //accepts only objects and array (not string)
return;}var props=[];if(isArray(obj)){for(var prop=0;prop<obj.length;prop++){ //for each item if obj is an array
props.push(prop); //put in the props
}}else {for(var prop2 in obj){ //for each attribute if obj is an object
props.push(prop2); //put in the props
}}watchMany(obj,props,watcher,level); //watch all itens of the props
};var watchMany=function watchMany(obj,props,watcher,level){for(var prop in props){ //watch each attribute of "props" if is an object
watchOne(obj,props[prop],watcher,level);}};var watchOne=function watchOne(obj,prop,watcher,level){if(isFunction(obj[prop])){ //dont watch if it is a function
return;}if(obj[prop]!=null&&(level===undefined||level>0)){if(level!==undefined){level--;}watchAll(obj[prop],watcher,level); //recursively watch all attributes of this
}defineWatcher(obj,prop,watcher);};var unwatch=function unwatch(){if(isFunction(arguments[1])){unwatchAll.apply(this,arguments);}else if(isArray(arguments[1])){unwatchMany.apply(this,arguments);}else {unwatchOne.apply(this,arguments);}};var unwatchAll=function unwatchAll(obj,watcher){if(obj instanceof String||!(obj instanceof Object)&&!isArray(obj)){ //accepts only objects and array (not string)
return;}var props=[];if(isArray(obj)){for(var prop=0;prop<obj.length;prop++){ //for each item if obj is an array
props.push(prop); //put in the props
}}else {for(var prop2 in obj){ //for each attribute if obj is an object
props.push(prop2); //put in the props
}}unwatchMany(obj,props,watcher); //watch all itens of the props
};var unwatchMany=function unwatchMany(obj,props,watcher){for(var prop2 in props){ //watch each attribute of "props" if is an object
unwatchOne(obj,props[prop2],watcher);}};if(isModernBrowser()){defineWatcher=function(obj,prop,watcher){var val=obj[prop];watchFunctions(obj,prop);if(!obj.watchers){defineProp(obj,"watchers",{});}if(!obj.watchers[prop]){obj.watchers[prop]=[];}obj.watchers[prop].push(watcher); //add the new watcher in the watchers array
var getter=function getter(){return val;};var setter=function setter(newval){var oldval=val;val=newval;if(obj[prop]){watchAll(obj[prop],watcher);}watchFunctions(obj,prop);if(!WatchJS.noMore){if(JSON.stringify(oldval)!==JSON.stringify(newval)){callWatchers(obj,prop,"set",newval,oldval);WatchJS.noMore=false;}}};defineGetAndSet(obj,prop,getter,setter);};callWatchers=function(obj,prop,action,newval,oldval){for(var wr in obj.watchers[prop]){if(isInt(wr)){obj.watchers[prop][wr].call(obj,prop,action,newval,oldval);}}}; // @todo code related to "watchFunctions" is certainly buggy
var methodNames=['pop','push','reverse','shift','sort','slice','unshift'];var defineArrayMethodWatcher=function defineArrayMethodWatcher(obj,prop,original,methodName){defineProp(obj[prop],methodName,function(){var response=original.apply(obj[prop],arguments);watchOne(obj,obj[prop]);if(methodName!=='slice'){callWatchers(obj,prop,methodName,arguments);}return response;});};var watchFunctions=function watchFunctions(obj,prop){if(!obj[prop]||obj[prop] instanceof String||!isArray(obj[prop])){return;}for(var i=methodNames.length,methodName;i--;){methodName=methodNames[i];defineArrayMethodWatcher(obj,prop,obj[prop][methodName],methodName);}};unwatchOne=function(obj,prop,watcher){for(var i in obj.watchers[prop]){var w=obj.watchers[prop][i];if(w==watcher){obj.watchers[prop].splice(i,1);}}};}else { //this implementation dont work because it cant handle the gap between "settings".
//I mean, if you use a setter for an attribute after another setter of the same attribute it will only fire the second
//but I think we could think something to fix it
var subjects=[];defineWatcher=function(obj,prop,watcher){subjects.push({obj:obj,prop:prop,serialized:JSON.stringify(obj[prop]),watcher:watcher});};unwatchOne=function(obj,prop,watcher){for(var i in subjects){var subj=subjects[i];if(subj.obj==obj&&subj.prop==prop&&subj.watcher==watcher){subjects.splice(i,1);}}};callWatchers=function(obj,prop,action,value){for(var i in subjects){var subj=subjects[i];if(subj.obj==obj&&subj.prop==prop){subj.watcher.call(obj,prop,action,value);}}};var loop=function loop(){for(var i in subjects){var subj=subjects[i];var newSer=JSON.stringify(subj.obj[subj.prop]);if(newSer!=subj.serialized){subj.watcher.call(subj.obj,subj.prop,subj.obj[subj.prop],JSON.parse(subj.serialized));subj.serialized=newSer;}}};setInterval(loop,50);}WatchJS.watch=watch;WatchJS.unwatch=unwatch;WatchJS.callWatchers=callWatchers;return WatchJS;}); /***/}, /* 58 */ /***/function(module,exports,__webpack_require__){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);}; // WATCHES OUR NAMESPACE AND REPORT ON ANY CHANGES
var Utility=__webpack_require__(4);module.exports=function(attrs){var MutationObserver=MutationObserver||window.MutationObserver;var Daft=Daft||window.Daft;function componentExists(component){ // CHECK IF A NAMESPACE EXISTS, AND RETURN THE OBJECT IF IT DOES
// IF NAMESPACE EXISTS
if(_typeof(Daft[Daft.name][Utility.setNamespace(component)])==='object'){return Daft[Daft.name][Utility.setNamespace(component)]; // IF NAMESPACE DOES NOT EXIST
}else {return false;}}function getNameSpace(mutation){var attributes=null;var component=null;var parent=null;if(Daft.dom(mutation.target.parentElement).length>0){parent=Daft.dom(mutation.target.parentElement)[0].closest('['+Daft.attributes.component+']');component=componentExists(parent.attributes.component.value);attributes=getAttrs(mutation,component);}return {container:parent,component:component,attributes:attributes};}function getAttrs(el,component){ // GET ATTRIBUTES OF PARENT ELEMENT
el=Daft.dom(el.target.parentElement)[0].closest('['+component.name.toLowerCase()+'-data]');if(typeof el!=='undefined'&&el!==null){return el.attributes;}else {return null;}}function checkFunction(fn,NS){ // RETURN A FUNCTION TO CALL IF IT EXISTS
var args=[];var func=false;var obj=window.Daft[Daft.name][NS.component.name]; // IF ACTUAL FUNCTION WAS PASSED & NOT JUST A NAME OF A FUNCTION
if(fn!==null&&fn.indexOf('(')>0){var fnSplit=fn.split('(');fn=fnSplit[0];args=fnSplit[1].split(')')[0].split(',');if(args.length===1&&args[0]===''){args=null;}} // CHECK IF A FUNCTION EXISTS IN: component.function
if(typeof obj[fn]==='function'){func=obj[fn]; // CHECK IF A FUNCTION EXISTS IN GLOBAL NAMESPACE
}else if(typeof window[fn]==='function'){func=window[fn];Daft.warn('WARNING:',fn+' function exists as a global. You should define it as a part of your '+NS.component.name+'; component instead: http://docs.daftjs.com/component/functions');}return {run:func,name:fn,arguments:args};}function checkAttributes(mutation,NS){ // CHECK FOR data-component ATTRIBUTE ON ELEMENT
var dataKey=null;var updateFunction=null;var dataAttribute=NS.component.name.toLowerCase()+'-data';if(NS.attributes!==null){if(typeof NS.attributes['daft-update']!=='undefined'){updateFunction=NS.attributes['daft-update'].value;}if(typeof NS.attributes[dataAttribute]!=='undefined'){dataKey=NS.attributes[dataAttribute].value;} // IF AN UPDATE FUNCTION WAS PROVIDED
if(typeof updateFunction!=='undefined'){updateFunction=checkFunction(updateFunction,NS); // IF FUNCTION EXISTS & SHOULD BE RUN
if(updateFunction.run!==false){var updateData={el:mutation.target.parentElement,value:mutation.target.nodeValue,key:dataKey,previous:mutation.oldValue,mutation:mutation}; // IF FUNCTION HAS ARGUMENTS
if(updateFunction.arguments!==null){updateFunction.arguments.unshift(updateData);updateFunction.arguments.forEach(function(value,key){if(value==='this'){if(NS.mutation==='child'){updateFunction.arguments[key]=mutation.target.parentElement;}else {updateFunction.arguments[key]=mutation.target;}}});} // APPLY FUNCTION
if(typeof updateFunction.run==='function')updateFunction.run.apply(NS.component,updateFunction.arguments);}}}if(mutation.target.nodeValue!==null&&typeof NS.attributes[dataAttribute]!=='undefined'){dataKey=NS.attributes[dataAttribute].value; // UPDATE OBJECT WITH NEW VALUE
Daft[Daft.name][NS.component.name].data[dataKey].value=mutation.target.nodeValue; // AND PREVIOUS VALUE
Daft[Daft.name][NS.component.name].data[dataKey].previous=mutation.oldValue;}}var Watcher=new MutationObserver(function(mutations){ // WATCH FOR ANY CHANGES TO DOM (WITHIN A NAMESPACE)
// LOOP THROUGH EACH CHANGE THAT WAS RECEIVED
mutations.forEach(function(mutation){var NS=getNameSpace(mutation); // GET NAMESPACE DATA
if(NS!==null){checkAttributes(mutation,NS);} // MAKE SURE WE HAVE A PROPER NAMESPACE
});}); // WHAT DO WE WANT TO WATCH FOR
var observerConfig={attributes:true,characterData:true,childList:true,subtree:true,attributeOldValue:true,characterDataOldValue:true,attributeFilter:attrs};return {Observe:function Observe(node){Watcher.observe(node,observerConfig);},Disconnect:function Disconnect(){Watcher.disconnect();}};}; /***/} /******/]);