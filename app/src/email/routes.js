/**
 * Created by tongda on 15/5/15.
 */
define(['conf/modules'],function(modules){
    var routes = {
        emails: {
            url: '/emails/:emailView/:emailId',
            views: {
                '': {
                    controller: 'EmailController',
                    templateUrl: 'src/email/views/email.tpl.html'
                }
            },
            modules: {
                'emailModule': modules.emailModule,
                'usersModule': modules.usersModule,
                'filesModule': modules.filesModule
            }
        }
    };
    return routes;
});
