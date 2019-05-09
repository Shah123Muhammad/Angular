var app=angular.module('mod',[]);

app.controller('ctr',function($scope){
	/* 
	 $scope.showMe=false;
	 $scope.myfunction=function(){        
          $scope.showMe=!$scope.showMe;}
	 */


	 $scope.myfunction=function(myE){           
           $scope.x=myE.clientX;
           $scope.y=myE.clientY;
	 }
});