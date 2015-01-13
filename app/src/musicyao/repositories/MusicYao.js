define(['musicyao/module'] , function (module) {
    module.factory('MusicYao' , ['$resource' , function ($resource) {
        return $resource("/MusicYao/music/random/:count",{count: '@count'});
    }]);
});
