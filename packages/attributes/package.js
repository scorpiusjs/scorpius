Package.describe({
  name: 'scorpiusjs:attributes',
  summary: 'Scorpius attributes',
  version: "0.3.0",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'check',
    'scorpiusjs:base@0.1.0',
    'aldeed:collection2@2.0.0',
    'aldeed:autoform@5.4.0',
    'momentjs:moment@2.10.3'
    ]);

  api.imply([
    'aldeed:collection2',
    'aldeed:autoform',
    ]);

  api.addFiles([
    'attributes.js'
    ]);

  // Created by attribute
  api.addFiles('created-by/created-by.html', 'client');
  api.addFiles('created-by/created-by.js');

  // Created at attribute
  api.addFiles('created-at/created-at.html', 'client');
  api.addFiles('created-at/created-at.js');

  // Updated by attribute
  api.addFiles('updated-by/updated-by.html', 'client');
  api.addFiles('updated-by/updated-by.js');

  // Updated at attribute
  api.addFiles('updated-at/updated-at.html', 'client');
  api.addFiles('updated-at/updated-at.js');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});
