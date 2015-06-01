/**
 * Created by tongda on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
