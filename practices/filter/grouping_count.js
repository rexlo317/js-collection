'use strict';

/*function grouping_count(collection) {
	let filteredCollection={};
	let itemCount = 0;
	for (let aCount=0; aCount<collection.length; aCount++)
	{
		itemCount = 0;
		if (!filteredCollection.hasOwnProperty(collection[aCount])){
			for (let i=0; i<collection.length; i++){
				if (collection[i] === collection[aCount])
					itemCount++;
			}
			filteredCollection[collection[aCount]] = itemCount;
		}
	}
	return filteredCollection;
}*/

function grouping_count(collection) {
	
	var filtered ={};
	var result = collection.filter(a => {
		if(filtered.hasOwnProperty(a))
			filtered[a]++;
		else
			filtered[a] = 1;
		return null;
		}); 
	return filtered;
}

module.exports = grouping_count;
