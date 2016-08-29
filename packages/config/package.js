Package.describe({
  name: 'scorpiusjs:config',
  summary: 'Scorpius Filesystem',
  version: "0.2.0",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:lang-en@0.1.0',
    'scorpiusjs:base@0.1.0',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'matb33:collection-hooks@0.7.13',
    'meteorhacks:inject-initial@1.0.2',
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
