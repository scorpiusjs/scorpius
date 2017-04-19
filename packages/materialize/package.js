Package.describe({
	name: 'scorpiusjs:materialize',
	summary: 'Materialize theme for scorpius admin',
	version: "0.3.1_4",
	git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function (api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'meteor-platform',
		'less',
		'jquery',
		'aldeed:autoform@5.8.1',
		'nicolaslopezj:tabular-materialize@1.4.1_4',
		'useraccounts:materialize@1.14.2',
		'gildaspk:autoform-materialize@0.0.26',
		'scorpiusjs:core@0.3.1'
	]);

	api.imply([
		'scorpiusjs:core',
		'aldeed:autoform',
		'useraccounts:materialize'
	]);

	api.addFiles([
		'init.js',
		'tabular.js'
	]);
  
	api.addFiles([
		'views/layout/layout.html',
		'views/layout/layout.js',
		'views/layout/layout.less',
		'views/sidebar/sidebar.html',
		'views/sidebar/sidebar.less',
		'views/sidebar/sidebar.js',
		'views/accounts/login.html',
		'views/accounts/register-with-invitation.html',
		'views/accounts/index.html',
		'views/accounts/password.html',
		'views/accounts/profile.html',
		'views/accounts/profile.js',
		'views/accounts/accounts.less',
		'views/accounts/accounts.html',
		'views/accounts/update.html',
		'views/accounts/create.html',
		'views/config/update.html',
		'views/config/update.js',
		'views/dictionary/update.html',
		'views/dictionary/update.js',
		'views/collections/index.html',
		'views/collections/index.js',
		'views/collections/index.less',
		'views/collections/create.html',
		'views/collections/create.js',
		'views/collections/update.html',
		'views/collections/update.js',
		'views/collections/delete.html',
		'views/collections/buttons.js',
		'views/pages/index.html',
		'views/pages/create.html',
		'views/pages/delete.html',
		'views/pages/update.html',
		'views/pages/pages.js',
		'views/misc/file.html',
		'views/misc/relationships.html',
		'views/misc/misc.js',
		'views/misc/misc.less',
		'views/misc/fixes.less'
	], 'client');

	api.export('scorpius');
});

Package.onTest(function (api) {
	api.use('tinytest');
	// api.use('scorpiusjs:core');
});