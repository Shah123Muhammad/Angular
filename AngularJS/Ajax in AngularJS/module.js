var app=angular.module('mod',[]);

app.controller('ctr',function($scope,$http){
     $http.get("file.txt").then(function(res){
           $scope.a=res.data;   
     });  
});