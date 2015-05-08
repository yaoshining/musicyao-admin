/**
 * Created by 世宁 on 2015/3/20 0020.
 */
define(['tables/module'],function(module){
    module.controller('EbpGridController',['$scope',function($scope){
        $scope.gridData = [];
        $scope.myCheckedItems = [];
        $scope.gridSettings = {
            countUrl: '/data/grid/count.json',
            dataSource: {
                url: '/data/grid/:maxSize/:pageNo/:id',
                params: {
                    id: '@id'
                }
            },
            height: 300,
            colNames: ['ID','Last Sales','Name','Stock','Ship Via','Notes'],
            colModel: [
                {name: 'id',index:'id',width: 105},
                {
                    name: 'lastSales',
                    index:'lastSales',
                    width: 269,
                    type: 'date',
                    sortable: false,
                    editable: true,
                    edittype: 'date'
                },
                {
                    name: 'name',
                    index:'name',
                    width: 187,
                    editable: true
                },
                {
                    name: 'stock',
                    index: 'stock',
                    width: 177,
                    editable: true,
                    edittype: 'checkbox'
                },
                {
                    name: 'shipVia',
                    index: 'shipVia',
                    width: 226,
                    editable: true,
                    edittype: 'select',
                    editoptions: {
                        value: {
                            FedEx: 'FedEx',
                            InTime: 'InTime',
                            TNT: 'TNT',
                            ARAMEX: 'ARAMEX'
                        }
                    }
                },
                {
                    name: 'notes',
                    index: 'notes',
                    width: 189,
                    editable: true,
                    edittype: 'textarea'
                }
            ],
            callbacks: {
                beforeItemSave: function(item){
                    console.log('before save: '+item);
                    return true;
                },
                afterItemSave: function(item){
                    console.log('after save: '+item);
                },
                beforeItemDelete: function(){

                }
            },
            checkedItems: $scope.myCheckedItems
        };
    }]);
});
