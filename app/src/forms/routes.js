/**
 * Created by yao on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
        'forms': {
            url: '/forms',
            views: {
                '': {
                    template: '<div ui-view></div>'
                }
            },
            breadcrumb: {
                label: 'Forms',
                parent: 'home'
            },
            modules: {
                'ebpFormsModule': modules.ebpFormsModule
            }
        },
        'forms.elements': {
            url: '/elements',
            views: {
                '': {
                    templateUrl: 'src/forms/views/elements.tpl.html'
                }
            },
            breadcrumb: {
                label: 'Elements'
            },
            modules: {
                'ebpFormsModule': modules.ebpFormsModule,
                'ebp.form.slider': ['plugins/form/ebp-slider']
            }
        }
    };
    return routes;
});
