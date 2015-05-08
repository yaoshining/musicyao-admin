/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','bootstrap','angular-ui-tree' ], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var treeModule = angular.module('ebp.tree',['ui.tree']);
    treeModule.constant('defaultTreeSettings',{
        dataSource: null,
        openedIcon: 'tree-minus',
        closedIcon: 'tree-plus',
        callbacks: {
            itemClicked: angular.noop,
            folderClicked: angular.noop,
            nodeAdd: function(model,callback){
                callback(model);
            }
        },
        check: {
            enable: false
        }
    }).directive('ebpTree',['$resource','$timeout',function($resource,$timeout){
        return {
            restrict: 'A',
            replace: false,
            transclude: true,
            scope: {
                'treeObject': '=',
                'treeData': '=',
                'dragEnabled': '=?',
                'showLine': '=?',
                'hideIcon': '=?',
                'treeOptions': '=',
                'renderTemplateUrl': '='
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        var treeOptions = scope.treeOptions;
                        if(angular.isUndefined(scope.treeData) ||
                          (angular.isArray(scope.treeData) && scope.treeData.length < 1)){
                            if(angular.isFunction(treeOptions.dataSource)){
                                treeOptions.dataSource(null,function(items){
                                    scope.treeData = items.data;
                                    if(item.data.length < 1){
                                        scope.collapsed = true;
                                    }
                                });
                            }
                            if(angular.isObject(treeOptions.dataSource)){
                                var url = treeOptions.dataSource.url;
                                var params = treeOptions.dataSource.params;
                                var NodeResource = $resource(url,params);
                                angular.forEach(params,function(val,key){
                                    if(val.charAt(0) === '@'){
                                        params[key] = undefined;
                                    }
                                });
                                var items = NodeResource.query(params,function(){
                                    scope.treeData = new Array();
                                    angular.forEach(items,function(item,index){
                                        $timeout(function(){
                                            scope.treeData.push(item);
                                        },500+ (100 * index));
                                    });
                                });
                            }
                        }
                    },
                    post: function postLink(scope, element, iAttrs, controller) {

                    }
                }
            },
            template: '<div ui-tree data-drag-enable="dragEnabled" ng-init="initTree(this)">' +
                '<ul ui-tree-nodes ng-model="treeData" class="tree" ng-class="{\'tree-line\': showLine}">' +
                    '<li ng-repeat="item in treeData" ui-tree-node data-collapsed="true" ebp-tree-node data-nodrag ng-include="renderTemplateUrl"' +
                        'ng-class="{\'tree-branch\': item.type==\'folder\',\'selected\':item.$selected,\'tree-item\': item.type==\'item\',\'tree-line\': showLine}"></li>'+
                '</ul>'+
            '</div>',
            controller: ['$scope','defaultTreeSettings',function($scope,defaults){
                this.$treeScope = $scope;
                $scope.treeObject && ($scope.treeObject = $scope);
                var treeOptions = $scope.$treeOptions = $.extend(true,{},defaults,$scope.treeOptions);
                var callbacks = $scope.$callbacks = treeOptions.callbacks;
                var checkSettings = $scope.$checkSettings = treeOptions.check;
                $scope.selectedNode = null;
                $scope.checkedItems = [];
                $scope.initTree = function($treeScope){
                    $scope.$treeScope = $treeScope;
                };
                $scope.toggleCheckMode = function(){
                    checkSettings.enable = !checkSettings.enable;
                };
                $scope.isSemiChecked = function(item){
                    if(!angular.isArray(item.children) || item.children.length < 1){
                        return false;
                    }
                    var hasChecked = _.find(item.children,function(child){
                        return child.$checked || $scope.isSemiChecked(child);
                    });
                    var hasUnchecked = _.find(item.children,function(child){
                        return !child.$checked;
                    });
                    if(hasChecked && hasUnchecked){
                        item.$checked = false;
                    }
                    return hasChecked && hasUnchecked;
                };
                $scope.expandAll = function(){
                    $scope.$treeScope.expandAll();
                };
                $scope.collapseAll = function(){
                    $scope.$treeScope.collapseAll();
                };
                $scope.$on('ebptree.node.select',function($event,nodeScope){
                    $scope.selectedNode && ($scope.selectedNode.$modelValue.$selected = false);
                    nodeScope.$modelValue.$selected = true;
                    $scope.selectedNode = nodeScope;
                });
            }]
        };
    }]).directive('ebpTreeNode',['$resource',function($resource){
        return {
            restrict: 'A',
            require: '^ebpTree',
            link: function(scope, element, iAttrs, controller){
                var $treeScope = controller.$treeScope;
                var treeOptions = $treeScope.$treeOptions;
                var callbacks = $treeScope.$callbacks;
                var nodeType = scope.$modelValue.type;
                var modelValue = scope.$modelValue;

                scope.showLoader = false;
                scope.collapsed = scope.collapsed;

                scope.$watch(function(){
                    return scope.collapsed;
                },function(val){
                    if(val === false){
                        if(nodeType === 'folder' && !hasChild()){
                            if(angular.isFunction(treeOptions.dataSource)){
                                treeOptions.dataSource(modelValue,function(items){
                                    modelValue.children = items.data;
                                    if(item.data.length < 1){
                                        scope.collapsed = true;
                                    }
                                });
                            }
                            if(angular.isObject(treeOptions.dataSource)){
                                var url = treeOptions.dataSource.url;
                                var params = treeOptions.dataSource.params;
                                var NodeResource = $resource(url,params);
                                angular.forEach(params,function(val,key){
                                    if(val.charAt(0) === '@'){
                                        params[key] = modelValue[val.substr(1)];
                                    }
                                });
                                var items = NodeResource.query(params,function(){
                                    modelValue.children = items;
                                });
                            }
                        }
                    }
                });

                var childNodes = scope.childNodes = scope.childNodes;

                var nodesMap = scope.$nodesMap = scope.$nodesMap;

                var parentNodeScope = scope.$parentNodeScope = scope.$parentNodeScope;

                var editItemHelper = scope.editItemHelper = {
                    enable: false,
                    item: {
                        type: 'folder',
                        iconClass: treeOptions.closedIcon
                    },
                    submit: function(){
                        if(!angular.isArray(modelValue.children)){
                            modelValue.children = new Array();
                        }
                        if(angular.isFunction(callbacks.nodeAdd)){
                            scope.showLoader = true;
                            callbacks.nodeAdd(editItemHelper.item,function(item){
                                modelValue.children.push(angular.extend({},item));
                                scope.showLoader = false;
                            });
                        }
                        editItemHelper.enable = false;
                    }
                };

                scope.showEditItemHelper = function(item){
                    angular.extend(editItemHelper.item,item);
                    editItemHelper.enable = true;
                };

                scope.dismissEditItemHelper = function(){
                    editItemHelper.enable = false;
                };

                scope.$childNodesScope = scope.$childNodesScope;

                scope.toggle = scope.toggle;

                scope.onCheckStateChange = function(){
                    if(modelValue.type==='folder'){
                        angular.forEach(childNodes(),function(node){;
                            node.$modelValue.$checked = modelValue.$checked;
                            node.onCheckStateChange();
                        });
                    }
                };

                scope.$watch(function(){
                    return modelValue.$checked;
                },function(val){
                    if(modelValue.type === 'item'){
                        if(val){
                            $treeScope.checkedItems.push(modelValue);
                        }else {
                            $treeScope.checkedItems.splice($treeScope.checkedItems.indexOf(modelValue),1);
                        }
                    }
                    if(parentNodeScope){
                        var unCheckAll = !_.find(nodesMap,function(node){
                            return node.$modelValue.$checked;
                        });
                        if(unCheckAll){
                            parentNodeScope.$modelValue.$checked = false;
                            return;
                        }
                        var checkAll = !_.find(nodesMap,function(node){
                            return !(node.$modelValue.$checked);
                        });
                        if(checkAll){
                            parentNodeScope.$modelValue.$checked = true;
                        }
                    }
                });

                element.on('click',function(event){
                    event.preventDefault();
                    event.stopPropagation();
                    if(nodeType === 'item' && angular.isFunction(callbacks.itemClicked)){
                        callbacks.itemClicked(modelValue);
                    }else if(nodeType === 'folder' && angular.isFunction(callbacks.folderClicked)){
                        if(angular.isFunction(callbacks.folderClicked)){
                            callbacks.folderClicked(modelValue,scope)
                        }
                    }
                    $treeScope.$broadcast('ebptree.node.select',scope);
                    scope.$apply();
                });
                var hasChild = scope.hasChild;
            }
        }
    }]);
});
