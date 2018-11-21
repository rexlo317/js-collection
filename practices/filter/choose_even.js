'use strict';

function isEven(element){
	if (element%2 === 0)
		return true;
	else
		return false;
}

function myFilter(functionPara, collection){
	let filteredCollection=[];
	for (let aCount=0; aCount<collection.length; aCount++)
	{
		if (functionPara(collection[aCount])){
			filteredCollection.push(collection[aCount]);
		}
	}
	return filteredCollection;
}


/*function choose_even(collection) {
	return myFilter(isEven,collection);
}*/

function choose_even(collection) {
	let filteredCollection=[];
	for (let aCount=0; aCount<collection.length; aCount++)
	{
		if (collection[aCount]%2===0){
			filteredCollection.push(collection[aCount]);
		}
	}
	return filteredCollection;
}

module.exports = choose_even;
