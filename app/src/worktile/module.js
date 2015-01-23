/**
 * Created by 世宁 on 2015/1/6 0006.
 */
define(['angular'],function(angular){
    var module = angular.module('worktileModule',[]);
    module.config().run(['$http', function($http){
        //$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
    }]);
    return module;
});
