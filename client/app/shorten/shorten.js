angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.pageTitle = 'Shorten';

  $scope.addLink = function(){
    Links.addLink($scope.link)
    .then(function(data){
      $scope.link.data = data;
    });
  };


});
