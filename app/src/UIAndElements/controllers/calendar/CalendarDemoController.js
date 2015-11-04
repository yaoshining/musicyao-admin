/**
 * Created by 世宁 on 2015/1/6 0006.
 */
define(['UIAndElements/module','angular'],function(module,angular){
    "use strict";
    module.controller('CalendarDemoController',['$scope',function($scope){
        $scope.myCalendar = null;
        $scope.eventSources = function(start,end,timezone,callback){
            callback([
                {
                    id: 1,
                    title: 'Event1',
                    start: '2015-06-01'
                },
                {
                    id: 2,
                    title: 'Event2',
                    start: '2015-06-15'
                }
            ]);
        };
        $scope.addEvents = function(){
            $scope.myCalendar.fullCalendar('addEventSource',[{
                id: 3,
                title: 'Event3',
                start: '2015-06-08',
                end: '2015-06-15'
            }]);
        };
        $scope.addEvent = function(date){
            alert('在'+date.format()+'添加事件');
        };
        $scope.eventClick = function(eventObj, event){
            alert(eventObj.title + '被点击了!');
            eventObj.title += '被点击了';
            $scope.myCalendar.fullCalendar('updateEvent',eventObj);

        };
        $scope.eventDrop = function(event, delta, revertFunc){
            alert(event.title + "事件被拖动到" + event.start.format());

            if (!confirm("确定要完成本次修改吗?")) {
                revertFunc();
            }
        };
        $scope.removeEvents = function(){
            $scope.myCalendar.fullCalendar('removeEvents',function(eventObj){
                return eventObj.id === 2;
            });
        };
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
                color: 'yellow',
                textColor: 'black',
                dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
                dayNamesShort:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
                dayClick: $scope.addEvent,
                eventDrop: $scope.eventDrop,
                eventClick: $scope.eventClick,
                eventResize: $scope.alertOnResize
            }
        };
        var config = {
            "header":false,
            "height":548,
            "editiable":true,
            "droppable":true,
            "titleFormat":{
                "month":"yyyy年MM月",
                "week":"yyyy年MM月d日 {&#8212; [ yyyy年][ MM月]d日}",
                "day":"yyyy年MM月d日 dddd"
            },
            "firstDay":0,
            "weekMode":"liquid",
            "allDayText":"全天",
            "axisFormat":"HH:mm",
            "timeFormat":"✓",
            "monthNames":[
                "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
            ],
            "monthNamesShort":[
                "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
            ],
            "dayNames":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
            "dayNamesShort":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
            "buttonText":{
                "today":"今天","month":"月","agendaWeek":"周","agendaDay":"日"
            },
            "defaultView":"month"
        };
    }]);
});
