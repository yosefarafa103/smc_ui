"use client";
"use strict";
exports.__esModule = true;
var PieChart_1 = require("@/components/PieChart");
// const PieChart = dynamic(() => import('@/components/PieChart'), { ssr: false })
var page = function () {
    var objs = [{
            labels: ['Mill A', 'Mill B', 'Mill C'],
            values: [100, 200, 23],
            colors: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ]
        },
        {
            labels: ['Mill A', 'Mill B', 'Mill C'],
            values: [100, 200, 23],
            colors: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ]
        },
        {
            labels: ['Mill A', 'Mill B', 'Mill C'],
            values: [35, 35, 35],
            colors: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ]
        }];
    console.log(objs);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'flex items-center gap-10 flex-wrap justify-center py-[20px]' }, [1, 2, 3, 4].map(function (e, i) { return (React.createElement(PieChart_1["default"], null)); }))));
};
exports["default"] = page;
