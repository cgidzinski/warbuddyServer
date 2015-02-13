var myApp = angular.module('evg31337', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
    //
    $locationProvider.html5Mode(true)

    $urlMatcherFactoryProvider.strictMode(false)
        // $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('404');
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/views/home.html"
        })
        .state('hardware', {
            url: "/hardware",
            templateUrl: "views/project_list.html",
            controller: "HardwareController"
        })
        .state('software', {
            url: "/software",
            templateUrl: "views/project_list.html",
            controller: "SoftwareController"
        })

        .state('project', {
            url: '/project/:id',
            templateUrl: 'views/project_item.html',
            controller: "Project_Item"
        })

        .state('interests', {
            url: "/interests",
            templateUrl: "views/interests.html",
            controller: "InterestController"
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller: "AboutController"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html"
        })
        .state('misc', {
            url: "/misc",
            templateUrl: "views/misc.html"
        })
        .state('404', {
            url: "/404",
            templateUrl: 'views/404.html'
        });
});
