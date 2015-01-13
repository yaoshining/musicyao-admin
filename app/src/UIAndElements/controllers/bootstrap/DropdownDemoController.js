/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('DropdownDemoController',['$scope','$log',function($scope,$log){
        $scope.items = [
            '第一个选择!',
            '你的另一个选择.',
            '哦,等等,还有第三个!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open){
            $log.log('Dropdown is now:', open);
        };

        $scope.toggleDropdown = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }]);
});