Package.describe({
	name: 'scorpiusjs:core',
	summary: 'A framework that makes complex as well as simple apps possible with minimal effort',
	version: "0.3.1",
	git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'scorpiusjs:base@0.3.1',
		'scorpiusjs:accounts@0.3.1',
		'scorpiusjs:config@0.3.1',
		'scorpiusjs:collections@0.3.1',
		'scorpiusjs:dictionary@0.3.1',
		'scorpiusjs:attributes@0.3.1',
		'scorpiusjs:lang-en@0.3.1'
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