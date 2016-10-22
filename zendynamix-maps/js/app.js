/**
 * Created by dhanalakshmi on 22/10/16.
 */
var dependencies = ['ui.router'];
var zendynamixMap = angular.module("map", dependencies);


zendynamixMap.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('/', {
        url: "/",
        templateUrl: 'templates/app.html'
    })
    $urlRouterProvider.otherwise("/");
});
