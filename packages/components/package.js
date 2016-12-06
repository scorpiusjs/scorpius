Package.describe({
	name: 'scorpiusjs:components',
	version: "0.3.1",
	summary: 'Add components to Scorpius',
	git: 'https://github.com/scorpiusjs/scorpius/tree/master/packages/components',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.4.2.3');
	
	api.use([
		'ecmascript', 'less', 'scorpiusjs:core@0.1.0', 'reactive-var'
	]);
	
	api.use([
		'nicolaslopezj:options@1.0.1', 'nicolaslopezj:reactive-templates@1.2.1',
		'rwatts:uuid@0.1.0'
	], {weak: true});
	
	api.use([
		'peerlibrary:blaze-components@0.20.0', 'peerlibrary:reactive-field@0.3.0'
	]);
	
	api.addFiles([
		'init.js',
		'components.html',
		'components.js',
		'components.less'
	]);
});