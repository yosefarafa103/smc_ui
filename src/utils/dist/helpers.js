"use strict";
exports.__esModule = true;
exports.getPercentFromList = exports.getTotal = exports.getPercent = exports.transformMsToDate = exports.extractDate = exports.convertFromStrTomMs = exports.converAndTransformToDate = void 0;
exports.converAndTransformToDate = function (startDate, stopDate) {
    var differenceInMilliseconds = stopDate - startDate;
    var dateOnStr = differenceInMilliseconds;
    if (dateOnStr <= 60000) {
        dateOnStr /= 1000;
        dateOnStr = dateOnStr + "s";
    }
    else if (dateOnStr < 3600000) {
        // check if less hour
        dateOnStr /= 60000;
        dateOnStr = dateOnStr.toString().slice(0, 2) + "m";
    }
    else if (dateOnStr >= 864e5) {
        // check if great day
        dateOnStr /= 864e5;
        dateOnStr = dateOnStr + "d";
    }
    else if (dateOnStr >= 36e5) {
        // check if great hour
        // let [hours, mins] = `${Number(dateOnStr).toFixed(2)}`.split(".");
        dateOnStr /= 3600000;
        var hours = Math.floor(dateOnStr);
        var minsDecimal = dateOnStr - hours;
        var mins = Math.round(minsDecimal * 60);
        dateOnStr = hours + "h " + (mins > 0 ? "and " + mins + "m" : "");
    }
    return dateOnStr;
};
exports.convertFromStrTomMs = function (date) {
    var arr = date.match(/\w/g);
    var checkUnits = function (unit, count) {
        if (unit === "h") {
            return count * 36e5;
        }
        else if (unit === "m") {
            return count * 60e3;
        }
        else if (unit === "d") {
            return count * 864e5;
        }
        return 1;
    };
    // console.log(arr.filter((item) => /\d/.test(item)).join(''));
    if (arr.length === 2) {
        var count = arr[0], unit = arr[1];
        return checkUnits(unit, count);
    }
    else {
        var count = arr.filter(function (item) { return /\d/g.test(item); }).join("");
        var unit = arr.filter(function (item) { return /\D/g.test(item); })[0];
        return checkUnits(unit, count);
    }
};
exports.extractDate = function (date, isFullDate) {
    if (isFullDate === void 0) { isFullDate = false; }
    return new Date(date).getFullYear() + "/" + (new Date(date).getMonth() + 1) + "/" + new Date(date).getDate() + (isFullDate
        ? "-" + (new Date(date).getHours() === 0 ? 12 : new Date(date).getHours()) + ":" + new Date(date).getMinutes()
        : "");
};
exports.transformMsToDate = function (dateOnStr) {
    var result = "";
    if (dateOnStr <= 60000) {
        dateOnStr /= 1000;
        result = dateOnStr + "s";
    }
    else if (dateOnStr < 3600000) {
        // check if less hour
        dateOnStr /= 60000;
        result = dateOnStr.toString().slice(0, 2) + "m";
    }
    else if (dateOnStr >= 36e5) {
        // check if great hour
        // let [hours, mins] = `${Number(dateOnStr).toFixed(2)}`.split(".");
        dateOnStr /= 3600000;
        var hours = Math.floor(dateOnStr);
        var minsDecimal = dateOnStr - hours;
        var mins = Math.round(minsDecimal * 60);
        result = hours + "h " + (mins > 0 ? "and " + mins + "m" : "");
    }
    else if (dateOnStr >= 864e5) {
        // check if great day
        dateOnStr /= 864e5;
        result = dateOnStr + "d";
    }
    return result;
};
exports.getPercent = function (totalDataPerMs, certainDate) {
    return (certainDate / totalDataPerMs) * 100;
};
exports.getTotal = function (arr, key) {
    return arr === null || arr === void 0 ? void 0 : arr.map(function (mil) { return mil[key]; });
};
exports.getPercentFromList = function (array, currentEl) {
    var filterItem = array.filter(function (el) { return el === currentEl; });
    return exports.getPercent(array.length, filterItem.length);
};
