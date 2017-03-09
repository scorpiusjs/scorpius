Options.init('homePath');
Options.init('siteName');
Options.init('materialize.headerColor');

ReactiveTemplates.request('tabs', 'scorpiusMaterializeTabs');

ReactiveTemplates.request('materializeHeader', 'scorpiusMaterializeHeaderContainer');
ReactiveTemplates.request('materializeContent', 'scorpiusMaterializeContentContainer');
ReactiveTemplates.request('materializeButtons', 'scorpiusMaterializeButtonsContainer');

ReactiveTemplates.set('layout', 'scorpiusMaterializeLayout');
ReactiveTemplates.set('outAdminLayout', 'scorpiusMaterializeOutAdminLayout');

ReactiveTemplates.set('login', 'scorpiusMaterializeLogin');
ReactiveTemplates.set('registerWithInvitation', 'scorpiusMaterializeRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'scorpiusMaterializeAccountIndex');
ReactiveTemplates.set('myAccount.password', 'scorpiusMaterializeAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'scorpiusMaterializeAccountProfile');

ReactiveTemplates.set('accounts.index', 'scorpiusMaterializeAccountsIndex');
ReactiveTemplates.set('accounts.update', 'scorpiusMaterializeAccountsUpdate');
ReactiveTemplates.set('accounts.create', 'scorpiusMaterializeAccountsCreate');

ReactiveTemplates.set('configUpdate', 'scorpiusMaterializeConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'scorpiusMaterializeDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'scorpiusMaterializeCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'scorpiusMaterializeCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'scorpiusMaterializeCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'scorpiusMaterializeCollectionsDelete');

// Scorpius attributes replace
ReactiveTemplates.set('attribute.file', 'scorpiusMaterializeFileAttribute');
ReactiveTemplates.set('attribute.hasOne', 'scorpiusMaterializeHasOneAttribute');
ReactiveTemplates.set('attribute.hasMany', 'scorpiusMaterializeHasManyAttribute');
ReactiveTemplates.set('attribute.user', 'scorpiusMaterializeHasOneAttribute');
ReactiveTemplates.set('attribute.users', 'scorpiusMaterializeHasManyAttribute');

// Pages
ReactiveTemplates.set('pages.index', 'scorpiusMaterializePagesIndex');
ReactiveTemplates.set('pages.create', 'scorpiusMaterializePagesCreate');
ReactiveTemplates.set('pages.update', 'scorpiusMaterializePagesUpdate');
ReactiveTemplates.set('pages.delete', 'scorpiusMaterializePagesDelete');

if (Meteor.isClient) {
	AutoForm.setDefaultTemplate('materialize');

	Meteor.startup(function() {
		Session.set('scorpius_autoformLoading', false);
	});

	AutoForm.addHooks(null, {
		beginSubmit: function() {
			Session.set('scorpius_autoformLoading', true);
		},

		endSubmit: function() {
			Session.set('scorpius_autoformLoading', false);
		}
	});

	Template.registerHelper('scorpius_autoformLoading', function() {
		return Session.get('scorpius_autoformLoading') ? 'disabled' : '';
	});

	Template.registerHelper('materializeHeader', function() {
		return ReactiveTemplates.get('materializeHeader');
	});

	Template.registerHelper('materializeContent', function() {
		return ReactiveTemplates.get('materializeContent');
	});

	Template.registerHelper('materializeButtons', function() {
		return ReactiveTemplates.get('materializeButtons');
	});
}