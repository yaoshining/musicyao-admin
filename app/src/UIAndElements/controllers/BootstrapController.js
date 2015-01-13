/**
 * Created by yao on 14-12-25.
 */
define(['UIAndElements/module','nprogress'],function(module,NProgress){
    'use strict';
    module.controller('BootstrapController',['$sce','$scope','$timeout','$state',function($sce,$scope,$timeout,$state){
        $scope.pluginItems = [
            generateItem({
                name: 'Accordion',
                markupUrl: 'src/UIAndElements/views/accordion/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/AccordionDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/accordion/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/AccordionDemoController.js'
            }),
            generateItem({
                name: 'Alert',
                markupUrl: 'src/UIAndElements/views/alert/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/AlertDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/alert/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/AlertDemoController.js'
            }),
            generateItem({
                name: 'Buttons',
                markupUrl: 'src/UIAndElements/views/buttons/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/ButtonsDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/buttons/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/ButtonsDemoController.js'
            }),
            generateItem({
                name: 'Carousel',
                markupUrl: 'src/UIAndElements/views/carousel/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/CarouselDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/carousel/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/CarouselDemoController.js'
            }),
            generateItem({
                name: 'Collapse',
                markupUrl: 'src/UIAndElements/views/collapse/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/CollapseDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/collapse/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/CollapseDemoController.js'
            }),
            generateItem({
                name: 'Datepicker',
                markupUrl: 'src/UIAndElements/views/datepicker/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/DatepickerDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/datepicker/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/DatepickerDemoController.js'
            }),
            generateItem({
                name: 'Dropdown',
                markupUrl: 'src/UIAndElements/views/dropdown/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/DropdownDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/dropdown/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/DropdownDemoController.js'
            }),
            generateItem({
                name: 'Modal',
                markupUrl: 'src/UIAndElements/views/modal/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/ModalDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/modal/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/ModalDemoController.js'
            }),
            generateItem({
                name: 'Pagination',
                markupUrl: 'src/UIAndElements/views/pagination/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/PaginationDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/pagination/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/PaginationDemoController.js'
            }),
            generateItem({
                name: 'Popover',
                markupUrl: 'src/UIAndElements/views/popover/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/PopoverDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/popover/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/PopoverDemoController.js'
            }),
            generateItem({
                name: 'Progressbar',
                markupUrl: 'src/UIAndElements/views/progressbar/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/ProgressbarDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/progressbar/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/ProgressbarDemoController.js'
            }),
            generateItem({
                name: 'Rating',
                markupUrl: 'src/UIAndElements/views/rating/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/RatingDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/rating/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/RatingDemoController.js'
            }),
            generateItem({
                name: 'Tabs',
                markupUrl: 'src/UIAndElements/views/tabs/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/TabsDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/tabs/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/TabsDemoController.js'
            }),
            generateItem({
                name: 'Timepicker',
                markupUrl: 'src/UIAndElements/views/timepicker/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/TimepickerDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/timepicker/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/TimepickerDemoController.js'
            }),
            generateItem({
                name: 'Tooltip',
                markupUrl: 'src/UIAndElements/views/tooltip/markup.html',
                deps: [
                    'UIAndElements/controllers/bootstrap/TooltipDemoController'
                ],
                descriptionUrl: 'src/UIAndElements/views/tooltip/description.html',
                javascriptUrl: 'src/UIAndElements/controllers/bootstrap/TooltipDemoController.js'
            })
        ];
        function generateItem(config) {
            angular.isArray(config.deps)?
                config.deps = config.deps.concat('css!../bower_components/codemirror/theme/eclipse',
                    '../bower_components/codemirror/mode/xml/xml','../bower_components/codemirror/mode/javascript/javascript'):
                config.deps = ['css!../bower_components/codemirror/theme/cobalt',
                    '../bower_components/codemirror/mode/xml/xml','../bower_components/codemirror/mode/javascript/javascript'];
            config.markup = (function($){
                $.get(config.markupUrl,function(data){
                    config.markup = data;
                },'text');
                return "";
            })(jQuery);
            config.javascript = (function($){
                $.get(config.javascriptUrl,function(data){
                    config.javascript = data;
                },'text');
                return "";
            })(jQuery);
            return config;
        }
        $scope.codeMirrorOpts = {
//            readOnly: 'nocursor',
            lineWrapping : true,
            lineNumbers: false,
            indentUnit: 20,
            theme: 'eclipse',
            onLoad: function(_editor){
                // Editor part
                var _doc = _editor.getDoc();
                $timeout(function(){
                    _editor.refresh();
                },0);

                // Options
                _editor.setOption('firstLineNumber', 1);
                _doc.markClean()

                // Events
                _editor.on("beforeChange", function(){ });
                _editor.on("change", function(){ });
            },
            mode: 'xml'
        };
        $scope.goToPlugin = function(plugin){
            window.location.href = $state.href('UIAndElements.bootstrap')+'#'+angular.lowercase(plugin);
        };
    }]);
});
