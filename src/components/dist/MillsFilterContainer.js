"use strict";
exports.__esModule = true;
var MillsFilterContainer = function (_a) {
    var data = _a.data;
    console.log(data.message);
    // if (data?.message === 'err') {
    //     return <div className="text-[3.5vw] font-bold text-red-500">Can Not Found Any Mill With This Filter Data!</div>
    // }
    var name = data.name, duration = data.duration, stopCategory = data.stopCategory;
    return (React.createElement("div", { className: "fixed w-full top-0 bg-white grid grid-cols-4 gap-3.5 p-[15px] left-0 h-screen" }, Array.isArray(data) ? data === null || data === void 0 ? void 0 : data.map(function (el) { return (React.createElement("section", { className: "" },
        React.createElement("div", { className: "font-bold flex  flex-col gap-2" },
            "TD ",
            el.name,
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("div", { className: "font-bold mb-[10px]" },
                    React.createElement("span", { className: "block border-4 border-blue-200 text-black p-[10px] rounded-[8px]" }, el.duration))),
            React.createElement("div", { className: "text-sm uppercase" },
                "(stop category:) ",
                React.createElement("br", null),
                React.createElement("mark", null, el.stopCategory)),
            React.createElement("div", null,
                "tn: ",
                React.createElement("br", null),
                " ",
                React.createElement("mark", null, el.tn)),
            React.createElement("div", { className: "uppercase" },
                "carriedOutBy: ",
                React.createElement("br", null),
                React.createElement("mark", { className: "text-sm" }, el.carriedOutBy))))); }) :
        React.createElement("div", { className: "font-bold flex  flex-col gap-2" },
            "TD ",
            name,
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("div", { className: "font-bold mb-[10px]" },
                    React.createElement("span", { className: "block border-4 border-blue-200 text-black p-[10px] rounded-[8px]" }, duration)),
                React.createElement("div", null, stopCategory)))));
};
exports["default"] = MillsFilterContainer;
