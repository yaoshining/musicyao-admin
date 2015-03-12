/**
 * Created by 世宁 on 2014/12/20 0020.
 */
(function(angular){
    var sparklineModule = angular.module('ebp.sparklines',[]);
    sparklineModule.directive('ebpSparklines',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                values: '=ebpSparklines',
                options: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        element.sparkline(scope.values,scope.options);
                    }
                }
            }
        }
    }]);
})(angular);
