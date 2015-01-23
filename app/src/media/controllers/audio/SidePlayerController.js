/**
 * Created by 世宁 on 2015/1/11 0011.
 */
define(['media/module','mCustomScrollbar'],function(module){
    module.controller('SidePlayerController',['$scope','$sce','$timeout','$resource',function($scope,$sce,$timeout,$resource){
        var controller = this;
        var API = controller.API = null;
        var currentIndex = 0;
        var getNextIndex = function(){
            return ((currentIndex+1) % controller.audios.length);
        };
        var getPrevIndex = function(){
            return (Math.abs(currentIndex-1) % controller.audios.length);
        };
        var skinNames = ['dark-skin','blue-skin','pink-skin','red-skin'];
        var currentSkinIndex = 1;
        var musics = $resource("/MusicYao/music/random/:count",{count: '@count'}).query({count: 10},function(){
            musics.reverse();
            angular.forEach(musics,function(music,index){
                $timeout(function () {
                    if(music.id!==32){
                        controller.audios.push({
                            title: music.title,
                            artist: 'Lauren Taylor',
                            poster: 'http://114.215.109.39:7001/MusicYao/music/poster/'+music.id+'.jpg',
                            sources: [
                                {src: $sce.trustAsResourceUrl("http://114.215.109.39:7001/MusicYao/music/"+music.id+".mp3"), type: "audio/mp3"}
                            ]
                        });
                    }
                    controller.config = {
                        title: controller.audios[currentIndex].title,
                        sources: controller.audios[currentIndex].sources,
                        //tracks: [
                        //    {
                        //        src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/subs/pale-blue-dot.vtt"),
                        //        kind: "subtitles",
                        //        srclang: "en",
                        //        label: "English",
                        //        default: ""
                        //    }
                        //],
                        theme: "bower_components/videogular-themes-default/videogular.css",
                        plugins: {
                            poster: $sce.trustAsResourceUrl(controller.audios[currentIndex].poster)
                        },
                        autoPlay: true
                    };
                }, 50 * index);
            });
        });
        controller.onPlayReady = function(api){
            API = controller.API = api;
            $timeout(function(){
                $scope.showPlayer = true;
                //$timeout(function(){
                //    $scope.showList = true;
                //},1000);
            },1000);
        };
        controller.onComplete = function(){
            controller.next();
            API.play();
        };
        $scope.showPlayer = false;
        $scope.showLyrics = false;
        $scope.showList = false;
        $scope.playerSkin = skinNames[currentSkinIndex];
        $scope.changeSkin = function(){
            currentSkinIndex = (currentSkinIndex+1)%skinNames.length;
            $scope.playerSkin = skinNames[currentSkinIndex];
        };
        $scope.dependencies = [{
            name: 'com.2fdevs.videogular',
            files: [
                'videogular'
            ]
        },{
            name: 'com.2fdevs.videogular.plugins.controls',
            files: [
                'videogular-controls'
            ]
        },{
            name: 'com.2fdevs.videogular.plugins.poster',
            files: [
                'videogular-poster'
            ]
        },{
            name: 'com.2fdevs.videogular.plugins.buffering',
            files: [
                'videogular-buffering'
            ]
        },{
            name: 'ebp.jq',
            files: ['plugins/core/ebp-jq']
        }];
        controller.audios = [
            //{
            //    sources: [
            //        {src: $sce.trustAsResourceUrl("http://114.215.109.39:7001/MusicYao/music/72.mp3"), type: "audio/mp3"}
            //    ]
            //},
            //{
            //    sources: [
            //        {src: $sce.trustAsResourceUrl("http://114.215.109.39:7001/MusicYao/music/71.mp3"), type: "audio/mp3"}
            //    ]
            //}
        ];
        controller.play = function(){
            API.play();
        };
        controller.next = function(){
            currentIndex = getNextIndex();
            controller.config.sources = controller.audios[currentIndex].sources;
            controller.config.title = controller.audios[currentIndex].title;
            controller.config.plugins.poster = controller.audios[currentIndex].poster;
        };
        controller.prev = function(){
            currentIndex = getPrevIndex();
            controller.config.sources = controller.audios[currentIndex].sources;
            controller.config.title = controller.audios[currentIndex].title;
            controller.config.plugins.poster = controller.audios[currentIndex].poster;
        };
    }]);
});
