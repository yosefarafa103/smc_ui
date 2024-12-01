"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var MillsFilterContainer_1 = require("./MillsFilterContainer");
var variables_1 = require("@/utils/variables");
var Filter = function (_a) {
    var mills = _a.mills;
    var _b = react_1.useState(''), location = _b[0], setLocation = _b[1];
    var _c = react_1.useState(''), sD = _c[0], setSd = _c[1];
    var _d = react_1.useState(''), stD = _d[0], setStd = _d[1];
    var _e = react_1.useState(''), tn = _e[0], setTn = _e[1];
    var _f = react_1.useState(''), stopC = _f[0], setStopC = _f[1];
    var _g = react_1.useState(null), data = _g[0], setdata = _g[1];
    var fetchByDate = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/mill?startDate=" + sD + "&stopDate=" + stD + "&search=" + location + "&tn=" + tn + "&cat=" + stopC.toLowerCase())];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // location => mill
    // section => carryOutBy
    // category => stopCategory
    react_1.useEffect(function () {
    }, [sD, stD, location]);
    var handelClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchByDate().then(function (res) { return res.json(); }).then(function (d) { return setdata(d); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    console.log(stopC, data);
    // fetchByDate()
    return (React.createElement(React.Fragment, null,
        (data === null || data === void 0 ? void 0 : data.data) &&
            React.createElement(MillsFilterContainer_1["default"], { data: data === null || data === void 0 ? void 0 : data.data }),
        React.createElement("h3", { className: "font-bold text-[2vw] text-center" }, "Filter"),
        React.createElement("section", { className: "p-[1.5vw] border-2 border-[#ddd] rounded-[8px]" },
            React.createElement("section", { className: "flex items-center gap-2 justify-center mb-[10px]" },
                React.createElement("div", { className: "flex items-center gap-1" },
                    React.createElement("strong", null, " date"),
                    " ",
                    React.createElement("input", { onChange: function (e) { return setSd(e.target.value); }, type: "datetime-local", name: "startDate", className: "border-[3px] max-w-[100px] border-black rounded-[6px] p-[3px]" })),
                React.createElement("div", { className: "flex items-center gap-1" },
                    React.createElement("strong", null, "to"),
                    " ",
                    React.createElement("input", { name: "stopDate", onChange: function (e) { return setStd(e.target.value); }, className: "max-w-[100px] border-[3px] border-black rounded-[6px] p-[3px]", type: "datetime-local" }))),
            React.createElement("section", { className: "flex mt-[15px] flex-col gap-1" },
                React.createElement("h3", { className: "font-semibold" }, "Locations"),
                React.createElement("select", { onChange: function (e) { return setLocation(e.target.value); }, name: "name", required: true, className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                    React.createElement("option", { className: "text-xs" }, "Choose Mill | Location"), mills === null || mills === void 0 ? void 0 :
                    mills.data.map(function (el) { return (React.createElement("option", { value: el.name.toLowerCase() }, el.name.toUpperCase())); }))),
            React.createElement("section", { className: "flex mt-[15px] flex-col gap-1" },
                React.createElement("h3", { className: "font-semibold" }, "Section"),
                React.createElement("select", { name: "carryOutBy", required: true, className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                    React.createElement("option", { className: "text-xs" }, "Choose Section"),
                    ["Production", "Electrical", "Mechanical", "Planned", "Other"].map(function (el) { return (React.createElement("option", { value: el.toUpperCase() }, el.toUpperCase())); }))),
            React.createElement("section", { className: "flex mt-[15px] flex-col gap-1" },
                React.createElement("h3", { className: "font-semibold" }, "Category"),
                React.createElement("select", { onChange: function (e) { return setStopC(e.target.value); }, name: "stopCategory", required: true, className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                    React.createElement("option", { className: "text-xs" }, "Choose Category"),
                    ["Maintenance", "Breakdown", "Planned", "Other"].map(function (el) { return (React.createElement("option", { value: el.toUpperCase() }, el.toUpperCase())); }))),
            React.createElement("section", { className: "flex mt-[15px] flex-col gap-1" },
                React.createElement("h3", { className: "font-semibold" }, "Search"),
                React.createElement("input", { name: "tn", onChange: function (e) { return setTn(e.target.value); }, type: "text", className: "p-[5px] rounded-[6px] border-[3px] border-[#bbb] border-solid ", placeholder: "TN-3045" })),
            React.createElement("button", { disabled: ![location, sD, stD, tn, stopC].some(function (el) { return el.length > 0; }), onClick: handelClick, className: 'block mt-[15px] bg-blue-600 text-white w-full p-[10px] rounded-[6px]' }, "Search"))));
};
exports["default"] = Filter;
