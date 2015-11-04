/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        'layouts': {
            url: '/layouts',
            views: {
                'main.content': {
                    templateUrl: 'src/UIAndElements/views/layout/SidebarContent.tpl.html',
                    controller: 'SidebarController'
                }
            },
            parent: 'home',
            breadcrumb: {
                label: 'Layout'
            },
            modules: {
                'UIAndElementsModule': ['UIAndElements/views/layout/SidebarController','bootstrap-datepicker-zh-CN']
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
        'UIAndElements.datepicker': {
            url: '/datepicker',
            views: {
                '': {
                    templateUrl: 'src/UIAndElements/views/datepicker/EbpDateTimePicker.tpl.html',
                    controller: 'EbpDateTimePickerController'
                }
            },
            breadcrumb: {
                label: 'DatePicker'
            },
            modules: {
                'UIAndElementsModule': modules['UIAndElementsModule.datepicker'],
                'ebp.form.datetimepicker': ['plugins/form/ebp-datetimepicker']
            }
        }
    };
    return routes;
});
