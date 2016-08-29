/**
 * @method Options.init
 * @where {client|server}
 * @private
 * @return {Boolean}  Returns Boolean True or False
 * 
 * Optional setting allowing or denying the dashboard link to display
 * in the admin panel.
 */
Options.init('showDashboardTab', true);

/**
 * @where {client|server}
 * @private
 * @return {Boolean}
 * 
 * If the showDashboard option is set to true, the home route will be 
 * set to the dashboard path. This option can be overwritten by 
 * setting the adminHomeRoute explicitly 
 */
if (Options.get('showDashboardTab') == true) {
	Options.set('adminHomeRoute', 'scorpiusDashboard');
}

/**
 * @where {client|server}
 * @private
 * @return {String}
 * 
 * Set's the dashboard template and defines the default template.
 * See ReactiveTemplates documentation for how to override the default
 * dashboard template. This typically is not neeed.
 */
ReactiveTemplates.request('scorpiusDashboard', 'scorpius_dashboard_bootstrap');

if (_.has(Package, 'scorpiusjs:materialize')) {
	ReactiveTemplates.set('scorpiusDashboard','scorpius_dashboard_materialize');
}

/**
 * @method ReactiveTemplates.request
 * @where {client|server}
 * @private
 * @return {String}
 * 
 * Set's the Dashboard Widget template and defines the default template.
 * See ReactiveTemplates documentation for informatation on how to override the
 * default widget. NOTE: this is not the same as registering a new widget.
 */
ReactiveTemplates.request('scorpiusDashboardWidget', 'scorpius_dashboard_default_widget_bootstrap');

if (_.has(Package, 'scorpiusjs:materialize')) {
	ReactiveTemplates.set('scorpiusDashboardWidget','scorpius_dashboard_default_widget_materialize');
}

/**
 * @method Roles.registerAction
 * @where {client|server}
 * @private
 * @return {Boolean}
 * 
 * Registers the scorpiusDashboard action to the Roles package.
 * This allows us to ensure the user has the proper permissions to
 * make changes to the dashboard.
 */
Roles.registerAction('scorpiusDashboard', true);

/**
 * @method RouterLayer.route
 * @where {client}
 * @private
 * @return {Object}
 * 
 * Registers the route for the dashboard. By Default this route is always 
 * registered as a subpath of /admin/
 */
RouterLayer.route('/admin/dashboard', {
	layout: 'layout',
	template: 'scorpiusDashboard',
	name: 'scorpiusDashboard',
	reactiveTemplates: true
});

/**
 * @method scorpius.accounts.addProtectedRoute
 * @where {client}
 * @private
 * @return {String}
 * 
 * Adds a protected route to scorpiusDashboard ensuring that the user must be
 * logged in to navigate to this path.
 */
scorpius.accounts.addProtectedRoute('scorpiusDashboard');
