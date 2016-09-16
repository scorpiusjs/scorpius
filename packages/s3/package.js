Package.describe({
  name: 'scorpiusjs:s3',
  summary: 'S3 storage for scorpius:filesystem',
  version: "0.3.0",
  git: 'https://github.com/scorpiusjs/s3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'ecmascript@0.1.6',
    'scorpiusjs:core@0.1.0',
    'scorpiusjs:filesystem@0.1.0',
    'scorpiusjs:config@0.1.0',
    'lepozepo:s3@5.1.1'
    ]);

  api.addFiles([
    's3.js',
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scorpiusjs:filesystem');
});
