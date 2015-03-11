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
                lang: 'zh-cn',
                weekNumbers: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };
    }]);
});
