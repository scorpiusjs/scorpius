/**
 * Sets the default permissions to new users
 */
Meteor.users.after.insert(function (userId, doc) {
//   var curUserId = doc._id.ops[0]._id;
	var curUserId = doc._id;

  if (scorpius.adminExists) {
	
		// if there is a admin created we will set the default roles.
		var defaultRoles = Options.get('defaultRoles');
		Roles.addUserToRoles(curUserId, defaultRoles);
  
	} else {
	
		// If there is no admin, we will add the admin role to this new user.
		Roles.addUserToRoles(curUserId, 'admin');

		// Pass to the client if the admin exists
		scorpius.adminExists = true;
		Inject.obj('adminExists', { exists: true });
  }
});


/**
 * Pass to the client if there is a admin account
 */
if (Roles._collection) {
	scorpius.adminExists = Roles._collection.find({ roles: 'admin' }).count() !== 0;
} else {
	scorpius.adminExists = Meteor.users.find({ roles: 'admin' }).count() !== 0;
}

Inject.obj('adminExists', { exists: !!scorpius.adminExists });
	AccountsTemplates.configure({
	forbidClientAccountCreation: !!scorpius.adminExists
});
