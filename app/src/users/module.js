define([
	'angular',
	'angular-resource',
    'angular-ui-router',
	'oclazyload'
],function(angular){
	'use strict';
	 /**
	*  Module
	*
	* Description
	*/
	var usersModule = angular.module('usersModule', ['ngResource','oc.lazyLoad','ui.router']).config(['$ocLazyLoadProvider','$provide',function($ocLazyLoadProvider,$provide) {
		$ocLazyLoadProvider.config({
			loadedModules: ['usersModule'],
			jsLoader: require,
			debug: true
		});
		/* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
        $provide.decorator('$rootScope', [
            '$delegate',
            function($delegate) {
                $delegate.safeApply = function(fn) {
                    var phase = $delegate.$$phase;
                    if (phase === '$apply' || phase === '$digest') {
                        if (fn && typeof fn === 'function') {
                            fn();
                        }
                    } else {
                        $delegate.$apply(fn);
                    }
                };
                return $delegate;
            }
        ]);
	}]).run(['$http','$ocLazyLoad', function($http,$ocLazyLoad){
		$ocLazyLoad.load({
			name: 'usersModule',
			files: ['users/services/userService','users/repositories/Users']
		});
		$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
	}]);
	return usersModule;
});