var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope,stringService){

   $scope.transformString=function(input){ 

         $scope.output=stringService.processString(input);
   };

});