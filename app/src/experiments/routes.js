/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
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
        }
    };
    return routes;
});
