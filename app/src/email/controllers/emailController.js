define(['angular','email/module','users/module','auth/module'],function(angular,emailModule){
	emailModule.controller('EmailController', [
		'$scope',
		'$location',
		'$compile',
		'EmailService',
		'UserService',
		'$state',
		'$window',
        '$upload',
        '$timeout',
        '$log',
        '$translate',
        'attachService',
        '$sce',
        'authService',
		function(
            $scope,
            $location,
            $compile,
            emailService,
            userService,
            $state,
            $window,
            $upload,
            $timeout,
            $log,
            $translate,
            attachService,
            $sce,
            authService
        ){
            $scope.multiDelete = function(){
                angular.forEach($scope.emails,function(email,index){
                    email.checked && emailService.remove(email,function(){
                        $scope.emails.splice(index,1);
                    });
                });
            };
			$scope.emails = emailService.getEmails(authService.currentUser);
			var viewName = $scope.viewName = $state.params.emailView;
            if(!viewName){
                $state.go('emails',{emailView: 'inbox'});
            }
            if($state.params.emailId){
                var emailId = $state.params.emailId;
                $scope.email = emailService.getEmail(emailId);
                $scope.attachments = [];
                $scope.email.$promise.then(function(){
                    $scope.email.explicitlyTrustedContent = $sce.trustAsHtml($scope.email.content);
                    $.each($scope.email.attachments,function(i,e){
                        $scope.attachments.push(attachService.getAttachment(e));
                    });
                });
            }
			$scope.composeTabActive = "mail";
			$scope.composeForm = {
                attachments: []
            };
            $scope.dropSupported = false;
			$scope.sendTo = "";
            $scope.selectedFiles = [];
            $scope.tinymceOptions = {
//                language: 'zh_CN'
                theme: 'modern',
                plugins: [
                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                    "searchreplace wordcount visualblocks visualchars code fullscreen fullpage",
                    "insertdatetime media nonbreaking save table contextmenu directionality",
                    "emoticons template paste textcolor colorpicker textpattern"
                ],
                toolbar1: "insertfile undo redo | styleselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                toolbar2: "print preview media | forecolor backcolor fontselect fontsizeselect | emoticons | fullscreen fullpage",
                image_advtab: true,
                templates: [
                    {title: 'Test template 1', content: '<b>Test 1</b>'},
                    {title: 'Test template 2', content: '<em>Test 2</em>'}
                ],
                autosave_ask_before_unload: false
            }
			$scope.swithComposeTab = function(tabName){
				$scope.composeTabActive = tabName;
			}
			$scope.sendComposeForm = function(){
				var usernames = _.filter($scope.sendTo.split(";"),function(item){
					if(item!==""){
						return item;
					}
				});
				$scope.composeForm.receiverUserNames = usernames;
                console.log($scope.composeForm);
				emailService.save($scope.composeForm,function(){
                    $location.path("emails/inbox/");
                });
			}
			$scope.back = function(){
				$window.history.back();
			}
			$scope.disableBlur = function($event){
				$($event.target).bind( "keydown", function( event ) {
					if ( event.keyCode === $.ui.keyCode.DOWN &&
						$( this ).autocomplete( "instance" ).menu.active ) {
						event.preventDefault();
					}
				})
			}
			$scope.showEmailDetails = function(email){
                $location.path("emails/details/"+email.id);
			}
            $scope.downloadAttach = function(attachId){
                attachService.download(attachId);
            }
            $scope.changeLanguage = function(locale){
                $translate.use(locale).then(function(data){
                    $log.debug("translate to "+data);
                });
            }
			var availableTags = userService.getUsers();
			function extractLast( term ) {
				return split( term ).pop();
			}
			// function split( val ) {
			// 	return val?val.split( /;\s*/ ):[];
			// }
			function split( val ) {
				return val?val.split( /;\s*/ ):[];
			}
			$scope.recieversAutocompleteConfig = {
				options: {
					minLength: 0,
					onlySelect: true,
					source: function( request, response ) {
					  // delegate back to autocomplete, but extract the last term
					  response( $.ui.autocomplete.filter(
					    _.pluck(availableTags,'username'), extractLast( request.term ) ) );
					},
					select: function( event, ui ) {
					  var terms = split($scope.sendTo );
					  // add the selected item
					  terms.pop();
					  // add the selected item
					  terms.push( ui.item.value );
					  // add placeholder to get the comma-and-space at the end
					  terms.push( "" );
					  ui.item.value = terms.join( "; " );
					  $scope.sendTo = terms.join(";");
					  return false;
					}
				},
				methods: {},
				events: {
					focus: function() {
					  // prevent value inserted on focus
					  return false;
					}
				}
			};
            $scope.onFileSelect = function($files) {
                $log.debug($files.length+' files were selected.');
                $scope.selectedFiles = $scope.selectedFiles.concat($files);
                //$files: an array of files selected, each file has name, size, and type.
                for (var i = 0; i < $files.length; i++) {
                    var file = $files[i];
                    $scope.upload = attachService.upload(file,{
                        progress: function(evt,config){
                            config.file.percent = parseInt(100.0 * evt.loaded / evt.total);
                        },
                        success: function(data, status, headers, config){
                            $timeout(function(){
                                config.file.reponseData = data;
                                config.file.finished = true;
                                $scope.composeForm.attachments.push(data.id);
                            },2000);
                        }
                    });
                }
            };
		}
	]);
});
