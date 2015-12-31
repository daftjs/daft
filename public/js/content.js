window.define(function (require) {
  return new window.Daft.Namespace('content', {
    domData: {
      message: {
        data: 'Isomorphic Javascript framework'
      }
    },
    onUpdate: function () {
      console.log('Content areas was updated', arguments)
    }

  })
})
