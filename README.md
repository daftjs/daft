# Daft
[![Gitter](https://img.shields.io/gitter/room/daftjs/daft.svg?style=flat-square)](https://gitter.im/daftjs/daft?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/v/daft.svg?style=flat-square)](https://www.npmjs.com/package/daft)
[![Travis](https://img.shields.io/travis/daftjs/daft.svg?style=flat-square)](https://travis-ci.org/daftjs/daft)
[![Bower](https://img.shields.io/bower/v/daft.svg?style=flat-square)]()
[![Gemnasium](https://img.shields.io/gemnasium/daftjs/daft.svg?style=flat-square)](https://gemnasium.com/daftjs/daft)
[![npm downloads](https://img.shields.io/npm/dt/daft.svg?style=flat-square)]()


An uber-modern, probably wont work in your mum's browser, isomorphic-friendly JavaScript framework.

[ WIP ]

##### NPM
`npm install daft`

##### BOWER
`bower install daft`

##### ^ Do not do any of this yet as it will probably break and make you cry.

---

## Namespaces

*^ This is a bad name for this and will probably change.*

The first thing you will want to do is create a namespace for an area of your app. Think of this similar to controllers in Angular. For example:

##### JS
```
new Daft.Namespace('headSpace', {
  domData: {
    status: {
      data: 'Page loaded!'
    }
  },
  onHeaderUpdate: function () {
    console.log('Page header was updated')
  }

})

```

##### HTML

```
<section namespace="headSpace">
  <h1 headSpace-data="title" daft-update="onHeaderUpdate">
    This is my default Page header
  </h1>
  <h4 data-status>waiting for something to happen...</h4>
</section>
```

The most interesting thing to note here, is that anything within the `headSpace` namespace, can have a `headSpace-data` attribute set, and you will automatically get 2 way binding between the dom and your domData object for that element.

With this, you would see the following output to the browser on page load:

```
<h1 headSpace-data="title" daft-update="onHeaderUpdate">
  This is my default Page header
</h1>
<h4 data-status>Page loaded!/h4>
```

#### Dom Data
You may have noticed in the JS example that we set a `domData.status` value of "Page loaded!" in our headSpace class. Since our h4 had an attribute of `headSpace-data="status"`, the 2 became joined at the hip, and daft knew to replace the default text of "waiting for something to happen..." with "Page loaded!".

The neat thing here, is that the `domData` values are set on page load based on the html of the element. So you can easily set your initial data on the server, and Daft will take care of mapping everything for you. Our h1 also has a `headSpace-data` value of "title", which which means it's automatically available to you as `headSpace.domData.title.data` as soon as the dom has loaded.

You may wonder why the additional `.data` is necessary, this is because Daft keeps track of both the current and previous values for you.

In the example above, you would have the following data in the `headSpace.domData` object:

```
domData : {
  status: {
    data: 'page loaded',
    previous: 'waiting for something to happen...'
  }
  title: {
    data: 'This is my default Page header',
    previous: null
  }
}
```


You will have access to a domData object within your namespace, at all times. If you need to access it outside of the namespace class for some reason, Daft has a Daft.NS array which holds references to all of your namespaces. The example above could be accessed with the  `Daft.NS.headSpace.domData` object.


#### Update Events
There's another (optional) attribute you can set called `daft-update` to which you can pass a function that will be called anytime the element is updated. In the example above, our h1 has `daft-update="onHeaderUpdate"`, which will call our headSpace's `onHeaderUpdate()` function anytime it changes.
