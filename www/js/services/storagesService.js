angular.module('starter.storagesServices', [])

    .factory('StoragesServices', function() {
        return {
            get: function(storageName) {
                var loadData = JSON.parse(localStorage.getItem(storageName));
                return loadData;
            },
            set: function(arr, storageName) {
                if (localStorage.getItem(storageName)) {
                    var load = localStorage.getItem(storageName);
                    var parseLoad = JSON.parse(load);
                    console.log('StoragesServices --> ', parseLoad, arr);
                        parseLoad.push(arr[0]);
                    localStorage.setItem(storageName, JSON.stringify(parseLoad));
                } else {
                    localStorage.setItem(storageName, JSON.stringify(arr));
                }
            },
            remove: function(storageName) {
                localStorage.removeItem(storageName);
            }
        };
    });