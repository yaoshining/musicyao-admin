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
                    $ebpSlidePanel.setElement(element);
                    iAttrs.$observe('templateUrl', function(value) {
                        if(value){
                            $ebpSlidePanel.loadTemplate(value);
                        }
                    });
                }

            }
        };
    }]).service('$ebpSlidePanel',
    ['$animate','$templateRequest','$compile',
    function($animate,$templateRequest,$compile){
        var panelElement = null;
        var currentScope = null;
        var cleanupLastContent = function() {
            if (panelElement) {
                panelElement.empty();
            }
            if (currentScope) {
                currentScope.$destroy();
                currentScope = null;
            }
        };
        var service = {
            open: function(settings){
                if(!panelElement) return;
                service.loadTemplate(settings.url,settings.resolve);
                $animate.removeClass(panelElement,'ng-hide',{
                    tempClasses: 'ng-hide-animate'
                });
            },
            close: function(){
                if(!panelElement) return;
                $animate.addClass(panelElement,'ng-hide',{
                    tempClasses: 'ng-hide-animate'
                });
            },
            loadTemplate: function(url,resolve){
                $templateRequest(url, true).then(function(response){
                    cleanupLastContent();
                    var newScope = panelElement.scope().$new();
                    $.extend(newScope,resolve);
                    currentScope = newScope;
                    var clonedElement = $compile(response)(newScope);
                    panelElement.html(clonedElement);
                });
            },
            setElement: function(element){
                panelElement = element;
            }
        };
        return service;
    }]);
});
