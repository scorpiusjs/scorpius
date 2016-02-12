
let scorpius = {};
scorpius.config = {};

Meteor.call("getConfig", (error, result) => { 
	if (error) {
		throw new Meteor.Error('scorpius:core:startup', error);
	} 
	if (result) {
		scorpius.config = result;
	} 
});

export default scorpius;