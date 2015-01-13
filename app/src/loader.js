/**
 * Created by 世宁 on 2015/1/4 0004.
 */
require(['src/vendor/nprogress.js'],function(NProgress){
    window.NProgress = NProgress;
    NProgress.configure({
        showSpinner: true,
        trickleRate: 0.02, trickleSpeed: 50
    });
    NProgress.start();
});
