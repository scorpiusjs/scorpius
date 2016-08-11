Options.init('homePath');
Options.init('siteName');

ReactiveTemplates.request('tabs', 'scorpiusBootstrapTabs');
ReactiveTemplates.request('adminSidebar');

ReactiveTemplates.set('layout', 'scorpiusBootstrapLayout');
ReactiveTemplates.set('outAdminLayout', 'scorpiusBootstrapOutAdminLayout');

ReactiveTemplates.set('adminSidebar', 'scorpiusBootstrapSidebar');
ReactiveTemplates.set('login', 'scorpiusBootstrapLogin');
ReactiveTemplates.set('registerWithInvitation', 'scorpiusBootstrapRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'scorpiusBootstrapAccountIndex');
ReactiveTemplates.set('myAccount.password', 'scorpiusBootstrapAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'scorpiusBootstrapAccountProfile');

ReactiveTemplates.set('accounts.index', 'scorpiusBootstrapAccountsIndex');
ReactiveTemplates.set('accounts.update', 'scorpiusBootstrapAccountsUpdate');
ReactiveTemplates.set('accounts.create', 'scorpiusBootstrapAccountsCreate');

ReactiveTemplates.set('configUpdate', 'scorpiusBootstrapConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'scorpiusBootstrapDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'scorpiusBootstrapCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'scorpiusBootstrapCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'scorpiusBootstrapCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'scorpiusBootstrapCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'scorpiusBootstrapPagesIndex');
ReactiveTemplates.set('pages.create', 'scorpiusBootstrapPagesCreate');
ReactiveTemplates.set('pages.update', 'scorpiusBootstrapPagesUpdate');
ReactiveTemplates.set('pages.delete', 'scorpiusBootstrapPagesDelete');
