/**
 * Created by 世宁 on 2015/1/14 0014.
 */
define(['categories/module'],function(module){
    module.controller('LanguagesController',['$scope','$http','$q','LanguagesService','editableOptions',function($scope,$http,$q,languagesService,editableOptions){
        $scope.config = {
            itemsPerPage: 10,
            fillLastPage: true
        };
        editableOptions.theme = 'bs3';
        $scope.languages = languagesService.getAll();
        $scope.updateLanguage = function(language){
            language.modifyTime = new Date();
            var d = $q.defer();
            $http.post('/MusicYao/manager/languages', [language]).success(function(res) {
                res = res || {};
                if(res.status === 'ok') {
                    d.resolve()
                } else {
                    d.resolve(res.msg)
                }
            }).error(function(e){
                d.reject('Server error!');
            });
            return d.promise;
        };
        $scope.addLanguage = function(){
            var time = new Date();
            $scope.languages.push({
                createUser: 'yaoshining',
                createTime: time,
                modifyTime: time
            });
        };
    }]);
});
