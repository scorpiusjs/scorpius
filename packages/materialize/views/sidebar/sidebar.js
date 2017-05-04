Template.scorpiusMaterializeSidebar.onRendered(function() {
	this.$('.materialize-sidebar .collapsible').collapsible();
	this.autorun( () => {
		let depend = scorpius.links._collection.find().fetch();
	});
});

Template.scorpiusMaterializeSidebar.helpers({
	adminLogo() {
		let logo = Options.get('adminLogo') !== undefined ? Options.get('adminLogo') : Options.get('siteName', 'Admin');
		return logo;
	}
});