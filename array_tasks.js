var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr3 = arr1.concat(arr2);
	},


	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map( function(element) {
			return element ** 2;
		})
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach( function(element) {
		  total += element;
		} )
		return total;
	},

//should find duplicate values in an array, returning a new array of the duplicates
	// findDuplicates: function (arr) {
	
	// },

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter( function(value) {
			return value !==valueToRemove;
		})
	},

//should find all occurences of a value, returning an array of index positions
	// findIndexesOf: function (arr, itemToFind) {
	// 	return arr.indexOf(itemToFind, arr);
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
