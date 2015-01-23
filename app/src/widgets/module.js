/**
 * Created by 世宁 on 2014/12/31 0031.
 */
define(['angular'],function(angular){
    var module = angular.module('widgetsDemoModule',[]);
    module.config().run(['$http', function($http){
        //$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
    }]);
    return module;
});
