Package.describe({
  name: 'scorpiusjs:lang-es',
  version: "0.3.1",
  summary: 'Scorpius spanish language',
  git: 'https://github.com/scorpiusjs/scorpius',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use('ecmascript');
  api.use('scorpiusjs:lang-en@0.3.1');
  
  api.imply('scorpiusjs:lang-en');

  api.addFiles('es.js');
});
