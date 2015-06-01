/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
        'mediaDemo': {
            url: '/media',
            views: {
                '': {
                    template: "<div ui-view class='fade-in-up' style='position: relative'></div>"
                }
            },
            modules: {
                'mediaModule': modules.mediaModule,
                'ebp.jq': ['plugins/core/ebp-jq']
            },
            breadcrumb: {
                label: 'Media',
                parent: 'home'
            }
        },
        'mediaDemo.audioPlayer': {
            url: '/audio',
            views: {
                '': {
                    controller: 'AudioPlayerDemoController',
                    templateUrl: 'src/media/views/audio/players.tpl.html'
                }
            },
            breadcrumb: {
                label: 'AudioPlayer'
            },
            modules: {
                'mediaModule': modules['mediaModule.audioPlayer']
            }
        }
    };
    return routes;
});
