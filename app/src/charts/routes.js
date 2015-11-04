/**
 * Created by tongda on 15/10/28.
 */
define(['conf/modules'],function(modules){
    var routes = {
        charts: {
            url: '/charts',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Charts',
                parent: 'home'
            },
            modules: {
                'chartsModule': modules.chartsModule
            }
        },
        'charts.gantt': {
            url: '/gantt',
            views: {
                '': {
                    templateUrl: 'src/charts/views/gantt.tpl.html',
                    controller: 'GanttController'
                }
            },
            breadcrumb: {
                label: 'Gantt'
            },
            modules: {
                'chartsModule': modules['chartsModule.gantt'],
                'ebp.dialog': ['plugins/core/ebp-dialog'],
                'gantt': ['angular-gantt'],
                'gantt.table': ['angular-gantt-plugins'],
                'gantt.movable': ['angular-gantt-plugins'],
                'gantt.tooltips': ['angular-gantt-plugins']
            }
        }
    };
    return routes;
});
