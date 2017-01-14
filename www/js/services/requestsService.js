angular.module('starter.countingService', [])

    .factory('CountingService', function(StoragesServices) {
       
        var formated = function(categoryLoadData) {
            for (var i = 0; i < categoryLoadData.length; i++) {
                categoryLoadData[i].datetimeValue= '0';
                console.log('obj --> ', categoryLoadData[i].datetimeValue);
            }
            return categoryLoadData;
        };
        return {
            getCategory: function(category) {
                var categoryLoadData = StoragesServices.get(category);
                
                return formated(categoryLoadData);
            },
            setCategory: function(data, category) {
                StoragesServices.set(data, category);
            }
        };
    });