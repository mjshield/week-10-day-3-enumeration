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
	findDuplicates: function (arr) {
	
	},

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
