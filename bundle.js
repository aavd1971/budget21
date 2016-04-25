(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./modules/loginM":2,"./modules/mainM":3}],2:[function(require,module,exports){
var loginM = angular.module('loginM',[]);
    loginM.controller('LoginC',LoginC);
function LoginC($scope,$location,$rootScope){
    $rootScope.title = 'login';
    $scope.userName = 'testName';
    $scope.myClick = function($event){
        $event.preventDefault();
        $rootScope.userName = $scope.userName;
        $location.path( "/main" );
    }
}

loginM.directive('loginForm',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/loginForm.html'

    }
});

module.exports = loginM;
},{}],3:[function(require,module,exports){
var mainM = angular.module('mainM',[]);
    mainM.controller('MainC',MainC);
function MainC($scope,$rootScope){
    $rootScope.title = 'main';
    $scope.test = 'main';
    $scope.userName = $rootScope.userName;

}

module.exports = mainM;
},{}]},{},[1]);
