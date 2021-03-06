angular.module('VideoListingModules', ['VideoControllerModule', 'VideoServiceModule', 'VideoStorageFactoryModule']);
angular.module('UserModules', ['UserStorageFactoryModule', 'UserFactoryModule']);
angular.module('RatingModules', ['FormatingRatingServiceModule', 'RatedVideosControllerModule']);

var appDependencies = 
    ['templates-main',
    'appFiltersModule',
    'HeaderControllerModule',
    'VideoListingModules',
    'appDirectiveModule',
    'UserModules',
    'RatingModules',
    'appFactoriesModule',
    'ui.router',
    'ngCookies',
    // 'ngAnimate',
    'ui.bootstrap'];

var app = angular.module('trailerParke', appDependencies); //main module

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '../public/templates/trailer-listings.html',
                controller: 'VideoListingController as vm'
            })
            .state('/rated-trailers', {
                url: '/rated-trailers',
                templateUrl: '../public/templates/rated-trailers.html',
                controller: 'RatedVideosController as vm'
            });
    }
]);

app.constant('apiKeys', {
    youtubeAPI: 'AIzaSyDYhqH1guvlxxocuttrwxE2kkvYefu0cqo',
    rottenTomatoesAPI: '4cwjthjq2hyxz7amh6jj5p4p'
});

//node api urls
app.constant('trailerParkeApi', {
    userRegistration: 'http://localhost:1337/api/register',
    userLogin: 'http://localhost:1337/auth/login',
    userById: 'http://localhost:1337/api/user',
    updateUserTrailers: 'http://localhost:1337/api/user/updateTrailers'
});
