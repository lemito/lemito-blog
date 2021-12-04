"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var api_1 = require("../../util/api");
var const_1 = require("../../util/const");
require("./Login.css");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            username: "",
            password: ""
        };
        _this.handleUsernameChange = function (event) {
            var value = event.target.value;
            _this.setState({
                username: value
            });
        };
        _this.handlePasswordChange = function (event) {
            var value = event.target.value;
            _this.setState({
                password: value
            });
        };
        _this.handleSubmit = function () {
            var loginRequest = {
                username: _this.state.username,
                password: _this.state.password
            };
            (0, api_1.login)(loginRequest)
                .then(function (response) {
                console.log(response);
                localStorage.setItem(const_1.ACCESS_TOKEN, response.data.accessToken);
                _this.props.onLogIn(_this.props.history);
            })["catch"](function (error) {
                console.log(JSON.parse(JSON.stringify(error)).response.data.status);
            });
            ;
        };
        return _this;
    }
    Login.prototype.render = function () {
        var _a = this.state, username = _a.username, password = _a.password;
        return (react_1["default"].createElement("div", { className: "login-div" },
            react_1["default"].createElement("div", { className: "login-background" },
                react_1["default"].createElement("p", { className: "warning" }, warning),
                react_1["default"].createElement("span", { className: "field-name-span" }, "\u043B\u043E\u0433\u0438\u043D:"),
                react_1["default"].createElement("input", { type: "text", value: username, id: "username-input", className: "login-input", onChange: this.handleUsernameChange }),
                react_1["default"].createElement("span", { id: "password-span", className: "field-name-span", onMouseDown: this.showPassword, onMouseUp: this.hidePassword }, "\u043F\u0430\u0440\u043E\u043B\u044C:"),
                react_1["default"].createElement("input", { type: "password", value: password, id: "password-input", className: "login-input", onChange: this.handlePasswordChange }),
                react_1["default"].createElement("button", { className: "login-button", onClick: this.handleSubmit }, "\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0443"))));
    };
    return Login;
}(react_1.Component));
var warning = "Если Вы не знаете, куда попали, прошу, покиньте эту территорию, ведь Вы не отыщите здесь того, чего хотите.";
exports["default"] = Login;
//# sourceMappingURL=Login.js.map