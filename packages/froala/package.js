Package.describe({
  name: 'scorpiusjs:froala',
  summary: 'Froala editor for scorpius',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'less',
    'froala:editor@2.3.5',
    'scorpiusjs:base@0.3.1',
    'scorpiusjs:attributes@0.3.1',
    'scorpiusjs:filesystem@0.3.1'
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
