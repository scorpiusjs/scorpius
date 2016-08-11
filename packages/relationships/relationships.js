var onCreated = function() {
  var self = this;

  self.selectInput = new ReactiveVar(null);
  self.observer = new ReactiveVar(null);

  self.autorun(function() {
    var dataContext = Template.currentData();
    var schema = AutoForm.getSchemaForField(dataContext.name);
    self.subscribe(schema.scorpius.publicationName);
  });

  self.autorun(function() {
    var dataContext = Template.currentData();
    var instance = Template.instance();
    if (!instance.selectInput.get()) return;
    var schema = AutoForm.getSchemaForField(dataContext.name);
    var filter = schema.scorpius.filter(Meteor.userId());
    var transform = function(item) {
      var newItem = { _id: item._id };
      for (var i = 0; i < schema.scorpius.fields.length; i++) {
        var field = schema.scorpius.fields[i];
        newItem[field] = scorpius.helpers.searchObjectWithDots(item, field, true);
      }

      return newItem;
    };

    var items = _.clone(instance.selectInput.get().items);
    instance.selectInput.get().clearOptions();

    var observer = schema.scorpius.collection.find(filter).observe({
      added: function(newItem) {
        var elem = instance.selectInput.get().getItem(newItem._id);
        if (elem && elem[0]) {
          instance.selectInput.get().updateOption(newItem._id, transform(newItem));
        } else {
          instance.selectInput.get().addOption(transform(newItem));
        }

        if (_.contains(items, newItem._id)) {
          instance.selectInput.get().addItem(newItem._id, true);
        }
      },

      changed: function(newItem, oldItem) {
        instance.selectInput.get().updateOption(oldItem._id, transform(newItem));
      },

      removed: function(item) {
        var items = _.isArray(dataContext.value) ? dataContext.value : [dataContext.value];
        if (!_.contains(items, item._id)) {
          instance.selectInput.get().removeOption(item._id);
        }
      },
    });

    instance.observer.set(observer);
  });
};

var onRendered = function() {
  var dataContext = Template.currentData();
  var schema = AutoForm.getSchemaForField(dataContext.name);
  var self = this;
  var items = _.isArray(dataContext.value) ? dataContext.value : [dataContext.value];
  var labelField = _.isArray(schema.scorpius.titleField) ? schema.scorpius.titleField[0] : schema.scorpius.titleField;
  var defaultOptions = [];
  _.each(items, function(itemId) {
    var newItem = { _id: itemId };
    newItem[labelField] = 'Loading...';
    defaultOptions.push(newItem);
  });

  var element = this.$('select').selectize({
    valueField: '_id',
    labelField: labelField,
    items: items,
    searchField: schema.scorpius.fields,
    sortField: _.union(
      (_.isArray(schema.scorpius.sortFields) ?
          _.map(schema.scorpius.sortFields, function(sort_field) { return { field: sort_field, direction: 'asc' }; }) :

          _.map(schema.scorpius.sortFields, function(sort_order, sort_field) { return { field: sort_field, direction: sort_order }; })),

      [{ field: '$score' }]
    ),
    plugins: ['remove_button'],
    createFilter: schema.scorpius.createFilter,
    create: schema.scorpius.create && function(input, callback) {
      schema.scorpius.create(input, function(value) {
        var select = self.selectInput.get();
        if (select.settings.mode == 'multi') {
          select.setTextboxValue('');
          select.addItem(value);
        } else {
          select.setValue(value);
        }

        callback(value);
      });
    },

    options: defaultOptions,
    render: schema.scorpius.render,
  });
  Template.instance().selectInput.set(element[0].selectize);
};

var onDestroyed = function() {
  if (this.selectInput.get()) {
    this.selectInput.get().destroy();
  }

  if (this.observer.get()) {
    this.observer.get().stop();
  }
};

ReactiveTemplates.onRendered('attribute.hasMany', onCreated);
ReactiveTemplates.onRendered('attribute.hasOne', onCreated);
ReactiveTemplates.onRendered('attribute.hasMany', onRendered);
ReactiveTemplates.onRendered('attribute.hasOne', onRendered);
ReactiveTemplates.onDestroyed('attribute.hasMany', onDestroyed);
ReactiveTemplates.onDestroyed('attribute.hasOne', onDestroyed);

ReactiveTemplates.helpers('attributePreview.hasMany', {
  val: function() {
    var count = this.value.length;
    if (!this.schema) {
      return '';
    }

    if (count != 1) {
      return count + ' ' + this.schema.scorpius.pluralName;
    }

    return count + ' ' + this.schema.scorpius.singularName;
  },
});

ReactiveTemplates.onCreated('attributePreview.hasOne', function() {
  var self = this;
  self.autorun(function() {
    var dataContext = Template.currentData();
    self.subscribe(dataContext.schema.scorpius.publicationName + '_row', dataContext.value);
  });
});

ReactiveTemplates.helpers('attributePreview.hasOne', {
  val: function() {
    var item = this.schema && this.schema.scorpius.collection.findOne(this.value);
    if (item) {
      if (_.isArray(this.schema.scorpius.titleField)) {
        return this.schema.scorpius.titleField.map((field) => {
          return scorpius.helpers.searchObjectWithDots(item, field, true);
        }).join(' | ');
      } else {
        return scorpius.helpers.searchObjectWithDots(item, this.schema.scorpius.titleField, true);
      }
    }
  },
});
