var allTestFiles = [];
var TEST_REGEXP = /app\/src\/\w*\/\w*\.spec\.js$/;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

requirejs.config({
    // Karma serves files from '/app'
    baseUrl: 'base/app/src',

    paths: {
        'angular': '../bower_components/angular/angular',
        /*require angular mocks for testing*/
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        /*require angular resource for easily handling sending and receiving request*/
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        /*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        /*require angular for better handling and binding controller*/
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-ui-tinymce': '../bower_components/angular-ui-tinymce/src/tinymce',
        'angular-translate': '../bower_components/angular-translate/angular-translate',
        'angular-translate-static': '../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'ng-file-upload-shim': '../bower_components/ng-file-upload-shim/ng-file-upload-shim',
        'ng-file-upload': '../bower_components/ng-file-upload/ng-file-upload',
        /*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
        'ui-bootstrap-tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        /*require jquery*/
        'jquery': '../bower_components/jquery/dist/jquery',
        'kreate': '../bower_components/kreate/dist/kreate.min',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui',
        'ui-autocomplete': '../bower_components/ui-autocomplete/autocomplete',
        /*require bootstrap.js to make bootstrap components work*/
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'bootstrap-typeahead': '../bower_components/bootstrap3-typeahead/bootstrap3-typeahead',
        /*--insert code tag--do not remove*/
        'underscore': '../bower_components/underscore/underscore',
        'oclazyload': '../bower_components/oclazyload/dist/ocLazyLoad',
        'tinymce': '../bower_components/tinymce/tinymce.min',
        'tinycon': '../bower_components/tinycon/tinycon.min',
        'plugins': '../plugins'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jquery','underscore','ng-file-upload-shim'] },
        'angular-mocks': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-cookies': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-ui-tinymce': ['angular','tinymce'],
        'angular-sanitize': ['angular'],
        'angular-translate': ['angular'],
        'angular-translate-static': ['angular','angular-translate'],
        'oclazyload': ['angular'],
        'ui-bootstrap-tpls': ['angular'],
        'bootstrap': ['jquery'],
        'bootstrap-typeahead': ['bootstrap'],
        'kreate': ['jquery'],
        'jquery-ui': ['jquery'],
        'ui-autocomplete': ['jquery-ui','angular'],
        'ng-file-upload': ['angular']
    },

    // ask Require.js to load these files (all our tests)
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
