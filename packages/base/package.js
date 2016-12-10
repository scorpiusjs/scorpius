Package.describe({
	name: 'scorpiusjs:base',
	summary: 'Scorpius',
	version: "0.3.1_2",
	git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'ecmascript',
		'meteor-base',
		'mongo',
		'standard-minifiers',
		'underscore',
		'spacebars@1.0.13',
		'blaze-html-templates@1.0.5',
		'check',
		'tracker',
		'session',
		'nicolaslopezj:options@1.0.1',
		'nicolaslopezj:reactive-templates@1.2.1',
		'nicolaslopezj:roles@2.6.2',
		'nicolaslopezj:router-layer@0.0.11',
		'aldeed:simple-schema@1.5.3',
		'aldeed:collection2@2.10.0',
		'scorpiusjs:lang-en@0.3.1'
	]);

	api.imply([
		'tracker',
		'session',
		'underscore',
		'check',
		'nicolaslopezj:router-layer',
		'nicolaslopezj:options',
		'nicolaslopezj:reactive-templates',
		'nicolaslopezj:roles',
		'scorpiusjs:lang-en'
	]);

	api.addFiles([
		'init.js',
		'helpers.js',
		'home-route.js',
		'layouts.js',
	]);

	api.addFiles([
		'helpers_client.js',
		'links.js'
	], 'client');

	api.export('scorpius');
	});

Package.onTest(function(api) {
	api.use('tinytest');
	// api.use('scorpiusjs:core');
});