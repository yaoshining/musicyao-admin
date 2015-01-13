/**
 * Created by yao on 14-12-28.
 */
/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    "use strict";
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular','vendor/core/jsmind'], factory );
    } else {
        factory( jQuery,angular,jsMind);
    }
})(function(jQuery,angular){
    "use strict";
    var mindMapModule = angular.module('ebp.mindmap',[]);
    mindMapModule.directive('ebpMindMap',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        if(typeof element.attr('id') === 'undefined'){
                            element.attr('id','mindMap'+jsMind.util.uuid.newid());
                        }
                        var mind = {
                            "meta":{
                                "name":"ebpAppMindMap",
                                "author":"ysnlvlqw@msn.com",
                                "version":"0.2"
                            },
                            "format":"node_array",
                            "data":[
                                {"id":"EbpApplication", "isroot":true, "topic":"EbpApplication"},

                                {"id":"Tabs", "parentid":"EbpApplication", "topic":"Tabs"},
                                {"id":"Popover", "parentid":"EbpApplication", "topic":"Popover"},
                                {"id":"Tables", "parentid":"EbpApplication", "topic":"Tables"},
                                {"id":"Collapse", "parentid":"EbpApplication", "topic":"Collapse"},
                                {"id":"Wizard", "parentid":"EbpApplication", "topic":"Wizard"},
                                {"id":"Tree", "parentid":"EbpApplication", "topic":"Tree","direction":"left"},
                                {"id":"Accordion", "parentid":"EbpApplication", "topic":"Accordion","direction":"left"},
                                {"id":"Tooltip", "parentid":"EbpApplication", "topic":"Tooltip","direction":"left"},
                                {"id":"Pagination", "parentid":"EbpApplication", "topic":"Pagination","direction":"left"},
                                {"id":"Carousel", "parentid":"EbpApplication", "topic":"Carousel","direction":"left"},
                                {"id":"Loader", "parentid":"EbpApplication", "topic":"Loader","direction":"left"},
                                {"id":"ListView", "parentid":"EbpApplication", "topic":"List View","direction":"left"},
                                {"id":"WysiwygEditor", "parentid":"EbpApplication", "topic":"Wysiwyg Editor","direction":"left"},
                                {"id":"Button", "parentid":"EbpApplication", "topic":"Button","direction":"left"},
                                {"id":"Scroller", "parentid":"EbpApplication", "topic":"Scroller","direction":"left"},
                                {"id":"Alert", "parentid":"EbpApplication", "topic":"Alert","direction":"left"},
                                {"id":"Modal", "parentid":"EbpApplication", "topic":"Modal","direction":"left"},
                                {"id":"Rating", "parentid":"EbpApplication", "topic":"Rating","direction":"left"},
                                {"id":"Forms", "parentid":"EbpApplication", "topic":"Forms"},
                                {"id":"Dropdown", "parentid":"EbpApplication", "topic":"Dropdown","direction":"left"},
                                {"id":"Sortable", "parentid":"EbpApplication", "topic":"Sortable","direction":"left"},
                                {"id":"Progressbar", "parentid":"EbpApplication", "topic":"Progressbar","direction":"left"},

                                {"id":"Combobox", "parentid":"Forms", "topic":"Combobox"},
                                {"id":"Checkbox", "parentid":"Forms", "topic":"Checkbox"},
                                {"id":"Datepicker", "parentid":"Forms", "topic":"Datepicker"},
                                {"id":"ColorPicker", "parentid":"Forms", "topic":"ColorPicker"},
                                {"id":"PillBox", "parentid":"Forms", "topic":"PillBox"},
                                {"id":"Placard", "parentid":"Forms", "topic":"Placard"},
                                {"id":"Radio", "parentid":"Forms", "topic":"Radio"},
                                {"id":"Search", "parentid":"Forms", "topic":"Search"},
                                {"id":"Selectlist", "parentid":"Forms", "topic":"Selectlist"},
                                {"id":"SpinBox", "parentid":"Forms", "topic":"SpinBox"},
                                {"id":"Timepicker", "parentid":"Forms", "topic":"Timepicker"},
                                {"id":"FileUpload", "parentid":"Forms", "topic":"File Upload"}
                            ]
                        };
                        var options = {
                            container:element.attr('id'),
                            editable:true,
                            theme:'primary'
                        };
                        if(jsMind.current){
                            jsMind.current = null;
                        }
                        var jm = jsMind.show(options,mind);
                        element.data('_jm',jm);
                    }
                }
            }
        };
    }]);
});
