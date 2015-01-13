define([
	'angular',
	'angular-resource',
	'angular-ui-router',
    'ng-file-upload',
	'oclazyload'
],function(angular){
	'use strict';
	 /**
	*  Module
	*
	* Description
	*/
	var filesModule = angular.module('filesModule', ['ui.router','ngResource','oc.lazyLoad','angularFileUpload']).config(['$stateProvider','$ocLazyLoadProvider','$provide',function($stateProvider,$ocLazyLoadProvider,$provide) {
		$ocLazyLoadProvider.config({
			loadedModules: ['filesModule'],
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
	}]).run(['$http', function($http){
		$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
	}]);
	return filesModule;
});
