/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('ButtonsDemoController',['$scope',function($scope){
        $scope.singleModel = 1;
        $scope.radioModel = 'Middle';
        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };
    }]);
});