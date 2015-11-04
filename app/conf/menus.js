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
            {name: 'Documents',sref: 'documents',iconClass: 'fa-file-text-o'},
            {name: 'Layouts',sref: 'layouts',iconClass: 'fa-file-text-o'},
            {name: 'UI & Elements',sref: 'UIAndElements',iconClass: 'fa-desktop'},
            {name: 'Forms',sref: 'forms',iconClass: 'fa-pencil-square-o'},
            {name: 'Charts',sref: 'charts',iconClass: 'fa-pencil-square-o'},
            {name: 'Tables',sref: 'tables',iconClass: 'fa-table'},
            {name: 'Widgets',sref: 'widgetsDemo',iconClass: 'fa-list-alt'},
            {name: 'Polymer',sref: 'polymer',polymerIcon: 'polymer'},
            {name: 'Experiments',sref: 'experiments',iconClass: 'fa-flask'},
            {name: 'Tasks',sref: 'worktile',iconClass: 'fa-tasks'},
            {name: 'Media',sref: 'mediaDemo',iconClass: 'fa-headphones'},
            {name: 'Modal',sref: 'modal',iconClass: 'fa-headphones'}
        ],
        'Categories': [
            {name: 'Languages',sref: 'categories.languages'}
        ],
        'Music': [
            {name: 'Upload',sref: 'music.upload'}
        ],
        'UI & Elements': [
            {name: 'Bootstrap',sref: 'UIAndElements.bootstrap'},
            {name: 'Typography',sref: 'UIAndElements.typography'},
            {name: 'Elements',sref: 'UIAndElements.elements'},
            {name: 'Buttons1',sref: 'UIAndElements.buttons1'},
            {name: 'Buttons2',sref: 'UIAndElements.buttons2'},
            {name: 'Icons',sref: 'UIAndElements.icons'},
            {name: 'TreeView',sref: 'UIAndElements.treeView'},
            {name: 'Tables',sref: 'UIAndElements.tables'},
            {name: 'Nestable List',sref: 'UIAndElements.nestable'},
            {name: 'Calendar',sref: 'UIAndElements.calendar'},
            {name: 'Maps',sref: 'UIAndElements.maps'},
            {name: 'MindMap',sref: 'UIAndElements.mindMap'},
            {name: 'DatePicker',sref: 'UIAndElements.datepicker'}
        ],
        'Forms': [
            {name: 'Form Elements',sref: 'forms.elements'}
        ],
        'Charts': [
            {name: 'Gantt', sref: 'charts.gantt'}
        ],
        'Tables': [
            {name: 'EbpGrid',sref: 'tables.ebpGrid'}
        ],
        'Media': [
            {name: 'AudioPlayers',sref: 'mediaDemo.audioPlayer'}
        ],
        'Polymer': [
            {name: 'Icons',sref: 'polymer.icons'},
            {name: 'Buttons',sref: 'polymer.buttons'},
            {name: 'Dialog',sref: 'polymer.dialog'},
            {name: 'Progress',sref: 'polymer.progress'}
        ],
        'Experiments': [
            {name: 'Rain',sref: 'experiments.rainyday'},
            {name: 'Ripples',sref: 'experiments.ripples'}
        ]
    };
});
