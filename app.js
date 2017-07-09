/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
(function () {
    'use strict';
    angular
        .module('app', [
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
            'oc.lazyLoad'
        ])
        // .controller('HomeCtrl', ['$scope', HomeCtrl]);
        ;


    var app = angular.module('rodeo', ['ui.router']);

    

app.controller("FirstCtrl",function () {
    this.count = 0;
    this.increment = function (){
        this.count = this.count + 1;
    }
});

function SecondCtrl($scope){
    $scope.count = 0;
    $scope.increment = function (){
        $scope.count = $scope.count + 1;
    }
}

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/parked');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('parked', {
                url: '/parked',
                templateUrl: 'states/parked.html'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'states/home.html',
                // controller: 'HomeCtrl'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'states/about.html'
            })

            .state('watson', {
                url: '/watson',
                templateUrl: 'states/watson.html'
            })

            .state('projects', {
                url: '/projects',
                templateUrl: 'states/projects.html'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'states/contact.html'
            });
    });


})();
function HomeCtrl($scope){
    $scope.count = 0;
    $scope.increment = function (){
        $scope.count = $scope.count + 1;
    }
}