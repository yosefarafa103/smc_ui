"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var BarChart_1 = require("@mui/x-charts/BarChart");
function BasicBars(_a) {
    var options = _a.options;
    return (React.createElement(BarChart_1.BarChart, __assign({ colors: [
            '#f1e3f3',
            '#C2BBF0',
            '#8fb8ed',
            '#62bfed',
        ] }, options, { xAxis: [{ scaleType: 'band', data: ['2023', '2024', '2025'] }], 
        // series={[{ data: [6, 3, 2] }, { data: [4, 1, 6] }, { data: [2, 5, 6] }]}
        width: 400, height: 250 })));
}
exports["default"] = BasicBars;
