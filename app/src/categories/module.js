/**
 * Created by 世宁 on 2015/1/14 0014.
 */
define(['angular'],function(angular){
    var module = angular.module('categoriesModule',[]);
    module.config().run(['$http', function($http){
        $http.defaults.headers.common.Authorization = null;
    }]);
    return module;
});
