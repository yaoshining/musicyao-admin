/**
 * Created by 世宁 on 2015/3/20 0020.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','interact'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular,interact){
    'use strict';
    var module = angular.module('ebp.interact',[]);
    module.directive('ebpResizable',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var offset = { x: 0, y: 0 };
                        interact(element[0]).resizable({
                            edges: { left: false, right: true, bottom: false, top: false }
                        }).on('resizemove', function (event) {
                            var target = event.target;
                            console.log(event.rect.width);
                            console.log(event.rect.height);
                            // update the element's style
                            target.style.width  = event.rect.width + 'px';
                            target.style.height = event.rect.height + 'px';

                            // translate when resizing from top or left edges
                            offset.x += event.deltaRect.left;
                            offset.y += event.deltaRect.top;

                            target.style.transform = ('translate('
                            + offset.x + 'px,'
                            + offset.y + 'px)');

                            target.textContent = event.rect.width + '×' + event.rect.height;
                        });
                    }
                }
            }
        }
    }]);
});
