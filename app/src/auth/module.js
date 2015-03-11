/**
 * Created by 世宁 on 14-11-19.
 */
'use strict';
define(['angular','angular-ui-router','angular-cookies'],function(angular){
    var authModule = angular.module('authModule',['ui.router','ngCookies']).config(['$provide','$stateProvider',function($provide,$stateProvider){
        $provide.provider({
            authService: function(){
                this.$get = [function(){
                    return {
                        currentUser: undefined,
                        loginPath: 'auth/login',
                        logout: function(){
                            this.currentUser = undefined;
                        }
                    };
                }];
            }
        });
        $stateProvider.state('login',{
            url: '/auth/login',
            views: {
                'body': {
                    controller: 'LoginController',
                    templateUrl: 'src/auth/views/login.tpl.html'
                }
            }
        }).state('logout',{
            url: '/auth/logout',
            resolve: {
                logoutService: ['$location','$http','authService','$cookieStore',function($location,$http,authService,$cookieStore){
                    $http.post('/oa/auth/logout').success(function(data,state){
                        if(state === 200){
                            authService.logout();
                            $cookieStore.remove('currentUser');
                            $location.path('/auth/login');
                        }
                    }).error(function(){
                        $cookieStore.remove('currentUser');
                        $location.path('/auth/login');
                    });
            }]
            }
        });
    }]).controller({
        LoginController: ['$scope','authService','$location','$cookieStore',function($scope,authService,$location,$cookieStore){
            $scope.login = function(){
                var username = $scope.username;
                var password = $scope.password;


                authService.currentUser = 'yao';
                $cookieStore.put('currentUser',authService.currentUser);
                window.location.href = '/';
                $scope.$apply();
                //$.ajax({
                //    url: '/oa/auth/login',
                //    data: {
                //        username: username,
                //        password: password
                //    },
                //    type: 'POST',
                //    dataType: 'json',
                //    success: function(data){
                //        if(angular.isString(data)){
                //            authService.currentUser = $.parseJSON(data).principal;
                //        }
                //        if(angular.isObject(data)){
                //            authService.currentUser = data.principal;
                //        }
                //        $cookieStore.put('currentUser',authService.currentUser);
                //        window.location.href = '/';
                //        $scope.$apply();
                //    }
                //});
            };
        }]
    }).run(['$http',function($http){
        //$http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
    }]);
    return authModule;
});
