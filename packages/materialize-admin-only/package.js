Package.describe({
  name: 'scorpiusjs:materialize-admin-only',
  summary: 'Load materialize and google fonts only in the admin',
  version: '1.1.0',
  git: 'https://github.com/rwatts3/scorpius-admin-only-materialize'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.1');
	api.use(['meteor-platform', 'orionjs:materialize@0.1.0']);
	// api.addFiles(['init.js', 'templates.html', 'templates.js'], 'client');
	api.mainModule('index.js', "client");
});
