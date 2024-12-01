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
var Row_1 = require("@/components/Row");
var variables_1 = require("@/utils/variables");
var headers_1 = require("next/headers");
var navigation_1 = require("next/navigation");
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, headers_1.cookies()];
            case 1:
                token = (_a.sent()).get('jwt');
                if (!token) {
                    return [2 /*return*/, navigation_1.redirect('/')];
                }
                return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/mill", {
                        next: {
                            tags: ['name', 'tn', 'stopCategory', 'carriedOutBy', 'description']
                        }
                    }).then(function (data) { return data.json(); })];
            case 2:
                data = (_a.sent()).data;
                if (!data) {
                    return [2 /*return*/, navigation_1.redirect('/')];
                }
                return [2 /*return*/, (React.createElement(React.Fragment, null,
                        React.createElement(React.Fragment, null,
                            React.createElement("head", null,
                                React.createElement("title", null, "DATA REPORT"))),
                        React.createElement(Header_1["default"], null),
                        React.createElement(BodyContainer_1["default"], null,
                            React.createElement("section", { className: "overflow-x-" },
                                React.createElement("section", { className: "flex flex-col min-w-[1200px] gap-1" },
                                    React.createElement("section", { className: "flex items-center justify-center" }, ["No", "creation date", 'mill', 'tn', "start date/time", 'stop date/time', 'duration', 'cary out by', 'category',].map(function (item) { return (React.createElement("div", { className: "cursor-pointer flex-1 text-xs font-semibold bg-[#dbdbdb] p-[10px] " }, item.toUpperCase())); })),
                                    React.createElement("section", { className: "flex flex-col gap-1 w-full" }, data.map(function (mill, i) { return (React.createElement("section", { className: "flex items-center" },
                                        React.createElement("div", { className: "cursor-pointer flex-1 h-[66px] flex items-center justify-center text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]" }, i + 1),
                                        React.createElement(Row_1["default"], { mill: mill }))
                                    // <div className="cursor-pointer text-sm font-semibold bg-[#fcefb4] px-[15px] py-[10px] ">{mill.name}</div>
                                    ); }
                                    // <div className="cursor-pointer text-sm font-semibold bg-[#fcefb4] px-[15px] py-[10px] ">{mill.name.toUpperCase()}</div>
                                    )))))))];
        }
    });
}); };
exports["default"] = page;
