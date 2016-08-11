Package.describe({
  name: 'scorpiusjs:relationships',
  summary: 'Define and use relationships between meteor collections, entities and the dictionary',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'scorpiusjs:attributes@0.1.0',
    'less@2.5.0_1',
    'jeremy:selectize@0.12.1',
    'reactive-var'
    ]);

  api.imply([
    'jeremy:selectize',
    'reactive-var'
    ]);

  api.addFiles([
    'attribute.js',
    'users.js',
    ]);

  api.addFiles([
    'relationships.html',
    'relationships.js',
    'relationships.less',
    ], 'client');
});
