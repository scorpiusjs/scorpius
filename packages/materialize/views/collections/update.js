Template.scorpiusMaterializeCollectionsUpdate.events({
  'click .save-btn': function () {
    $('#scorpiusMaterializeCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('scorpiusMaterializeCollectionsUpdateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
