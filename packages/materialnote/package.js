Package.describe({
    name: 'scorpiusjs:materialnote',
    version: "0.3.1",
    // Brief, one-line summary of the package.
    summary: 'MaterialNote for scorpiusjs',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.2.3');
    api.use([
        'blaze-html-templates@1.0.5',
        'ecmascript',
        'jquery',
        'less',
        'scorpiusjs:base@0.3.1',
        'scorpiusjs:attributes@0.3.1',
        'scorpiusjs:filesystem@0.3.1',
        'vojtechklos:materialnote@1.2.2',
		'fourseven:scss@3.10.0'
    ]);

    api.imply([
        'vojtechklos:materialnote',
    ]);

    api.addFiles([
        'attribute.js',
    ]);

    api.addFiles([
        'cktooltip.js',
        'materialnote.html',
        'materialnote.js',
        'materialnote.less',
    ], 'client');
});