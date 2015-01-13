/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    "use strict";
    module.controller('TimepickerDemoController',['$scope','$log',function($scope,$log){
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1,2,3],
            mstep: [1,5,10,15,25,30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function(){
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function(){
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.mytime = d;
        };

        $scope.changed = function(){
            $log.log('时间改变为:'+$scope.mytime);
        };

        $scope.clear = function(){
            $scope.mytime = null;
        };
    }]);
});
