// imports
import fs from 'fs';

let scorpius = {};
scorpius.config = scorpius.config || {};

const configFile = process.cwd() + '/assets/app/scorpius.json';
scorpius.config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

Meteor.startup( () => {
	Meteor.methods({
		getConfig: () => {
			// return scorpius.config;
			console.log(scorpius.config);
		}
	});
});


export default scorpius;