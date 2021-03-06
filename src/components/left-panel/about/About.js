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
var TelegramIcon_1 = __importDefault(require("../../icons/telegram-icon/TelegramIcon"));
var GitIcon_1 = __importDefault(require("../../icons/git-icon/GitIcon"));
var classname_1 = require("@bem-react/classname");
require("./About.css");
var react_intl_1 = require("react-intl");
var about = (0, classname_1.cn)('inner-html');
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "about-div animated" },
            react_1["default"].createElement("div", { className: about },
                react_1["default"].createElement("p", null,
                    react_1["default"].createElement(react_intl_1.FormattedMessage, { id: 'about', defaultMessage: '\u042F - lemit', description: "\u042F - lemit" }))),
            react_1["default"].createElement("div", { className: "contacts-div" },
                react_1["default"].createElement("div", { className: "contact-div" },
                    react_1["default"].createElement("a", { href: "https://t.me/", target: "_blank", rel: "noopener noreferrer" },
                        react_1["default"].createElement(TelegramIcon_1["default"], null)),
                    "author"),
                react_1["default"].createElement("div", { className: "contact-div" },
                    react_1["default"].createElement("a", { href: "https://github.com/", target: "_blank", rel: "noopener noreferrer" },
                        react_1["default"].createElement(GitIcon_1["default"], null)),
                    "sorce"))));
    };
    return About;
}(react_1.Component));
exports["default"] = About;
