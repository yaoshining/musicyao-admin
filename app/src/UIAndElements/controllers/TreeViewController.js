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
        $scope.treeData2 = [
            {
                name: 'Pictures',
                type: 'folder',
                'iconClass':'red',
                children: [
                    {
                        name: 'Wallpapers',
                        type: 'folder',
                        'iconClass':'pink',
                        children: [
                            {name: 'wallpaper1.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'wallpaper2.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'wallpaper3.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'wallpaper4.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'others', type: 'folder',iconClass: 'green'}
                        ]
                    },
                    {
                        name: 'Camera',
                        type: 'folder',
                        'iconClass':'pink',
                        children: [
                            {name: 'photo1.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'photo2.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'photo3.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'photo4.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'photo5.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'},
                            {name: 'photo6.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'}
                        ]
                    }
                ]
            }	,
            {
                name: 'Music',
                type: 'folder',
                'iconClass':'orange',
                children: [
                    {name: 'song1.ogg', type: 'item',iconClass:'fa fa-music blue no-border'},
                    {name: 'song2.ogg', type: 'item',iconClass:'fa fa-music blue no-border'},
                    {name: 'song3.ogg', type: 'item',iconClass:'fa fa-music blue no-border'},
                    {name: 'song4.ogg', type: 'item',iconClass:'fa fa-music blue no-border'},
                    {name: 'song5.ogg', type: 'item',iconClass:'fa fa-music blue no-border'}
                ]
            }	,
            {
                name: 'Video',
                type: 'folder',
                'iconClass':'blue',
                children: [
                    {name: 'movie1.avi', type: 'item',iconClass:'fa fa-film blue no-border'},
                    {name: 'movie2.avi', type: 'item',iconClass:'fa fa-film blue no-border'},
                    {name: 'movie3.avi', type: 'item',iconClass:'fa fa-film blue no-border'},
                    {name: 'movie4.avi', type: 'item',iconClass:'fa fa-film blue no-border'},
                    {name: 'movie5.avi', type: 'item',iconClass:'fa fa-film blue no-border'}
                ]
            }	,
            {
                name: 'Documents',
                type: 'folder',
                'iconClass':'green',
                children: [
                    {name: 'document1.pdf', type: 'item',iconClass: 'fa fa-file-pdf-o grey no-border'},
                    {name: 'document2.doc', type: 'item',iconClass: 'fa fa-file-word-o grey no-border'},
                    {name: 'document3.doc', type: 'item',iconClass: 'fa fa-file-word-o grey no-border'},
                    {name: 'document4.pdf', type: 'item',iconClass: 'fa fa-file-pdf-o grey no-border'},
                    {name: 'document5.doc', type: 'item',iconClass: 'fa fa-file-word-o grey no-border'}
                ]
            },
            {
                name: 'Backup',
                type: 'folder',
                children: [
                    {name: 'backup1.zip', type: 'item',iconClass: 'fa fa-archive brown no-border'},
                    {name: 'backup2.zip', type: 'item',iconClass: 'fa fa-archive brown no-border'},
                    {name: 'backup3.zip', type: 'item',iconClass: 'fa fa-archive brown no-border'},
                    {name: 'backup4.zip', type: 'item',iconClass: 'fa fa-archive brown no-border'}
                ]
            }	,
            {name: 'ReadMe.txt', type: 'item',iconClass: 'fa fa-file-text grey no-border'},
            {name: 'Manual.html', type: 'item',iconClass: 'fa fa-book blue no-border'}
        ];
        $scope.treeOptions2 = {
            dataSource: function(parentData,callback){
                $timeout(function(){
                    callback({
                        data: [
                            {name: 'wallpaper6.jpg', type: 'item',iconClass: 'fa fa-picture-o green no-border'}
                        ]
                    });
                },1000);
            },
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
