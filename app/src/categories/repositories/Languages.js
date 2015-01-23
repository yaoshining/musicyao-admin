/**
 * Created by 世宁 on 2015/1/14 0014.
 */
define(['categories/module'] , function (emailModule) {
    emailModule.factory('Languages' , ['$resource' , function ($resource) {
        return $resource('/MusicYao/manager/languages/:id',{
            'update': {method: 'PUT'}
        });
    }]);
});
