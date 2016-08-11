/**
 * Adds the option the set scorpiusAttribute on SimpleSchema
 */
SimpleSchema.extendOptions({
  scorpiusAttribute: Match.Optional(String),
  scorpius: Match.Optional(Object)
});

/**
 * Definition of the attributes object
 */
scorpius.attributes = {};

/**
 * Returns the schema for the attribute
 */
scorpius.attribute = function(name, schema, options) {
  if (!_.has(scorpius.attributes, name)) {
    throw 'The attribute "' + name + '" does not exist';
  }
  schema = schema || {};
  options = options || {};
  var attributeSchema = scorpius.attributes[name].getSchema.call(this, options);
  var override = {
    scorpiusAttribute: name,
    autoform: {
      type: 'scorpius.' + name
    }
  };
  var attribute = scorpius.helpers.deepExtend(scorpius.helpers.deepExtend(schema, attributeSchema), override);
  return attribute;
};

/**
 * Returns proper tabular column for the attribute
 */
scorpius.attributeColumn = function(name, key, title, options = {}) {
  check(options, {
    orderable: Match.Optional(Boolean)
  });
  var attributeDef = scorpius.attributes[name];

  if (attributeDef.orderable && options.orderable !== false) {
    options.orderable = true;
  }

  return {
    data: key,
    title: title,
    defaultContent: '',
    orderable: !!options.orderable,
    render: function() {
      return '';
    },
    createdCell: function(cell, cellData, rowData) {
      var collection = rowData._collection();
      var schema = rowData._collection().simpleSchema()._schema[key];
      var data = {
        key: key,
        value: cellData,
        item: rowData,
        collection: collection,
        schema: schema,
      };
      var template = ReactiveTemplates.get('attributePreview.' + name);
      Blaze.renderWithData(Template[template], data, cell);
    }
  };
};

/**
 * Helper function to use arrays of attributes (Ex: array of images)
 */
scorpius.arrayOfAttribute = function(name, schema, options) {
  var subSchema = new SimpleSchema({
    item: scorpius.attribute(name, {
      autoform: {
        label: false
      }
    })
  });
  return scorpius.helpers.deepExtend(schema, {
    type: [subSchema]
  });
};

/**
 * Creates a new attribute
 */
scorpius.attributes.registerAttribute = function(name, attribute) {
  check(name, String);
  check(attribute, {
    template: Match.Optional(String),
    columnTemplate: Match.Optional(String),
    previewTemplate: Match.Optional(String),
    getSchema: Function,
    valueOut: Match.Optional(Function),
    valueIn: Match.Optional(Function),
    valueConverters: Match.Optional(Function),
    contextAdjust: Match.Optional(Function),
    orderable: Match.Optional(Boolean)
  });

  if (attribute.template) {
    ReactiveTemplates.request('attribute.' + name, attribute.template);
  }

  if (attribute.previewTemplate) {
    ReactiveTemplates.request('attributePreview.' + name, attribute.previewTemplate);
  }

  scorpius.attributes[name] = attribute;

  if (Meteor.isClient && attribute.template) {
    Tracker.autorun(function () {
      AutoForm.addInputType('scorpius.' + name, {
        template: ReactiveTemplates.get('attribute.' + name),
        valueIn: attribute.valueIn,
        valueOut: attribute.valueOut,
        valueConverters: attribute.valueConverters,
        contextAdjust: attribute.contextAdjust
      });
    });
  }
};
