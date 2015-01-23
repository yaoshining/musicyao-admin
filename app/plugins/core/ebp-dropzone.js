/**
 * Created by 世宁 on 2015/1/16 0016.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','dropzone'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.dropzone',[]);
    module.directive('ebpDropzone',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                onInit: '=',
                dzOptions: '=',
                dzEvents: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var myDropzone = scope.$dz = element.dropzone(scope.dzOptions);
                        if(angular.isFunction(scope.onInit)){
                            scope.onInit(myDropzone);
                        }
                    }
                }
            }
        };
    }]);
});
