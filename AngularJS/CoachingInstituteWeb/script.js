var app=angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
       
        $routeProvider
         .when('/courses',{
          	  templateUrl:'pages/courses.html',
          	  controller:'courses_con'
          })
         .when('/faculity',{
          	   templateUrl:'pages/staff.html',
          	   controller:'staff_con'
          })
         .when('/about',{
             templateUrl:'pages/about.html',
             controller:'about_con'
         })
          .when('/contact',{
          	  templateUrl:'pages/contact.html',
          })
          .otherwise({
          	   redirectTo:'/index.html'
          })

     })

app.controller("courses_con",function($scope){
          $scope.courses=["C++","Web Designing","Web Developmenet","Graphics Designing","Java"];       
});
app.controller('staff_con',function($scope){
          $scope.staff=[
            
            {name:"Shah Muhammad",qualification:"BE Software Engineering"},
            {name:"Rashid Ali",qualification:"BS Computer Science"},
            {name:"SM",qualification:"BS Computer System"},
            {name:"Muhammad Soomar",qualification:"BS Maths"}
      ];     
});
app.controller('about_con',function($scope){
          $scope.about="Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed lacinia elit id risus suscipit semper. Proin mattis consequat sodales.Duis sodales aliquet aliquet. Aenean dui metus, lobortis eget purus at, volutpat viverra sapien. Ut luctus dolor a mi interdum, ultrices mollis dui bibendum. Fusce non mauris ante. Nulla et ullamcorper lectus. In hac habitasse platea dictumst.Integer orci risus, ultricies eget sodales at, bibendum et elit Phasellus eget feugiat magna.";     
});


