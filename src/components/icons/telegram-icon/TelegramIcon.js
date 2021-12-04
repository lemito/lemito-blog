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
require("./TelegramIcon.css");
var TelegramIcon = /** @class */ (function (_super) {
    __extends(TelegramIcon, _super);
    function TelegramIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TelegramIcon.prototype.render = function () {
        return (react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 35.25 35.25", className: "telegram" },
            react_1["default"].createElement("path", { d: "M29.54,1.13,4.29,9.55a5,5,0,0,0,0,9.49l10.25,3.42L18,32.71a5,5,0,0,0,9.49,0L35.87,7.46a5,5,0,0,0-6.33-6.33Z", transform: "translate(-0.87 -0.87)" })));
    };
    return TelegramIcon;
}(react_1.Component));
exports["default"] = TelegramIcon;
//# sourceMappingURL=TelegramIcon.js.map