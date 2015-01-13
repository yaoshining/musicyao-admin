/**
 * Created by yao on 14-12-25.
 */
define(['angular','codemirror','ui-codemirror','angular-sanitize','plugins/core/ebp-prettify'],function(angular,CodeMirror){
    window.CodeMirror = CodeMirror;
    var module = angular.module('UIAndElementsModule',['ui.codemirror','ngSanitize','prettifyDirective']);
    module.config().run(['$http', function($http){
        $http.defaults.headers.common.Authorization = 'Basic eWFvOnlzMTk4NzU2';
    }]);
    return module;
});