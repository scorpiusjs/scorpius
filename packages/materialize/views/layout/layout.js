Template.scorpiusMaterializeHeaderContainer.onRendered(function() {
	this.$('#sidenav-overlay').click();
	this.$('.button-collapse').sideNav({
		menuWidth: 300
	});
	this.$('.dropdown-button').dropdown({
		constrainWidth: false,
		inDuration: 300,
		outDuration: 225,
		hover: true
	});
});

Template.scorpiusMaterializeHeaderContainer.helpers({
	userPicture() {
		let defPicture = `https://avatars1.githubusercontent.com/u/12105945?v=3&s=200`;
		let profilePicture = Meteor.users.findOne(Meteor.userId).profile.picture.url;
		return profilePicture !== undefined ? profilePicture : defPicture;
	}
})

Template.scorpiusMaterializeHeaderContainer.events({
	'click .logout': function() {
		Meteor.logout();
	}
});

Template.scorpiusMaterializeTabs.onRendered(function() {
	this.$('ul.tabs').tabs();
});

Template.scorpiusMaterializeTabs.helpers({
	items: function() {
		return this;
	}
});

Template.scorpiusMaterializeTabs.events({
	'click a': function() {
		this.onClick();
	}
});
