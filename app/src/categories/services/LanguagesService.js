/**
 * Created by 世宁 on 2015/1/14 0014.
 */
define(['categories/module'],function(module){
    module.service('LanguagesService', ['Languages', function(languagesRepo){
        return {
            getAll: function(callback){
                return languagesRepo.query({page: 1,start: 1,limit:10},function(){
                    if(angular.isFunction(callback)){
                        callback();
                    }
                });
            }
        };
    }]);
});
