/**
 * Created by 世宁 on 2015/4/23 0023.
 */
define(['modal/module'],function (module) {
    module.controller('ModalController',['$modal','$scope',function($modal,$scope){
        $scope.open = function(){
            var modalInstance = $modal.open({
                template: 'myModalContent.html',
                controller: 'ModalInstanceController',
                size: 'lg'
            });
        };
    }]);
});
