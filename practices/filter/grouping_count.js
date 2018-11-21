'use strict';

function grouping_count(collection) {
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
}

module.exports = grouping_count;
