/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('ModalDemoController',['$scope','$modal','$log',function($scope,$modal,$log){
        $scope.items = ['项目1','项目2','项目3'];

        $scope.open = function(size){
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceController',
                size: size,
                resolve: {
                    items: function(){
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem){
                $scope.selected = selectedItem;
            },function(){
                $log.info('模态窗口在'+new Date()+'时关闭.');
            });
        };
    }]).controller('ModalInstanceController',['$scope','$modalInstance','items',function($scope,$modalInstance,items){
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function(){
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        };
    }]);
});