"use strict";
exports.__esModule = true;
var Mill = function (_a) {
    var mill = _a.mill, totalMs = _a.totalMs, chartDetails = _a.chartDetails;
    var name = mill.name, duration = mill.duration, stopCategory = mill.stopCategory, carriedOutBy = mill.carriedOutBy;
    // console.log(getPercent(totalMs, convertFromStrTomMs(duration)));
    // log
    // console.log(mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));
    /*
    {
            labels: stopCategory,
            values: getPercent(convertFromStrTomMs(duration), totalMs),
            colors:
        }
    */
    return (React.createElement("section", { className: "flex flex-col gap-4" },
        React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement("div", { className: "font-bold flex  flex-col gap-2" },
                "TD",
                name,
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("div", { className: "font-bold mb-[10px]" },
                        React.createElement("span", { className: "block border-4 border-blue-200 text-black p-[10px] rounded-[8px]" }, duration)))))));
};
exports["default"] = Mill;
