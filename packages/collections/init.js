/**
 * Init the entities variable
 */
scorpius.collections = {};

scorpius.collections.hooks = {
  onCreated: [],
};

scorpius.collections.onCreated = function(cb) {
  this.hooks.onCreated.push(cb);
};

/**
 * Request the default templates using options
 */
Options.init('collectionsDefaultIndexTemplate');
Options.init('collectionsDefaultCreateTemplate');
Options.init('collectionsDefaultUpdateTemplate');
Options.init('collectionsDefaultDeleteTemplate');
