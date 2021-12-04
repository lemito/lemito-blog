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
var react_cookie_consent_1 = __importDefault(require("react-cookie-consent"));
var react_intl_1 = require("react-intl");
var AsyncLoader_1 = __importDefault(require("../../async-loader/AsyncLoader"));
var LetterDate_1 = __importDefault(require("../letter-date/LetterDate"));
var api_1 = require("../../../util/api");
require("./Letter.css");
var Letter = /** @class */ (function (_super) {
    __extends(Letter, _super);
    function Letter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: -1,
            title: "",
            dateOfPublication: 0,
            htmlText: "",
            pictureURL: "",
            isLoading: true
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, api_1.getPublicLetterById)(parseInt(this.props.match.params.id))
                            .then(function (response) {
                            var _a = response.data, id = _a.id, title = _a.title, dateOfPublication = _a.dateOfPublication, htmlText = _a.htmlText, pictureName = _a.pictureName;
                            _this.setState({
                                id: id,
                                title: title,
                                dateOfPublication: dateOfPublication,
                                htmlText: htmlText,
                                //    pictureURL: API_BASE_URL + "/public/pictures/" + pictureName,
                                isLoading: false
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Letter.prototype.render = function () {
        var _a = this.state, title = _a.title, dateOfPublication = _a.dateOfPublication, htmlText = _a.htmlText, pictureURL = _a.pictureURL, isLoading = _a.isLoading;
        return (react_1["default"].createElement("div", { className: "background-letter-div" },
            react_1["default"].createElement("div", { className: "letter-div animated" },
                isLoading ? react_1["default"].createElement(AsyncLoader_1["default"], null) :
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: "letter-title-div" }, title),
                        react_1["default"].createElement(LetterDate_1["default"], { date: dateOfPublication }),
                        react_1["default"].createElement("div", { className: "html-text", dangerouslySetInnerHTML: { __html: htmlText } })),
                react_1["default"].createElement("div", { className: "cookie" },
                    react_1["default"].createElement(react_cookie_consent_1["default"], { onAccept: function () {
                            alert("yay!");
                        }, debug: false, enableDeclineButton: true, acceptOnScroll: true, declineButtonText: "Decline (optional)", onDecline: function () {
                            alert(react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "cookie.onDecline", defaultMessage: "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B - \u043D\u0435\u043C\u0435\u043D\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u043A\u0438\u043D\u044C\u0442\u0435 \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442!", "default": "\u0422\u0435\u043A\u0441\u0442 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0432\u044B\u043B\u0435\u0437\u0430\u0435\u0442 \u0435\u0441\u043B\u0438 \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F \u0441 \u043A\u0443\u043A\u0438" })); // "Если Вы не согласны - немендленно покиньте этот сайт!"
                        } },
                        react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "cookie.first", defaultMessage: "\u041C\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u0430\u0439\u043B\u044B \u043A\u0443\u043A\u0438. \u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B - \u043D\u0435\u043C\u0435\u043D\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u043A\u0438\u043D\u044C\u0442\u0435 \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442!", description: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u0430\u043D\u0435\u0440\u0430 \u043A\u0443\u043A\u0438" }),
                        " ",
                        " ",
                        react_1["default"].createElement("span", { style: { fontSize: "10px" } },
                            react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "cookie.egg", defaultMessage: "\u0411\u0435\u0437 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0433\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F \u0411\u0415\u0421\u041A\u041E\u041D\u0415\u0427\u041D\u041E :O", description: "\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u043F\u0430\u0441\u043A\u0430\u0445\u043B\u043A\u0430. \u0417\u0430\u0447\u0435\u043C - \u043D\u0435 \u044F\u0441\u043D\u043E." })))))));
    };
    return Letter;
}(react_1.Component));
exports["default"] = Letter;
