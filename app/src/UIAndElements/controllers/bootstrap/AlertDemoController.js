/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('AlertDemoController',['$scope',function($scope){
        $scope.alerts = [
            {type: 'danger',msg: '哦,糟糕!改变一些东西然后重新尝试提交.'},
            {type: 'success',msg: '做的好!你已经非常成功的阅读了这个相当重要的警报消息.'}
        ];
        $scope.addAlert = function(){
          $scope.alerts.push({msg: '另一个警报!'});
        };
        $scope.closeAlert = function(index){
          $scope.alerts.splice(index,1);
        };
    }]);
});