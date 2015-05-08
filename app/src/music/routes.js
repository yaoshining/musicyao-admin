/**
 * Created by 世宁 on 2015/4/30 0030.
 */
define(['conf/modules'],function(modules){
    var routes = {
        'music': {
            url: '/music',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Music',
                parent: 'home'
            },
            modules: {
                'musicModule': modules['musicModule']
            }
        },
        'music.upload': {
            url: '/upload',
            views: {
                '': {
                    controller: 'MusicUploadController',
                    templateUrl: 'src/music/views/upload.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Upload'
            },
            modules: {
                'musicModule': modules['musicModule.upload'],
                'categoriesModule': modules.categoriesModule.concat(modules['categoriesModule.languages']),
                'ebp.dropzone': ['plugins/core/ebp-dropzone'],
                'mgo-angular-wizard': ['angular-wizard']
            }
        }
    };
    return routes;
});
