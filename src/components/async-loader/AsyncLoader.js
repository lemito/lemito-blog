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
var react_intl_1 = require("react-intl");
var classname_1 = require("@bem-react/classname");
require("./AsyncLoader.css");
var loader = (0, classname_1.cn)('Loader');
var AsyncLoader = /** @class */ (function (_super) {
    __extends(AsyncLoader, _super);
    function AsyncLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsyncLoader.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: loader() },
            react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "loader.first", defaultMessage: "\u0415\u0441\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0434\u043E\u043B\u0433\u043E - \u041F\u0415\u0420\u0415\u0417\u0410\u0413\u0420\u0423\u0417\u0418\u0422\u0415 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", description: "\u0415\u0441\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0434\u043E\u043B\u0433\u043E - \u041F\u0415\u0420\u0415\u0417\u0410\u0413\u0420\u0423\u0417\u0418\u0422\u0415 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", classame: loader('first') }),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "loader.second", defaultMessage: "\u0423\u043F\u0441... \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043E\u0436\u0434\u0430\u0442\u044C. \u041C\u044B \u0443\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0438 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u0445 \u0434\u043B\u044F \u0412\u0430\u0441.", description: "\u0423\u043F\u0441... \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043E\u0436\u0434\u0430\u0442\u044C. \u041C\u044B \u0443\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0438 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u0445 \u0434\u043B\u044F \u0412\u0430\u0441.", classame: loader('second') })));
    };
    return AsyncLoader;
}(react_1.Component));
exports["default"] = AsyncLoader;
//# sourceMappingURL=AsyncLoader.js.map