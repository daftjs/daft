'use strict'

var require = window.requirejs

require(['js/daft.js'], function () {
  var Daft = window.Daft

  // INITIALIZE A NEW APP
  Daft.create('myApp', {
    other: 'daft'
  })

  // ONCE THE PAGE IS READY
  Daft.ready(function () {
    require(['js/header.js'])
    require(['js/content.js'])
  })
})
