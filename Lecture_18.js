(function(){
	'use-strict';
	var numberArray = [1,2,3,4,5,6,7,8,9,10];
	var shoppingList = [
  		"Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
	];
	// console.log("Main Array: "+numberArray);

	function above5Filter(value){
		return value > 5;
	}

	angular.module("ShoppingListApp",[]).
	controller("ShoppingListController", ShoppingListController);

	ShoppingListController.$inject = ["$scope","$filter"];

	function ShoppingListController($scope,$filter){
		// var filteredArray = numberArray.filter(above5Filter);
		$scope.shoppingList = shoppingList;
		// console.log("Filtered Array: "+filteredArray);
	}	
})();