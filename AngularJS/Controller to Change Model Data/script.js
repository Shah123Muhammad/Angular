var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){

 $scope.name="Shah Muhammad";
 $scope.changeName=function(){
      $scope.name="SM";
 }
});