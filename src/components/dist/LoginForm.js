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
var axios_1 = require("axios");
var react_1 = require("react");
var Message_1 = require("./Message");
var js_cookie_1 = require("js-cookie");
var navigation_1 = require("next/navigation");
var variables_1 = require("@/utils/variables");
var LoginForm = function (_a) {
    var _b, _c;
    var handelAuthState = _a.handelAuthState;
    var login = variables_1.HOSTED_API_LINK + "/users/login";
    var _d = react_1.useState(''), username = _d[0], setUsername = _d[1];
    var _e = react_1.useState(''), password = _e[0], setPassword = _e[1];
    var router = navigation_1.useRouter();
    var _f = react_1.useState({}), message = _f[0], setMessage = _f[1];
    var submit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, token, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post(login, {
                            username: username,
                            password: password
                        })];
                case 2:
                    data = (_a.sent()).data;
                    token = data.token;
                    console.log(data);
                    // setCookie('jwt', token, {
                    //     expires: new Date(Date.now() + 3600000),
                    //     httpOnly: true,
                    // })
                    js_cookie_1["default"].set('jwt', token);
                    localStorage.setItem('randomString', token);
                    // createCookie(data)
                    setMessage({ type: "success", m: data });
                    router.push('dashboard');
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setMessage({ type: "err", m: err_1.response.data });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col items-center justify-center" },
            React.createElement("div", { className: "w-full max-w-md bg-white rounded-lg shadow-md p-6" },
                message &&
                    React.createElement(Message_1["default"], { message: ((_b = message === null || message === void 0 ? void 0 : message.m) === null || _b === void 0 ? void 0 : _b.message) || ((_c = message === null || message === void 0 ? void 0 : message.m) === null || _c === void 0 ? void 0 : _c.status), type: message === null || message === void 0 ? void 0 : message.type }),
                React.createElement("h2", { className: "text-2xl font-bold text-gray-900 mb-4" }, "Login"),
                React.createElement("form", { onSubmit: submit, className: "flex flex-col" },
                    React.createElement("input", { type: "text", onChange: function (e) { return setUsername(e.target.value); }, className: "bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150", placeholder: "Email address" }),
                    React.createElement("input", { type: "password", onChange: function (e) { return setPassword(e.target.value); }, className: "bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150", placeholder: "Password" }),
                    React.createElement("div", { className: "flex items-center justify-between flex-wrap" },
                        React.createElement("p", { className: "text-gray-900 text-sm mt-0" },
                            " Don't have an account? ",
                            React.createElement("div", { onClick: handelAuthState, className: "text-sm text-blue-500 cursor-pointer inline hover:underline mt-4" }, "Signup"))),
                    React.createElement("button", { type: "submit", className: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" }, "Login"))))));
};
exports["default"] = LoginForm;
