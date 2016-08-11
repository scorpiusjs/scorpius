/**
 * If its on server, inserts the dictionary object
 */
if (scorpius.dictionary.find(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{}).count() === 0) {
  // scorpius.dictionary.remove(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{});
  scorpius.dictionary.insert(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{}, function(){
    console.log("Scorpius dictionary initialized");
  });
}

/**
 * Publications of the dictionary
 */
Meteor.publish('scorpius_dictionary', function() {
  return scorpius.dictionary.find(process.env.SCORPIUS_APPID?{_id:process.env.SCORPIUS_APPID}:{});
});
