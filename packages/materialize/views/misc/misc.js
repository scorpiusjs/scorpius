Template.scorpiusMaterializeHasOneAttribute.onRendered(function() {
  if (this.$('.scorpiusAttributesHasOne').val()) {
    var id = this.$('.scorpiusAttributesHasOne').attr('id');
    $('label[for="' + id + '"]').addClass('active');
  }
});

ReactiveTemplates.onRendered('attribute.froala', function() {
  var id = this.$('.scorpiusFroala').attr('id');
  this.$('.scorpiusFroala').css({ 'margin-top': '2rem' });
  Meteor.setTimeout(function() {
    $('label[for="' + id + '"]').addClass('active');
    $('label[for="' + id + '"]').css({ top: '0' });
  }, 100);
});

Template.scorpiusMaterializeHasOneAttribute.events({
  'focus .selectize-input input': function(event, template) {
    var id = template.$('.scorpiusAttributesHasOne').attr('id');
    $('label[for="' + id + '"]').addClass('active teal-text');
  },

  'blur .selectize-input input': function(event, template) {
    var id = template.$('.scorpiusAttributesHasOne').attr('id');
    $('label[for="' + id + '"]').removeClass('teal-text');
    if (!template.$('.scorpiusAttributesHasOne').val()) {
      $('label[for="' + id + '"]').removeClass('active');
    }
  },

  'keyup .selectize-input input': function(event, template) {
    if ($(event.currentTarget).val() || template.$('.scorpiusAttributesHasOne').val()) {
      var id = template.$('.scorpiusAttributesHasOne').attr('id');
      $('label[for="' + id + '"]').addClass('active');
    }
  },
});

Template.scorpiusMaterializeHasManyAttribute.onRendered(function() {
  if (this.$('.scorpiusAttributesHasMany').val()) {
    var id = this.$('.scorpiusAttributesHasMany').attr('id');
    $('label[for="' + id + '"]').addClass('active');
  }
});

Template.scorpiusMaterializeHasManyAttribute.events({
  'focus .selectize-input input': function(event, template) {
    var id = template.$('.scorpiusAttributesHasMany').attr('id');
    $('label[for="' + id + '"]').addClass('active teal-text');
  },

  'blur .selectize-input input': function(event, template) {
    var id = template.$('.scorpiusAttributesHasMany').attr('id');
    $('label[for="' + id + '"]').removeClass('teal-text');
    if (!template.$('.scorpiusAttributesHasMany').val()) {
      $('label[for="' + id + '"]').removeClass('active');
    }
  },

  'keyup .selectize-input input': function(event, template) {
    if ($(event.currentTarget).val() || template.$('.scorpiusAttributesHasMany').val()) {
      var id = template.$('.scorpiusAttributesHasMany').attr('id');
      $('label[for="' + id + '"]').addClass('active');
    }
  },
});
