/**
 * Created by yao on 14-12-25.
 */
define(['UIAndElements/module'],function(module){
    module.controller('TreeViewController',['$sce','$scope','$timeout','$state',function($sce,$scope,$timeout,$state){
        $scope.$ebpTree2 = {};
        $scope.getSelectedNode = function(tree){
            if(!tree.selectedNode){
                alert('Please select a node.');
                return;
            }
            alert(tree.selectedNode.$modelValue.name+' is selected!');
        };
        $scope.addFolder = function(tree){
            if(!tree.selectedNode || tree.selectedNode.$modelValue.type !== 'folder'){
                alert('Please select a folder.');
                return;
            }
            tree.selectedNode.showEditItemHelper({
                type: 'folder',
                iconClass: 'fa fa-folder green',
                name: ''
            });
        };
        $scope.expandAll = function(tree){
            tree.expandAll();
        };
        $scope.collapseAll = function(tree){
            tree.collapseAll();
        };
        $scope.treeData1 = [
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
        $scope.treeOptions1 = {
            openedIcon: 'tree-minus',
            closedIcon: 'tree-plus',
            itemIcon: 'fa fa-times'
        };
        $scope.treeData2 = [];
        $scope.treeOptions2 = {
            dataSource: {
                url: '/data/:parent/treeData.json',
                params: {
                    parent: '@type',
                    name: '@name'
                }
            },
            //dataSource: function(parentData,callback){
            //    $timeout(function(){
            //        callback({
            //            data: [
            //                {name: 'wallpaper6.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'}
            //            ]
            //        });
            //    },1000);
            //},
            openedIcon: 'fa fa-folder-open',
            closedIcon: 'fa fa-folder',
            callbacks: {
                itemClicked: function(model){
                    console.log(model.name+' is clicked.');
                    //model.iconClass = 'fa fa-video-camera blue no-border bigger-150';
                },
                folderClicked: function(model){
                    console.log(model.type+' '+model.name+' is clicked.');
                },
                nodeAdd: function(model,callback){
                    $timeout(function(){
                        model.name = 'server added item';
                        callback(model);
                    },1000);
                }
            },
            check: {
                enable: false
            }
        };
    }]);
});
