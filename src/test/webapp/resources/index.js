var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$window',function($scope,$window) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
}]);