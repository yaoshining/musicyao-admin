/**
 * Created by 世宁 on 2015/1/1 0001.
 */
define(['musicyao/module'],function(module){
    "use strict";
    module.controller('MusicHomeController',['$scope','$timeout','MusicYao','$sce',function($scope,$timeout,MusicYao,$sce){
        var musics = MusicYao.query({count: 10},function(){
            musics.reverse();
           angular.forEach(musics,function(music,index){
               $timeout(function () {
                   if(music.id!==32){
                       $scope.musicItems.push({
                           title: music.title,
                           artist: 'Lauren Taylor',
                           poster: 'http://114.215.109.39:7001/MusicYao/music/poster/'+music.id+'.jpg',
                           sources: [
                               {src: $sce.trustAsResourceUrl("http://114.215.109.39:7001/MusicYao/music/"+music.id+".mp3"), type: "audio/mp3"}
                           ]
                       });
                   }
               }, 50 * index);
           });
        });
        $scope.musicItems = [];
        //var items = [
        //    {
        //        title: 'Tempered Song',
        //        artist: 'Miaow',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b1.jpg'
        //    },
        //    {
        //        title: 'Vivamus vel tincidunt libero',
        //        artist: 'Lauren Taylor',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b2.jpg'
        //    },
        //    {
        //        title: 'Morbi id neque quam liquam sollicitudin',
        //        artist: 'Allen JH',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b3.jpg'
        //    },
        //    {
        //        title: 'Tincidunt libero',
        //        artist: 'Amanda Conlan',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b4.jpg'
        //    },
        //    {
        //        title: 'Fermentum diam',
        //        artist: 'Nisa Colen',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b5.jpg'
        //    },
        //    {
        //        title: 'Habitant',
        //        artist: 'Dan Doorack',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b6.jpg'
        //    },
        //    {
        //        title: 'Vivamus vel tincidunt libero',
        //        artist: 'Ligula H',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b7.jpg'
        //    },
        //    {
        //        title: 'Aliquam sollicitudin venenati',
        //        artist: 'James East',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b8.jpg'
        //    },
        //    {
        //        title: 'Lementum ligula vitae',
        //        artist: 'Lauren Taylor',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b9.jpg'
        //    },
        //    {
        //        title: 'Egestas dui nec fermentum ',
        //        artist: 'Chris Fox',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b10.jpg'
        //    },
        //    {
        //        title: 'Aliquam sollicitudin venenatis ipsum',
        //        artist: 'Jack Jason',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b11.jpg'
        //    },
        //    {
        //        title: 'Vestibulum ullamcorper',
        //        artist: 'MM & DD',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b12.jpg'
        //    },
        //    {
        //        title: 'Aliquam sollicitudin venenatis ipsum',
        //        artist: 'Jack Jason',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b13.jpg'
        //    },
        //    {
        //        title: 'Vestibulum ullamcorper',
        //        artist: 'MM & DD',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b14.jpg'
        //    },
        //    {
        //        title: 'Aliquam sollicitudin venenatis ipsum',
        //        artist: 'Jack Jason',
        //        poster: 'http://flatfull.com/themes/angulr/angular/img/b15.jpg'
        //    }
        //];
        var addItem = $scope.addItem = function(){
            angular.forEach(items,function(item,index){
                $timeout(function () {
                    $scope.musicItems.push(item);
                }, 50 * index);
            });
        };
        $scope.$on('$viewContentLoaded',function(){
            //$timeout(function(){
            //    $scope.addItem();
            //},100);
        });
    }]);
});
