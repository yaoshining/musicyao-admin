define(['angular','conf/_modules'],function(angular,_modules){
    var modules = {
        'ebpTreePlugin': [
            'plugins/core/ebp-tree'
        ],
        'ebpYzkFontPlugin': [
            'plugins/core/ebp-youziku'
        ],
        'ebpJsMindPlugin': [
            'plugins/charts/mindmap/ebp-jsmind'
        ],
        'ngNestable': [
            'ng-nestable'
        ],
        'worktile': [
            'css!styles/ebp/worktile',
            'worktile/module',
            'worktile/controllers/SidebarController',
            'worktile/controllers/WorktileController'
        ],
        'mediaModule' : [
            'media/module'
        ],
        'mediaModule.audioPlayer': [
            'media/controllers/audio/AudioPlayerDemoController',
            'jquery-knob'
        ],
        'emailModule': [
            'email/module',
            'email/controllers/emailController',
            'email/services/emailService',
            'email/repositories/Email',
            'css!styles/email/email',
            'css!styles/jquery-ui/jquery-ui'
        ]
    };
    angular.forEach(_modules,function(e){
        _.extend(modules,e);
    });
    return modules;
});
