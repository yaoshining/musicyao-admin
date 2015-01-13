/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','bootstrap','fuelux' ], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var treeModule = angular.module('ebp.tree',[]);
    treeModule.directive('ebpTree',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                openedIconClass: '@',
                closedIconClass: '@'
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        element.tree({
                            dataSource: function(parentData, callback){
                                setTimeout(function () {
                                    callback({ data: [
                                        {
                                            "name": "Ascending and Descending",
                                            "type": "folder",
                                            "attr": {
                                                "id": "folder1",
                                                "cssClass": "example-tree-class"
                                            }
                                        },
                                        {
                                            "name": "Sky and Water I (with custom icon)",
                                            "type": "item",
                                            "attr": {
                                                "id": "item1",
                                                "data-icon": "glyphicon glyphicon-file"
                                            }
                                        },
                                        {
                                            "name": "Drawing Hands",
                                            "type": "folder",
                                            "attr": {
                                                "id": "folder2" } },
                                        {
                                            "name": "Waterfall",
                                            "type": "item",
                                            "attr": {
                                                "id": "item2"
                                            }
                                        },
                                        {
                                            "name": "Belvedere",
                                            "type": "folder",
                                            "attr": {
                                                "id": "folder3"
                                            }
                                        },
                                        {
                                            "name": "Relativity (with custom icon)",
                                            "type": "item",
                                            "attr": {
                                                "id": "item3",
                                                "data-icon": "glyphicon glyphicon-picture"
                                            }
                                        },
                                        {
                                            "name": "House of Stairs",
                                            "type": "folder",
                                            "attr": {
                                                "id": "folder4"
                                            }
                                        },
                                        {
                                            "name": "Convex and Concave",
                                            "type": "item",
                                            "attr": {
                                                "id": "item4"
                                            }
                                        }
                                    ]});
                                }, 400);
                            },
                            folderSelect: false
                        }).on('opened.fu.tree',function(event,branch){
                            element.find('.glyphicon-folder-open').addClass(scope.openedIconClass).removeClass(scope.closedIconClass);
                        }).on('closed.fu.tree',function(event,branch){
                            element.find('.glyphicon-folder-close').addClass(scope.closedIconClass).removeClass(scope.openedIconClass);
                        });
                    }
                }
            }
        };
    }]);
});
