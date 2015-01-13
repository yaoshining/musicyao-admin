/**
 * Created by 世宁 on 2015/1/10 0010.
 */
define(['angular'],function(angular){
    var module = angular.module('mediaModule',[]);
    module.config().run(['$http', function($http){
        $http.defaults.headers.common.Authorization = null;
    }]);
    return module;
});
