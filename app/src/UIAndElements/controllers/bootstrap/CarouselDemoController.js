/**
 * Created by yao on 14-12-26.
 */
define(['UIAndElements/module'],function(module){
    module.controller('CarouselDemoController',['$scope',function($scope){
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(){
            var newWidth = 600+slides.length+1;
            slides.push({
                image: 'images/demos/'+newWidth+'/300.jpg',
                text: ['更多的','额外的','许多','剩余的'][slides.length % 4]+' '+['猫','小猫','猫科动物','小可爱'][slides.length % 4]
            });
        };
        for(var i=0;i<4;i++){
            $scope.addSlide();
        }
    }]);
});