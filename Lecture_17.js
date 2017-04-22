(function(){
	'use-strict';
	var ShoppingList1 = ["A","B","C","D","E","F"];

	var ShoppingList2 =[
						{
							name : "A",
							quantity : "1",
						},
						{
							name : "B",
							quantity : "5",
						},
						{
							name : "C",
							quantity : "7",
						},
						{
							name : "D",
							quantity : "4",
						},
						{
							name : "E",
							quantity : "4",
						},
						{
							name : "F",
							quantity : "9",
						},
						{
							name : "G",
							quantity : "3",
						}	
					  ];


	angular.module("ShoppingListApp",[]).
	controller("ShoppingListController", ShoppingListController);

	ShoppingListController.$inject = ["$scope"];

	function ShoppingListController($scope){
		// $scope.ShoppingList1 = ShoppingList1;
		$scope.ShoppingList2 = ShoppingList2;
		$scope.AddItem = function(){
			var newItem = {
				name: $scope.newItemName ,
				quantity : $scope.newItemQuantity
			};
			ShoppingList2.push(newItem);
		};
	}	
})();