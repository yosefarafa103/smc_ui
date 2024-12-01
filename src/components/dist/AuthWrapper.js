"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginForm_1 = require("./LoginForm");
var AuthWrapper = function () {
    var _a = react_1.useState(false), isLogin = _a[0], setIsLogin = _a[1];
    console.log(isLogin);
    return (React.createElement(React.Fragment, null, !isLogin ?
        // <SiginInPage handelAuthState={() => setIsLogin(prev => !prev)} />
        // :
        React.createElement(LoginForm_1["default"], { handelAuthState: function () { return setIsLogin(function (prev) { return !prev; }); } }) :
        null));
};
exports["default"] = AuthWrapper;
