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