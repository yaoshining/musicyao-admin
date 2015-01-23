/**
 * Created by 世宁 on 2015/1/14 0014.
 */
define(['music/module','dropzone','id3'],function(module,Dropzone,id3){
    module.controller('MusicUploadController',['$scope','LanguagesService','WizardHandler',function($scope,languagesService,WizardHandler){
        $scope.musicDropzone = null;
        $scope.lyricsDropzone = null;
        $scope.musicDzOptions = {
            url: '/MusicYao/manager/musics/upload',
            paramName: "musicfile", // The name that will be used to transfer the file
            maxFilesize: 30, // MB
            autoProcessQueue: false,
            addRemoveLinks: true,
            sending: function(file,xhr,formData){
                formData.append('title',$scope.baseProperties.title);
                formData.append('languageId',$scope.baseProperties.language.id);
                formData.append('posterfile',$scope.baseProperties.posterFile);
            },
            accept: function(file, done) {
                id3(file,function(err,tags){
                    if(!err){
                        tags.title && ($scope.baseProperties.title = tags.title);
                        tags.artist && ($scope.baseProperties.artistName = tags.artist);
                        $scope.$digest();
                    }
                });
                if (file.name == "justinbieber.jpg") {
                    done("Naha, you don't.");
                }
                else { done(); }
            },
            init: function(){
                var dz = $scope.musicDropzone = this;
                dz.on("addedfile", function(file) {
                    if(file.type.indexOf('image/')>-1){
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function(){
                            $(dz.element).find('.dz-filename').css({
                                'background-image': 'url('+reader.result+')',
                                'background-size': 'cover'
                            });
                        };
                        $scope.baseProperties.posterFile = file;
                        dz.removeFile(file);
                    }
                }).on('complete',function(file){}).on('success',function(){
                    WizardHandler.wizard().goTo('Lyrics Files');
                    $scope.$digest();
                    $scope.lyricsDropzone.processQueue();
                });
            }
        };
        $scope.lyricsDzOptions = {
            url: '/MusicYao/manager/lyrics/upload',
            paramName: "lyricsfile", // The name that will be used to transfer the file
            maxFilesize: 30, // MB
            autoProcessQueue: false,
            addRemoveLinks: true,
            sending: function(file,xhr,formData){
                formData.append('title',$scope.baseProperties.title);
                formData.append('artistName',$scope.baseProperties.artistName);
                formData.append('languageId',$scope.baseProperties.language.id);
            },
            init: function(){
                var dz = $scope.lyricsDropzone = this;
                dz.on("addedfile", function(file) {
                    if(file.type.indexOf('image/')>-1){
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function(){
                            $(dz.element).find('.dz-filename').css({
                                'background-image': 'url('+reader.result+')',
                                'background-size': 'cover'
                            });
                        };
                        $scope.posterFile = file;
                        dz.removeFile(file);
                    }
                });
            },
            complete: function(file) {
                //$scope.musicDropzone.removeFile(file);
            }
        };
        $scope.baseProperties = {
            languages: null,
            title: null,
            language: null,
            artistName: 'Unknown Artist',
            album: 'Unknown album'
        };
        $scope.languages = languagesService.getAll(function(){
            $scope.baseProperties.language = $scope.languages[0];
        });
        $scope.music = {};
        $scope.startUpload = function(){
            $scope.musicDropzone.processQueue();
        };
        $scope.finishedWizard = function(){
            WizardHandler.wizard().goTo('Music Files');
            $scope.musicDropzone.processQueue();
        };
    }]);
});
