/**
 * Created by 世宁 on 2015/1/19 0019.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var module = angular.module('ebp.slidePanel',[]);
    module.directive('ebpSlidePanel',
                    ['$parse','$window','$sce','$templateRequest','$compile','$ebpSlidePanel',
            function($parse,$window,$sce,$templateRequest,$compile,$ebpSlidePanel){
        return {
            restrict: "AC",
            replace: false,
            transclude: true,
            compile: function compile(tElement,tAttrs,transclude){
                return function(scope, element, iAttrs, controller,$transclude) {
                    element.removeClass('slide-panel').addClass('slide-panel').addClass('slide-right');
                    iAttrs.$observe('templateUrl', function(value) {
                        $templateRequest(value, true).then(function(response){
                            var newScope = scope.$new();
                            newScope.test = '123';
                            var clonedElement = $compile(response)(newScope);
                            element.html(clonedElement);
                        });
                        //scope.templateUrl = value;
                    });
                    $ebpSlidePanel.panelElement = element;
                }

            },
            template: function($scope){
                return '<div ng-include="templateUrl">{{templateUrl}}</div>';
            },
            controller: ['$ebpSlidePanel',function($ebpSlidePanel){
            }]
        };
    }]).service('$ebpSlidePanel',['$animate',function($animate){
        var service = {
            panelElement: null,
            openPanel: function(){
                $animate.removeClass(service.panelElement,'ng-hide',{
                    tempClasses: 'ng-hide-animate'
                });
            },
            closePanel: function(){
                $animate.addClass(service.panelElement,'ng-hide',{
                    tempClasses: 'ng-hide-animate'
                });
            }
        };
        return service;
    }]);
});
