Package.describe({
  name: 'scorpiusjs:s3',
  summary: 'S3 storage for scorpius:filesystem',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/s3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'ecmascript',
    'lepozepo:s3@5.2.4',
    'scorpiusjs:core@0.3.1',
    'scorpiusjs:filesystem@0.3.1',
    'scorpiusjs:config@0.3.1',
    ]);

  api.addFiles([
    's3.js',
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scorpiusjs:filesystem');
});
