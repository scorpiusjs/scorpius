scorpius.attributes.registerAttribute('materialnote', {
  template: 'scorpiusAttributesMaterialnote',
  previewTemplate: 'scorpiusAttributesMaterialnoteColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    return this.find('.materialnote').code();
  }
});

