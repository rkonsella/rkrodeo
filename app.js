

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
			})
			.state('watson.denmark', {
				url: '/denmark',
				templateUrl: 'states/watson/countries/denmark.html'
			})
			.state('watson.gothenburg', {
				url: '/gothenburg',
				templateUrl: 'states/watson/countries/gothenburg.html'
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
		this.tweets = [
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">CLOUD: wow im honored, no one ever flies up here to visit me up in the sky<br>HELICOPTER: well im a gigantic fan</p>&mdash; jomny sun (@jonnysun) <a href="https://twitter.com/jonnysun/status/685183039987671041">January 7, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">GENIE: 3 wishes<br>ME: i wish my life felt less transactional, like ppl r counting down to when they can stop talking to me<br>GENIE: uh… 2 wishes</p>&mdash; jomny sun (@jonnysun) <a href="https://twitter.com/jonnysun/status/777747012511010816">September 19, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">ME: sure, but how often do you come across a good peephole?<br><br>HER: I asked if you were a &quot;people&quot; person<br><br>ME: ohhh...definitely not</p>&mdash; Elvish Presley (@_ElvishPresley_) <a href="https://twitter.com/_ElvishPresley_/status/891379632112533505">July 29, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Interviewer: it says here your interests include connecting people <br><br>Me: correcting people, actually <br><br>I: no it&#39;s-<br><br>Me: i know what it says</p>&mdash; Max Haarhaus (@maxhaarhaus) <a href="https://twitter.com/maxhaarhaus/status/889459230499098624">July 24, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">ME: 34 across says ‘breakfast drink if it lived in Springfield’<br>HER: Try OJ Simpson<br>ME: *rubbing my temples* christ Sharon they already did</p>&mdash; The Captain Now (@captainkalvis) <a href="https://twitter.com/captainkalvis/status/838528652446941185">March 5, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Shoot for the moon. Even if you miss, nobody can tell b/c the moon is very big &amp; far away. Say &quot;I shot the moon,&quot; science can&#39;t disprove it</p>&mdash; Pigeon Fancier (@isabelzawtun) <a href="https://twitter.com/isabelzawtun/status/885644594150596609">July 13, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Imagine being held at gunpoint (bear with me) by a literate animal, and the only hope of rescue is (BEAR WITH ME) tweeting a coded message</p>&mdash; Dennis Farrell (@DennisFarrell) <a href="https://twitter.com/DennisFarrell/status/857268898508541955">April 26, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">[beach]<br>Me: if a shark stops moving it will die<br>Wife: for the last time you can&#39;t kill a shark with a stop sign<br>Me: it&#39;s the law diane</p>&mdash; Fro Vo (@fro_vo) <a href="https://twitter.com/fro_vo/status/889486875869708288">July 24, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
		];
		var min = Math.ceil(0);
		var max = Math.floor(this.tweets.length);
		var int = Math.floor(Math.random() * (max - min)) + min; 
		this.tweet = this.tweets[int];

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

