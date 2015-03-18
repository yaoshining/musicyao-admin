/**
 * Created by 世宁 on 2015/3/13 0013.
 */
define(['UIAndElements/module'],function(module){
    module.controller('ElementsController',['$scope','toaster','EbpDialog',function($scope,toaster,ebpDialog){
        $scope.toaster = {
            pop: function(type,title,body,imageUrl,timeout,position){
                toaster.pop({
                    type: type,
                    title: title,
                    body: body,
                    timeout: timeout,
                    imageUrl: imageUrl,
                    bodyOutputType: 'template',
                    position: 'position-'+position
                });
            },
            clear: function(){
                toaster.clear();
            }
        };
        $scope.dark = true;
        $scope.asyncMessage = 'I was loaded from template.'
        $scope.toasterOptions = {
            'position-class': 'toast-top-right',
            'close-button': true,
            'mouseover-timer-stop': false,
            'light-style': !$scope.dark
        };
        $scope.dialogOptions = {
            message: '123',
            type: 'prompt',
            title: 'What\'s your name?',
            templateUrl: 'src/UIAndElements/views/icons.tpl.html',
            callback: function(val){
                if(val){
                    alert(val)
                }
            }
        };
        $scope.dialogOptions2 = {
            message: '123',
            type: 'dialog',
            title: 'I am a custom dialog with smaller buttons',
            templateUrl: 'dialogContent.tpl.html',
            buttons: {
                success: {
                    label: '<i class="ebp-icon fa fa-check"></i>Success',
                    className: 'btn-sm btn-success',
                    callback: function(){
                        console.log('success clicked');
                    }
                },
                danger: {
                    label: 'Danger!',
                    className: 'btn-sm btn-danger'
                },
                click: {
                    label: 'Click Me!',
                    className: 'btn-sm btn-primary'
                },
                button: {
                    label: 'Just a button...',
                    className: 'btn-sm'
                }
            }
        };
        $scope.showRegularDialog = function(){
            ebpDialog.prompt({
                title: 'Trigger from service invocation.',
                callback: function(val){
                    alert(val);
                }
            });
        };
        $scope.showAlertDialog = function(){
            ebpDialog.alert({
                message: 'This alert is trigger from service invocation!',
                callback: function(){
                    alert('You clicked the button OK!');
                }
            });
        };
        $scope.showConfirmDialog = function(){
            ebpDialog.confirm({
                message: 'Which type of this confirm dialog is using?',
                callback: function(val){
                    if(val){
                        alert('Congratulations! You are right!');
                    }else {
                        alert('Sorry!Your choice is not correct!');
                    }
                },
                buttons: {
                    confirm: {
                        label: 'Service invocation'
                    },
                    cancel: {
                        label: 'Directive compilation'
                    }
                }
            });
        };
        $scope.showDialog = function(){
            ebpDialog.dialog({
                title: 'Custom dialog box',
                templateUrl: 'dialogContent.tpl.html',
                buttons: {
                    success: {
                        label: '<i class="ebp-icon fa fa-check"></i>Success',
                        className: 'btn-sm btn-success',
                        callback: function(){
                            console.log('success clicked');
                        }
                    },
                    danger: {
                        label: 'Danger!',
                        className: 'btn-sm btn-danger'
                    },
                    click: {
                        label: 'Click Me!',
                        className: 'btn-sm btn-primary'
                    },
                    button: {
                        label: 'Just a button...',
                        className: 'btn-sm'
                    }
                }
            });
        };
        $scope.sliderValues = {
            lines: 12
        };
    }]);
});
