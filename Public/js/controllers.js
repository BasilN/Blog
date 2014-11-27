/**
 * Created by Basil on 11/3/2014.
 */
var blogApp = angular.module('blogApp',['ui.router', 'ngTable']);

blogApp.config(function($stateProvider, $urlRouterProvider){
    //Unmatched urls redirect to main
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home',{
            url:"/home",
            templateUrl:"partials/main.html"
        })
        .state('maps',{
            url:"/maps",
            templateUrl:"partials/maps.html"
        })
        .state('blog',{
            url:"/blog",
            templateUrl:"partials/blog.html"
        })
        .state('blog.trip',{
            url:"/trip",
            templateUrl:"partials/trip.html"
        })
        .state('users',{
            url:"/users",
            templateUrl:"partials/users.html"
        })
        .state('login',{
            url:"/login",
            templateUrl:"partials/login.html"
        })

})

blogApp.controller('PostHeroCtrl', function($scope){
    $scope.posts =[
        {'title': 'Trip', 'imageUrl':'/assets/flight.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Layover', 'imageUrl':'/assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Arrival', 'imageUrl':'/assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]}
    ]

});

blogApp.controller('UserCtrl', function($scope, $http, ngTableParams){
    $scope.formData ={};
    $scope.users={};

    $scope.CreateUser = function(){

        $http.post('/api/users', $scope.formData)
            .success(function(data){
                $scope.formData ={};
                $scope.users = data;
                console.log(data);
            })
            .error(function(data){
                debugger;
                console.log('Error:' + data);
            });
    }
    $scope.GetUsers = function(){
        $http.get('/api/users')
         .success(function(data) {
         $scope.users = data;
         console.log(data);
         })
         .error(function(data) {

         console.log('Error: ' + data);
         });
    }
    $scope.GetUsers();
    $scope.tableParams = new ngTableParams({
        page:1,
        count:10
    },{
        total: $scope.users.length,
        GetUsers: function($defer, params){
            $defer.resolve($scope.users.slice((params.page() -1) * params.count(), params.page() * params.count()))
        }
    })
});

blogApp.controller('postCtrl', function($scope, $state){
});
