Package.describe({
  name: 'scorpiusjs:materialize-admin-only',
  summary: 'Load materialize and google fonts only in the admin',
  version: "0.3.0",
  git: 'https://github.com/rwatts3/scorpius-admin-only-materialize'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.1');
	api.use(['meteor-platform', 'scorpiusjs:materialize@0.1.0']);
	api.addFiles(['modules/init.js', 'modules/templates.html', 'modules/templates.js'], 'client');
	// api.mainModule('index.js', "client");
});
