// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by test.js.
import { name as packageName } from "meteor/scorpiusjs:legacy-scope";

// Write your tests here!
// Here is an example.
Tinytest.add('test - example', function (test) {
  test.equal(packageName, "test");
});
