/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
