/**
 * Created by 世宁 on 14-12-12.
 */
'use strict'
define(['angular','conf/modules','conf/_routes'],function(angular,modules,_routes){
    var routes = {
        home: {
            url: '/',
            views: {
                '': {
                    templateUrl: 'src/home/home.tpl.html',
                    controller: 'HomeController'
                }
            },
            breadcrumb: {
                label: 'Home1'
            },
            modules: {
                'homeModule': modules.homeModule
            }
        },
        categories: {
            url: '/categories',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Categories',
                parent: 'home'
            },
            modules: {
                'categoriesModule': modules.categoriesModule
            }
        },
        'categories.languages': {
            url: '/languages',
            views: {
                '': {
                    controller: 'LanguagesController',
                    templateUrl: 'src/categories/views/languages.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Languages'
            },
            modules: {
                'categoriesModule': modules['categoriesModule.languages'],
                'angular-table': ['at-table'],
                'xeditable': ['angular-xeditable']
            }
        },
        'music': {
            url: '/music',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Music',
                parent: 'home'
            },
            modules: {
                'musicModule': modules['musicModule']
            }
        },
        'music.upload': {
            url: '/upload',
            views: {
                '': {
                    controller: 'MusicUploadController',
                    templateUrl: 'src/music/views/upload.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Upload'
            },
            modules: {
                'musicModule': modules['musicModule.upload'],
                'categoriesModule': modules.categoriesModule.concat(modules['categoriesModule.languages']),
                'ebp.dropzone': ['plugins/core/ebp-dropzone'],
                'mgo-angular-wizard': ['angular-wizard']
            }
        },
        UIAndElements: {
            url: '/ui',
            views: {
                '': {
                    template: "<div ui-view class='fade-in-up' style='position: relative'></div>"
                }
            },
            breadcrumb: {
                label: 'UIAndElements',
                parent: 'home'
            },
            modules: {
                'UIAndElementsModule': modules.UIAndElementsModule
            }
        },
        'UIAndElements.bootstrap': {
            url: '/bootstrap',
            views: {
                '': {
                    controller: 'BootstrapController',
                    templateUrl: 'src/UIAndElements/views/bootstrap.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Bootstrap'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.bootstrap'],
                'ebp.youziku': modules.ebpYzkFontPlugin
            }
        },
        'UIAndElements.treeView': {
            url: '/treeview',
            views: {
                '': {
                    controller: 'TreeViewController',
                    templateUrl: 'src/UIAndElements/views/treeView.tpl.html'
                }
            },
            breadcrumb: {
                label: 'TreeView'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.treeView'],
                'ebp.tree': modules.ebpTreePlugin
            }
        },
        'UIAndElements.tables': {
            url: '/tables',
            views: {
                '': {
                    controller: 'TablesController',
                    templateUrl: 'src/UIAndElements/views/tables/tables.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Tables'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.tables'],
                'angular-table': ['at-table']
            }
        },
        'UIAndElements.nestable': {
            url: '/nestable',
            views: {
                '': {
                    controller: 'NestableController',
                    templateUrl: 'src/UIAndElements/views/list/nestable.html'
                }
            },
            breadcrumb: {
                label: 'Nestable'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.nestable'],
                'ng-nestable': modules.ngNestable
            }
        },
        'UIAndElements.typography': {
            url: '/typography',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/typography.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Typography'
            }
        },
        'UIAndElements.elements': {
            url: '/elements',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/elements.tpl.html',
                    controller: 'ElementsController'
                }
            },
            breadcrumb: {
                label: 'Elements'
            },
            modules: {
                'easypiechart': ['vendor/angular.easypiechart'],
                'ebp.toaster': ['plugins/core/ebp-toaster'],
                'UIAndElementsModule': modules['UIAndElementsModule.elements'],
                'ebp.dialog': ['plugins/core/ebp-dialog'],
                'ebp.form.slider': ['plugins/form/ebp-slider']
            }
        },
        'UIAndElements.buttons1': {
            url: '/buttons1',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/buttons1.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Buttons1'
            }
        },
        'UIAndElements.buttons2': {
            url: '/buttons2',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/buttons2.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Buttons2'
            }
        },
        'UIAndElements.icons': {
            url: '/icons',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/icons.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Icons'
            }
        },
        'UIAndElements.calendar': {
            url: '/calendar',
            views: {
                '': {
                    controller: 'CalendarDemoController',
                    templateUrl: 'src/UIAndElements/views/calendar/calendar.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Calendar'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.calendar'],
                'ui.calendar': ['ui-calendar']
            }
        },
        'UIAndElements.maps': {
            url: '/maps',
            views: {
                '': {
                    controller: 'MapDemoController',
                    templateUrl: 'src/UIAndElements/views/maps/maps.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Maps'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.maps'],
                'ebp.jq': ['plugins/core/ebp-jq']
            }
        },
        'UIAndElements.mindMap': {
            url: '/mindmap',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/mindMap.tpl.html'
                }
            },
            breadcrumb: {
                label: 'MindMap'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.mindMap'],
                'ebp.mindmap': modules['ebpJsMindPlugin']
            }
        },
        'tables': {
            url: '/tables',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Tables',
                parent: 'home'
            }
        },
        'tables.ebpGrid': {
            url: '/ebpGrid',
            views: {
                '': {
                    templateUrl: 'src/tables/views/tables.tpl.html'
                }
            },
            breadcrumb: {
                label: 'EbpGrid'
            }
        },
        widgetsDemo: {
            url: '/widgets',
            views: {
                '': {
                    controller: 'WidgetsDemoController',
                    templateUrl: 'src/widgets/views/widgets.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Widgets',
                parent: 'home'
            },
            modules: {
                'widgetsDemoModule': modules.widgetsDemoModule,
                'ui.sortable': ['ui-sortable'],
                'angular-table': ['at-table']
            }
        },
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
        },
        'worktile': {
            url: '/worktile',
            views: {
                'main.content': {
                    templateUrl: 'src/worktile/views/worktile.main.tpl.html'
                },
                'sidebar': {
                    controller: 'WorktileSidebarController',
                    templateUrl: 'src/home/sidebar.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Tasks',
                parent: 'home'
            },
            modules: {
                'worktileModule': modules.worktile,
                'ui.sortable': ['ui-sortable'],
                'ebp.jq': ['plugins/core/ebp-jq']
            }
        },
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
        },
        'myState': {
            url: '/myState',
            views: {
                '': {
                    template: ''
                }
            },
            breadcrumb: {
                label: 'MyState',
                parent: 'home'
            },
            modules: {
                'myModule': modules['myModule']
            }
        }
    };
    angular.forEach(_routes,function(e){
        angular.forEach(e,function(v,k){
            e[k].modules = {};
            console.log(e);
        });
    });
    return routes;
});
