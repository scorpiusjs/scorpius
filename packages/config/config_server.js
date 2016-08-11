/**
 * Restarts the server after updates
 */
scorpius.config.collection.after.update(function (userId, doc, fieldNames, modifier, options) {
  // Timeout is necessary to no enter a infinit loop of restarts
  Meteor.setTimeout(function () {
    console.log('Updating Scorpius config');
    process.exit();
  }, 500);
});

/**
 * Creates one object in the config collection
 */
if (scorpius.config.collection.find(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{}).count() === 0) {
  scorpius.config.collection.insert(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{}, function(){
    console.log("Scorpius config initialized");
  });
}

/**
 * Publications of the config. Only for admins
 */
Meteor.publish('scorpius_config', function() {
  if (!this.userId) {
    return [];
  }
  if (Roles.userHasPermission(this.userId, 'config.update')) {
    return scorpius.config.collection.find(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{});
  }
});

/**
 * Get the config from the database only once
 */
scorpius.config.object = scorpius.config.collection.findOne(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{});

/**
 * Send the data to the client (only public values).
 * It uses the injection method (meteorhacks:inject-initial) not
 * the publish/subcribe, because this is not meant to be reactive
 * and the values should be on the client when it starts.
 */
Meteor.startup(function () {
  if (!scorpius.config.getPublicFields()) {
    Inject.obj('scorpius.config', {});
    return;
  }

   var fields = { _id: 0 };

  //we needs to add in private fields so we can tell our query to not return them
  //so that private fields won't be injected and remain secure
  _.each(scorpius.config.getPrivateFields(), function(field) {
    fields[field] = 0;
  });

  var config = scorpius.config.collection.findOne(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{}, { fields: fields });

  Inject.obj('scorpius.config', config);
});
