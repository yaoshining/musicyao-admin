/**
 * Created by 世宁 on 14-12-12.
 */
'use strict';
var dependencies = ['angular','conf/modules','conf/_routes'];
angular.forEach($.paths.moduleDirs,function(dir){
    dependencies.push(dir+'/routes');
});
define(dependencies,function(angular,modules,_routes){
    var routes = {
        home: {
            url: '/',
            views: {
                '': {
                    templateUrl: 'src/home/home.tpl.html',
                    controller: 'HomeController'
                }
            },
            breadcrumb: {
                label: 'Home'
            },
            modules: {
                'homeModule': modules.homeModule
            }
        },
        'documents': {
            url: '/documents',
            views: {
                'sidebar': {
                    templateUrl: 'src/documents/views/sidebar.tpl.html'
                },
                'main.content': {
                    templateUrl: 'src/documents/views/layout.tpl.html'
                }
            }
        },
        'modal': {
            url: '/modal',
            views: {
                '': {
                    templateUrl: 'src/modal/views/modal.tpl.html',
                    controller: 'ModalController'
                }
            },
            modules: {
                'ModalModule': [
                    'modal/controllers/ModalController',
                    'modal/controllers/ModalInstanceController',
                    'modal/module'
                ]
            }
        }
    };
    for(var i = 3;i < arguments.length;i++){
        $.extend(true,routes,arguments[i]);
    };
    angular.forEach(_routes,function(e){
        angular.forEach(e,function(v,k){
            e[k].modules = {};
            console.log(e);
        });
    });
    return routes;
});
