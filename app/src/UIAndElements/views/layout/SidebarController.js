/**
 * Created by tongda on 15/5/13.
 */
define(['UIAndElements/module'],function(module) {
    module.controller('SidebarController',
        ['$scope','$ebpSlidePanel',function($scope,$ebpSlidePanel){
            $scope.slidePanelToggle = false;
            $scope.tasks = [1,2,3];
            $scope.addTask = function(){
                $scope.tasks.push(4);
            }
    }]).controller('TaskDetailsController',['$scope',function($scope){

        }]);
});
