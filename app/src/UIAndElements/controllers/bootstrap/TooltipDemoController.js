/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    "use strict";
    module.controller('TooltipDemoController',['$scope',function($scope){
        $scope.dynamicTooltip = '大家好！';
        $scope.dynamicTooltipText = '动态的';
        $scope.htmlTooltip = '<span style="font-size: 25px;"><b>我被加粗了</b>！</span>';
    }]);
});
