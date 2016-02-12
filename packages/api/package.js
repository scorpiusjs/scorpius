Package.describe({
	name: 'scorpiusjs:api',
	version: '0.1.0',
	summary: 'Scorpius API , The API Structure of Scorpius.',
	git: 'https://github.com/scorpiusjs/scorpius',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.3-modules-beta.8');
	api.use([
		'modules'
	]);
  
	api.addFiles('src/core.js');
});

Package.onTest(function (api) {
	api.use([
		'scorpiusjs:core','mike:mocha-package'
	]);
	api.addFiles(['tests/core_test.js']);
});

// meteor test-packages --velocity --driver-package respondly:test-reporter scorpiusjs:core