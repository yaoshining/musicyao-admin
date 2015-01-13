/**
 * Created by 世宁 on 2015/1/6 0006.
 */
define(['worktile/module','worktile/config/menus'],function(module,menus){
    module.controller('WorktileSidebarController',['$scope',function($scope){
        $scope.menus = menus;
    }]);
});
