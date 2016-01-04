window.define(function (require) {
  return new window.Daft.Namespace('header', {
    domData: {
      title: {
        data: 'Hello Daft'
      }
    },
    onUpdate: function (data) {
      if (data.data === 'blah') {
        window.alert('hooya')
      }
    }
  })
})
