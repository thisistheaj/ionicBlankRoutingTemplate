// Create Module for Model named "starter.World".
// Array is empty: no need for any injections here
angular.module('starter.World', [])

  // Module consists of a single factory for holding a string value
  // Factories are singletomns that can be accessed from all controllers
  // once the module is injected
  .factory('World', function() {

    // Some fake testing data
    // This will be hidden from other components
    var model = "World";

    // Returned object literal comprises exposed methods and
    // properties available to files that inject World.js
    return {

      // getter for data
      getModel: function() {
        return model;
      }

    };
  });
