var mainM = angular.module('mainM',[]);
    mainM.controller('MainC',MainC);
function MainC($scope,$rootScope){
    $rootScope.title = 'main';
    $scope.test = 'main';
    $scope.userName = $rootScope.userName;

}

module.exports = mainM;