/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
        musicyao: {
            url: '/musicyao',
            views: {
                'main.content': {
                    templateUrl: 'src/musicyao/views/main.html'
                },
                'sidebar': {
                    templateUrl: 'src/musicyao/views/sidebar.html'
                },
                'navbar': {
                    templateUrl: 'src/musicyao/views/navbar.html'
                }
            },
            breadcrumb: {
                label: 'MusicYao',
                parent: 'home'
            },
            modules: {
                'musicYaoModule': modules.musicYaoModule,
                'ebp.stickUp': ['plugins/core/ebp-stickup'],
                'com.2fdevs.videogular': ['videogular'],
                'com.2fdevs.videogular.plugins.controls': ['videogular-controls'],
                'com.2fdevs.videogular.plugins.overlayplay': ['videogular-overlay-play'],
                'com.2fdevs.videogular.plugins.buffering': ['videogular-buffering'],
                'com.2fdevs.videogular.plugins.poster': ['videogular-poster']
            }
        },
        'musicyao.home': {
            url: '/home',
            views: {
                '': {
                    controller: 'MusicHomeController',
                    templateUrl: 'src/musicyao/views/recommendation.html'
                }
            },
            breadcrumb: {
                label: 'Home'
            },
            modules: {
                'musicYaoModule': modules['musicYaoModule_home']
            }
        },
        'musicyao.mtv': {
            url: '/mtv',
            views: {
                '': {
                    controller: 'MTVController',
                    templateUrl: 'src/musicyao/views/mtv.html'
                }
            },
            breadcrumb: {
                label: 'MTV'
            },
            modules: {
                'musicYaoModule': modules['musicYaoModule_mtv']
            }
        },
        'musicyao.mtvdetail': {
            url: '/mtvdetail',
            views: {
                '': {
                    templateUrl: 'src/musicyao/views/mtvdetail.html'
                }
            },
            breadcrumb: {
                label: 'details'
            },
            modules: {
                'musicYaoModule': ['musicyao/controllers/VideoPlayerController']
            }
        }
    };
    return routes;
});
