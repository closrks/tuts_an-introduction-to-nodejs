var _ = require("underscore");

//** COLLECTIONS **//

// select method
var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42]
, topScorers = []
, scoreLimit = 90; 
topScorers = _.select(scores, function(score){ return score > scoreLimit;});
console.log("Select output: ", topScorers);

// pluck method
var Tuts = [{name : 'NetTuts', niche : 'Web Development'}, {name : 'WPTuts', niche : 'WordPress'}, {name : 'PSDTuts', niche : 'PhotoShop'}, {name : 'AeTuts', niche : 'After Effects'}];
var niches = _.pluck(Tuts, 'niche');
console.log("Pluck output: ", niches);

// map method
var names = _.pluck(Tuts, 'name').map(function (value){return value + '+'});
console.log("Map output: ", names);

// all method
var hasPassed = _.all(scores, function (value){return value > 50});
console.log("All output: ", hasPassed);

//** ARRAYS **//

// uniq method
var uniqTest = _.uniq([1,5,4,4,5,2,1,1,3,2,2,3,4,1]);
console.log("Uniq output: ", uniqTest);

// range method
var tens = _.range(0, 100, 10);
console.log("Range output", tens);

// intersection method
var eights = _.range(0, 100, 8), fives = _.range(0, 100, 5);
var common = _.intersection(tens, fives, eights);
console.log("Intersection output :", common);

//** OBJECTS **//

// key/value methods
var Tuts2 = { NetTuts : 'Web Development',  WPTuts : 'WordPress',  PSDTuts : 'PhotoShop', AeTuts : 'After Effects'};
var keys = _.keys(Tuts2), values = _.values(Tuts2);
console.log("Key/values output: ", keys + values);

// defaults
var tuts = { NetTuts : 'Web Development'};
var defaults = { NetTuts : 'Web Development', niche: 'Education'};
_.defaults(tuts, defaults);
console.log("Defaults output: ", tuts);

//** FUNCTIONS **//
var o = { greeting: "Howdy" }
, f = function(name) { return this.greeting +" "+ name; };
var greet = _.bind(f, o); 
console.log("Bind output: ", greet("Jess"));


//** TEMPLATING **//
var data =   {site: 'NetTuts'}, template =   'Welcome! You are at <%= site %>';
var parsedTemplate = _.template(template,  data );
console.log("Template output: ",parsedTemplate);