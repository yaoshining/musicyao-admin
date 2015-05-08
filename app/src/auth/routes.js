/**
 * Created by 世宁 on 2015/4/30 0030.
 */
define(['conf/modules'],function(modules){
    var routes = {
        'testSub': {
            url: '/testSub',
            views: {
                '': {
                    template: 'src/home/home.tpl.html'
                }
            },
            modules: {
                'categoriesModule': modules.categoriesModule
            }
        }
    };
    return routes;
});
