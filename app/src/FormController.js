angular.
    module('starter-app', ['ngMaterial', 'ngMessages'])

.controller('FormController', function($scope) {
  $scope.project = {};
});

/**
 * Main App Controller for the Angular Material Starter App
 * @param FormDataService
 * @param $mdSidenav
 * @constructor
 */
function FormController(FormDataService, $mdSidenav) {
    var self = this;

    self.onclick = function onclick() {
        alert("sdf");
    };
    self.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
  
}

export default [ 'FormDataService', '$mdSidenav', FormController ];
