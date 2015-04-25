Package.describe({
  name: 'scorpiusjs:core',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Scorpius is an extensible admin framework created by Ryan Watts.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/scorpiusjs/core',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('core.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scorpiusjs:core');
  api.addFiles('tests/core-tests.js');
});
