var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){

  var technologies=[

     {name:"C++",Likes:0,Dislikes:0},
     {name:"Java",Likes:0,Dislikes:0},
     {name:"Javascript",Likes:0,Dislikes:0},
     {name:"php",Likes:0,Dislikes:0},
     {name:"AngularJS",Likes:0,Dislikes:0}

  ];

  $scope.technologies=technologies;

  $scope.incrementLikes=function(technology){
  	 technology.Likes++;
  }

  $scope.incrementDislikes=function(technology){
  	 technology.Dislikes++;
  }
});