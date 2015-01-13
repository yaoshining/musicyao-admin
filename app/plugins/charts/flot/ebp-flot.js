/**
 * Created by 世宁 on 2014/12/21 0021.
 */
/**
 * Created by 世宁 on 2014/12/20 0020.
 */
(function(angular){
    var flotModule = angular.module('ebp.flot',[]);
    flotModule.directive('ebpPlot',['$position',function($position){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                data: '=ebpPlot',
                options: '=',
                events: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        $.plot(element,scope.data,scope.options);
                        if(scope.events && angular.isObject(scope.events)){
                            if(scope.events.plothover){
                                element.on('plothover', function(event, pos, obj) {
                                    if (!obj) {
                                        element.siblings('.tooltip').hide();
                                        return;
                                    }
                                    element.siblings('.tooltip').children('.tooltip-inner').text(obj.series.label+':'+obj.series.percent+'%');
                                    element.siblings('.tooltip').show();
                                    scope.events.plothover(event,pos,obj);
                                }).on('mousemove',function(event){
                                    var x = event.clientX;
                                    var y = event.clientY;
                                    element.siblings('.tooltip').offset({
                                        top: y+5,
                                        left: x+10
                                    });
                                });
                            }
                        }
                    }
                }
            }
        }
    }]);
})(angular)
