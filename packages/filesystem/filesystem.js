Roles.registerAction('filesystem.upload', true); // input: { name, meta, uploader, uploadedBy }.
Roles.registerAction('filesystem.remove', true); // input: { url, name, meta, uploader, uploadedBy }.

scorpius.filesystem = {};

/**
 * Files stored in the database
 */
scorpius.filesystem.collection = new Mongo.Collection('scorpiusFiles');

/**
 * Files collection schema
 */
scorpius.filesystem.collection.attachSchema(new SimpleSchema({
  url: {
    type: String,
  },
  name: {
    type: String,
  },
  uploader: {
    type: String,
  },
  meta: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  size: {
    type: Number,
    optional: true,
  },
  uploadedBy: {
    type: String,
    optional: true,
  },
}));

scorpius.filesystem.collection.allow({
  insert: function(userId, doc) {
    return Roles.allow(userId, 'filesystem.upload', doc);
  },

  remove: function(userId, doc) {
    return Roles.allow(userId, 'filesystem.upload', doc);
  },
});

scorpius.filesystem.collection.deny({
  insert: function(userId, doc) {
    return Roles.deny(userId, 'filesystem.remove', doc);
  },

  remove: function(userId, doc) {
    return Roles.deny(userId, 'filesystem.remove', doc);
  },
});
