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
var daniel_beckemeier_VhU_Qs6dFCo_unsplash_jpg_1 = require("@/assets/daniel-beckemeier-VhU-Qs6dFCo-unsplash.jpg");
var AuthWrapper_1 = require("@/components/AuthWrapper");
var Date_1 = require("@/components/Date");
var Logo_1 = require("@/components/Logo");
var variables_1 = require("@/utils/variables");
var jsonwebtoken_1 = require("jsonwebtoken");
var headers_1 = require("next/headers");
var navigation_1 = require("next/navigation");
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, d, _a, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, headers_1.cookies()];
            case 1:
                if (!(_d.sent()).get("jwt")) return [3 /*break*/, 4];
                _b = (_a = jsonwebtoken_1["default"]).verify;
                return [4 /*yield*/, headers_1.cookies()];
            case 2:
                token = _b.apply(_a, [(_c = (_d.sent()).get("jwt")) === null || _c === void 0 ? void 0 : _c.value, "heaJWUcDBplyWuYg"]);
                return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/users/" + (token === null || token === void 0 ? void 0 : token.id)).then(function (da) { return da.json(); })];
            case 3:
                d = _d.sent();
                _d.label = 4;
            case 4:
                if (d === null || d === void 0 ? void 0 : d.data) {
                    navigation_1.redirect('/dashboard');
                }
                // fetch(
                //   `http://127.0.0.1:8000/mill/${token?.value}`, {
                //   method: "PATCH",
                //   body: { 
                //     "tn": "abcde1"
                //    },
                //    headers: {
                //     ""
                //    }
                // }
                // ).then(e => e.json())
                return [2 /*return*/, (React.createElement("div", { className: "min-h-screen after:w-full after:h-full after:bg-[#0000007c] after:left-0 after:top-0 z-[1] after:absolute  land relative" },
                        React.createElement("img", { src: daniel_beckemeier_VhU_Qs6dFCo_unsplash_jpg_1["default"].src, alt: 'land', className: 'h-full select-none z-[-1] opacity-[0.8] absolute left-0 top-0 object-cover w-full' }),
                        React.createElement("section", { className: 'px-[2vw] relative z-[99] py-[15px]' },
                            React.createElement("div", { className: 'flex justify-between text-white items-center' },
                                React.createElement(Logo_1["default"], { color: 'black' }),
                                React.createElement("h4", { className: 'text-[18px] cursor-pointer font-semibold' }, (token === null || token === void 0 ? void 0 : token.id) ? d === null || d === void 0 ? void 0 : d.data.username : "user profile")),
                            React.createElement("section", { className: 'px-[5vw] max-sm:pt-[20vh]' },
                                React.createElement("section", { className: 'sm:flex min-h-screen max-sm:gap-[20px] items-center justify-between' },
                                    React.createElement("section", { className: 'flex flex-1 max-sm:items-center flex-col lg:-[30vh]' }, ["Optimize Your Mill's Performance", "Effortlessly Monitor and Record Production ", "Downtime for Maximum Efficiency!"].map(function (el) { return (React.createElement("div", { className: 'text-[20px] text-[#fff] font-semibold' }, el)); })),
                                    !token &&
                                        React.createElement("section", { className: 'flex-[0.50] mt-[30px]' },
                                            React.createElement(AuthWrapper_1["default"], null))))),
                        React.createElement("section", { className: 'fixed' },
                            React.createElement(Date_1["default"], null))))];
        }
    });
}); };
exports["default"] = page;
