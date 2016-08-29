Package.describe({
  name: 'scorpiusjs:core',
  summary: 'A framework that makes complex as well as simple apps possible with minimal effort',
  version: "0.2.0",
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'scorpiusjs:base@0.1.0',
    'scorpiusjs:accounts@0.1.0',
    'scorpiusjs:config@0.1.0',
    'scorpiusjs:collections@0.1.0',
    'scorpiusjs:dictionary@0.1.0',
    'scorpiusjs:attributes@0.1.0',
    'scorpiusjs:lang-en@0.1.0'
    ]);

  api.imply([
    'scorpiusjs:lang-en',
    'scorpiusjs:base',
    'scorpiusjs:accounts',
    'scorpiusjs:config',
    'scorpiusjs:collections',
    'scorpiusjs:dictionary',
    'scorpiusjs:attributes',
    ]);

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});
