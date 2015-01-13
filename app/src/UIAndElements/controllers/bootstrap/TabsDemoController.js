/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('TabsDemoController',['$scope','$timeout','$window',function($scope,$timeout,$window){
        $scope.tabs = [
            {title: '动态标题1',content: '动态内容1'},
            {title: '动态标题2',content: '动态内容2', disabled: true}
        ];

        $scope.alertMe = function(){
            $timeout(function(){
                $window.alert('你选择了警告标签!');
            });
        };
    }]);
});