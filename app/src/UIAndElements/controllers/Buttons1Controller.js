/**
 * Created by 世宁 on 2015/4/3 0003.
 */
define(['UIAndElements/module'],function(module){
    module.controller('Buttons1Controller',['$scope','$modal',function($scope,$modal){
        $scope.authorize = function(file){
            file = {id: 3};
            var modalInstance = $modal.open({
                templateUrl: 'fileAuthorizition.tpl.html',
                controller: 'FileAuthController',
                size: 'lg',
                resolve: {
                    file: function(){
                        return file;
                    }
                }
            });
        };
    }]).controller('FileAuthController',['$scope','$modalInstance','file','$http',function($scope,$modalInstance,file,$http){
        $scope.$ebpTree = {};
        $scope.treeData = [
            {
                name: 'For Sale',
                type: 'folder',
                children: [
                    {name: 'Appliances', type: 'item'},
                    {name: 'Arts & Crafts', type: 'item'},
                    {name: 'Clothing', type: 'item'},
                    {name: 'Computers', type: 'item'},
                    {name: 'Jewelry', type: 'item'},
                    {name: 'Office & Business', type: 'item'},
                    {name: 'Sports & Fitness', type: 'item'}
                ]
            },
            {
                name: 'Vehicles',
                type: 'folder',
                children: [
                    {
                        name: 'Cars',
                        type: 'folder',
                        children: [
                            {name: 'Classics', type: 'item'},
                            {name: 'Convertibles', type: 'item'},
                            {name: 'Coupes', type: 'item'},
                            {name: 'Hatchbacks', type: 'item'},
                            {name: 'Hybrids', type: 'item'},
                            {name: 'SUVs', type: 'item'},
                            {name: 'Sedans', type: 'item'},
                            {name: 'Trucks', type: 'item'}
                        ]
                    },
                    {name: 'Motorcycles', type: 'item'},
                    {name: 'Boats', type: 'item'}
                ]
            },
            {
                name: 'Rentals',
                type: 'folder',
                children: [
                    {name: 'Apartments', type: 'item'},
                    {name: 'Office Space', type: 'item'},
                    {name: 'Vacation Rentals', type: 'item'}
                ]
            },
            {
                name: 'Real Estate',
                type: 'folder',
                children: [
                    {name: 'Apartments', type: 'item'},
                    {name: 'Villas', type: 'item'},
                    {name: 'Plots', type: 'item'}
                ]
            },
            {
                name: 'Pets',
                type: 'folder',
                children: [
                    {name: 'Cats', type: 'item'},
                    {name: 'Dogs', type: 'item'},
                    {name: 'Horses', type: 'item'},
                    {name: 'Reptiles', type: 'item'}
                ]
            }	,
            {name: 'Tickets', type: 'item'}	,
            {name: 'Services', type: 'item'}	,
            {name: 'Personals', type: 'item'}
        ];
        $scope.permissions = [{
            id: 12,
            name: '新建'
        },{
            id: 13,
            name: '编辑'
        },{
            id: 14,
            name: '复制'
        },{
            id: 15,
            name: '下载'
        },{
            id: 16,
            name: '打印'
        },{
            id: 17,
            name: '转发'
        }];
        $scope.treeOptions = {
            openedIcon: 'fa fa-group red2',
            closedIcon: 'fa fa-group red2',
            itemIcon: 'fa fa-user blue',
            check: {
                enable: true
            }
        };
        $scope.showLine = true;
        $scope.submit = function(){
            console.log($scope.$ebpTree.checkedItems);
            console.log(_.filter($scope.permissions,function(permission){
                return permission.$checked;
            }));
            $http.post('/services/dms/authority/'+file.id,{
                users: ['yao','shining'],
                permissions: _.pluck(_.filter($scope.permissions,function(permission){
                    return permission.$checked;
                }),'id')
            });
            $modalInstance.close();
        };

        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        };
    }]);
});
