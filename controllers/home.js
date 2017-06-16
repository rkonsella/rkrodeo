(function() {
    'use strict';
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl($scope) {
		
			$scope.color = "#fefefe";


			$scope.location = {
				city: 		"Schenectady",
				state: 		"New York",
				country: 	"USA"	
			};

			function getMapsLink(){
				return "http://maps.google.com/?q=" +
					$scope.location.city + ", " +
					$scope.location.state + " " +
					$scope.location.country;
			}



		}
}());