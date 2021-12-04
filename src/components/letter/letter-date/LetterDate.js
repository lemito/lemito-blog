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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
require("./LetterDate.css");
var LetterDate = /** @class */ (function (_super) {
    __extends(LetterDate, _super);
    function LetterDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LetterDate.prototype.render = function () {
        var date = (0, moment_1["default"])().local();
        if (this.props.date !== undefined)
            date = (0, moment_1["default"])(this.props.date);
        var day = date.date();
        if (day < 10)
            day = "0" + day;
        var month = date.month() + 1;
        if (month < 10)
            month = "0" + month;
        var year = date.year().toString();
        return (react_1["default"].createElement("div", { className: "date-div" }, day + " . " + month + " . " + year));
    };
    return LetterDate;
}(react_1.Component));
exports["default"] = LetterDate;
//# sourceMappingURL=LetterDate.js.map