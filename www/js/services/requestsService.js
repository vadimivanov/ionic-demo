angular.module('starter.countingService', [])

    .factory('CountingService', function(StoragesServices) {
        var currentMonth = new Date().getMonth();
        var prevMonth = null;
        var prevMonthSum = 0;
        var currentMonthSum = 0;
        var differenceSum = 0;

        Array.prototype.sum = function (prop) {
            var total = 0;
            for ( var i = 0, _len = this.length; i < _len; i++ ) {
                total += this[i][prop]
            }
            return total
        };
        
        var formated = function(categoryLoadData, month) {

            var filteredByMonth = categoryLoadData.filter(function(obj) {
                var filteredMonth = new Date(obj.datetimeValue).getMonth();

                return filteredMonth === month;
            });
            // console.log('filteredByMonth  --> ', filteredByMonth, month);
            return filteredByMonth;
        };
        return {
            getCategory: function(category) {
                var categoryLoadData = StoragesServices.get(category);
                if (!categoryLoadData) return;
                return formated(categoryLoadData, currentMonth);
            },
            setCategory: function(data, category) {
                StoragesServices.set(data, category);
            },
            setCurrentMonth: function(month) {
                currentMonth = month;
            },
            getPrevMonth: function(month) {
                if (month === 0) {
                    prevMonth = 11;
                } else {
                    prevMonth = month -1;
                }
            },
            getDifferenceSum: function(currentSum, prevSum) {
                differenceSum = currentSum - prevSum;
                console.log('getDifferenceSum ', differenceSum, currentSum, prevSum);
                return differenceSum; 
            },
            getCurrentMonthSum: function(category) {
                var categoryLoadData = StoragesServices.get(category);
                
                if (!categoryLoadData) return 0;
                var calcData = formated(categoryLoadData, currentMonth);
                currentMonthSum = calcData.sum('value');
                return currentMonthSum;
            },
            getPreventMonthSum: function(category) {
                var categoryLoadData = StoragesServices.get(category);
                
                if (!categoryLoadData) return 0;
                
                var calcData = formated(categoryLoadData, prevMonth);
                // console.log('calcData prevMonth --> ', calcData);
                prevMonthSum = calcData.sum('value');
                return prevMonthSum;
            }
        };
    });