Template.scorpiusBootstrapLayout.events({
  'click .scorpius-bootstrap-admin.toggled': function() {
    if ($(window).width() < 768) {
      $(".scorpius-bootstrap-admin").removeClass("toggled");
      $("html,body").removeClass("no-overflow");
    }
  },
  'click .menu-toggle': function () {
    $(".scorpius-bootstrap-admin").toggleClass("toggled");
    $("html,body").toggleClass("no-overflow");
  }
});

Template.scorpiusBootstrapHeader.events({
  'click .logout': function() {
    Meteor.logout();
  }
});

Template.scorpiusBootstrapTabs.helpers({
  items: function () {
    return this;
  }
});

Template.scorpiusBootstrapTabs.events({
  'click a': function () {
    this.onClick();
  }
});
