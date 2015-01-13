/**
 * Created by 世宁 on 2014/12/31 0031.
 */
define(['widgets/module'],function(module){
    module.controller('WidgetsDemoController',['$scope',function($scope){
        $scope.items = ['One','Two','Three'];
        $scope.sortableOptions = {
            connectWith: ".widget-container-col",
            handle: ".widget-header",
            placeholder: "widget-placeholder",
            forcePlaceholderSize: true,
            revert: true,
            opacity: 0.8,
            cursor: "move"
        };
        $scope.tableData = [
            {user: 'Yao',email: 'yao@email.com',status: 'Pending'},
            {user: 'Shining',email: 'shining@email.com',status: 'Approved'},
            {user: 'JiangSong',email: 'jiangsong@email.com',status: 'Pending'},
            {user: 'WangJie',email: 'wangxiaojie@email.com',status: 'Blocked'},
            {user: 'James',email: 'james@email.com',status: 'Online'}
        ];
        $scope.fullscreen = function($event,widget){
            $event.preventDefault();
            $event.stopPropagation();
            widget.isFullscreen = !widget.isFullscreen
        }
    }]);
});
