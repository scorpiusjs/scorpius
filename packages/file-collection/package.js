Package.describe({
  name: 'scorpiusjs:file-collection',
  summary: 'MongoDB gridFS support for scorpiusjs:filesystem',
  version: "0.2.0",
  git: 'https://github.com/scorpiusjs/packages/tree/master/file-collection'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'scorpiusjs:core@0.1.0',
    'scorpiusjs:filesystem@0.1.0',
    'vsivsi:file-collection@1.3.0'
    ]);

  api.addFiles([
    'index.js'
    ]);

    api.export('scorpiusFileCollection');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scorpiusjs:filesystem');
});
