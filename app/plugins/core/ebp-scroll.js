/**
 * Created by 世宁 on 2015/1/19 0019.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','vendor/core/scroller'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.scroll',[]);
    module.directive('ebpScroll',['$timeout',function($timeout){
        return {
            restrict: "AC",
            replace: false,
            transclude: false,
            scope: {
                'scrollOptions': '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        function initScroll(){
                            var options = scope.scrollOptions;
                            if(scope.scrollOptions.size == 'inherit'){
                                options.size = element.height();
                            }
                            $timeout(function(){
                                element.ebp_scroll(options);
                            },0);
                        };
                        initScroll();
                        $(window).on('resize',function(){
                            initScroll();
                        });
                    }
                }
            }
        };
    }]);
});

