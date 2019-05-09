var app=angular.module("myApp",[]);

app.controller("myCtr", function($scope){
  

      /*/////FOR SINGLE NG-REPEAT///////
      var employees=[

            {firstName:"Shah",lastName:"Muhammad",Age:20,city:"Hyd"},
            {firstName:"Shahd",lastName:"Hussain",Age:21,city:"Larkana"},
            {firstName:"Ahmed",lastName:"Ali",Age:19,city:"Moro"},
            {firstName:"Shakoor",lastName:"sawand",Age:22,city:"Sukkar"}
        ];
        $scope.employees=employees;
        */


//////////FOR NESTED NG-REPEAT////////////
        var countries=[
                
                {name:"UK"},
                {cities:[
             
                 {name:"London"},
                 {name:"Manchester"},
                 {name:"Birmingham"}
               
               ]},

              
               {name:"USA"},
                {cities:[
             
                 {name:"Los Angeles"},
                 {name:"Chicago"},
                 {name:"Houston"}
               ]},


               {name:"India"},
                {cities:[
             
                 {name:"Hyderabad"},
                 {name:"Chennai"},
                 {name:"Mumbai"}
               ]}

        ];

});	