var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){

    var employees=[
       {name:"Ahmed",dateOfBirth:new Date("November 23,1990"), gender:"Male",salary:55000.78},
       {name:"Arsal",dateOfBirth:new Date("May 05,1970"), gender:"Male",salary:65000},
       {name:"Jawad",dateOfBirth:new Date("August 15,1980"), gender:"Male",salary:53000},
       {name:"Aqib",dateOfBirth:new Date("June 25,1995"), gender:"Male",salary:45000},
       {name:"Qazi",dateOfBirth:new Date("Auguest 25,1970"), gender:"Male",salary:60000}
    ];

    $scope.employees=employees;
    //$scope.rowLimit=3;
    $scope.sortColumn="name"; 
    $scope.reverseSort=false;



    $scope.sortData=function(column){
       $scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
       $scope.sortColumn=column;
    }
     $scope.getSortClass=function(column){
         if($scope.sortColumn==column){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
         }
         return '';
     }
})