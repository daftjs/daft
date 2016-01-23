window.define(function (require) {
  var Daft = window.Daft

  // SETUP OUR HEADER NAMESPACE
  var Header = new Daft.Namespace('header', {
    domData: {
      subtitle: {
        data: 'Hello Daft'
      }
    },
    onTitleUpdate: function () {
      console.log('Header.onTitleUpdate()')
    }
  })

  // ONLOAD
  Header.onload(function (err) {
    if (!err) Daft.info('Header namespace loaded') // IF WE GET AN ERROR
  })
})
