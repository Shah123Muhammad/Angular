var app=angular.module("myApp",[]);


app.controller("myCtr",function($scope){

    var employees=[
       {name:"Ahmed", gender:"Male",city:"Moro", salary:55000},
       {name:"Arsal", gender:"Male",city:"Tando Jam", salary:65009},
       {name:"Jawad", gender:"Male",city:"Larkana",salary:53000},
       {name:"Aqib",  gender:"Male",city:"Moro", salary:45000},
       {name:"Qazi",  gender:"Male",city:"Ghotki",salary:60000}
    ];

    $scope.employees=employees;
  
})