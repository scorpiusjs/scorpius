scorpius.attributes.registerAttribute('summernote', {
  template: 'scorpiusAttributesSummernote',
  previewTemplate: 'scorpiusAttributesSummernoteColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    return this.find('.summernote').code();
  }
});

