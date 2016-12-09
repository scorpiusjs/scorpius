Package.describe({
  name: 'scorpiusjs:summernote',
  summary: 'Summernote editor for scorpius',
  version: "0.3.1",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'blaze-html-templates@1.0.5',
    'ecmascript',
    'less',
    'summernote:standalone@0.8.1',
    'jquery',
    'scorpiusjs:base@0.3.1',
    'scorpiusjs:attributes@0.3.1',
    'scorpiusjs:filesystem@0.3.1'
    ]);

  api.imply([
    'summernote:standalone',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'summernote.html',
    'summernote.js',
    'summernote.less',
    ], 'client');
});
