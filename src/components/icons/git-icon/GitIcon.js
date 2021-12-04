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
require("./GitIcon.css");
var GitIcon = /** @class */ (function (_super) {
    __extends(GitIcon, _super);
    function GitIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitIcon.prototype.render = function () {
        return (react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25.21 28.57", className: "git" },
            react_1["default"].createElement("path", { d: "M24,31.53c0-.6,0-2.58,0-5a4.39,4.39,0,0,0-1.24-3.4c4.08-.46,8.38-2,8.38-9.06a7.1,7.1,0,0,0-1.89-4.93A6.57,6.57,0,0,0,29,4.26S27.5,3.76,24,6.14a17.34,17.34,0,0,0-9.19,0c-3.5-2.38-5-1.88-5-1.88a6.57,6.57,0,0,0-.18,4.85A7.1,7.1,0,0,0,7.69,14c0,7,4.28,8.61,8.36,9.07a3.92,3.92,0,0,0-1.17,2.46A3.9,3.9,0,0,1,9.54,24a3.86,3.86,0,0,0-2.81-1.89s-1.79,0-.13,1.11a4.86,4.86,0,0,1,2,2.69s1.08,3.57,6.18,2.46c0,1.53,0,2.69,0,3.12v1.26H24Z", transform: "translate(-5.89 -4.21)" })));
    };
    return GitIcon;
}(react_1.Component));
exports["default"] = GitIcon;
//# sourceMappingURL=GitIcon.js.map