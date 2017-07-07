// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import FormController from 'src/FormController';
import Users from 'src/users/Users';

export default angular.module( 'starter-app', [ 'ngMaterial', 'ngMessages' ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
   

    
  })
  .controller('FormController', function($scope, $mdToast){});
