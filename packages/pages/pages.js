scorpius.pages = {
  templates: {},
  collection: new Meteor.Collection('pages'),
};

Roles.registerAction('pages.index', true);
Roles.registerAction('pages.insert', true);
Roles.registerAction('pages.update', true);
Roles.registerAction('pages.remove', true);

scorpius.pages.collection.attachRoles('pages');

scorpius.pages.collection.helpers({
  path: function () {
    return RouterLayer.pathFor('page', { url: this.url });
  }
});

/**
 * Create a new template
 */
scorpius.pages.addTemplate = function (options, schema) {
  if (!options.template) {
    throw new Meteor.Error('scorpius', 'Template is required');
  }

  var newTemplate = _.extend({
    name: options.template,
    description: 'No description'
  }, options);

  var newSchema = scorpius.pages.getNewTemplateSchema(schema, newTemplate);
  newTemplate.schema = new SimpleSchema(newSchema);

  scorpius.pages.templates[newTemplate.template] = newTemplate;

  return newTemplate;
};

scorpius.pages.getNewTemplateSchema = function (schema, newTemplate) {
  return _.extend({
    title: {
      type: String,
      label: scorpius.helpers.getTranslation('pages.schema.title')
    },
    url: {
      type: String,
      regEx: /^[a-z0-9A-Z_-]+$/,
      label: scorpius.helpers.getTranslation('pages.schema.url')
    },
    template: {
      type: String,
      autoform: {
        omit: true
      },
      autoValue: function () {
        return newTemplate.template;
      }
    },
    createdAt: scorpius.attribute('createdAt'),
    updatedAt: scorpius.attribute('updatedAt'),
    createdBy: scorpius.attribute('createdBy')
  }, schema);
};

var Tabular = null;

if (Package['nicolaslopezj:tabular-materialize']) {
  Tabular = Package['nicolaslopezj:tabular-materialize'].Tabular;
}

if (Package['aldeed:tabular']) {
  Tabular = Package['aldeed:tabular'].Tabular;
}

if (!Tabular) {
  throw new Meteor.Error('scorpius', 'You must install tabular to use this package');
}

scorpius.pages.tabular = new Tabular.Table({
  name: 'PagesIndex',
  collection: scorpius.pages.collection,
  stateSave: true,
  columns: [
    { data: 'title', title: i18n('pages.schema.title') },
    { data: 'url', title: i18n('pages.schema.url'), render: function(val, type, doc) { return '<a href="' + RouterLayer.pathFor('page', doc) + '">' + RouterLayer.pathFor('page', doc) + '</a>'; } }
  ]
});

/**
 * Wait the initialization of flow router
 */
 if (RouterLayer.router == 'flow-router') {
   RouterLayer.flowRouter.wait();
 }

/**
 * Register page routes on meteor startup
 */
Meteor.startup(function(){
  RouterLayer.route('/:url', {
    name: 'page',
    template: 'scorpiusPages_mainTemplate'
  });

  if (RouterLayer.router == 'flow-router') {
    RouterLayer.flowRouter.initialize();
  }
});
