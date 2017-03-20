Template.scorpiusMaterializeSidebar.onRendered(function() {
	this.$('.materialize-sidebar .collapsible').collapsible();
	this.autorun( () => {
		let depend = scorpius.links._collection.find().fetch();
	});
})
