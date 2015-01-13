/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('ProgressbarDemoController',['$scope',function($scope){
        $scope.max = 200;

        $scope.random = function(){
            var value = Math.floor((Math.random()*100) + 1);
            var type;

            if(value < 25){
                type = 'success';
            } else if(value < 50) {
                type = 'info';
            } else if(value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }

            $scope.showWarning = (type === 'danger' || type === 'warning');

            $scope.dynamic = value;
            $scope.type = type;
        };
        $scope.random();

        $scope.randomStacked = function(){
            $scope.stacked = [];
            var types = ['success','info','warning','danger'];

            for(var i = 0,n = Math.floor((Math.random()*4)+1);i < n;i++){
                var index = Math.floor(Math.random() * 4);
                $scope.stacked.push({
                    value: Math.floor((Math.random() * 30)+1),
                    type: types[index]
                });
            }
        };
        $scope.randomStacked();

        $scope.typeText = function(type){
            switch (type){
                case 'success': return '成功';
                case 'info': return '消息';
                case 'warning': return '警告';
                case 'danger': return '危险'
            }
        };
    }]);
});