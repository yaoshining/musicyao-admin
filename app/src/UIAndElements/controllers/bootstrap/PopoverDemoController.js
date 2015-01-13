/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('PopoverDemoController',['$scope',function($scope){
        $scope.dynamicPopover = '大家好!';
        $scope.dynamicPopoverTitle = '标题';
    }]);
});