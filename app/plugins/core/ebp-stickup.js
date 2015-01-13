/**
 * Created by yao on 14-12-28.
 */
/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var stickUpModule = angular.module('ebp.stickUp',[]);
    stickUpModule.directive('ebpStickup',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {

            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        element.stickUp();
                    }
                }
            }
        };
    }]);
});
