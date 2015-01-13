/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('AccordionDemoController',['$scope',function($scope){
        $scope.oneAtATime = true;
        $scope.status = {
            isFirstOpen: true,
            isFirstDisable: false
        };
        $scope.groups = [
            {
                title: '动态组头部 - 1',
                content: '动态组主体 - 1'
            },
            {
                title: '动态组头部 - 2',
                content: '动态组主体 - 2'
            }
        ];
        $scope.items = ['列表项1','列表项2','列表项3']
        $scope.addItem = function(){
            $scope.items.push('列表项'+($scope.items.length+1));
        }
    }]);
});