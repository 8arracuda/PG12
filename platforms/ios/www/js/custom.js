//app.initialize();

var sdApp = angular.module('sdApp', ["ngRoute", "mobile-angular-ui"]);

lsTest = '1';

sdApp.config(function ($routeProvider) {

    $routeProvider.
        when('/localStorage', {
            templateUrl: 'localStorage.html',
            controller: 'LocalStorageCtrl'
        }).
        when('/localStorage/list2/:key', {
            templateUrl: 'localStorage_list2_details.html',
            controller: 'LocalStorageList2DetailsCtrl'
        }).
        when('/sessionStorage', {
            templateUrl: 'sessionStorage.html',
            controller: 'SessionStorageCtrl'
        }).
        when('/indexedDB', {
            templateUrl: 'indexedDB.html',
            controller: 'IndexedDBCtrl'
        }).
        when('/WebSql', {
            templateUrl: 'webSql.html',
            controller: 'WebSqlCtrl'
        }).
        when('/PGSQLite', {
            templateUrl: 'PG_SQLite.html',
            controller: 'PGSQLiteCtrl'
        }).
        when('/PGmore', {
            templateUrl: 'PG_more.html',
            controller: 'PGMoreCtrl'
        }).

        otherwise({
            redirectTo: '/localStorage'
        });


});
