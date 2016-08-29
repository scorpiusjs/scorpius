Package.describe({
  name: 'scorpiusjs:image-attribute',
  summary: 'Image attribute for scorpius',
  version: '0.1.0',
  git: 'http://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'scorpiusjs:attributes@0.1.0',
    'scorpiusjs:filesystem@0.1.0',
    'less@2.5.0_1'
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'colibri.js',
    'helper.js',
    'image.html',
    'image.less',
    'image.js',
    'images.html',
    'images.js',
    ], 'client');

  api.export('Colibri');
});
