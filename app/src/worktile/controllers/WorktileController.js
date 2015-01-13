/**
 * Created by 世宁 on 2015/1/6 0006.
 */
define(['worktile/module','worktile/data/entries','mCustomScrollbar'],function(module,entries){
    module.controller('WorktileController',['$scope',function($scope){
        $scope.entrySortableOptions = {
            connectWith: '.widget-container-col',
            appendTo: '.task-container',
            containment: '.task-container',
            handle: '.widget-header',
            delay: 75,
            distance: 4,
            placeholder: 'wt-entry-placeholder',
            forcePlaceholderSize: true,
        //    revert: true,
            opacity: 0.8,
            cursor: 'move',
            tolerance: 'pointer',
            helper: 'clone',
            items: '.wt-entry'
        };
        $scope.taskSortableOptions = {
            connectWith: '.wt-tasks-main',
            //delay: 75,
            distance: 4,
            placeholder: 'wt-task-placeholder',
            forcePlaceholderSize: true,
            //    revert: true,
            opacity: 0.8,
            cursor: 'move',
            tolerance: 'pointer',
            helper: 'clone',
            zIndex: 9999
        };
        $scope.entries = entries;
        $scope.showSlideContent = false;
        $scope.openTaskDetail = function($event,task){
            $scope.showSlideContent = true;
        };
        $scope.closeSideContent = function(){
            $scope.showSlideContent = false;
        };
        $scope.addEntry = function(){
            $scope.entries.push({
                name: '新建列表',
                tasks: []
            });
        };
    }]);
});
