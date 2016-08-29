Package.describe({
	name: 'scorpiusjs:components',
	version: '0.1.0',
	summary: 'Add components to Scorpius',
	git: 'https://github.com/scorpiusjs/scorpius/tree/master/packages/components',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.4.1');
	
	api.use([
		'ecmascript', 'less', 'scorpiusjs:core@0.1.0', 'reactive-var',
		'templating'
	]);
	
	api.use([
		'nicolaslopezj:options@1.0.1', 'nicolaslopezj:reactive-templates@1.2.1'
	], {weak: true});
	
	api.addFiles([
		'init.js',
		'components.html',
		'components.js',
		'components.less'
	]);
});