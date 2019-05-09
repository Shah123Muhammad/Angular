var app=angular.module("formApp",[]);

 app.controller("formCtr",function($scope){

      $scope.master={firstname:"Shah",lastname:"Muhammad"};
      $scope.reset=function(){      
          $scope.user=angular.copy($scope.master);
      };

      $scope.reset();
});