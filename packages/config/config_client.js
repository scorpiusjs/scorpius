/**
 * Fetch the config at the start of the program
 */
scorpius.config.object = Injected.obj('scorpius.config');

scorpius.config.getCategories = function() {
  return _.uniq(_.pluck(scorpius.config.collection.simpleSchema()._schema, 'category'));
};
