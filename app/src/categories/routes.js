/**
 * Created by 世宁 on 2015/4/30 0030.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
