/**
 * Created by 世宁 on 14-12-12.
 */
'use strict';
var dependencies = ['angular','conf/modules','conf/_routes'];
angular.forEach($.paths.moduleDirs,function(dir){
    dependencies.push(dir+'/routes');
});
define(dependencies,function(angular,modules,_routes){
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
                label: 'Home'
            },
            modules: {
                'homeModule': modules.homeModule
            }
        },
        emails: {
            url: '/emails/:emailView/:emailId',
            views: {
                '': {
                    controller: 'EmailController',
                    templateUrl: 'src/email/views/email.tpl.html'
                }
            },
            modules: {
                'emailModule': modules.emailModule,
                'usersModule': modules.usersModule,
                'filesModule': modules.filesModule
            }
        },
        //categories: {
        //    url: '/categories',
        //    views: {
        //        '': {
        //            template: '<div ui-view></div>'
        //        }
        //    },
        //    breadcrumb: {
        //        label: 'Categories',
        //        parent: 'home'
        //    },
        //    modules: {
        //        'categoriesModule': modules.categoriesModule
        //    }
        //},
        //'categories.languages': {
        //    url: '/languages',
        //    views: {
        //        '': {
        //            controller: 'LanguagesController',
        //            templateUrl: 'src/categories/views/languages.tpl.html'
        //        }
        //    },
        //    breadcrumb: {
        //        label: 'Languages'
        //    },
        //    modules: {
        //        'categoriesModule': modules['categoriesModule.languages'],
        //        'angular-table': ['at-table'],
        //        'xeditable': ['angular-xeditable']
        //    }
        //},
        //'music': {
        //    url: '/music',
        //    views: {
        //        '': {
        //            template: '<div ui-view></div>'
        //        }
        //    },
        //    breadcrumb: {
        //        label: 'Music',
        //        parent: 'home'
        //    },
        //    modules: {
        //        'musicModule': modules['musicModule']
        //    }
        //},
        //'music.upload': {
        //    url: '/upload',
        //    views: {
        //        '': {
        //            controller: 'MusicUploadController',
        //            templateUrl: 'src/music/views/upload.tpl.html'
        //        }
        //    },
        //    breadcrumb: {
        //        label: 'Upload'
        //    },
        //    modules: {
        //        'musicModule': modules['musicModule.upload'],
        //        'categoriesModule': modules.categoriesModule.concat(modules['categoriesModule.languages']),
        //        'ebp.dropzone': ['plugins/core/ebp-dropzone'],
        //        'mgo-angular-wizard': ['angular-wizard']
        //    }
        //},
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
                    templateUrl: 'src/UIAndElements/views/buttons1.tpl.html',
                    controller: 'Buttons1Controller'
                }
            },
            breadcrumb: {
                label: 'Buttons1'
            },
            modules: {
                UIAndElementsModule: modules['UIAndElementsModule.buttons1'],
                'ebp.tree': ['plugins/core/ebp-tree'],
                'ebp.scroll': ['plugins/core/ebp-scroll']
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
        'forms': {
            url: '/forms',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Forms',
                parent: 'home'
            },
            modules: {
                'ebpFormsModule': modules.ebpFormsModule
            }
        },
        'forms.elements': {
            url: '/elements',
            views: {
                '': {
                    templateUrl: 'src/forms/views/elements.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Elements'
            },
            modules: {
                'ebpFormsModule': modules.ebpFormsModule,
                'ebp.form.slider': ['plugins/form/ebp-slider']
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
            },
            modules: {
                'ebpTablesModule': modules.ebpTablesModule
            }
        },
        'tables.ebpGrid': {
            url: '/ebpGrid',
            views: {
                '': {
                    templateUrl: 'src/tables/views/tables.tpl.html',
                    controller: 'EbpGridController'
                }
            },
            breadcrumb: {
                label: 'EbpGrid'
            },
            modules: {
                'ebpTablesModule': modules['ebpTablesModule.ebpGrid'],
                'ebp.grid': ['plugins/core/ebp-grid']
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
        'documents': {
            url: '/documents',
            views: {
                'sidebar': {
                    templateUrl: 'src/documents/views/sidebar.tpl.html'
                },
                'main.content': {
                    templateUrl: 'src/documents/views/layout.tpl.html'
                }
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
        'polymer': {
            url: '/polymer',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Polymer',
                parent: 'home'
            }
        },
        'polymer.icons': {
            url: '/icons',
            views: {
                '': {
                    templateUrl: 'src/polymer/views/icons.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Icons'
            }
        },
        'polymer.buttons': {
            url: '/buttons',
            views: {
                '': {
                    templateUrl: 'src/polymer/views/buttons.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Buttons'
            }
        },
        'polymer.dialog': {
            url: '/dialog',
            views: {
                '': {
                    templateUrl: 'src/polymer/views/dialog.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Dialog'
            }
        },
        'polymer.progress': {
            url: '/progress',
            views: {
                '': {
                    templateUrl: 'src/polymer/views/progress.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Progress'
            }
        },
        'experiments': {
            url: '/experiments',
            modules: {
                'foobar': ['experiments/module']
            }
        },
        'experiments.rainyday': {
            url: '/rainyday',
            views: {
                'body@': {
                    templateUrl: 'src/experiments/rainyday/views/rainyday.tpl.html',
                    controller: 'RainyDayController'
                }
            },
            modules: {
                'foobar': [
                    'experiments/rainyday/controllers/RainyDayController'
                ]
            }
        },
        'experiments.ripples': {
            url: '/ripples',
            views: {
                'body@': {
                    templateUrl: 'src/experiments/ripples/views/ripples.tpl.html',
                    controller: 'RipplesController'
                }
            },
            modules: {
                'foobar': [
                    'experiments/ripples/controllers/RipplesController'
                ]
            }
        },
        'modal': {
            url: '/modal',
            views: {
                '': {
                    templateUrl: 'src/modal/views/modal.tpl.html',
                    controller: 'ModalController'
                }
            },
            modules: {
                'ModalModule': [
                    'modal/controllers/ModalController',
                    'modal/controllers/ModalInstanceController',
                    'modal/m、odule'
                ]
            }
        }
    };
    for(var i = 3;i < arguments.length;i++){
        $.extend(true,routes,arguments[i]);
    };
    angular.forEach(_routes,function(e){
        angular.forEach(e,function(v,k){
            e[k].modules = {};
            console.log(e);
        });
    });
    return routes;
});
