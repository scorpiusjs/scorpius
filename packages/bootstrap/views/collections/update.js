Template.scorpiusBootstrapCollectionsUpdate.events({
  'click .save-btn': function () {
    $('#scorpiusBootstrapCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('scorpiusBootstrapCollectionsUpdateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
