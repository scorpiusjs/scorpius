scorpius.attributes.registerAttribute('froala', {
  template: 'scorpiusAttributesFroala',
  previewTemplate: 'scorpiusAttributesFroalaColumn',
  getSchema: function(options) {
    return {
      type: String,
    };
  },

  valueOut: function() {
    return this.find('.editor').editable('getHTML', false, true);
  },
});

Options.init('froala.height');
scorpius.config.add('FROALA_ACTIVATION_KEY', 'froala', { public: true });
