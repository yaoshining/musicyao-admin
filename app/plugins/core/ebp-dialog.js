/**
 * Created by 世宁 on 2015/3/14 0014.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','bootbox'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function($,angular,bootbox){
    'use strict';
    var module = angular.module('ebp.dialog',[]);
    module.constant('ebpDialogConfig',{
        title: '',
        message: '',
        trigger: 'click',
        type: 'alert',
        templateUrl: null,
        callback: angular.noop,
        buttons: {
            ok: {
                label: 'Ok'
            },
            confirm: {
                label: 'Ok'
            },
            cancel: {
                label: 'Cancel'
            }
        }
    }).service('EbpDialog',['ebpDialogConfig',function(ebpDialogConfig){
        var alert = function(configs){
            configs = angular.extend({},ebpDialogConfig,configs);
            bootbox.alert({
                title: configs.title,
                message: configs.message,
                callback: configs.callback,
                buttons: {
                    ok: configs.buttons.ok
                }
            });
        };
        var confirm = function(configs){
            configs = angular.extend({},ebpDialogConfig,configs);
            bootbox.confirm({
                title: configs.title,
                message: configs.message,
                callback: configs.callback,
                buttons: {
                    confirm: configs.buttons.confirm,
                    cancel: configs.buttons.cancel
                }
            });
        };
        var prompt = function(configs){
            configs = angular.extend({},ebpDialogConfig,configs);
            bootbox.prompt({
                title: configs.title,
                callback: configs.callback,
                value: '123',
                buttons: {
                    confirm: configs.buttons.confirm,
                    cancel: configs.buttons.cancel
                }
            });
        };
        var dialog = function(configs){
            configs = angular.extend({},ebpDialogConfig,configs);
            bootbox.dialog({
                title: configs.title,
                message: configs.message,
                callback: configs.callback,
                buttons: configs.buttons
            });
        };
        return {
            alert: alert,
            confirm: confirm,
            prompt: prompt,
            dialog: dialog
        }
    }]).directive('ebpDialog',[
        'ebpDialogConfig','$http','$templateCache','$compile','EbpDialog',
        function(ebpDialogConfig,$http,$templateCache,$compile,ebpDialog){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var options = angular.extend({},ebpDialogConfig,scope.$eval(iAttrs['dialogOptions']));
                        var trigger = iAttrs['dialogTrigger'] || options.trigger;
                        var title = iAttrs['dialogTitle'] || options.title;
                        var message = iAttrs['dialogMessage'] || options.message;
                        var type = iAttrs['dialogType'] || options.type;
                        var buttons = scope.$eval(iAttrs['dialogButtons']) || options.buttons;
                        var callback = iAttrs['dialogCallback'] || options.callback;
                        var mergedConfig = scope.config = {
                            message: message,
                            templateUrl: options.templateUrl,
                            title: title,
                            callback: callback,
                            buttons: buttons
                        };
                        if(angular.isString(mergedConfig.templateUrl)){
                            var template = $templateCache.get(options.templateUrl);
                            if(template){
                                mergedConfig.message = $compile(template)(scope);
                                initBootbox();
                                return;
                            }
                            $http.get(options.templateUrl,{
                                cache: $templateCache
                            }).success(function(){
                                template = $templateCache.get(options.templateUrl)[1];
                                mergedConfig.message = $compile(template)(scope);
                                initBootbox();
                            });
                        }else {
                            initBootbox();
                        }
                        function initBootbox(){
                            element.on(trigger,function(){
                                scope.$apply(function(){
                                    if(angular.isFunction(ebpDialog[type])){
                                        ebpDialog[type].apply(this,[mergedConfig]);
                                    }else {
                                        throw new Error('The type '+type+' not supported.');
                                    }
                                });
                            });
                        }
                    }
                }
            }
        };
    }]);
});
