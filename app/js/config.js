/**
 * AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
}
angular
    .module('seinsr')
    .config(['$stateProvider', '$urlRouterProvider', config])
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$state = $state;
    }]);