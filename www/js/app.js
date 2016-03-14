// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.MainCtrl' has a single controller for the main view
// 'starter.World' has a factory that contains a single variable for the app's model
angular.module('starter', [
    'ionic',
    'starter.MainCtrl',
    'starter.World',
    //inject more modules here
  ])

  // for setup -- you most likely wil not need to touch this function.
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in main.js
    $stateProvider

      //state of the main view
      .state('main', {
        url: '/main',
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      });

    // if none of the above states are matched, use this as the fallback.
    // Usually denotes the first view to be seen in an app
    $urlRouterProvider.otherwise('/main');

  });
