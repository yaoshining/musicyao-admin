/**
 * Created by 世宁 on 2015/1/1 0001.
 */
define(['musicyao/module'],function(module){
    "use strict";
    module.controller('MTVController',['$scope','$timeout','$sce',function($scope,$timeout,$sce){
        $scope.mtvItems = [];
        $scope.videoListItems = [];
        var mtvItems = [{
            title: 'Tempered Song',
            artist: 'Miaow',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c9.jpg'
        },{
            title: 'Morbi id neque quam',
            artist: 'Phasellus',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c1.jpg'
        },{
            title: 'Aliquam sollicitudin venenatis ipsum',
            artist: 'Malesuada',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c2.jpg'
        }];
        var videoListItems = [{
            title: 'Tempered Song',
            artist: 'Miaow',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c3.jpg'
        },{
            title: 'Morbi id neque quam',
            artist: 'Phasellus',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c4.jpg'
        },{
            title: 'Aliquam sollicitudin venenatis ipsum',
            artist: 'Malesuada',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c5.jpg'
        },{
            title: 'Citudin venenatis ipsum ac',
            artist: 'Volutpat',
            poster: 'http://flatfull.com/themes/angulr/angular/img/c6.jpg'
        }];
        $scope.addItem = function(items,container){
            angular.forEach(items,function(item,index){
                $timeout(function () {
                    container.push(item);
                }, 50 * index);
            });
        };
        $scope.$on('$viewContentLoaded',function(){
            $timeout(function(){
                $scope.addItem(mtvItems,$scope.mtvItems);
                $scope.addItem(videoListItems,$scope.videoListItems);
            },500);
        });
    }]);
});
