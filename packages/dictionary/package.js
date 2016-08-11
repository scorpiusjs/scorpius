Package.describe({
  name: 'scorpiusjs:dictionary',
  summary: 'Meteor collection with some magic',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    ]);

  api.imply([
    'aldeed:simple-schema',
    'aldeed:collection2'
    ]);

  api.addFiles([
    'dictionary.js',
    'admin.js',
    ]);

  api.addFiles([
    'dictionary_server.js',
    ], 'server');

  api.addFiles([
    'dictionary_client.js',
    ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scorpiusjs:core');
});
