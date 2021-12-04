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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_dropdown_1 = __importDefault(require("react-dropdown"));
var LetterDate_1 = __importDefault(require("../../letter/letter-date/LetterDate"));
var ImgUploader_js_1 = __importDefault(require("../img-uploader/ImgUploader.js"));
var api_1 = require("../../../util/api");
var autoresize_js_1 = require("./autoresize.js");
require("./LetterTemplate.css");
var LetterTemplate = /** @class */ (function (_super) {
    __extends(LetterTemplate, _super);
    function LetterTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.letterStates = [
            { value: 'PUBLIC', label: 'паблик', className: "dropdowns" },
            { value: 'DRAFT', label: 'черновик', className: "dropdowns" }
        ];
        _this.state = {
            id: null,
            title: '',
            dateOfPublication: new Date(),
            htmlText: '',
            picture: null,
            pictureName: null,
            letterState: _this.letterStates[1],
            isBeforeRemovingPopUp: false
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.props.match.params.id !== "new_letter") {
                    (0, api_1.getAnyLetterById)(parseInt(this.props.match.params.id))
                        .then(function (response) {
                        var _a = response.data, id = _a.id, title = _a.title, dateOfPublication = _a.dateOfPublication, htmlText = _a.htmlText, pictureName = _a.pictureName, state = _a.state;
                        _this.setState({
                            id: id,
                            title: title,
                            dateOfPublication: new Date(dateOfPublication),
                            htmlText: htmlText,
                            pictureName: pictureName,
                            letterState: _this.letterStates.find(function (letterState) { return letterState.value === state; })
                        });
                    });
                }
                return [2 /*return*/];
            });
        }); };
        _this.componentDidUpdate = function () {
            (0, autoresize_js_1.autoresize)("textarea-input");
        };
        _this.saveLetter = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a, id, title, dateOfPublication, htmlText, picture, pictureName, letterState, letter, fileName;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event.preventDefault();
                        _a = this.state, id = _a.id, title = _a.title, dateOfPublication = _a.dateOfPublication, htmlText = _a.htmlText, picture = _a.picture, pictureName = _a.pictureName, letterState = _a.letterState;
                        letter = {
                            id: id,
                            title: title,
                            dateOfPublication: dateOfPublication,
                            htmlText: htmlText,
                            state: letterState.value
                        };
                        if (!(id === null || picture !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.savePicture()];
                    case 1:
                        fileName = _b.sent();
                        letter.pictureName = fileName;
                        return [3 /*break*/, 3];
                    case 2:
                        if (id !== null && picture === null) {
                            letter.pictureName = pictureName;
                        }
                        _b.label = 3;
                    case 3:
                        (0, api_1.saveLetter)(letter)
                            .then(function (response) {
                            if (response.status === 200) {
                                _this.props.cellContentsUpdate();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.showBeforeRemovingPopUp = function () {
            _this.setState({
                isBeforeRemovingPopUp: !_this.state.isBeforeRemovingPopUp
            });
        };
        _this.allowRemoving = function () {
            var id = _this.state.id;
            if (id !== null) {
                (0, api_1.deleteLetter)(id)
                    .then(function (response) {
                    if (response.status === 200) {
                        _this.setState({
                            isBeforeRemovingPopUp: false
                        });
                        _this.props.cellContentsUpdate();
                    }
                });
            }
        };
        _this.savePicture = function () { return __awaiter(_this, void 0, void 0, function () {
            var formData, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append("pictureFile", this.state.picture);
                        return [4 /*yield*/, (0, api_1.savePicture)(formData)];
                    case 1:
                        response = _a.sent();
                        if (response.status === 200) {
                            return [2 /*return*/, response.data.fileName];
                        }
                        else {
                            // !!! //
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleTitleChange = function (event) {
            var value = event.target.value;
            _this.setState({
                title: value
            });
        };
        _this.handleHtmlTextChange = function (event) {
            (0, autoresize_js_1.autoresize)(event.target.id);
            var value = event.target.value;
            _this.setState({
                htmlText: value
            });
        };
        _this.handleDropDownSelect = function (letterState) {
            _this.setState({
                letterState: letterState
            });
        };
        _this.handleImgChange = function (picture) {
            if (picture !== null) {
                _this.setState({
                    picture: picture
                });
            }
            else {
                _this.setState({
                    picture: null,
                    pictureName: null
                });
            }
        };
        return _this;
    }
    LetterTemplate.prototype.render = function () {
        var _this = this;
        var _a = this.state, title = _a.title, dateOfPublication = _a.dateOfPublication, htmlText = _a.htmlText, pictureName = _a.pictureName, isBeforeRemovingPopUp = _a.isBeforeRemovingPopUp;
        return (react_1["default"].createElement("div", { className: "background-letter-editor-div" },
            react_1["default"].createElement("div", { className: "letter-editor" },
                react_1["default"].createElement("input", { id: "title-input", className: "input-authorship-field", type: "text", placeholder: "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435", value: title, onChange: this.handleTitleChange }),
                react_1["default"].createElement(LetterDate_1["default"], { date: dateOfPublication }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("textarea", { id: "textarea-input", className: "input-authorship-field", type: "text", value: htmlText, onChange: this.handleHtmlTextChange }),
                    react_1["default"].createElement(ImgUploader_js_1["default"], { pictureName: pictureName, handleImgChange: this.handleImgChange }),
                    react_1["default"].createElement("div", { id: "letter-save-div" },
                        react_1["default"].createElement(react_dropdown_1["default"], { options: this.letterStates, onChange: this.handleDropDownSelect, value: this.state.letterState, className: 'dropdown-selector', placeholderClassName: 'dropdown-placeholder', controlClassName: 'control-dropdown-selector', menuClassName: 'menu-dropdown-selector', arrowClassName: 'arrow-dropdown-selector' }),
                        react_1["default"].createElement("div", { className: "save-delete-div" },
                            react_1["default"].createElement("button", { className: "save-button", onClick: this.saveLetter }, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
                            react_1["default"].createElement("button", { className: "delete-button", onClick: this.showBeforeRemovingPopUp }, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C")),
                        react_1["default"].createElement("button", { className: "logout-button", onClick: function () { return _this.props.onLogOut(_this.props.history); } }, "\u0432\u044B\u0439\u0442\u0438")))),
            isBeforeRemovingPopUp ?
                react_1["default"].createElement(PopUpBeforeDeleting, { allowRemoving: this.allowRemoving, showPopUp: this.showBeforeRemovingPopUp }) : null));
    };
    return LetterTemplate;
}(react_1.Component));
var PopUpBeforeDeleting = function (_a) {
    var props = __rest(_a, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "popup-background" }),
        react_1["default"].createElement("div", { className: "popup-context-div" },
            react_1["default"].createElement("div", { className: "message" }, "\u0422\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0447\u0435\u0448\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E?"),
            react_1["default"].createElement("button", { className: "choice-button", onClick: props.allowRemoving }, "\u0434\u0430"),
            react_1["default"].createElement("button", { className: "choice-button", onClick: props.showPopUp }, "\u043D\u0435\u0442"))));
};
exports["default"] = LetterTemplate;
//# sourceMappingURL=LetterTemplate.js.map