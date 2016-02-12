Package.describe({
	name: 'scorpiusjs:core',
	version: '0.1.0',
	summary: 'Scorpius Core, The core structure of Scorpius binds crucial packages to the core.',
	git: 'https://github.com/scorpiusjs/scorpius',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.3-modules-beta.8');
	
	Npm.depends({
		
	});
	
	api.use([
		'ecmascript',
		'modules'
		// 'scorpiusjs:api@0.1.0'
	]);
	
	api.imply([
		// 'scorpiusjs:api@0.1.0'
	]);
	
	api.mainModule('src/core_server.js', 'server');
	api.mainModule('src/core_client.js', 'client');
	
	api.export('scorpius');
	
});

Package.onTest(function (api) {
	api.use([
		'scorpiusjs:core','mike:mocha-package'
	]);
});

// meteor test-packages --velocity --driver-package respondly:test-reporter scorpiusjs:core