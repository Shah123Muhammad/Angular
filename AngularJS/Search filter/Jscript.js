var app=angular.module("myApp",[]);

app.controller("myCtr",function($scope){

    var employees=[
       {name:"Ahmed", gender:"Male",salary:55000.78, city:"Moro"},
       {name:"Arsal", gender:"Male",salary:65000, city:"Tando Jam"},
       {name:"Jawad", gender:"Male",salary:53000, city:"Larkana"},
       {name:"Aqib",  gender:"Male",salary:45000, city:"Moro"},
       {name:"Qazi",  gender:"Male",salary:60000, city:"Ghotki"}
    ];

    $scope.employees=employees;

    $scope.search=function(item){
    	if($scope.searchText == undefined){
              
              return true;
    	}
    	else{
    		if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || 
    			item.city.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 ) {
    			return true;
    		}
    	}

    	return false;
    }
});