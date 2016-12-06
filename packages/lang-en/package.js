Package.describe({
  name: 'scorpiusjs:lang-en',
  version: "0.3.1",
  summary: 'Scorpius - Default english language',
  git: 'https://github.com/scorpiusjs/scorpius',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use('ecmascript');
  api.use('anti:i18n@0.4.3');
  api.use('softwarerero:accounts-t9n@1.3.6');

  api.imply('anti:i18n');
  api.imply('softwarerero:accounts-t9n');

  api.addFiles('init.js');
  api.addFiles('en.js');
});
