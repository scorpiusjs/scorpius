Package.describe({
	name: 'scorpiusjs:dictionary',
	summary: 'Meteor collection with some magic',
	version: "0.3.1",
	git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'scorpiusjs:base@0.3.1',
		'aldeed:simple-schema@1.5.3',
		'aldeed:collection2@2.10.0',
		]);

	api.imply([
		'aldeed:simple-schema',
		'aldeed:collection2'
		]);

	api.addFiles([
		'dictionary.js',
		'admin.js',
		]);

	api.addFiles([
		'dictionary_server.js',
		], 'server');

	api.addFiles([
		'dictionary_client.js',
		], 'client');

	api.export('scorpius');
});

Package.onTest(function(api) {
	api.use('tinytest');
	// api.use('scorpiusjs:core');
});
