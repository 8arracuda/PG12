sdApp.controller('OverviewCtrl', function ($scope) {

    $scope.stringForTitle = 'Overview';
    $scope.stringForRightButton = 'OVV';


    var techniques = [];

    var tech = {};
    tech.name = 'LocalStorage';
    tech.support = Modernizr.localstorage;
    techniques.push(tech);

    var tech = {};
    tech.name = 'SessionStorage';
    tech.support = Modernizr.sessionstorage;
    techniques.push(tech);

    var tech = {};
    tech.name = 'WebSQL';
    tech.support = Modernizr.websqldatabase;
    techniques.push(tech);

    var tech = {};
    tech.name = 'IndexedDB';
    tech.support = Modernizr.indexeddb;
    techniques.push(tech);


    $scope.techniques = techniques;
    $scope.Modernizr = Modernizr;


});