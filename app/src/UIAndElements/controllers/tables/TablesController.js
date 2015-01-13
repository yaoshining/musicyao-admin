/**
 * Created by 世宁 on 2014/12/30 0030.
 */
define(['UIAndElements/module'],function(module){
    "use strict";
    module.controller('TablesController',['$scope',function($scope){
        $scope.people = [{"index":1,"name":"Kristin Hill","email":"kristin@hill.com","$$hashKey":"010"},{"index":2,"name":"Valerie Francis","email":"valerie@francis.com","$$hashKey":"011"},{"index":3,"name":"Bob Abbott","email":"bob@abbott.com","$$hashKey":"012"},{"index":4,"name":"Greg Boyd","email":"greg@boyd.com","$$hashKey":"013"},{"index":5,"name":"Peggy Massey","email":"peggy@massey.com","$$hashKey":"014"},{"index":6,"name":"Janet Bolton","email":"janet@bolton.com"},{"index":7,"name":"Maria Liu","email":"maria@liu.com","$$hashKey":"02E"},{"index":8,"name":"Anne Warren","email":"anne@warren.com","$$hashKey":"02I"},{"index":9,"name":"Keith Steele","email":"keith@steele.com"},{"index":10,"name":"Jerome Lyons","email":"jerome@lyons.com"},{"index":11,"name":"Jacob Stone","email":"jacob@stone.com","$$hashKey":"02J"},{"index":12,"name":"Marion Dunlap","email":"marion@dunlap.com","$$hashKey":"01J"},{"index":13,"name":"Stacy Robinson","email":"stacy@robinson.com","$$hashKey":"01I"},{"index":14,"name":"Luis Chappell","email":"luis@chappell.com","$$hashKey":"01H"},{"index":15,"name":"Kimberly Horne","email":"kimberly@horne.com","$$hashKey":"01G"},{"index":16,"name":"Andy Smith","email":"andy@smith.com","$$hashKey":"01F"}];
        $scope.config = {
            itemsPerPage: 5,
            fillLastPage: true
        };
    }]);
});
