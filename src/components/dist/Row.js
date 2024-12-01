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
var helpers_1 = require("@/utils/helpers");
var react_1 = require("react");
var EditMill_1 = require("./form/EditMill");
var variables_1 = require("@/utils/variables");
function Row(_a) {
    var _this = this;
    var mill = _a.mill, token = _a.token;
    var _b = react_1.useState(false), isSelected = _b[0], setIsSelected = _b[1];
    var description = mill.description, name = mill.name, carriedOutBy = mill.carriedOutBy, startDate = mill.startDate, stopDate = mill.stopDate, tn = mill.tn, duration = mill.duration, stopCategory = mill.stopCategory, _id = mill._id;
    var data = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/mill/" + _id).then(function (data) { return data.json(); })
                // useEffect(() => {
                // }, [])
                // console.log(converAndTransformToDate(new Date(startDate).getTime(), new Date(stopDate).getTime()));
            ];
            case 1: return [2 /*return*/, _a.sent()
                // useEffect(() => {
                // }, [])
                // console.log(converAndTransformToDate(new Date(startDate).getTime(), new Date(stopDate).getTime()));
            ];
        }
    }); }); }.data;
    // useEffect(() => {
    // }, [])
    // console.log(converAndTransformToDate(new Date(startDate).getTime(), new Date(stopDate).getTime()));
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "flex items-center w-full p-[15px] bg-[#f3f3f3]" },
            ["" + helpers_1.extractDate(startDate), name, tn, helpers_1.extractDate(startDate), helpers_1.extractDate(stopDate, true), duration, stopCategory].map(function (item) { return (React.createElement("div", { onClick: function () {
                    console.log(_id);
                    setIsSelected(true);
                }, className: "cursor-pointer flex-1 max-h-[36px] text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]" }, (item === null || item === void 0 ? void 0 : item.length) < 2 ? "_" : item)); }),
            React.createElement("div", { className: "cursor-pointer flex-1 text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]" }, carriedOutBy === null || carriedOutBy === void 0 ? void 0 : carriedOutBy.toUpperCase())),
        isSelected &&
            React.createElement(EditMill_1["default"], { token: token, id: _id !== null && _id !== void 0 ? _id : _id, handelClose: setIsSelected, mode: "edit" })));
}
exports["default"] = Row;
