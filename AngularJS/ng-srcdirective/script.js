var app=angular
              .module("myApp",[])
              .controller("myCtr",function($scope){
               

               var country={
                 
                 name:"USA",
                 capital:"Washington, D.C.",
                 flag:"img-1.jpg"

               };


               $scope.country=country;
     });