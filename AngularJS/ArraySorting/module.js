var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){

	 $scope.names=[
        
        {name:'Shah Muhammad',age:19},
        {name:'Zain',age:10},
        {name:'Shahid',age:33},
        {name:'SM',age:34},
        {name:'Iqbal',age:62},
        {name:'Aamir',age:18},
        {name:'Jarra',age:67},
        {name:'Smalish',age:44},

	  ]; 

	  $scope.orderByMe=function(x){
            $scope.myOrderBy=x;
	  }
});