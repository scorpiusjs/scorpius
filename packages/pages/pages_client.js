Template.registerHelper('pages', function(kw) {
  var options = (kw && kw.hash) || {};
  return scorpius.pages.collection.find(options);
});

ReactiveTemplates.helpers('pages.index', {
  tabularTable: function() {
    return scorpius.pages.tabular;
  },
});

/**
 * Create Route
 */
ReactiveTemplates.onRendered('pages.create', function() {
  if (_.keys(scorpius.pages.templates).length == 1) {
    Session.set('adminPagesCreate_choosenTemplate', _.keys(scorpius.pages.templates)[0]);
  } else {
    Session.set('adminPagesCreate_choosenTemplate', null);
  }
});

ReactiveTemplates.helpers('pages.create', {
  choosenTemplate: function() {
    var name = Session.get('adminPagesCreate_choosenTemplate');
    return name && scorpius.pages.templates[name];
  },

  templates: function() {
    return _.values(scorpius.pages.templates);
  },
});

ReactiveTemplates.events('pages.create', {
  'click .template-choose': function() {
    Session.set('adminPagesCreate_choosenTemplate', this.template);
  },

  'click .cancel-btn': function() {
    if (_.keys(scorpius.pages.templates).length == 1) {
      Meteor.defer(function() {
        RouterLayer.go('pages.index');
      });
    } else {
      Session.set('adminPagesCreate_choosenTemplate', null);
    }
  },

  'click .submit-btn': function() {
    $('#scorpiusPagesCreateForm').submit();
  },
});

AutoForm.hooks({
  scorpiusPagesCreateForm: {
    before: {
      insert: function(doc) {
        var self = this;
        var name = Session.get('adminPagesCreate_choosenTemplate');
        if (!name) {
          self.result(false);
        } else {
          doc = scorpius.pages.templates[name].schema.clean(doc, {
            extendAutoValueContext: {
              isInsert: true,
              userId: Meteor.userId(),
            },
          });

          Meteor.call('scorpius_pageWithUrl', doc.url, function(error, result) {
            if (!result) {
              self.result(doc);
            } else {
              scorpius.pages.templates[name].schema.namedContext('scorpiusPagesCreateForm').addInvalidKeys([{name: 'url', type: 'notUnique'}]);
              self.result(false);
            }
          });
        }
      },
    },
    onSuccess: function() {
      RouterLayer.go('pages.index');
    },
  },
});

/**
 * Update route
 */
AutoForm.hooks({
  scorpiusPagesUpdateForm: {
    before: {
      update: function(doc) {
        var self = this;
        var updatingPage = doc.$set;
        var name = updatingPage.template;
        if (!name) {
          self.result(false);
        } else {
          doc = scorpius.pages.templates[name].schema.clean(doc, {
            extendAutoValueContext: {
              isUpdate: true,
              userId: Meteor.userId(),
            },
          });
          Meteor.call('scorpius_pageWithUrl', updatingPage.url, function(error, result) {
            if (result && result._id != self.docId) {
              scorpius.pages.templates[name].schema.namedContext('scorpiusPagesUpdateForm').addInvalidKeys([{name: 'url', type: 'notUnique'}]);
              self.result(false);
            } else {
              self.result(doc);
            }
          });
        }
      },
    },
    onSuccess: function() {
      RouterLayer.go('pages.index');
    },
  },
});

ReactiveTemplates.onCreated('pages.update', function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('pageById', RouterLayer.getParam('_id'));
  });
});

ReactiveTemplates.helpers('pages.update', {
  getSchema: function() {
    var item = scorpius.pages.collection.findOne(RouterLayer.getParam('_id'));
    return item && scorpius.pages.templates[item.template] && scorpius.pages.templates[item.template].schema;
  },

  item: function() {
    return scorpius.pages.collection.findOne(RouterLayer.getParam('_id'));
  },
});

ReactiveTemplates.events('pages.update', {
  'click .save-btn': function() {
    $('#scorpiusPagesUpdateForm').submit();
  },
});

/**
 * Delete route
 */
ReactiveTemplates.onCreated('pages.delete', function() {
  var self = this;
  self.autorun(function() {
   self.subscribe('pageById', RouterLayer.getParam('_id'));
 });
});

ReactiveTemplates.helpers('pages.delete', {
  onSuccess: function() {
    return function(result) {
      RouterLayer.go('pages.index');
    };
  },

  item: function() {
    return scorpius.pages.collection.findOne(RouterLayer.getParam('_id'));
  },
});

ReactiveTemplates.events('pages.delete', {
  'click .confirm-delete': function() {
    scorpius.pages.collection.remove(this._id, function() {
      RouterLayer.go('pages.index');
    });
  },
});

/**
 * Reactive Templates
 */
ReactiveTemplates.request('pages.loading', 'scorpiusPages_defaultLoading');
ReactiveTemplates.request('pages.notFound', 'scorpiusPages_defaultNotFound');

/**
 * Pages main template
 */
Template.scorpiusPages_mainTemplate.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('page', RouterLayer.getParam('url'));
  });
});

Template.scorpiusPages_mainTemplate.helpers({
  page: function() {
    return scorpius.pages.collection.findOne({ url: RouterLayer.getParam('url') });
  },

  layout: function() {
    var page = scorpius.pages.collection.findOne({ url: RouterLayer.getParam('url') });
    var template = scorpius.pages.templates[page.template];
    return template.layout;
  },

  template: function() {
    var page = scorpius.pages.collection.findOne({ url: RouterLayer.getParam('url') });
    return page.template;
  },
});
