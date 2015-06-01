/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
