(function () {
	'use strict';
	angular.module('rodeo', [
		'ngAnimate',
		'ngResource',
		'ngSanitize',
		'ngTouch',
		'ngStorage',
		'ngStore',
		'ui.router',
		'ui.utils',
		'ui.load',
		'ui.jp',
		'oc.lazyLoad']);
	var app = angular.module('rodeo', ['ui.router']);
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('parked', {
				url: '/parked',
				templateUrl: 'states/parked.html'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'states/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'states/about.html'
			})
			.state('watson', {
				url: '/watson',
				templateUrl: 'states/watson.html',
				controller: "WatsonCtrl as ctrl"
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'states/projects.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'states/contact.html'
			})
			.state('watson.landing', {
				url: '/',
				templateUrl: 'states/watson/landing.html'
			})
			.state('watson.germany', {
				url: '/germany',
				templateUrl: 'states/watson/countries/germany.html'
			});
	});
	app.controller("GlobalCtrl", function () {
	});
	app.controller("HomeCtrl", function () {
	});
	app.controller("WatsonCtrl", function ($scope,$state) {
		this.currentState = $state.current.name;
		this.testVal = "this is a string for testing";
		this.stateName = function(){
			var name = this.currentState;
			name = str.slice(7);
			if (name == "landing"){
				name = "watson";
			}
			console.log(name);
			return(name);
		}

		this.imageURL = "assets/images/"+this.stateName()+"/"+this.stateName()+"-1.jpg";
	});
})();

