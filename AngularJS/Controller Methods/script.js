var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){
   
       $scope.FirstName="Shah";
       $scope.LastName="Muhammad";
       $scope.fullName=function(){
       	return $scope.FirstName+" "+$scope.LastName;
       }
});