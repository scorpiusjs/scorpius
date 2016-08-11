if (Meteor.isClient) {
  scorpius.filesystem.providerUpload = function(options, success, failure, progress) {
    var before = _.pluck(S3.collection.find().fetch(), '_id');
    S3.upload({
      files: options.fileList,
      path: scorpius.config.get('AWS_S3_PATH', 'scorpiusjs'),
    }, function(error, result) {
      if (error) {
        failure(new Meteor.Error('s3-error', i18n('filesystem.messages.errorUploading')));
      } else {
        success(result.secure_url, { s3Path: result.relative_url });
      }
      S3.collection.remove({});
    });
    var after = _.pluck(S3.collection.find().fetch(), '_id');
    var difference = _.difference(after, before);
    var id = difference.length > 0 ? difference[0] : '';

    Tracker.autorun(function () {
      var file = S3.collection.findOne(id);
      if (file) {
        progress(file.percent_uploaded);
      }
    });
  };

  scorpius.filesystem.providerRemove = function(file, success, failure)  {
    S3.delete(file.meta.s3Path, function(error, result) {
      if (error) {
        failure(new Meteor.Error('s3-error', i18n('filesystem.messages.errorRemoving')));
      } else {
        success();
      }
    });
  };
}

scorpius.config.add('AWS_API_KEY', 'aws');
scorpius.config.add('AWS_API_SECRET', 'aws');
scorpius.config.add('AWS_S3_BUCKET', 'aws');
scorpius.config.add('AWS_S3_REGION', 'aws', { optional: true });
scorpius.config.add('AWS_S3_PATH', 'aws', { optional: true });

if (Meteor.isServer) {
  S3.config = {
    key: scorpius.config.get('AWS_API_KEY', 'key'),
    secret: scorpius.config.get('AWS_API_SECRET', 'secret'),
    bucket: scorpius.config.get('AWS_S3_BUCKET', 'bucket'),
    region: scorpius.config.get('AWS_S3_REGION', 'us-east-1')
  };
}
