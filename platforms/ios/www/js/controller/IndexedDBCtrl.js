sdApp.controller('IndexedDBCtrl', function ($scope) {


    $scope.openDatabase = function () {
        console.log('openDatabase start');

        if (!window.indexedDB) {
            window.alert("Ihr Browser unterstützt keine stabile Version von IndexedDB. Dieses und jenes Feature wird Ihnen nicht zur Verfügung stehen.");
        } else {
            
            // Öffnen unserer Datenbank
            var request = window.indexedDB.open("MeineTestdatenbank", 3);
            console.log('openDatabase end');

        }
    };

});