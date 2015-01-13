/**
 * Created by yao on 14-11-14.
 */
define(['files/module'],function(filesModule){
    filesModule.factory('Attachments' , ['$resource' , function ($resource) {
        return $resource('/oa/services/attachments/:id' , {id:'@id'},{
            'update': {method: 'PUT'},
            'fetch': {method: 'GET', url: '/oa/services/attachments',isArray: true}
        });
    }]);
});