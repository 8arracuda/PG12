sdApp.controller('WebSqlCtrl', function ($scope) {

    var dbWebSQL;

    $scope.initWebSQL = function () {
        console.log('initWebSQL start');
        dbWebSQL = window.openDatabase("test", "1.0", "test", 2 * 1024* 1024);
        dbWebSQL.transaction($scope.setupWebSQL, $scope.errorHandlerWebSQL, $scope.dbReadyWebSQL);
        console.log('initWebSQL executed');
    }

    $scope.setupWebSQL = function (tx) {
        console.log('setupWebSQL start');
        tx.executeSql('CREATE TABLE IF NOT EXISTS log(id INTEGER PRIMARY KEY AUTOINCREMENT, log TEXT, created DATE)');
        console.log('setupWebSQL executed');
    };


    $scope.errorHandlerWebSQL = function (e) {
        console.log('errorHandlerWebSQL start');
        alert(e.message);
        console.log(e.message);
        console.log('errorHandlerWebSQL executed');
    };

    $scope.dbReadyWebSQL = function () {
        console.log('dbReadyWebSQL start');
        dbWebSQL.transaction(function (tx) {
            var msg = 'Log it...';
            var d = new Date();
            //d.setDate = (d.getDate() - randRange(1, 30));
            tx.executeSql("INSERT INTO log(log, created) VALUES(?,?)", [msg, d.getTime()]);
            console.log('dbReadyWebSQL executed');
        }, $scope.errorHandlerWebSQL, function () {
            console.log('error occured in dbReadyWebSQL')
        });
    };


    $scope.deleteWebSQL = function () {
        console.log('deleteWebSQL start');
        dbWebSQL.transaction(function (tx) {
            tx.executeSql("DELETE FROM log");
            console.log('deleteWebSQL executed');
        }, $scope.errorHandlerWebSQL, function () {
            console.log('error occured in db.deleteWebSQL')
        });
    };

    $scope.testWebSQL = function () {
        console.log('testWebSQL start');
        dbWebSQL.transaction(function (tx) {
            tx.executeSql("SELECT * FROM log ORDER BY created DESC", [], $scope.gotLog, $scope.errorHandlerWebSQL);
            console.log('testWebSQL executed');

        });

    }

    $scope.gotLog = function (tx, results) {
        console.log('gotLog start');
        $scope.results = results;
        console.log('gotLog executed');
        console.log('tx: ' + tx);

    }

    $scope.testResult = function() {
        $scope.results = [1,2,3];
    };

});