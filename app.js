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
        ]);


    var routerApp = angular.module('rodeo', ['ui.router']);

    routerApp.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/parked');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('parked', {
                url: '/parked',
                templateUrl: 'states/parked.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            // .state('about', {
            //     // we'll get to this in a bit       
            // });

    });


})();
