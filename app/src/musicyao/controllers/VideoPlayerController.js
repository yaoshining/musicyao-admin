/**
 * Created by 世宁 on 2015/1/1 0001.
 */
define(['musicyao/module'],function(module){
    "use strict";
    module.controller('VideoPlayerController',['$scope','$sce',function($scope,$sce){
        var controller = this;
        controller.API = null;
        controller.onPlayReady = function(API){
            controller.API = API;
        };
        controller.videos = [
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
            //         {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
            //         {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
            //     ]
            // },
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
            //         {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
            //     ]
            // },
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("http://vjs.zencdn.net/v/oceans.mp4"),type: "video/mp4"}
            //     ]
            // }
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("/assets/videos/videogular.mp4"), type: "video/mp4"},
            //         {src: $sce.trustAsResourceUrl("/assets/videos/videogular.webm"), type: "video/webm"},
            //         {src: $sce.trustAsResourceUrl("/assets/videos/videogular.ogg"), type: "video/ogg"}
            //     ]
            // },
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
            //         {src: $sce.trustAsResourceUrl("/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
            //     ]
            // },
            // {
            //     sources: [
            //         {src: $sce.trustAsResourceUrl("/assets/videos/oceans.mp4"),type: "video/mp4"}
            //     ]
            // },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://114.215.109.39/assets/videos/seven_or_eight_days.mp4"),type: "video/mp4"}
                ]
            }
        ];
        controller.config = {
            sources: this.videos[Math.floor(Math.random()*controller.videos.length)].sources,
            tracks: [
                {
                    src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/subs/pale-blue-dot.vtt"),
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
                }
            ],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: $sce.trustAsResourceUrl("http://www.videogular.com/assets/images/videogular.png")
            }
        };
        controller.setVideo = function(sources){
            controller.API.stop();
            controller.config.sources = sources;
        };
    }]);
});
