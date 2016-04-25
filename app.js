require('./modules/loginM');
require('./modules/mainM');
var app = angular.module('app',['ngRoute','ngMaterial','loginM','mainM']);


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('blue');
});

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
            controller: 'LoginC',
            templateUrl: './templates/login.html'
        })
        .when('/main',{
            controller: 'MainC',
            templateUrl: './templates/main.html'
        })
        .otherwise({
            redirectTo: '/login'
        })
});

