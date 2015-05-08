/**
 * Created by yao on 14-11-14.
 */
define(['files/module'],function(filesModule){
    filesModule.service('attachService',['Attachments','$http','$upload','$log','$q',function(attachRepo,$http,$upload,$log,$q){
        return {
            upload: function(file,events){
                if(!events){
                    events = {};
                }
                return $upload.upload({
                    url: 'http://localhost:8080/oa/resources/attachments/upload', //upload.php script, node.js route, or servlet url
                    method: 'POST',
                    //headers: {'header-key': 'header-value'},
                    //withCredentials: true,
                    //data: {myObj: $scope.myModelObj},
                    file: file // or list of files ($files) for html5 only
                    //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
                    // customize file formData name ('Content-Disposition'), server side file variable name.
                    //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
                    // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
                    //formDataAppender: function(formData, key, val){}
                }).progress(function(evt,config) {
                    $log.debug('File '+config.file.name+' '+parseInt(100.0 * evt.loaded / evt.total)+'% uploaded.');
                    if($.isFunction(events.progress)){
                        events.progress(evt,config);
                    }
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    $log.debug(data);
                    if($.isFunction(events.success)){
                        events.success(data, status, headers, config);
                    }
                });
                //.error(...)
                //.then(success, error, progress);
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
                /* alternative way of uploading, send the file binary with the file's content-type.
                 Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
                 It could also be used to monitor the progress of a normal http post/put request with large data*/
                // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
            },
            getAll: function(){
                return attachRepo.query();
            },
            getAttachment: function(id){
                return attachRepo.get({id: id});
            },
            download: function(attachId){
                $http({
                    url: '/oa/services/attachments/download/'+attachId,
                    headers: {
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
                    }
                });
            }
        }
    }]);
});
