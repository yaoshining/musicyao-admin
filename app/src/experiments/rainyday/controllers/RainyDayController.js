/**
 * Created by 世宁 on 2015/4/7 0007.
 */
define(['experiments/module'],function(module){
    module.controller('RainyDayController',[function(){
        require(['rainyday'],function(){
            var image = document.getElementById('rainyday-background');
            image.crossOrigin = 'anonymous';
            image.src = 'http://maroslaw.github.io/rainyday.js/img/night.jpg';
            image.onload = function(){
                var engine = new RainyDay({
                    image: this
                });
                engine.rain([ [1, 2, 8000] ]);
                engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
            };
        });
    }]);
});
