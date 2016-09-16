Package.describe({
  name: 'scorpiusjs:lang-es',
  version: "0.3.0",
  summary: 'Scorpius spanish language',
  git: 'https://github.com/scorpiusjs/scorpius',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use('ecmascript@0.1.6');
  api.use('scorpiusjs:lang-en@0.1.0');
  api.imply('scorpiusjs:lang-en');

  api.addFiles('es.js');
});
