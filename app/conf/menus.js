/**
 * Created by 世宁 on 2014/12/19 0019.
 */
define(function(){
    return {
        '$root': [
            {name: 'Dashboard',sref: 'home',iconClass: 'fa-tachometer'},
            {name: 'Categories',sref: 'categories',iconClass: 'fa-envelope'},
            {name: 'Music',sref: 'music',iconClass: 'fa-music'},
            {name: 'MusicYao',sref: 'musicyao.home',iconClass: 'fa-music'},
            {name: 'UI & Elements',sref: 'UIAndElements',iconClass: 'fa-desktop'},
            {name: 'Widgets',sref: 'widgetsDemo',iconClass: 'fa-list-alt'},
            {name: 'Tasks',sref: 'worktile',iconClass: 'fa-tasks'},
            {name: 'Media',sref: 'mediaDemo',iconClass: 'fa-headphones'}
        ],
        'Categories': [
            {name: 'Languages',sref: 'categories.languages'}
        ],
        'Music': [
            {name: 'Upload',sref: 'music.upload'}
        ],
        'UI & Elements': [
            {name: 'Bootstrap',sref: 'UIAndElements.bootstrap'},
            {name: 'TreeView',sref: 'UIAndElements.treeView'},
            {name: 'Tables',sref: 'UIAndElements.tables'},
            {name: 'Nestable List',sref: 'UIAndElements.nestable'},
            {name: 'Calendar',sref: 'UIAndElements.calendar'},
            {name: 'Maps',sref: 'UIAndElements.maps'},
            {name: 'MindMap',sref: 'UIAndElements.mindMap'}
        ],
        'Media': [
            {name: 'AudioPlayers',sref: 'mediaDemo.audioPlayer'}
        ]
    };
});
