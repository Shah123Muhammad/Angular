var app=angular.module("myApp",[]);

 app.service('$hexafy',function(){         
        this.myFunc = function(x){
             return x.toString(16);
        } 
 });
  
app.controller("myCtr",function($scope,$hexafy){
      $scope.hex=$hexafy.myFunc(55);
	 }); 