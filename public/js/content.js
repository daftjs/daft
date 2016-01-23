window.define(function (require) {
  var Daft = window.Daft
  var Content = new Daft.Namespace('content')

  // ON LOAD
  Content.onload(function () {
    var domData = Daft.NS.content.domData

    Daft.info('Content namespace loaded')

    setTimeout(function () {
      domData.message.data = 'message updated!'
    }, 2000)

    // ON UPDATE FUNCTION FOR TITLE
    Content.onTitleUpdate = function () {
      console.log('Content.onTitleUpdate()')
    }
  })
})
