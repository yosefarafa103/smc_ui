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
var BodyContainer_1 = require("@/components/BodyContainer");
var Header_1 = require("@/components/Header");
var headers_1 = require("next/headers");
var jsonwebtoken_1 = require("jsonwebtoken");
var EditMill_1 = require("@/components/form/EditMill");
var helpers_1 = require("@/utils/helpers");
var Filter_1 = require("@/components/Filter");
var navigation_1 = require("next/navigation");
var Mill_1 = require("@/components/Mill");
var PieChart_1 = require("@/components/PieChart");
var BarChart_1 = require("@/components/BarChart");
var LineChart_1 = require("@/components/LineChart");
var variables_1 = require("@/utils/variables");
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, _a, _b, data, mills, totalMs, milsDataChart, stopCatDataChart, carriedOutBy;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, headers_1.cookies()];
            case 1:
                if (!(_d.sent()).get("jwt")) {
                    return [2 /*return*/, navigation_1.redirect('/')];
                }
                _b = (_a = jsonwebtoken_1["default"]).verify;
                return [4 /*yield*/, headers_1.cookies()];
            case 2:
                token = _b.apply(_a, [(_c = (_d.sent()).get("jwt")) === null || _c === void 0 ? void 0 : _c.value, "heaJWUcDBplyWuYg"]);
                return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/users/" + token.id).then(function (da) { return da.json(); })];
            case 3:
                data = (_d.sent()).data;
                return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/mill").then(function (data) { return data.json(); })];
            case 4:
                mills = _d.sent();
                totalMs = (mills.data.map(function (m) { return helpers_1.convertFromStrTomMs(m.duration); }).reduce(function (acc, el) { return acc + el; }));
                // console.log(getTotal(mills.data, "name"));
                // carryedoutby
                console.log(totalMs);
                console.log((helpers_1.getTotal(mills.data, "carriedOutBy")).map(function (m) {
                    // console.log((getTotal(mills.data, "carriedOutBy")), m);
                    return helpers_1.getPercentFromList((helpers_1.getTotal(mills.data, "carriedOutBy")), "" + m);
                }));
                milsDataChart = {
                    labels: ['Mill A', 'Mill B', 'Mill C', "Mill D"],
                    values: [25, 25, 25, 25],
                    colors: [
                        '#f1e3f3',
                        '#C2BBF0',
                        '#8fb8ed',
                        '#62bfed'
                    ]
                };
                stopCatDataChart = {
                    labels: ['Other', 'Production', 'Electrical', "Mechnical", "Planned"],
                    values: [20, 20, 20, 20, 20],
                    colors: [
                        "purple",
                        '#f1e3f3',
                        '#C2BBF0',
                        '#8fb8ed',
                        '#62bfed'
                    ]
                };
                carriedOutBy = {
                    labels: ['Other', 'Breakdown', 'Maintenance', "Planned", "Planned"],
                    values: [20, 20, 20, 20, 20],
                    colors: [
                        '#f1e3f3',
                        "purple",
                        '#C2BBF0',
                        '#8fb8ed',
                        '#62bfed'
                    ]
                };
                return [2 /*return*/, (React.createElement(React.Fragment, null,
                        React.createElement(React.Fragment, null,
                            React.createElement("head", null,
                                React.createElement("title", null, "DASHBOARD"))),
                        React.createElement("section", { className: "" },
                            React.createElement(Header_1["default"], null)),
                        React.createElement(BodyContainer_1["default"], null,
                            React.createElement("section", { className: "flex gap-3" },
                                data.role === "admin" &&
                                    React.createElement("div", { className: "max-lg:hidden flex-[0.8]" },
                                        React.createElement(EditMill_1["default"], { mode: "add" })),
                                React.createElement("div", { className: "flex-[1]" },
                                    React.createElement("div", { className: "font-bold mb-[10px] text-center" },
                                        "TOTAL DOWN TIME",
                                        React.createElement("span", { className: "block border-4 border-blue-200 my-[15px] text-black p-[10px] justify-center text-center rounded-[8px] " }, helpers_1.transformMsToDate(mills.data.map(function (m) { return helpers_1.convertFromStrTomMs(m === null || m === void 0 ? void 0 : m.duration); }).reduce(function (acc, el) { return acc + el; })))),
                                    React.createElement("div", { className: "grid grid-cols-4 gap-3.5" }, mills === null || mills === void 0 ? void 0 : mills.data.map(function (el, idx) { return (React.createElement(React.Fragment, null,
                                        React.createElement(Mill_1["default"]
                                        // console.log(mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));
                                        , { 
                                            // console.log(mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));
                                            totalMs: mills.data.map(function (m) { return helpers_1.convertFromStrTomMs(m.duration); }).reduce(function (acc, el) { return acc + el; }), 
                                            // chartDetails={{
                                            //     labels: mills?.data?.map(mil => mil.stopCategory),
                                            //     values: mills.data.map(item => getPercent(totalMs, convertFromStrTomMs(item.duration))),
                                            //     colors: [
                                            //         '#f1e3f3',
                                            //         '#C2BBF0',
                                            //         '#8fb8ed',
                                            //         '#62bfed',
                                            //     ]
                                            // }} 
                                            mill: el }))); })),
                                    React.createElement("section", { className: "flex items-center flex-wrap justify-center gap-2" },
                                        React.createElement(PieChart_1["default"], { data: milsDataChart, width: 250, height: 250 }),
                                        React.createElement(PieChart_1["default"], { data: stopCatDataChart, width: 250, height: 250 }),
                                        React.createElement(PieChart_1["default"], { data: carriedOutBy, width: 250, height: 250 })),
                                    React.createElement("section", { className: "flex items-center gap-2" },
                                        React.createElement(BarChart_1["default"], { options: {
                                                borderRadius: 14,
                                                series: [
                                                    { data: [2400, 1398, 9800, 3908, 4800, 3800, 4300], label: 'Mill', id: 'pvId', stack: 'total' },
                                                    { data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], label: 'Mill', id: 'uvId', stack: 'total' },
                                                ]
                                            } }),
                                        React.createElement(LineChart_1["default"], { width: 400, height: 300 }),
                                        React.createElement(BarChart_1["default"], { options: {
                                                borderRadius: 32,
                                                series: [{ data: [6, 3, 2] }, { data: [4, 1, 6] }, { data: [2, 5, 6] }]
                                                // series={}
                                            } }))),
                                React.createElement("div", { className: "flex-[0.6]" },
                                    React.createElement(Filter_1["default"], { mills: mills }))))))];
        }
    });
}); };
exports["default"] = page;
