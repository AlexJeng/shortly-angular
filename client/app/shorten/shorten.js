angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};


  $scope.pageTitle = 'Shorten';

  $scope.addLink = function(){
    console.log("add link was called!");
    Links.addLink($scope.link)
    .then(function(data){
      console.log("DATAJDDSLKJ", data);
      $scope.link.data = data;
    });
    console.log("scope link = ", $scope.link );
  };



  // $scope.submitForm = function(isValid) {

  //   // check to make sure the form is completely valid
  //   if (isValid) {
  //     alert('our form is amazing');
  //   }

  // };


});
