var fc = new FileCollection("data", {
      resumable: true,
      resumableIndexName: 'resumableIndex',
      http: [{
               method: 'get',
               path: '/id/:_id',
               lookup: function (params, query) { return { _id: params._id }; }
            }]
    });

scorpiusFileCollection=fc;

if (Meteor.isServer) {
   // These need to be tightened down to enforce
   fc.allow({
     insert: function(){
       return true;
     },
     remove: function(){
       return true;
     },
     write: function(){
       return true;
     },
     read: function(){
       return true;
     }
   });
}

if (Meteor.isClient) {

   // When a file is added
   fc.resumable.on('fileAdded', function (resFile) {
      // Create a new file in the file collection to upload to
      fc.insert({
            _id: resFile.uniqueIdentifier,   // This is the ID resumable will use
            filename: resFile.fileName,
            contentType: resFile.file.type
         },
         function (err, _id) {
            if (err) {
               console.warn("File creation failed!", err);
               return;
            }
            // Once the file exists on the server, start uploading
            fc.resumable.upload();
         }
      );
   });

   // Update the upload progress session variable
   fc.resumable.on('fileProgress', function (resFile) {
      if (resFile.file._scorpiusCallbacks && resFile.file._scorpiusCallbacks.progress) resFile.file._scorpiusCallbacks.progress(resFile.progress() * 100);
      return;
   });

   // Finish the upload progress in the session variable
   fc.resumable.on('fileSuccess', function (resFile) {
      var fileUrl = /* JJR Meteor.absoluteUrl()*/'/' + "gridfs/data/id/" + resFile.uniqueIdentifier;
      if (resFile.file._scorpiusCallbacks && resFile.file._scorpiusCallbacks.success) resFile.file._scorpiusCallbacks.success(fileUrl, { gridFS_id: resFile.uniqueIdentifier } );
      return;
   });

   // More robust error handling needed!
   fc.resumable.on('fileError', function (resFile, msg) {
      console.warn("Error uploading", resFile.uniqueIdentifier);
      if (resFile.file._scorpiusCallbacks && resFile.file._scorpiusCallbacks.failure) resFile.file._scorpiusCallbacks.failure(new Error(msg));
      return;
   });

   scorpius.filesystem.providerUpload = function(options, success, failure, progress) {
     // Handle multiple files upload
     for (var x=0; x<options.fileList.length; x++) {
        var file = options.fileList[x];
        // This lets the event handlers above invoke the correct callbacks
        file._scorpiusCallbacks = {
            success: success,
            failure: failure,
            progress: progress
            };

        fc.resumable.addFile(file);
     }
  };

  scorpius.filesystem.providerRemove = function(fileObj, success, failure) {

    fc.remove({ _id: fileObj.meta.gridFS_id }, function(err) {
      if (err) {
        console.warn('error', err);
        failure(err);
      } else {
      //   console.log('remove success');
        success();  // remove record in scorpius
      }
    });
  };
}
