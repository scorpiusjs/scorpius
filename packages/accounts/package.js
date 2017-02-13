Package.describe({
	name: 'scorpiusjs:accounts',
	summary: 'Scorpius accounts manager',
	version: "0.3.1_4",
	git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2.3');

	api.use([
		'blaze-html-templates@1.0.5',
		'ecmascript',
		'scorpiusjs:base@0.3.1',
		'scorpiusjs:attributes@0.3.1',
		'accounts-base',
		'accounts-password',
		'useraccounts:core@1.14.2',
		'aldeed:simple-schema@1.5.3',
		'matb33:collection-hooks@0.8.4',
		'meteorhacks:inject-initial@1.0.4',
		'anti:i18n@0.4.3'
	]);

	api.use([
		'nicolaslopezj:tabular-materialize@1.4.1_4'
	]);

	api.imply([
		'accounts-base',
		'accounts-password',
		'useraccounts:core',
		'matb33:collection-hooks'
	]);

	api.addFiles([
		'tabular.js',
		'accounts.js',
		'authentication/login.js',
		'authentication/secure-routes.js',
		'my-account/admin.js',
		'accounts-tab/accounts.js',
		'accounts-tab/admin.js',
		'create/invite.js',
		'create/admin.js'
	]);

	api.addFiles([
		'accounts_server.js',
		'accounts-tab/server.js',
		'create/server.js'
	], 'server');

	api.addFiles([
		'accounts_client.js',
		'accounts-tab/client.js'
	], 'client');

	api.export(['scorpius']);
});

Package.onTest(function(api) {
	api.use('tinytest');
});