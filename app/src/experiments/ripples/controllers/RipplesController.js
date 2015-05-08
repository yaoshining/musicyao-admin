/**
 * Created by 世宁 on 2015/4/7 0007.
 */
define(['experiments/module'],function(module){
    module.controller('RipplesController',[function(){
        require(['ripples'],function(){
            try {
                $('#ripplesContainer').ripples({
                    resolution: 512,
                    dropRadius: 20, //px
                    perturbance: 0.04
                });
                $('main').ripples({
                    resolution: 128,
                    dropRadius: 10, //px
                    perturbance: 0.04
                });
            }
            catch (e) {
                $('.error').show().text(e);
            }

            //$('.js-ripples-disable').on('click', function() {
            //    $('body, main').ripples('destroy');
            //    $(this).hide();
            //});
            //
            //$('.js-ripples-play').on('click', function() {
            //    $('body, main').ripples('play');
            //});
            //
            //$('.js-ripples-pause').on('click', function() {
            //    $('body, main').ripples('pause');
            //});

            //Automatic drops
            setInterval(function() {
                var $el = $('main');
                var x = Math.random() * $el.outerWidth();
                var y = Math.random() * $el.outerHeight();
                var dropRadius = 20;
                var strength = 0.04 + Math.random() * 0.04;

                $el.ripples('drop', x, y, dropRadius, strength);
            }, 400);

        });
    }]);
});
