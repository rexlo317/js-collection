'use strict';
function map_to_even(collection){
	for (let i=0; i<collection.length; i++)
		collection[i] = collection[i] * 2;
  return collection;
}

/*function map_to_even(collection){
	return collection.map(a => a*2);
}*/
module.exports = map_to_even;
