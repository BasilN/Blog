/**
 * Created by Basil on 11/3/2014.
 */
var blogApp = angular.module('blogApp',['ui.router']);

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
})

blogApp.controller('PostHeroCtrl', function($scope){
    $scope.posts =[
        {'title': 'Trip', 'imageUrl':'assets/flight.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Layover', 'imageUrl':'assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Arrival', 'imageUrl':'assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]}
    ]
});