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
var link_1 = require("next/link");
var Logo_1 = require("./Logo");
var headers_1 = require("next/headers");
var jsonwebtoken_1 = require("jsonwebtoken");
var _1564535_customer_user_userphoto_account_person_icon_png_1 = require("@/assets/1564535_customer_user_userphoto_account_person_icon.png");
var Logout_1 = require("./Logout");
var variables_1 = require("@/utils/variables");
var Header = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, _b, data;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _b = (_a = jsonwebtoken_1["default"]).verify;
                return [4 /*yield*/, headers_1.cookies()];
            case 1:
                id = _b.apply(_a, [(_c = (_d.sent()).get("jwt")) === null || _c === void 0 ? void 0 : _c.value, "heaJWUcDBplyWuYg"]).id;
                return [4 /*yield*/, fetch(variables_1.HOSTED_API_LINK + "/users/" + id).then(function (da) { return da.json(); })];
            case 2:
                data = (_d.sent()).data;
                return [2 /*return*/, (React.createElement("section", { className: "px-[4vw] py-[15px] border-b-4 border-b-solid border-b-black" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement(Logo_1["default"], { color: "white" }),
                            React.createElement("div", { className: "flex items-center gap-4" },
                                ["dashboard", "data report"].map(function (el) { return (React.createElement(link_1["default"], { href: "" + el.split(' ').join('-'), className: "font-[700]" }, el.toUpperCase())); }),
                                React.createElement("div", { className: "font-[700] ml-[25px] flex items-center gap-2 cursor-pointer" },
                                    React.createElement("div", { className: "size-[30px]" },
                                        React.createElement("img", { src: _1564535_customer_user_userphoto_account_person_icon_png_1["default"].src, loading: "lazy", alt: "22" })),
                                    data.username),
                                React.createElement(Logout_1["default"], null)))))];
        }
    });
}); };
exports["default"] = Header;
