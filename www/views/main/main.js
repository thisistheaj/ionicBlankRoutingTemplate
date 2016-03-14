// Create Module for a Controller named "starter.MainCtrl".
// Array injects module with the app's model.
angular.module('starter.MainCtrl', ['starter.World'])

  // Set up controller named "MainCtrl". Injects $scope module
  // and the factory from the app's model into the function.
  // $scope binds controller components to the view
  .controller('MainCtrl', function($scope,World) {

    // Binds a string to the "helloString" variable available
    // to the view. PArt of the string is retrieved from our
    // model through a call to it's getter.
    $scope.helloString = "Hello, " + World.getModel() + "!";

    // More logic goes here. Remember to use $scope to make
    // properties and methods available to the view.

  });

