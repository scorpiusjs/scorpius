/**
 * Creates the dictionary mongo collection
 */
scorpius.dictionary = new Mongo.Collection('dictionary');

/**
 * To get reactively if the dictionary is active
 */
scorpius.dictionary._isActiveDependency = new Tracker.Dependency();
scorpius.dictionary._isActive = false;
scorpius.dictionary.isActive = function() {
  this._isActiveDependency.depend();
  return this._isActive;
};

/**
 * Register dictionary actions and helpers for roles
 */
Roles.registerAction('dictionary.update', true);
Roles.registerHelper('dictionary.allowedCategories', function() {
  return scorpius.dictionary.simpleSchema()._firstLevelSchemaKeys;
});

/**
 * Dictionary permissions
 */
scorpius.dictionary.deny({
  /**
   * No one can insert a dicionary object
   * becouse it only uses one and its created
   * automatically
   */
  'insert': function(userId, doc) {
    return true;
  },
  /**
   * No one can remove a dicionary object
   * becouse it only uses one.
   */
  'remove': function(userId, doc) {
    return true;
  }
});

scorpius.dictionary.allow({
  'update': function(userId, doc, fields, modifier) {
    return Roles.allow(userId, 'dictionary.update', userId, doc, fields, modifier);
  }
});

scorpius.dictionary.deny({
  'update': function(userId, doc, fields, modifier) {
    return Roles.deny(userId, 'dictionary.update', userId, doc, fields, modifier);
  }
});

/**
 * Only allow to edit allowed categories
 * If is set to false, can update all fields
 */
scorpius.dictionary.deny({
  update: function (userId, doc, fields, modifier) {
    var allowedFields = _.union.apply(this, Roles.helper(Meteor.userId(), 'dictionary.allowedCategories'));
    if (allowedFields === false && _.difference(fields, allowedFields).length > 0) {
      return true;
    }
  }
});

/**
 * Function to add a definition to the dictionary.
 * This just modifies the schema of the dictionary object
 * and adds the form in the admin.
 */
scorpius.dictionary.addDefinition = function(name, category, attribute) {
  var newSchema = (this.simpleSchema() && _.clone(this.simpleSchema()._schema)) || {};

  newSchema[category] = newSchema[category] || {
    type: Object,
    optional: true
  };

  newSchema[category + '.' + name] = _.extend({
    optional: true
  }, attribute);

  this.attachSchema(new SimpleSchema(newSchema));

  if (!this._isActive) {
    this._isActive = true;
    this._isActiveDependency.changed();
  }
};

/**
 * Returns the value of the definition.
 * If the definition doesn't exists it
 * returns the defaultValue
 */
scorpius.dictionary.get = function(path, defaultValue) {
  // Sets empty string to avoid problems on templates
  defaultValue = !defaultValue || defaultValue instanceof Spacebars.kw ? undefined : defaultValue;

  if (!defaultValue && scorpius.dictionary.simpleSchema()) {
    var def = scorpius.dictionary.simpleSchema()._schema[path];
    if (def && _.has(def, 'defaultValue')) {
      defaultValue = _.isFunction(def.defaultValue) ? def.defaultValue() : def.defaultValue;
    }
  }

  var dictionaryId = Meteor.isServer && process.env.SCORPIUS_APPID ? { _id: process.env.SCORPIUS_APPID }: {};
  var dictionary = this.findOne(dictionaryId);
  return scorpius.helpers.searchObjectWithDots(dictionary, path) || defaultValue;
};
