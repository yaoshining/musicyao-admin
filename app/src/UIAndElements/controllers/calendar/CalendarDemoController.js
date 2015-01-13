/**
 * Created by 世宁 on 2015/1/6 0006.
 */
define(['UIAndElements/module'],function(module){
    "use strict";
    module.controller('CalendarDemoController',['$scope',function($scope){
        $scope.eventSources = [];
        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 700,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };
    }]);
});
