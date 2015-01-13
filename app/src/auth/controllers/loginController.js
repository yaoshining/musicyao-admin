/**
 * Created by 世宁 on 14-11-19.
 */
define(['auth/module'],function(authModule){
    authModule.controller('LoginController',['$scope','authService','$location',function($scope,authService,$location){
            $scope.bgImage = '/app/images/bg/meteorshower2.jpg';
            $scope.dynamicBgSrc = 'src/roses/snowflake.html';
            $scope.login = function(){
                var username = $scope.username;
                var password = $scope.password;
                $.ajax({
                    url: '/oa/auth/login',
                    data: {
                        username: username,
                        password: password
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function(data){
                        if(angular.isString(data)){
                            authService.currentUser = $.parseJSON(data).principal;
                        }
                        if(angular.isObject(data)){
                            authService.currentUser = data.principal;
                        }
                        $location.go('home',{},{reload: true});
                    }
                });
//                $.post('/oa/auth/login',{
//                    username: username,
//                    password: password
//                },function(data){
//                    authService.currentUser = data.principal;
//                    console.log($.parseJSON(data));
//                    $location.path('/');
//                },'json');
            }
        }]
    );
});
