/**
 * Created by 世宁 on 2015/3/23 0023.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','jquery-nicescroll'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.niceScroll',[]);
    module.constant('ebpNiceScrollDefaults',{
        cursorcolor: "#ACE",
        cursorwidth: "8px",
        cursorborderradius: "0",
        cursorborder: "1px solid #ACE"
    }).directive('ebpNicescroll',['$timeout','ebpNiceScrollDefaults',function($timeout,ebpNiceScrollDefaults){
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
                            var options = angular.extend({},ebpNiceScrollDefaults,scope.scrollOptions);
                            //if(scope.scrollOptions.size == 'inherit'){
                            //    options.size = element.height();
                            //}
                            $timeout(function(){
                                element.niceScroll(options);
                            },0);
                        };
                        initScroll();
                        //$(window).on('resize',function(){
                        //    initScroll();
                        //});
                    }
                }
            }
        };
    }]);
});

