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
		function globalTest(){
			console.log("im making a test");
		}
		var testVal = "this ifsasf";
	});
	app.controller("HomeCtrl", function () {
	});
	app.controller("WatsonCtrl", function ($scope,$state) {
		var currentState = $state.current.name;
		this.testVal = "this is a string for testing";
		$scope.testVal2 = "th2222ing";

		function test(){
			console.log("test");
			console.log(currentState);
			console.log();

		}
	});
})();

