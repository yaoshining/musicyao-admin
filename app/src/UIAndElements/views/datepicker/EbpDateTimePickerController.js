define(['UIAndElements/module'], function (module) {
	module.controller('EbpDateTimePickerController', ['$scope', function($scope){
        $scope.pickedDate = new Date();
	}])
});
