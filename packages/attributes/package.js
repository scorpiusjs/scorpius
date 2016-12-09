Package.describe({
  name: 'scorpiusjs:attributes',
  summary: 'Scorpius attributes',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'check',
    'scorpiusjs:base@0.3.1',
    'aldeed:collection2@2.10.0',
    'aldeed:autoform@5.8.1',
    'momentjs:moment@2.17.1'
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
