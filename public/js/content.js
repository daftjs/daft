'use strict';

window.define(function (require) {
  let Daft = window.Daft;
  let Content = new Daft.Component('content');

  // ON LOAD
  Content.onload(function () {
    let self = this;
    let data = self.data;

    data.status.value = 'Page loaded.';

    // ON UPDATE FUNCTION FOR TITLE
    Content.nameChange = function (response) {
      if (response.value !== '') {
        data.greeting.value = 'Great, I shall call you...' + response.value + '!';
      } else {
        data.greeting.value = 'Please enter your name above so I know what to call you!';
      }
    };
  });
});

// Daft.myApp.Content.data['user-list'].value = ['Home', 'Contact', 'Links']
