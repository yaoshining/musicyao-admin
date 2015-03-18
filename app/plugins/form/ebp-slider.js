/**
 * Created by 世宁 on 2015/3/16 0016.
 */
'use strict';
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','jquery-ui','css!styles/ebp/slider'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function($,angular){
    var treeModule = angular.module('ebp.form.slider',[]);
    treeModule.directive('ebpSlider',[function(){
        return {
            restrict: "AE",
            replace: false,
            transclude: false,
            scope: {
                sliderOptions: '=',
                ngModel: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        scope.ngModel = scope.ngModel || 0;
                        element.slider({
                            range: 'min',
                            animate: true,
                            step: 2,
                            max: 16,
                            min: 5,
                            value: Number(scope.ngModel),
                            slide: function( event, ui ) {
                                scope.$apply(function(){
                                    scope.ngModel = ui.value;
                                });
                            }
                        });
                    }
                }
            }
        };
    }]);
});
