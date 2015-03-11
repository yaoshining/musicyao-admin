/**
 * Created by 世宁 on 2014/12/21 0021.
 */
requirejs.config({
    baseUrl: './src',
    paths: {
        'styles': '../styles',
        'conf': '../conf',
        'plugins': '../plugins',
        'plugins-templates': '../plugins/templates/ebp-plugin-templates',
        'codemirror': '../bower_components/codemirror/lib/codemirror',
        'ui-codemirror': '../bower_components/angular-ui-codemirror/ui-codemirror',
        'flot': 'vendor/flot/flot',
        'plot': 'vendor/flot/pie',
        'fuelux': '../bower_components/fuelux/dist/js/fuelux.min',
        'moment': '../bower_components/moment/moment',
        'at-table': '../bower_components/at-table/dist/angular-table',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui',
        'jquery-nestable': '../bower_components/ng-nestable/lib/jquery.nestable',
        'jquery-mousewheel': '../bower_components/jquery-mousewheel/jquery.mousewheel.min',
        'jquery-knob': '../bower_components/aterrien/jQuery-Knob/dist/jquery.knob.min',
        'jvectormap': '../bower_components/jvectormap/jquery-jvectormap-2.0.1.min',
        'jvectormap-world': '../bower_components/jvectormap/tests/assets/jquery-jvectormap-world-mill-en',
        'jvectormap-cn': '../bower_components/jvectormap/tests/assets/jquery-jvectormap-cn-mill-en',
        'mCustomScrollbar': '../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar',
        'ng-nestable': '../bower_components/ng-nestable/src/angular-nestable',
        'ui-sortable': '../bower_components/angular-ui-sortable/sortable',
        'ui-calendar': '../bower_components/angular-ui-calendar/src/calendar',
        'fullcalendar': '../bower_components/fullcalendar/dist/fullcalendar.min',
        'fullcalendar-lang': '../bower_components/fullcalendar/dist/lang-all',
        'nprogress': '../bower_components/nprogress/nprogress',
        'stickUp': '../bower_components/stickUp/stickUp.min',
        'headroom': '../bower_components/headroom.js/dist/headroom.min',
        'angular-headroom': '../bower_components/headroom.js/dist/angular.headroom',
        'angular-xeditable': '../bower_components/angular-xeditable/dist/js/xeditable.min',
        'angular-wizard': '../bower_components/angular-wizard/dist/angular-wizard.min',
        'angular-ui-tree': '../bower_components/angular-ui-tree/dist/angular-ui-tree.min',
        'id3': '../bower_components/id3/id3.min',
        'dropzone': '../bower_components/dropzone/downloads/dropzone.min',
        'videogular': '../bower_components/videogular/videogular.min',
        'videogular-controls': '../bower_components/videogular-controls/controls.min',
        'videogular-poster': '../bower_components/videogular-poster/poster.min',
        'videogular-overlay-play': '../bower_components/videogular-overlay-play/overlay-play.min',
        'videogular-buffering': '../bower_components/videogular-buffering/buffering.min'
    },
    shim: {
        'codemirror': {
            deps: ['css!../bower_components/codemirror/lib/codemirror'],
            exports: 'CodeMirror'
        },
        'vendor/core/pretty': ['css!styles/vendor/prettify'],
        'plugins/core/ebp-prettify': ['vendor/core/pretty'],
        'plugins/core/ebp-stickup': ['jquery','stickUp'],
        'vendor/core/jsmind': ['css!styles/vendor/jsmind'],
        'ui-codemirror': ['codemirror','angular'],
        'fullcalendar': ['jquery','jquery-ui','css!../bower_components/fullcalendar/dist/fullcalendar'],
        'fullcalendar-lang': ['fullcalendar'],
        'ui-calendar': ['angular','fullcalendar','fullcalendar-lang'],
        'jquery-ui': ['jquery'],
        'jquery-mousewheel': ['jquery'],
        'jquery-knob': ['jquery'],
        'dropzone': ['css!../bower_components/dropzone/downloads/css/basic','css!../bower_components/dropzone/downloads/css/dropzone'],
        'mCustomScrollbar': ['jquery-mousewheel','css!../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar'],
        'jvectormap': ['jquery','css!../bower_components/jvectormap/jquery-jvectormap'],
        'jvectormap-world': ['jvectormap'],
        'jvectormap-cn': ['jvectormap'],
        'jquery-nestable': ['jquery'],
        'ng-nestable': ['jquery-nestable'],
        'angular-headroom': ['headroom'],
        'angular-xeditable': ['angular','css!../bower_components/angular-xeditable/dist/css/xeditable'],
        'angular-ui-tree': ['angular','css!styles/ebp/tree'],
        'angular-wizard': ['angular','css!../bower_components/angular-wizard/dist/angular-wizard.min'],
        'videogular': ['angular','angular-sanitize'],
        'videogular-controls': ['videogular'],
        'videogular-poster': ['videogular'],
        'videogular-overlay-play': ['videogular'],
        'videogular-buffering': ['videogular'],
        'stickUp': ['jquery'],
        'flot': ['jquery'],
        'plot': ['flot'],
        'fuelux': ['bootstrap','jquery','moment','css!styles/ebp/tree'],
        'ui-sortable': ['jquery-ui'],
        'nprogress': ['']
    },
    map: {
        '*': {
            'css': '/bower_components/require-css/css.min.js'
        }
    }
});
