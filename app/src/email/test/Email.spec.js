'use strict'
define(['angular-mocks', 'email/module',''], function() {
    describe('controller title', function() {
        var $scope;
        var $rootScope;
        var $location;
        var $controller;
        var emailController;
        var $ocLazyLoad;
        var triggerDigests = function() {
            return setInterval(function() {
                $rootScope.$digest();
            }, 10)
        };
        beforeEach(module('emailModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            jasmine.clock().install();
            $controller = _$injector_.get('$controller');
            $ocLazyLoad = _$injector_.get('$ocLazyLoad');
        }));
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it('should be equal mail', function() {
            var interval = triggerDigests();
//            window.spy = jasmine.createSpyObj('spy', ['config', 'run', 'ctrl', 'service', 'filter', 'directive']);
            $ocLazyLoad.load({
                name: 'emailModule',
                files: ['email/controllers/emailController','email/services/emailService','email/repositories/Email']
            }).then(function(res){
//                window.clearInterval(interval);
//                console.log(res);
            });
            setTimeout(function(){
//                emailController = $controller('EmailController', {
//                    '$scope': $scope,
//                    '$location': $location
//                });
            },20000);
            jasmine.clock().tick(20001);
//            console.log($scope.composeTabActive);
        });
    });
});
