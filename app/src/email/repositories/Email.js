define(['email/module'] , function (emailModule) {
    emailModule.factory('Email' , ['$resource' , function ($resource) {
        return $resource('/oa/services/demo/:username/emails/:emailId' , {emailId:'@id'},{
            'update': {method: 'PUT'}
        });
    }]);
});
