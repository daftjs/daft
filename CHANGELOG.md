## v0.2.0
+ Large refactor of namespace module:
  + Add data-init attribute to det default value & allow data-binding on multiple elements with same data attributes
  + Add event listener to deal with MutationObserver not handling form elements (revisit this later to see if there's a better solution)
  + Add namespace.onload function to allow namespace logic to be handled after dom & data objects are created.

## v0.1.7
+ Bower should only publish dist folder
+ Cleanup unused files
+ Update README with codepen link

## v0.1.6
+ Fix bug where data only updates when daft-update exists
+ Remove hard-coded namespace

## v0.1.5
+ Fix bug where data-binding would only update one instance of a value
+ Fix lint error

## v0.1.4
+ Optimize watcher file, and fix namespace finder

## v0.1.3
+ Fix bug where namespace only finds immediate children

## v0.1.2
+ Minor bugfixes
+ Add changelog
