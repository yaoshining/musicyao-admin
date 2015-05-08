/**
 * Created by 世宁 on 2015/3/20 0020.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','interact','../ext/ebp-nicescroll','./ebp-dialog'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular,interact){
    'use strict';
    var CheckedProvider = function(checkedItems,$scope){
        this.refreshCheckedItems = function(){
            checkedItems.splice(0,checkedItems.length);
            angular.forEach($scope.gridData,function(item){
                if(item.$checked){
                    checkedItems.push(item);
                }
            });
        }
    };
    var ItemAddHandler = function(scope){
        var self = this;
        self.items = [];
        self.dismiss = function(index){
            self.items.splice(index,1);
        };
        self.submit = function(item,index){
            if(scope.callbacks.beforeItemSave(item)){
                scope.loader.loading = true;
                scope.GridResource.save(item).$promise.then(function(savedItem){
                    scope.callbacks.afterItemSave(savedItem);
                    scope.loader.loading = true;
                },function(){
                    console.error('Save item is not success.');
                    scope.loader.loading = false;
                });
                scope.gridData.unshift(item);
                self.dismiss(index);
                //scope.refresh();
            }
        };
    };
    var module = angular.module('ebp.grid',['ebp.niceScroll','ebp.dialog']);
    module.constant('ebpGridDefaults',{
        countUrl: undefined,
        dataSource: undefined,
        height: 300,
        colNames: undefined,
        colModel: [],
        enableCellEdit: false,
        callbacks: {
            beforeItemSave: function(item){
                return true;
            },
            afterItemSave: function(item){

            },
            beforeItemUpdate: function(item){
                return true;
            },
            afterItemUpdate: function(item){

            }
        },
        checkedItems: []
    }).constant('ebpGridColModelDefaults',{
        name: '',
        index: null,
        type: 'string',
        width: undefined,
        sortable: true,
        editable: false,
        edittype: 'text'  //Defines the edit type for inline and form editing Possible values: text, textarea, select, checkbox, password, button, image and file.
    }).filter('edpGridColumn',['$filter',function($filter){
        return function(item,col){
            var value = item[col.name];
            var colText = '';
            switch (col.type){
                case 'date': colText = $filter('date')(value,'yyyy-MM-dd');break;
                default: colText = value
            }
            return colText;
        };
    }]).directive('dateColumn',['$filter',function($filter){
        return {
            require: 'ngModel',
            link: function(scope,element,attrs,ngModel){
                function formatter(value) {
                    return new Date(value);
                }

                function parser(value) {
                    return new Date(value).getTime();
                }

                ngModel.$formatters.push(formatter);
                ngModel.$parsers.push(parser);
            }
        }
    }]).directive('ebpGrid',['$resource','ebpGridDefaults','ebpGridColModelDefaults',
        function($resource,ebpGridDefaults,ebpGridColModelDefaults){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                gridData: '=',
                gridOptions: '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        scope.gridElement = element;
                    }
                }
            },
            templateUrl: 'ebpGrid.tpl.html',
            controller: ['$scope','$element','$timeout',function($scope,$element,$timeout){
                var self = this;
                var gridOptions = angular.extend({},ebpGridDefaults,$scope.gridOptions);
                gridOptions.callbacks = $.extend(true,{},ebpGridDefaults.callbacks,$scope.gridOptions.callbacks);
                var callbacks = $scope.callbacks = gridOptions.callbacks;
                var checkedProvider = new CheckedProvider($scope.gridOptions.checkedItems,$scope);
                var checkColumnWidth = 35,
                    subGridColumnWidth = 29,
                    editColumnWidth = 80;
                $scope.resizeMark = {
                    display: 'none',
                    top: 40+'px',
                    left: 0,
                    height: ($element.innerHeight() - $element.find('.ebp-grid-titlebar').outerHeight() - $element.find('.ebp-grid-pager').outerHeight()) + 'px'
                };
                var itemAddHandler = $scope.itemAddHandler = new ItemAddHandler($scope);
                $scope.viewModel = {
                    gridHeight: gridOptions.height || 300,
                    gridWidth: '100%',
                    checkedAll: false,
                    columns: []
                };
                $scope.addNewRow = function(){
                    var nice = $scrollElement.getNiceScroll(0);
                    nice.doScrollTop(0,1000);
                    itemAddHandler.items.unshift({});
                };
                angular.forEach(gridOptions.colModel,function(model,index){
                    model = $.extend(true,{},ebpGridColModelDefaults,model);
                    if(angular.isArray(gridOptions.colNames) && gridOptions.colNames[index]){
                        model.label = gridOptions.colNames[index];
                    }else {
                        model.label = model.name;
                    }
                    if(!model.index){
                        model.index = model.name;
                    }
                    if(model.name === 'id'){
                        model.key = true;
                    }
                    model.sortable = angular.isUndefined(model.sortable)?true:model.sortable;
                    $scope.viewModel.columns.push(model);
                    $scope.columnsWidth += model.width;
                });
                $scope.loader = {
                    loading: true
                };
                var sorting = $scope.sorting = {
                    by: undefined,
                    order: undefined
                };
                var $scrollElement = $scope.$scrollElement = $element.find('.ebp-nicescroll');
                $scrollElement.on('scroll',function(){
                    var nice = $scrollElement.getNiceScroll();
                    var left = 0-nice[0].getScrollLeft();
                    $element.find('.ebp-grid-htable').css('transform','translate3d('+left+'px,0,0)');
                });
                $scope.toggleCheckAll = function(checkState){
                    angular.forEach($scope.gridData,function(item){
                        item.$checked = checkState;
                    });
                    checkedProvider.refreshCheckedItems();
                };
                $scope.onItemCheckChange = function(){
                    checkedProvider.refreshCheckedItems();
                    var hasChecked = _.find($scope.gridData,function(item){
                        return item.$checked
                    });
                    var hasUnChecked = _.find($scope.gridData,function(item){
                        return !item.$checked
                    });
                    $scope.viewModel.checkedAll = hasChecked && !hasUnChecked;
                };
                $scope.sortData = function(col){
                    if(!sorting.order || sorting.order==='desc' || sorting.by!==col.index){
                        sorting.order = 'asc';
                    }else {
                        sorting.order = 'desc';
                    }
                    sorting.by = col.index;
                    pager.pageNo = 1;
                    loadData();
                };
                var pager = $scope.pager = {
                    maxSize: 10,
                    pageNo: 1,
                    quantity: 0
                };
                $scope.$watch('pager.maxSize',function(newVal,oldVal){
                    var index = oldVal*(pager.pageNo-1)+1;
                    pager.pageNo = Math.ceil(index/newVal);
                    loadData();
                });
                var GridResource = $scope.GridResource = $resource(gridOptions.dataSource.url,
                    gridOptions.dataSource.params,{
                        'query': {
                            cache: true,
                            method: 'GET',
                            isArray:true
                        },
                        'update': {
                            method:'PUT'
                        }
                    });
                var loadData = $scope.loadData = function(){
                    $scope.loader.loading = true;
                    GridResource.query({
                        maxSize: pager.maxSize,
                        pageNo: pager.pageNo,
                        orderby: sorting.by,
                        order: sorting.order
                    },function(data){
                        $timeout(function(){
                            $scope.gridData = data;
                            $scope.loader.loading = false;
                            $scrollElement.getNiceScroll().resize();
                        },2000);
                    });
                }
            }]
        }
    }]).directive('ebpGridHeaderCell',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            require: '^ebpGrid',
            scope: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var width = scope.col.width;
                        interact(element[0]).resizable({
                            edges: { left: false, right: true, bottom: false, top: false }
                        }).on('resizemove', function (event) {
                            scope.$apply(function(){
                                var relativeX = event.pageX - scope.gridElement.offset().left;
                                scope.resizeMark.left = relativeX+'px';
                                scope.resizeMark.height = (scope.gridElement.innerHeight() - scope.gridElement.find('.ebp-grid-titlebar').outerHeight() - scope.$parent.gridElement.find('.ebp-grid-pager').outerHeight()) + 'px';
                                scope.resizeMark.display = 'block';

                                width = event.rect.width;
                            });
                        }).on('resizeend', function (event) {
                            scope.$parent.$apply(function(){
                                scope.viewModel.gridWidth = scope.gridElement.find('.ebp-grid-btable').width() + (width - scope.col.width);
                                scope.col.width = width;
                                scope.$scrollElement.getNiceScroll().resize();
                                scope.resizeMark.display = 'none';
                            });
                        });
                    }
                }
            }
        }
    }]).directive('ebpGridRow',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            require: '^ebpGrid',
            scope: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var rowEditHelper = scope.rowEditHelper =  {
                            isEditing: false,
                            item: angular.extend({},scope.item),
                            dismiss: function(){
                                scope.$broadcast('ebp.grid.rowEdit.dismiss');
                                rowEditHelper.isEditing = false;
                            },
                            submit: function(){
                                if(angular.equals(scope.item,rowEditHelper.item)){
                                    rowEditHelper.dismiss();
                                    return;
                                }
                                if(scope.callbacks.beforeItemUpdate(rowEditHelper.item)){
                                    scope.loader.loading = true;
                                    scope.GridResource.update(rowEditHelper.item).$promise.then(function(){
                                        scope.callbacks.afterItemUpdate(scope.item);
                                        angular.extend(scope.item,rowEditHelper.item);
                                        rowEditHelper.dismiss();
                                        scope.loader.loading = false;
                                    },function(){
                                        console.error('Update item is not success.');
                                        rowEditHelper.dismiss();
                                        scope.loader.loading = false;
                                    });
                                }
                            }
                        };
                        scope.editRow = function(){
                            scope.$broadcast('ebp.grid.rowEdit.open');
                        };
                    }
                }
            }
        }
    }]).directive('ebpGridCell',['$filter',function($filter){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            require: '^ebpGrid',
            scope: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        var cellEditHelper = scope.cellEditHelper = {
                            isEditing: false
                        };
                        scope.$on('ebp.grid.rowEdit.open',function($event){
                            cellEditHelper.isEditing = true;
                            scope.rowEditHelper.isEditing = true;
                        });
                        scope.$on('ebp.grid.rowEdit.dismiss',function($event){
                            cellEditHelper.isEditing = false;
                            scope.rowEditHelper.isEditing = false;
                        });
                    }
                }
            }
        }
    }]).directive('ebpGridPager',['$http','$cacheFactory',function($http,$cacheFactory){
        return {
            restrict: "AC",
            replace: false,
            transclude: false,
            require: '^ebpGrid',
            scope: false,
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        $http.get(scope.gridOptions.countUrl).success(function(data){
                            scope.pager.quantity = data.quantity;
                            scope.pager.totalPage = scope.pager.quantity/scope.pager.maxSize;
                        });
                        var getTotalPage = scope.getTotalPage = function(){
                            return Math.ceil(scope.pager.quantity/scope.pager.maxSize);
                        };
                        scope.nextPage = function(){
                            scope.pager.pageNo = scope.pager.pageNo + 1;
                            scope.loadData();
                        };
                        scope.previousPage = function(){
                            if(scope.pager.pageNo === 1){
                                return;
                            }
                            scope.pager.pageNo = scope.pager.pageNo - 1;
                            scope.loadData();
                        };
                        scope.firstPage = function(){
                            if(scope.pager.pageNo === 1){
                                return;
                            }
                            scope.pager.pageNo = 1;
                            scope.loadData();
                        };
                        scope.lastPage = function(){
                            scope.pager.pageNo = getTotalPage();
                            scope.loadData();
                        };
                        scope.refresh = function(){
                            var $httpDefaultCache = $cacheFactory.get('$http');
                            $httpDefaultCache.removeAll();
                            scope.loadData();
                        };
                        if(angular.isArray(scope.gridData) && scope.gridData.length>0){

                        } else {
                            scope.loadData();
                        }
                    }
                }
            }
        }
    }]);
});
