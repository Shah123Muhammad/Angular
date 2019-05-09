var app=angular.module("my_mod",[]);

app.controller("my_ctr",function($scope){
        $scope.products=[

            {name:"Samsung J2", price:500, active:false},
            {name:"iphone 5", price:900, active:false},
            {name:"Nokia s5", price:250, active:false},
            {name:"Huvawei ", price:800, active:false},
            {name:"Motrolla", price:700, active:false}
 
        ];   
        
       
        $scope.addToList = function(p){
                p.active=!p.active; 
     }

      $scope.total=function(){
      	 var total=0;

      	 angular.forEach($scope.products,function(p){
      	 	 if(p.active==true){
      	 	 	total=total+p.price;
      	 	 }
      	 });

      	 return total; 
      }
});