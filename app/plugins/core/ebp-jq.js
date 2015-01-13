'use strict';
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var $ = jQuery;
    var treeModule = angular.module('ebp.jq',[]);
    treeModule.directive('ebpJq',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                name: '@ebpJq',
                jqOptions: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        if(angular.isFunction($.fn[scope.name])){
                            element[scope.name](scope.jqOptions);
                        } else{
                            throw 'jQuery.fn.'+scope.name+' is not a function.';
                        }
                    }
                }
            }
        };
    }]);
});
