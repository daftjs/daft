window.define(function (require) {
  var Daft = window.Daft
  var Content = new Daft.Namespace('content')

  // ON LOAD
  Content.onload(function () {
    var self = this
    var data = self.domData

    Daft.info('Content namespace loaded')

    setTimeout(function () {
      // data.message.value = 'message updated!!!'
    }, 2000)

    // ON UPDATE FUNCTION FOR TITLE
    Content.nameChange = function (response) {
      console.log('response', response)
      if (response.value !== '') {
        data.greeting.value = 'Great, I shall call you...' + response.value + '!'
      } else {
        data.greeting.value = 'Please enter your name above so I know what to call you!'
      }
    }
  })
})
