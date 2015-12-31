window.define(function (require) {
  return new window.Daft.Namespace('content', {
    domData: {
      title: 'Welcome to Daft.js!',
      subtitle: 'page loaded'
    },
    onUpdate: function () {
      console.log('Page header was updated', arguments)
    }

  })
})
