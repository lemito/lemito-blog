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
require("./GarbageIcon.css");
var GarbageIcon = /** @class */ (function (_super) {
    __extends(GarbageIcon, _super);
    function GarbageIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GarbageIcon.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("svg", { className: "garbage-logo-svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 55 60.01", onClick: function () { return _this.props.onClick(); } },
            react_1["default"].createElement("g", { className: "garbage" },
                react_1["default"].createElement("rect", { width: "55", height: "60" }),
                react_1["default"].createElement("path", { d: "M53.28,8.64H40.42v-2A6.71,6.71,0,0,0,33.62,0H21.38a6.71,6.71,0,0,0-6.8,6.6v2H1.72a1.67,1.67,0,1,0,0,3.33h3.1V51.1A9.05,9.05,0,0,0,14,60H41a9.05,9.05,0,0,0,9.18-8.91V12h3.1a1.67,1.67,0,1,0,0-3.33ZM18,6.6a3.32,3.32,0,0,1,3.36-3.27H33.62A3.32,3.32,0,0,1,37,6.6v2H18ZM46.75,51.1A5.67,5.67,0,0,1,41,56.68H14A5.67,5.67,0,0,1,8.25,51.1V12H46.76V51.1Z" }),
                react_1["default"].createElement("path", { d: "M27.5,50.71A1.69,1.69,0,0,0,29.22,49V19.61a1.72,1.72,0,0,0-3.44,0V49A1.7,1.7,0,0,0,27.5,50.71Z" }),
                react_1["default"].createElement("path", { d: "M16.3,48.87A1.69,1.69,0,0,0,18,47.21V21.43a1.72,1.72,0,0,0-3.44,0V47.21A1.7,1.7,0,0,0,16.3,48.87Z" }),
                react_1["default"].createElement("path", { d: "M38.7,48.87a1.69,1.69,0,0,0,1.72-1.66V21.43a1.72,1.72,0,0,0-3.44,0V47.21A1.69,1.69,0,0,0,38.7,48.87Z" }))));
    };
    return GarbageIcon;
}(react_1.Component));
exports["default"] = GarbageIcon;
