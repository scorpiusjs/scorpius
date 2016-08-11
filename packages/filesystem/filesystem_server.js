Meteor.methods({
  getFileDataToEarse: function(fileId) {
    check(fileId, String);
    var doc = scorpius.filesystem.collection.findOne(fileId);
    if (doc) {
      Roles.checkPermission(Meteor.userId(), 'filesystem.remove', doc);
      return doc;
    }
  },
});
