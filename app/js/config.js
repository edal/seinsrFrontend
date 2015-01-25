/**
 * AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $translateProvider) {
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
        });
    // Initialize angular-translate
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('es');

    $translateProvider.useCookieStorage(); 
}
angular
    .module('seinsr')
    .config(['$stateProvider', '$urlRouterProvider', '$translateProvider', config])
    .run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$state = $state;
    }]);