Template.scorpiusMaterializeSidebar.onRendered(function() {
  this.autorun(function() {
    var depend = scorpius.links._collection.find().fetch();
    $('.materialize-sidebar .collapsible').collapsible();
  })
})
