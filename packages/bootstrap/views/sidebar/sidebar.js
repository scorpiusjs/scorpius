Template.scorpiusBootstrapSidebar.onRendered(function() {
  this.autorun(function() {
    var depend = scorpius.links._collection.find().fetch();
    $('.scorpius-links a[data-toggle="collapse"]').collapse()
  })
})
