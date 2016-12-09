Package.describe({
  name: 'scorpiusjs:config',
  summary: 'Scorpius Filesystem',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'scorpiusjs:lang-en@0.3.1',
    'scorpiusjs:base@0.3.1',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.10.0',
    'matb33:collection-hooks@0.8.4',
    'meteorhacks:inject-initial@1.0.4',
    ]);

  api.addFiles([
    'config.js',
    'admin.js'
    ]);

  api.addFiles([
    'config_server.js'
    ], 'server');

  api.addFiles([
    'config_client.js'
    ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});