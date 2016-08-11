var subSchema = new SimpleSchema({
  url: {
    type: String
  },
  fileId: {
    type: String,
    optional: true,
  },
  info: {
    type: Object,
    optional: true
  },
  'info.width': {
    type: Number,
    optional: true
  },
  'info.height': {
    type: Number,
    optional: true
  },
  'info.backgroundColor': {
    type: String,
    optional: true
  },
  'info.primaryColor': {
    type: String,
    optional: true
  },
  'info.secondaryColor': {
    type: String,
    optional: true
  },
  meta: {
    type: Object,
    optional: true,
    blackbox: true,
  }
});

scorpius.attributes.registerAttribute('image', {
  template: 'scorpiusAttributesImageUpload',
  previewTemplate: 'scorpiusAttributesImageUploadColumn',
  getSchema: function(options) {
    return {
      type: subSchema
    };
  },
  valueOut: function() {
    return Session.get('image' + this.attr('data-schema-key'));
  },
});

scorpius.attributes.registerAttribute('images', {
  template: 'scorpiusAttributesImagesUpload',
  previewTemplate: 'scorpiusAttributesImagesUploadColumn',
  getSchema: function(options) {
    return {
      type: [subSchema]
    };
  },
  valueOut: function() {
    return Session.get('images' + this.attr('data-schema-key'));
  },
});
