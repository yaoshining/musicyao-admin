require([
    'angular',
    'jquery',
    'kreate',
    'angular-resource',
    'angular-animate',
    'angular-ui-router',
    'angular-ui-utils',
    'angular-cookies',
    'plugins/core/ebp-breadcrumb',
    'angular-sanitize',
    'tinycon',
    'oclazyload',
    'ui-bootstrap-tpls',
    '../conf/paths',
    'bootstrap'
], function(angular) {
    'use strict';
    require([
        '../conf/amd'
    ],function(amd){
        require([
            'nprogress',
            'conf/routes',
            'conf/menus',
            'plugins/core/ebp-slide-panel',
            'auth/module'
        ],function(NProgress,routes,menus){
            /*App Module*/
            document.getElementById('loader-wrapper').style.backgroundColor = '#222';
            angular.element(document).ready(function () {
                /*smart works go here*/
                var $html = angular.element('html');
                angular.module('ebp.templates',[]);
                angular.module('ebp.plugins.templates',[]);
                angular.module('ebp', [
                    'ui.router',
                    'ui.utils',
                    'ngResource',
                    'oc.lazyLoad',
                    'ui.bootstrap',
                    'ngAnimate',
                    'authModule',
                    'ngCookies',
                    'ebp.slidePanel',
                    'ebp.breadcrumb'
                ]).config([
                    '$urlRouterProvider',
                    '$provide',
                    '$ocLazyLoadProvider',
                    '$httpProvider',
                    '$stateProvider',
                    function(
                        $urlRouterProvider,
                        $provide,
                        $ocLazyLoadProvider,
                        $httpProvider,
                        $stateProvider
                    ) {
                        $urlRouterProvider.otherwise('/');
                        /* change configure to use [[ to be the interpolation ([[2 + 2]]) */
                        //$interpolateProvider.startSymbol('[[');
                        //$interpolateProvider.endSymbol(']]');
                        /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
                        $provide.decorator('$rootScope', [
                            '$delegate',
                            function($delegate) {
                                $delegate.safeApply = function(fn) {
                                    var phase = $delegate.$$phase;
                                    if (phase === '$apply' || phase === '$digest') {
                                        if (fn && typeof fn === 'function') {
                                            fn();
                                        }
                                    } else {
                                        $delegate.$apply(fn);
                                    }
                                };
                                return $delegate;
                            }
                        ]);
                        $ocLazyLoadProvider.config({
                            loadedModules: ['ebp'],
                            jsLoader: function(jsFiles,callback,params){
                                var tempArray = [];
                                if(require.toUrl('').indexOf('./src')<0){
                                    angular.forEach(jsFiles,function(file){
                                        tempArray.push('src/'+file);
                                    });
                                    jsFiles = tempArray;
                                }
                                require(jsFiles,callback,params);
                            },
                            debug: true
                        });
                        $httpProvider.interceptors.push(['authService','$location','$cookieStore',function(authService,$location,$cookieStore) {
                            return {
                                'request': function(config) {
                                    var savedCurrentUser = $cookieStore.get('currentUser');
                                    if(angular.isUndefined(authService.currentUser)){
                                        if(angular.isUndefined(savedCurrentUser)){
                                            var loginPath = authService.loginPath;
                                            $location.path(loginPath);
                                        } else {
                                            authService.currentUser = savedCurrentUser;
                                        }
                                    }
                                    return config;
                                },
                                'response': function(response) {
                                    return response;
                                }
                            };
                        }]);
                        angular.forEach(routes,function(config,state){
                            var stateConfig = {
                                url: config.url,
                                views: config.views,
                                ncyBreadcrumb: config.breadcrumb,
                                resolve: config.resolve || { // Any property in resolve should return a promise and is executed before the view is loaded

                                }
                            };
                            if(config.modules){
                                angular.forEach(config.modules,function(files,name){
                                    stateConfig.resolve[name+'Loader'] = ['$ocLazyLoad', function($ocLazyLoad) {
                                        return $ocLazyLoad.load({
                                            name: name,
                                            files: files
                                        });
                                    }]
                                });
                            }
                            $stateProvider.state(state,stateConfig);
                        });
                    }]).controller('SidebarController',[
                    '$scope',
                    '$rootScope',
                    '$state',
                    function($scope,$rootScope,$state){
                        $scope.minified = false;
                        $scope.toggleSize = function(){
                            $scope.minified = !$scope.minified;
                        };
                        $scope.menus = menus;
                        $scope.openMenu = function($event,menu,menus){
                            $event.preventDefault();
                            angular.forEach(menus,function(m){
                                if(m!==menu && m.isOpen){
                                    m.isOpen = false;
                                }
                            });
                            menu.isOpen=!menu.isOpen;
                        };
                    }
                ]).controller('MainController',['$scope','$ebpSlidePanel',function($scope,$ebpSlidePanel){
                    $scope.openTaskDetail = function(){
                        $ebpSlidePanel.open({
                            url: 'src/UIAndElements/views/layout/taskDetails.tpl.html',
                            resolve: {
                            }
                        });
                    };
                    $scope.openProjectDetail = function(){
                        $ebpSlidePanel.open({
                            url: 'src/UIAndElements/views/layout/projectDetails.tpl.html',
                            resolve: {
                                projects: '项目详情1'
                            }
                        });
                    };
                    $scope.closePanel = function(){
                        $ebpSlidePanel.close();
                    };
                }]).run(['$ocLazyLoad','$rootScope',function($ocLazyLoad,$rootScope){
                    window.NProgress.inc();
                    setTimeout(function(){
                        window.NProgress.done(true);
                        $rootScope.isAppLoaded = true;
                        $rootScope.$apply();
                    },0);
                    $ocLazyLoad.load([{
                        name: 'ebp.plugins.templates',
                        files: ['plugins-templates']
                    },{
                        name: 'ebp.templates',
                        files: ['ebp-templates']
                    }]);
                    $rootScope.$on('$stateChangeStart',function(){
                        $rootScope.isAppLoaded && NProgress.start();
                    });
                    $rootScope.$on('$viewContentLoaded',function(){
                        $rootScope.isAppLoaded && NProgress.done(true);
                    });
                    Tinycon.setOptions({
                        width: 7,
                        height: 9,
                        font: '10px \'Strict Thin\' lighter',
                        colour: '#ffff00',
                        background: '#2e8965',
                        fallback: true
                    });
                    var count = 0;
                    setInterval(function(){
                        ++count;
                        Tinycon.setBubble(count);

                    }, 1000);
                }]);
                $.kreate({
                    tag: 'div',
                    attr: {
                        'ng-include':"'src/home/sideplayer.tpl.html'"
                    }
                }).appendTo(document.body);
                /*bootstrap model*/
                angular.bootstrap($html, ['ebp']);
            });
        });
    });
});
