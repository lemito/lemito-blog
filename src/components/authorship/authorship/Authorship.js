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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_router_dom_1 = require("react-router-dom");
var LeftPanel_1 = __importDefault(require("../../left-panel/left-panel/LeftPanel"));
var LetterTemplate_1 = __importDefault(require("../letter-template/LetterTemplate"));
var const_1 = require("../../../util/const");
var Authorship = /** @class */ (function (_super) {
    __extends(Authorship, _super);
    function Authorship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refToContentsUpdate = react_1["default"].createRef();
        _this.updateContents = function () {
            _this.refToContentsUpdate.current.updateContents();
        };
        return _this;
    }
    Authorship.prototype.render = function () {
        var _this = this;
        var match = this.props.match;
        return (react_1["default"].createElement("div", { className: "authorship-div" },
            react_1["default"].createElement(LeftPanel_1["default"], __assign({}, this.props, { path: "/authorship/letters", mode: const_1.LETTERS_CONTENT_MODE[0], ref: this.refToContentsUpdate })),
            react_1["default"].createElement(react_router_dom_1.Route, { path: match.path, component: function (props) {
                    return react_1["default"].createElement(LetterTemplate_1["default"], __assign({}, props, _this.props, { cellContentsUpdate: _this.updateContents }));
                } })));
    };
    return Authorship;
}(react_1.Component));
exports["default"] = Authorship;
