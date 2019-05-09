var app = angular.module("myApp", []);

app.controller("myCtr",function($scope){
	$scope.value=1;

	$scope.incrementValue=function(value){
		$scope.value+=1;
	}
})