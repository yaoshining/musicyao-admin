/**
 * Created by 世宁 on 2014/12/30 0030.
 */
define(['UIAndElements/module'],function(module){
    "use strict";
    module.controller('NestableController',['$scope',function($scope){
        $scope.items1 = [
            {
                item: {
                    name: 'item1',
                    iconClass: 'fa-exclamation-triangle orange2'
                }, // this object will be referenced as the $item on scope
                children: []
            },
            {
                item: {
                    name: 'item2'
                },
                children: [
                    {
                        item: {
                            name: 'item3',
                            tooltip: {
                                text: 'Change&nbsp;Date'
                            }
                        },
                        children: []
                    },
                    {
                        item: {
                            name: 'item4',
                            color: 'orange',
                            description: 'with some description'
                        },
                        children: []
                    },
                    {
                        item: {
                            name: 'item5'
                        },
                        children: [
                            {
                                item: {
                                    name: 'item6',
                                    className: 'item-orange'
                                }
                            },
                            {
                                item: {
                                    name: 'item7',
                                    className: 'item-red'
                                }
                            },
                            {
                                item: {
                                    name: 'item8',
                                    className: 'item-blue2'
                                }
                            }
                        ]
                    },
                    {
                        item: {
                            name: 'item9'
                        }
                    },
                    {
                        item: {
                            name: 'item10'
                        }
                    }
                ]
            },
            {
                item: {
                    name: 'item11'
                }
            },
            {
                item: {
                    name: 'item12'
                }
            }
        ];
        $scope.items2 = [
            {
                item: {
                    name: 'item1'
                }, // this object will be referenced as the $item on scope
                children: []
            },
            {
                item: {
                    name: 'item2'
                },
                children: [
                    {
                        item: {
                            name: 'item3'
                        },
                        children: []
                    },
                    {
                        item: {
                            name: 'item4'
                        },
                        children: []
                    },
                    {
                        item: {
                            name: 'item5'
                        },
                        children: [
                            {
                                item: {
                                    name: 'item6'
                                }
                            },
                            {
                                item: {
                                    name: 'item7'
                                }
                            },
                            {
                                item: {
                                    name: 'item8'
                                }
                            }
                        ]
                    },
                    {
                        item: {
                            name: 'item9'
                        }
                    },
                    {
                        item: {
                            name: 'item10'
                        }
                    }
                ]
            },
            {
                item: {
                    name: 'item11'
                }
            },
            {
                item: {
                    name: 'item12'
                }
            }
        ];
        $scope.tooltipClicked = function($event){
            $event.preventDefault();
            $event.stopPropagation()
        };
        $scope.tooltipHtml = function(tooltip){
            return '<div>'+tooltip.text+'</div>';
        };
    }]);
});
