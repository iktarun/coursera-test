(function(){
	'use strict';
	angular.module("MsgApp",[]).
	controller("MsgController",DIController);

	DIController.$inject = ['$scope'];

	function DIController($scope){

		$scope.stateOfBeing = "1";
		
		$scope.changeImage = function(){
			$scope.stateOfBeing = "2";
		};
	}

}());

// !function(){"use strict";function n(n,e){n.name="Tarun",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();