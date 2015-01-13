/**
 * Created by yao on 14-12-28.
 */
/**
 * Created by yao on 14-12-28.
 */
(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var youzikuModule = angular.module('ebp.youziku',[]);
    youzikuModule.directive('ebpYzkFont',[function(){
        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                name: '@ebpYzkFont',
                guid: '@yzkGuid',
                type: '@yzkType'
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {

                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        if($.md5){
                            youziku46613();
                        }else {
                            $.getScript('http://www.youziku.com/UserDownFile/jquery.md5.js',function(){
                                youziku46613();
                            });
                        }
                        function youziku46613() {
                            element.addClass(scope.name);
                            var resultStr = element.text();
                            var md5 = "";
                            resultStr = Trim(resultStr);
                            resultStr = SelectWord(resultStr);
                            md5 = $.md5(scope.guid+scope.name + resultStr);
                            $.getJSON("http://www.youz" +
                                "" +
                                "iku.com/webfont/CSSPOST?jsoncallback=?", { "id": md5, "guid": scope.guid, "type": scope.type }, function (json) {
                                if (json.result == 0) {//alert("需要生成");
                                    $.post("http://www.youziku.com/webfont/PostCorsCreateFont", { "name": scope.name, "gid": scope.guid, "type": "5", "text": resultStr }, function (json) {
                                        if (json == "0") { //alert("参数不对");//传递的参数不对，请检查name,guid,type是否正确
                                        } else if (json == "2") {//alert("超过每日生成字体数的上限");
                                        } else if (json == "3") { //alert("当前正在生成请稍后");
                                        } else {//alert("正在生成");//第一次调用需要生成webfont文件，文件生成一般只需几秒，安全起见请您在30s后刷新页面
                                        }
                                    },'json');
                                }
                                else {//alert("下载css文件");
                                    loadExtentFile("http://www.youziku.com/webfont/css?id=" + md5 + "&guid=" + scope.guid + "&type="+scope.type);
                                }
                            });
                        }
                    }
                }
            }
        };
    }]);
});
