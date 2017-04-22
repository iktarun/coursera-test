var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("shoppingList list: "+shoppingList);

var searchValue = "Bismol";

function containsFilter(value){
	return value.indexOf(searchValue) !== -1;
}

var searchedList = shoppingList.filter(containsFilter);
console.log("Searched Filtered List is: "+searchedList);

