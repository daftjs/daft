window.define(function (require) {
  return new window.Daft.Namespace('content', {
    domData: {
      message: {
        data: 'Isomorphic Javascript framework'
      },
      other: {
        data: true
      }
    },
    onUpdate: function () {
      // console.log('Content areas was updated', arguments)
    }

  })
})
