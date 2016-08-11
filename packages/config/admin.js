/**
 * Init the template name variable
 */
ReactiveTemplates.request('configUpdate');

/**
 * Register the route
 */
RouterLayer.route('/admin/config', {
  layout: 'layout',
  template: 'configUpdate',
  name: 'config.update',
  reactiveTemplates: true
});

/**
 * Ensure user is logged in
 */
scorpius.accounts.addProtectedRoute('config.update');

/**
 * Register the link
 */
if (Meteor.isClient) {
  Tracker.autorun(function () {
    if (!scorpius.config.isActive()) return;
    scorpius.links.add({
      index: 100,
      identifier: 'config-update',
      title: i18n('config.update.title'),
      routeName: 'config.update',
      activeRouteRegex: 'config',
      permission: 'config.update'
    });
  });
}

/**
 * Create the template helpers for a dictionary
 */
if (Meteor.isClient) {

  ReactiveTemplates.onCreated('configUpdate', function() {
    this.subscribe('scorpius_config');
  });

  ReactiveTemplates.onRendered('configUpdate', function() {
    var categories = _.uniq(_.pluck(scorpius.config.collection.simpleSchema()._schema, 'category'));
    var defaultCategory = categories && categories[0];
    Session.set('configUpdateCurrentCategory', defaultCategory);
  });

  ReactiveTemplates.events('configUpdate', {
    'click [data-category]': function(event) {
      var newCategory = $(event.currentTarget).attr('data-category');
      Session.set('configUpdateCurrentCategory', newCategory);
    }
  });

  ReactiveTemplates.helpers('configUpdate', {
    getDoc: function() {
      return scorpius.config.collection.findOne();
    },
    getFields: function() {
      var currentCategory = Session.get('configUpdateCurrentCategory');
      return _.pluck(_.where(scorpius.config.collection.simpleSchema()._schema, { category: currentCategory }), 'name');
    },
    getCategories: function() {
      return _.uniq(_.pluck(scorpius.config.collection.simpleSchema()._schema, 'category'));
    }
  });
}
