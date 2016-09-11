(function() {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope) {
    $scope.name = function() {
      $scope.message = "Hello World!";
    };
  } );

}());
