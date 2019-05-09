var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope,$location){

   $scope.myUrl=$location.absUrl();
	
});