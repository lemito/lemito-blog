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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Title_1 = __importDefault(require("../title/Title"));
var checkbox_controller_1 = require("./checkbox-controller");
var api_1 = require("../../../../util/api");
var const_1 = require("../../../../util/const");
require("./LettersContent.css");
var LettersContent = /** @class */ (function (_super) {
    __extends(LettersContent, _super);
    function LettersContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chronology = [
            { value: "new", title: "последнее" },
            { value: "chronology", title: "хронология" }
        ];
        _this.state = {
            titles: [],
            selectedTitleId: 0,
            selectedChronology: _this.chronology[0],
            newLetterTitle: false
        };
        _this.componentWillMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, contentsState, history, match, path, mode, titles_1, lastSelectedTitleId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, contentsState = _a.contentsState, history = _a.history, match = _a.match, path = _a.path, mode = _a.mode;
                        if (!(contentsState === null)) return [3 /*break*/, 5];
                        titles_1 = [];
                        if (!(mode === const_1.LETTERS_CONTENT_MODE[0])) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, api_1.getAllTitles)()
                                .then(function (response) { titles_1 = response.data; })];
                    case 1:
                        _b.sent();
                        this.setState({ newLetterTitle: true });
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(mode === const_1.LETTERS_CONTENT_MODE[1])) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, api_1.getPublicTitles)()
                                .then(function (response) { titles_1 = response.data; })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        titles_1 = this.chronologySort(titles_1, this.chronology[0].value);
                        if (match.params.id !== "last") {
                            this.setState({
                                titles: titles_1,
                                selectedTitleId: parseInt(match.params.id)
                            });
                        }
                        else {
                            lastSelectedTitleId = titles_1[0].id;
                            history.push("".concat(path, "/").concat(lastSelectedTitleId));
                            this.setState({
                                titles: titles_1,
                                selectedTitleId: lastSelectedTitleId
                            });
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({
                            titles: contentsState.titles,
                            selectedTitleId: contentsState.selectedTitleId,
                            selectedChronology: contentsState.selectedChronology,
                            newLetterTitle: contentsState.newLetterTitle
                        });
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.handleChronologySelect = function (props) {
            var titles = _this.chronologySort(_this.state.titles, props.state);
            var selectedChronology = _this.chronology.find(function (state) { return state.value === props.state; });
            _this.setState({
                titles: titles,
                selectedChronology: selectedChronology
            });
        };
        _this.chronologySort = function (titles, state) {
            if (state === _this.chronology[0].value) {
                titles.sort(function (a, b) {
                    if (a.dateOfPublication < b.dateOfPublication)
                        return 1;
                    if (a.dateOfPublication > b.dateOfPublication)
                        return -1;
                    else
                        return -1;
                });
                _this.setState({
                    titles: titles
                });
            }
            else if (state === _this.chronology[1].value) {
                titles.sort(function (a, b) {
                    if (a.dateOfPublication > b.dateOfPublication)
                        return 1;
                    if (a.dateOfPublication < b.dateOfPublication)
                        return -1;
                    else
                        return -1;
                });
            }
            return titles;
        };
        _this.handleTitleSelect = function (props) {
            _this.setState({
                selectedTitleId: props.id
            });
            (0, checkbox_controller_1.uncheckTogleInput)();
        };
        _this.updateContents = function () {
            var _a = _this.props, history = _a.history, path = _a.path;
            history.push("".concat(path, "/new_letter"));
            _this.componentWillMount();
        };
        return _this;
    }
    LettersContent.prototype.componentWillUnmount = function () {
        this.props.beforeLettersContentsUnMount(this.state);
    };
    LettersContent.prototype.render = function () {
        var _this = this;
        var path = this.props.path;
        var _a = this.state, selectedChronology = _a.selectedChronology, selectedTitleId = _a.selectedTitleId, newLetterTitle = _a.newLetterTitle;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("input", { id: "toggle-input", type: "checkbox" }),
            react_1["default"].createElement("label", { htmlFor: "toggle-input", id: "toggle-label" }, "\u043F\u0438\u0441\u044C\u043C\u0430"),
            react_1["default"].createElement("div", { className: "letters-content-div animated" },
                react_1["default"].createElement("div", { className: "chronology-controller-div" }, this.chronology.map(function (title, key) {
                    return (react_1["default"].createElement("span", { className: "chronology-span", key: key },
                        react_1["default"].createElement(Title_1["default"], { title: title.title, state: title.value, isSelected: selectedChronology.value === title.value, handleTitleSelect: _this.handleChronologySelect })));
                })),
                react_1["default"].createElement("div", { className: "content-list-div" },
                    newLetterTitle ?
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "".concat(path, "/new_letter"), className: "react-router-link" },
                            react_1["default"].createElement(Title_1["default"], { id: -100, title: "новое письмо", handleTitleSelect: function () { } }))
                        : null,
                    this.state.titles.map(function (title, key) {
                        return (react_1["default"].createElement(react_router_dom_1.Link, { to: "".concat(path, "/").concat(title.id), className: "react-router-link", key: key },
                            react_1["default"].createElement(Title_1["default"], { id: title.id, title: title.title, dateOfPublication: title.dateOfPublication, state: title.state, isSelected: selectedTitleId === title.id, handleTitleSelect: _this.handleTitleSelect })));
                    })))));
    };
    return LettersContent;
}(react_1.Component));
exports["default"] = LettersContent;
//# sourceMappingURL=LettersContent.js.map