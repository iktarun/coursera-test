(function(){
	'use strict';
	angular.module("DIApp",[]).
	controller("DIController",DIController);

	DIController.$inject = ['$scope','$filter'];

	function DIController($scope,$filter){
		$scope.name = "Tarun";

		$scope.upper = function(){
			var upperCase 	= $filter("uppercase");
			$scope.name  	= upperCase($scope.name);
		};
	}

}());

// !function(){"use strict";function n(n,e){n.name="Tarun",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();