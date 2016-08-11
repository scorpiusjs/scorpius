Template.scorpiusBootstrapCollectionsCreate.events({
  'click .create-btn': function () {
    $('#scorpiusBootstrapCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('scorpiusBootstrapCollectionsCreateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
