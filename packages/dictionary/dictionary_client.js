var subscription = Meteor.subscribe('scorpius_dictionary');

/**
 * Access the dictionary on any template
 */
Template.registerHelper('dict', function(name, defaultValue) {
  return scorpius.dictionary.get(name, defaultValue);
});

/**
 * Is the dictionary subscription ready
 */
scorpius.dictionary.isReady = function() {
  return subscription.ready();
}

/**
 * Is the dictionary subscription ready for templates
 */
Template.registerHelper('dictionaryReady', function() {
  return subscription.ready();
});

scorpius.dictionary.availableCategories = function() {
  return _.union.apply(this, Roles.helper(Meteor.userId(), 'dictionary.allowedCategories'));
};
