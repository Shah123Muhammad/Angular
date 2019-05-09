var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope, $location, $anchorScroll){
    $scope.scrollTo=function(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll.yOffset=20;
            $anchorScroll(); 
    }
});