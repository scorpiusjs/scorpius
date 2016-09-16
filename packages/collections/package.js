Package.describe({
  name: 'scorpiusjs:collections',
  summary: 'Meteor collection with some magic',
  version: "0.3.0",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'underscore',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.3',
    ]);

  api.imply([
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers'
    ]);

  api.addFiles([
    'init.js',
    'new.js',
    'permissions.js',
    'admin.js',
    ]);

  api.addFiles([
    'publications.js',
    ], 'server');

  api.addFiles([
    'collections_client.js'
    ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});
