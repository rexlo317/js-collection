'use strict';
/*var map_to_four_multiples_add_one = function(collection){
	for(let i=0; i<collection.length; i++)
		collection[i] = collection[i]*4+1;
	return collection;
};*/

var map_to_four_multiples_add_one = function(collection){
	return collection.map(a => a*4+1);
}
	
module.exports = map_to_four_multiples_add_one;
