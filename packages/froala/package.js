Package.describe({
  name: 'scorpiusjs:froala',
  summary: 'Froala editor for scorpius',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'scorpiusjs:attributes@0.1.0',
    'less@2.5.0_1',
    'scorpiusjs:filesystem@0.1.0',
    'froala:editor@1.2.8',
    ]);

  api.imply([
    'froala:editor',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'froala.html',
    'froala.js',
    'froala.less',
    ], 'client');
});
