window.define(function (require) {
  var Daft = window.Daft

  var Content = new Daft.Namespace('content', {
    data: {
      status: {
        value: 'Page loaded.'
      }
    }
  })

  // ON LOAD
  Content.onload(function () {
    var self = this
    var data = self.data

    // ON UPDATE FUNCTION FOR TITLE
    Content.nameChange = function (response) {
      if (response.value !== '') {
        data.greeting.value = 'Great, I shall call you...' + response.value + '!'
      } else {
        data.greeting.value = 'Please enter your name above so I know what to call you!'
      }
    }
  })
})
