Package.describe({
	name: 'scorpiusjs:pages',
	summary: 'Pages for Scorpius CMS',
	version: "0.3.1",
	git: 'https://github.com/scorpiusjs/pages'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'meteor-platform',
		'aldeed:collection2@2.10.0',
		'aldeed:autoform@5.8.1',
		'scorpiusjs:base@0.3.1'
		]);

	api.use(['aldeed:tabular@2.1.1', 'nicolaslopezj:tabular-materialize@1.4.1_4'], {
		weak: true
	});

	api.imply([

		]);

	api.addFiles([
		'pages.js',
		'admin.js'
		]);

	api.addFiles([
		'pages_server.js'
		], 'server');

	api.addFiles([
		'pages.html',
		'pages_client.js'
		], 'client');

});
