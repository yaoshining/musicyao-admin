'use strict';
define(['angular', 'angular-ui-router','plugins/charts/sparklines/ebp-sparklines','plugins/charts/flot/ebp-flot'], function(angular) {
    angular.module('homeModule', ['ui.router','ebp.sparklines','easypiechart','ebp.flot']).config(['$stateProvider', function($stateProvider) {
        /*config path for home page*/
    }]).controller('HomeController', [
        '$scope',
        function($scope) {
            $scope.pageTitle = 'dummy';
            $scope.closeAlert = function(){
                $scope.alertClosed = true;
            };
            $scope.easyPieChartPercent1 = 42;
            $scope.easyPieChartOptions1 = {
                animate:{
                    duration:1000,
                    enabled:true
                },
                barColor: '#3983c2',
                lineWidth: 4,
                lineCap:'butt',
                scaleColor:false,
                size:46,
                trackColor:'#E2E2E2'
            };
            $scope.easyPieChartPercent2 = 61;
            $scope.easyPieChartOptions2 = {
                animate:{
                    duration:1000,
                    enabled:true
                },
                barColor: 'rgba(255,255,255,0.95)',
                lineWidth: 3,
                lineCap:'butt',
                scaleColor:false,
                size:39,
                trackColor:'rgba(255,255,255,0.25)'
            };
            $scope.plotData = [{
                color: "#68BC31",
                data: 38.7,
                label: "social networks"
            },{
                color: "#2091CF",
                data: 24.5,
                label: "search engines"
            },{
                color: "#AF4E96",
                data: 8.2,
                label: "ad campaigns"
            },{
                color: "#DA5430",
                data: 18.6,
                label: "direct traffic"
            },{
                color: "#FEE074",
                data: 10,
                label: "other"
            }];
            $scope.plotOptions = {
                series: {
                    pie: {
                        show: true,
                        tilt: 0.8,
                        stroke: {
                            color: "#fff",
                            width: 2
                        }
                    }
                },
                legend: {
                    backgroundOpacity: 0.85,
                    noColumns: 1,
                    labelBoxBorderColor: null,
                    margin: {
                        0: -30,
                        1: 15
                    }
                },
                label: {
                    show: true
                },
                grid: {
                    show:false,
                    aboveData:false,
                    color:"#545454",
                    backgroundColor:null,
                    borderColor:'#545454',
                    "tickColor":"rgba(84,84,84,0.22)",
                    "margin":0,
                    "labelMargin":5,
                    "axisMargin":8,
                    "borderWidth":2,
                    "minBorderMargin":null,
                    "markings":null,
                    "markingsColor":"#f4f4f4",
                    "markingsLineWidth":2,
                    "clickable":true,
                    "hoverable":true,
                    "autoHighlight":true,
                    "mouseActiveRadius":10
                }
            };
            $scope.plotEvents = {
                plothover: function(event,pos,obj){
                }
            };
        }
    ]);
});

