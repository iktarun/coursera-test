//*************** NORMAL MODULE AND CONTROLLER DEFINTION ************************//

// (function(){
// 	'use strict';
// 	angular.module("myFirstApp", [])
// 	.controller('MyFirstController', function($scope){
// 		$scope.name = "Tarun";
// 		$scope.sayHello =  function(){
// 			return "Hello Coursera";
// 		};

// 	});
// })();



// ************************ Name Calculator App **************** //
(function(){
	'use-strict';
	angular.module("NameCalculatorApp",[]).
		controller('NameCalculatorController', function($scope){
		
		$scope.name 		= "";
		$scope.totalValue 	= 0;

		$scope.displayNumeric = function() {
			var totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue  = totalNameValue; 
		};

		function calculateNumericForString(Mystring){
			var totalStringValue = "";
			for(var i=0; i< Mystring.length; i++){
				totalStringValue += Mystring.charCodeAt(i);
			}
			return totalStringValue;
		}
	});
})();

//**************************************************** //