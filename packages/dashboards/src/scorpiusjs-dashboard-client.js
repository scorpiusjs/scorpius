/**
 * @method scorpius.links.add
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Adds the scorpius dashboard link to the admin panel.
 * Note that the showDashboardTab Option defines whether
 * the ordering of the link.
 */
Tracker.autorun(function(){ 
	var index = Options.get('showDashboardTab') ? 1 : undefined;
	scorpius.links.add({
		index: index,
		identifier: 'scorpius-dashboard',
		title: 'Dashboard',
		routeName: 'scorpiusDashboard',
		activeRouteRegex: 'scorpiusDashboard',
		permission: 'scorpiusDashboard'
	});
});
