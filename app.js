

(function () {
	'use strict';
	angular.module('rodeo', [
		'ngAnimate',
		'ngResource',
		'ngRoute',
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
	app.filter("trust", ['$sce', function ($sce) {
		return function (htmlCode) {
			return $sce.trustAsHtml(htmlCode);
		}
	}]);
	app.controller("GlobalCtrl", function ($scope, $state, $window) {
		this.refreshPage = function () {
			$state.reload();
		};
		this.topOfPage = function () {
			$window.scrollTo(0, 0);
		}

	});
	app.controller("HomeCtrl", function () {
		w3.includeHTML();
		this.twitterTest = '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">ME: sure, but how often do you come across a good peephole?<br><br>HER: I asked if you were a &quot;people&quot; person<br><br>ME: ohhh...definitely not</p>&mdash; Elvish Presley (@_ElvishPresley_) <a href="https://twitter.com/_ElvishPresley_/status/891379632112533505">July 29, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
		this.twitter2 = '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Interviewer: it says here your interests include connecting people <br><br>Me: correcting people, actually <br><br>I: no it&#39;s-<br><br>Me: i know what it says</p>&mdash; Max Haarhaus (@maxhaarhaus) <a href="https://twitter.com/maxhaarhaus/status/889459230499098624">July 24, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
	});
	app.controller("WatsonCtrl", function ($scope, $state) {
		this.currentState = $state.current.name;
		this.testVal = "this is a string for testing";
		this.stateName = function () {
			var name = this.currentState;
			// console.log(name);
			name = name.substring(7);
			if (name == "landing") {
				name = "watson";
			}
			// console.log(name);
			return (name);
		};
	});
})();

