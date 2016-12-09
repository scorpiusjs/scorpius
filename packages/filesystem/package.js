Package.describe({
  name: 'scorpiusjs:filesystem',
  summary: 'Scorpius Filesystem',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'scorpiusjs:base@0.3.1',
    'aldeed:collection2@2.10.0',
    ]);

  api.imply([
    'aldeed:collection2',
    ]);

  api.addFiles([
    'filesystem.js',
    ]);

  api.addFiles([
    'filesystem_server.js',
    ], 'server');

  api.addFiles([
    'filesystem_client.js',
    'helpers.js',
    ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});