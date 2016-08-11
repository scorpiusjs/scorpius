Template.scorpiusMaterializeCollectionsCreate.events({
  'click .create-btn': function () {
    $('#scorpiusMaterializeCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('scorpiusMaterializeCollectionsCreateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
