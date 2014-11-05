/**
 * Created by Basil on 11/3/2014.
 */
var blogApp = angular.module('blogApp',[]);

blogApp.controller('PostHeroCtrl', function($scope){
    $scope.posts =[
        {'title': 'Trip', 'imageUrl':'assets/flight.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Layover', 'imageUrl':'assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]},
        {'title': 'Arrival', 'imageUrl':'assets/comingsoon.jpg','flags':[{'css':'flag flag-us','alt':'us'},{'css':'flag flag-ke','alt':'ke'}]}
    ]
});