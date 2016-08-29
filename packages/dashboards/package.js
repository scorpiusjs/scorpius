Package.describe({
	name: 'scorpiusjs:dashboards',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'Adds a Dashboard and Widgets to scorpius.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/rwatts3/scorpiusjs-dashboard',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.1');
	api.use([
		'ecmascript',
        'meteor-platform',
        'check',
        'scorpiusjs:core@0.1.0',
        'nicolaslopezj:roles@2.0.1',
		'tmeasday:publish-counts@0.7.2'
    ]);
	api.imply(['tmeasday:publish-counts','scorpiusjs:core']);
    
    api.use(['scorpiusjs:bootstrap@0.1.0','scorpiusjs:materialize@0.1.0'],'client',{weak:true});
    
	api.addFiles('src/scorpiusjs-dashboard.js');
    
    api.addFiles([
        'src/scorpiusjs-dashboard-bootstrap.html',
        'src/scorpiusjs-dashboard-materialize.html',
        'src/scorpiusjs-dashboard-client.js',
        'src/scorpiusjs-dashboard-api.js'
    ], 'client');
    
    api.export('scorpius');
});

// Package.onTest(function (api) {
// 	api.use([
// 		'scorpiusjs:dashboards','scorpiusjs:core','kadira:flow-router','kadira:blaze-layout','aldeed:tabular','mike:mocha-package'
// 	]);
// 	api.addFiles(['tests/scorpiusjs-dashboard-tests.js']);
// });

// meteor test-packages --velocity --driver-package respondly:test-reporter rwatts:scorpiusjs-dashboard