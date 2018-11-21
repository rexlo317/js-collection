'use strict';

function isMultipleOfThree(element){
	if (element%3 === 0)
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



function choose_multiples_of_three(collection) {
	return collection.filter(a => isMultipleOfThree(a));
}

/*function choose_multiples_of_three(collection) {
	let filteredCollection=[];
	for (let aCount=0; aCount<collection.length; aCount++)
	{
		if (collection[aCount]%3===0){
			filteredCollection.push(collection[aCount]);
		}
	}
	return filteredCollection;
}*/

module.exports = choose_multiples_of_three;
