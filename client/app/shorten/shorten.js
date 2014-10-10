angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  // console.log("location", $location);

  $scope.addLink = function(){
    Links.addLink()
    .then(function(data){
      $scope.link.data = data;
      // console.log("added link", data);
    });
  }
  // console.log("Link object", $scope.link);

});
