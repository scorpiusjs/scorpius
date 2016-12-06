Package.describe({
  name: 'scorpiusjs:file-collection',
  summary: 'MongoDB gridFS support for scorpiusjs:filesystem',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/packages/tree/master/file-collection'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'scorpiusjs:core@0.3.1',
    'scorpiusjs:filesystem@0.3.1',
    'vsivsi:file-collection@1.3.7'
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
