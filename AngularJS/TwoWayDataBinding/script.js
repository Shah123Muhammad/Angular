var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){
        

      var employee={
              
               firstName:"Shah",
               lastName:"Muhammad",
               age:20


      };


        $scope.employee=employee;
});