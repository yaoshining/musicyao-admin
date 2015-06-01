/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
