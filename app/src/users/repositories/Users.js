define(['users/module'] , function (usersModule) {
	usersModule.factory('Users' , ['$resource' , function ($resource) {
		return $resource('/oa/services/users/:username' , {username:'@username'},{
			'update': {method: 'PUT'}
		});
	}]);
});