

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
				url: '/about',
				templateUrl: 'states/watson/landing.html'
			})
			.state('watson.mine', {
				url: '/',
				templateUrl: 'states/watson/mine.html'
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
			})
			.state('watson.norway', {
				url: '/norway',
				templateUrl: 'states/watson/countries/norway.html'
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
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Interviewer: it says here your interests include connecting people <br><br>Me: correcting people, actually <br><br>I: no it&#39;s-<br><br>Me: i know what it says</p>&mdash; Max Haarhaus (@maxhaarhaus) <a href="https://twitter.com/maxhaarhaus/status/889459230499098624">July 24, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">ME: 34 across says ‘breakfast drink if it lived in Springfield’<br>HER: Try OJ Simpson<br>ME: *rubbing my temples* christ Sharon they already did</p>&mdash; The Captain Now (@captainkalvis) <a href="https://twitter.com/captainkalvis/status/838528652446941185">March 5, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Shoot for the moon. Even if you miss, nobody can tell b/c the moon is very big &amp; far away. Say &quot;I shot the moon,&quot; science can&#39;t disprove it</p>&mdash; Pigeon Fancier (@isabelzawtun) <a href="https://twitter.com/isabelzawtun/status/885644594150596609">July 13, 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">me: *crying* I think I have lost my perception of time<br>doctor: when did it start?<br>me: [reaching for tissue] 6000 years ago</p>&mdash; yabkat (@ohen39) <a href="https://twitter.com/ohen39/status/917573164711866368?ref_src=twsrc%5Etfw">October 10, 2017</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">My mom would wake up early just to cut the crust off my sandwiches for lunch. She knew the crust was my favorite part. She hated me so much.</p>&mdash; Shane (@Shanehasabeard) <a href="https://twitter.com/Shanehasabeard/status/425318024178966528?ref_src=twsrc%5Etfw">January 20, 2014</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">welcome to america. heres your paperwork. oh by the way, &quot;duh&quot; and &quot;no duh&quot; mean the same thing. alright, good luck out there</p>&mdash; jesse farrar (@BronzeHammer) <a href="https://twitter.com/BronzeHammer/status/455883213106589696?ref_src=twsrc%5Etfw">April 15, 2014</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
			'<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">*At a party*<br><br>STRANGER: Are you that guy who brags about weird shit?<br><br>ME: No I&#39;m the guy who takes the longest baths in the city.</p>&mdash; Nathan Usher (@thenatewolf) <a href="https://twitter.com/thenatewolf/status/873330525955477504?ref_src=twsrc%5Etfw">June 10, 2017</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
			
			
		];
		var max = (this.tweets.length);
		var int = Math.floor(Math.random() * (max)); 
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
		this.daysOnWatson = function () {
			var start = new Date(2017,6,13);
			var today = new Date();
			var days = Math.floor((today - start)/1000/60/60/24);
			return (days);
		};
		this.setLineHeight = function(element) {
			var result;
			console.log("huh");
			setTimeout(result = $(element).height(), 4000);
			;console.log("what");
			return {'line-height': result.toString()+"px"};
		}
		this.showFlags = false;
		this.showNetherlands = false;
		this.showRink = false;
	});
})();
