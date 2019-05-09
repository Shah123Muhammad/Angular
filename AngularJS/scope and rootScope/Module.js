var app=angular.module("myApp",[]);

app.controller("redColorController",function($scope,$rootScope){
	$scope.redColor="I am Red Color!!";
	$rootScope.rootScopeColor="I am Root Scope Color!!";
})

app.controller("greenColorController",function($scope){
	 $scope.greenColor="I am green Color";
})