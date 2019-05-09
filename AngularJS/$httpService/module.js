var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope,$http,$log){

///////////////////////////////////SAME AS DEFINED BELOW///////////////////////////////////
	/*$http.get("welcome.txt").then(function(response){     
         $scope.myWelcome=response.data;
	 }); 
*/


   var successCallback=function(response){
   	   $scope.myWelcome=response.data;
   };
   var errorCallback=function(reason){
   	   $scope.error=reason.data;
   };



	 $http({
         method:"GET",
         url:"welcome.tt"
	 })
      .then(successCallback,errorCallback);

///////////////////////SAME AS ABOVE//////////////////////////
	 /*then(function mySuccess(response){
	 	$scope.myWelcome=response.data;
	 	$log.info(response);//log(show) the information about the response object
	 }, function (reason){
	 	$scope.error=reason.data;
	 	$log.info(reason);
	 });*/
});