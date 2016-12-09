Package.describe({
  name: 'scorpiusjs:relationships',
  summary: 'Define and use relationships between meteor collections, entities and the dictionary',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'less',
    'reactive-var',
    'jeremy:selectize@0.12.1_5',
    'scorpiusjs:base@0.3.1',
    'scorpiusjs:attributes@0.3.1'
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
