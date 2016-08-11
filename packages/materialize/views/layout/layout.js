Template.scorpiusMaterializeLayout.onRendered(function() {

});

Template.scorpiusMaterializeHeaderContainer.onRendered(function() {
  $('#sidenav-overlay').click();
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({
    constrain_width: false,
  });
});

Template.scorpiusMaterializeHeaderContainer.events({
  'click .logout': function() {
    Meteor.logout();
  },
});

Template.scorpiusMaterializeTabs.onRendered(function() {
  this.$('ul.tabs').tabs();
});

Template.scorpiusMaterializeTabs.helpers({
  items: function() {
    return this;
  },
});

Template.scorpiusMaterializeTabs.events({
  'click a': function() {
    this.onClick();
  },
});
