Package.describe({
  name: 'scorpiusjs:filesystem',
  summary: 'Scorpius Filesystem',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'aldeed:collection2@2.3.3',
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
