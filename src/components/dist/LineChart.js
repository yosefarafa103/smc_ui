"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var auto_1 = require("chart.js/auto");
function LineChart(_a) {
    var data = _a.data, width = _a.width, height = _a.height;
    var canvasRef = react_1.useRef(null);
    var chartInstanceRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!canvasRef.current)
            return;
        // Cleanup previous chart instance
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        var ctx = canvasRef.current.getContext('2d');
        if (!ctx)
            return;
        var config = {
            type: 'line',
            data: {
                labels: ["Mill A", "Mill B", "Mill C", "Mill D"],
                datasets: [{
                        label: ["Mill A", , "Mill B", "Mill C", "Mill D"],
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        };
        chartInstanceRef.current = new auto_1.Chart(ctx, config);
        // Cleanup on unmount
        return function () {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);
    return (React.createElement("div", { className: "relative", style: { width: width, height: height } },
        React.createElement("canvas", { ref: canvasRef })));
}
;
exports["default"] = LineChart;
