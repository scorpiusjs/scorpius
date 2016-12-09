Package.describe({
	name: 'scorpiusjs:file-attribute',
	summary: 'File attribute for scorpius',
	version: "0.3.1",
	git: 'http://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'less',
		'scorpiusjs:base@0.3.1',
		'scorpiusjs:attributes@0.3.1',
		'scorpiusjs:filesystem@0.3.1'
		]);

	api.addFiles([
		'attribute.js',
		]);

	api.addFiles([
		'file.html',
		'file.less',
		'file.js',
		], 'client');
});
