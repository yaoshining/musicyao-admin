/**
 * Created by 世宁 on 2015/6/18.
 */
'use strict';
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','moment','css!styles/ebp/form/datepicker'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function($,angular){
    var datetimeModule = angular.module('ebp.form.datetimepicker',[]);
    datetimeModule.directive('ebpDatetimepicker',[function(){
        return {
            restrict: "AE",
            replace: false,
            transclude: true,
            scope: {
                ngModel: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {

                    }
                }
            },
            templateUrl: 'ebp.datetimepicker.tpl.html',
            controller: ['$scope',function($scope){
                $scope.DatePicker = {
                    show: false
                };
                $scope.TimePicker = {
                    show: false
                };
            }]
        };
    }]).directive('ebpDatepicker',[function(){
        return {
            restrict: 'AE',
            replace: false,
            scope: false,
            require: '^ebpDatetimepicker',
            link: function(){

            },
            templateUrl: 'ebp.datepicker.tpl.html',
            controller: [function(){

            }]
        }
    }]).directive('ebpDatepickerCalendar',[function(){
        return {
            restrict: 'AE',
            replace: false,
            scope: true,
            transclude: true,
            require: '^ebpDatepicker',
            link: function(scope,element,attrs,ctrl,transclude){
                transclude(function(clone,scope){
                    console.log(clone);
                });
            },
            templateUrl: 'ebp.datepicker_calendar.tpl.html'
        }
    }]);
});
