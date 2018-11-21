'use strict';

function choose_multiples_of_three(collection) {
	let filteredCollection=[];
	for (let aCount=0; aCount<collection.length; aCount++)
	{
		if (collection[aCount]%3===0){
			filteredCollection.push(collection[aCount]);
		}
	}
	return filteredCollection;
}

module.exports = choose_multiples_of_three;
