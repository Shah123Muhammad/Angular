var app=angular.module("myApp",[]);

app.filter("gender", function(){
       return function(gender){
           switch(gender){
              case 1:
                return "Male";
              case 2:
                return "Female";
              case 3:
                 return "Not disclosed";    
           }
       }
});

app.controller("myCtr",function($scope){

    var employees=[
       {name:"Ahmed", gender:1,salary:55000},
       {name:"Arsal", gender:2,salary:65009},
       {name:"Jawad", gender:1,salary:53000},
       {name:"Aqib",  gender:2,salary:45000},
       {name:"Qazi",  gender:3,salary:60000}
    ];

    $scope.employees=employees;
  
})