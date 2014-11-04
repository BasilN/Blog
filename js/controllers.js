/**
 * Created by Basil on 11/3/2014.
 */
var blogApp = angular.module('blogApp',[]);

blogApp.controller('PostHeroCtrl', function($scope){
    $scope.posts =[
        {'title': 'Trip', 'imageUrl':'assets/flight.jpg'},
        {'title': 'Layover', 'imageUrl':'assets/comingsoon.jpg'},
        {'title': 'Arrival', 'imageUrl':'assets/comingsoon.jpg'}
    ]
});