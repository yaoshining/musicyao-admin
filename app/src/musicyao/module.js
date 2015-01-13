/**
 * Created by 世宁 on 2014/12/31 0031.
 */
define(['angular','angular-animate'],function(angular){
    var module = angular.module('musicYaoModule',['ngAnimate']);
    module.config().run(['$http', function($http){
        $http.defaults.headers.common.Authorization = null;
    }]);
    return module;
});
