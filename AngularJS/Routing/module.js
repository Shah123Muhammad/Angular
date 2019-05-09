var app=angular.module('mod',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
      
      $routeProvider.
      when('/page1',{
        templateUrl:'pages/page1.html',
        controller:'page1_cont'
      }).
       when('/page2',{
        templateUrl:'pages/page2.html',
        controller:'page2_cont'
      }).
        when('/page3',{
        templateUrl:'pages/page3.html',
        controller:'page3_cont'
      }).
        otherwise({
           redirectTo:'index.html'
      });
   }]
);

app.controller('pag1_cont',function(){

});

app.controller('pag2_cont',function(){

});

app.controller('pag3_cont',function(){

});