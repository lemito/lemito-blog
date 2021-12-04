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
var GarbageIcon_1 = __importDefault(require("../../icons/garbage-icon/GarbageIcon"));
var pre_upload_img_gray_svg_1 = __importDefault(require("../../../resources/pre-upload-img-gray.svg"));
var pre_upload_img_black_svg_1 = __importDefault(require("../../../resources/pre-upload-img-black.svg"));
var const_1 = require("../../../util/const");
require("./ImgUploader.css");
var ImgUploader = /** @class */ (function (_super) {
    __extends(ImgUploader, _super);
    function ImgUploader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            img: pre_upload_img_gray_svg_1["default"],
            imgControlDisplay: "none"
        };
        _this.fileInputHandler = function (event) {
            var files = event.target.files;
            if (files.length === 1 && files[0].type === "image/jpeg") {
                _this.setState({
                    img: URL.createObjectURL(files[0])
                });
                _this.props.handleImgChange(files[0]);
            }
        };
        _this.onImgOver = function () {
            var img = _this.state.img;
            if (img === pre_upload_img_gray_svg_1["default"]) {
                _this.setState({
                    img: pre_upload_img_black_svg_1["default"]
                });
            }
            else {
                _this.setState({
                    imgControlDisplay: "block"
                });
            }
        };
        _this.onImgLeave = function () {
            var img = _this.state.img;
            if (img === pre_upload_img_black_svg_1["default"]) {
                _this.setState({
                    img: pre_upload_img_gray_svg_1["default"]
                });
            }
            else {
                _this.setState({
                    imgControlDisplay: "none"
                });
            }
        };
        _this.removeCurrentImg = function () {
            _this.setState({
                img: pre_upload_img_gray_svg_1["default"]
            });
            _this.props.handleImgChange(null);
        };
        return _this;
    }
    ImgUploader.prototype.componentWillReceiveProps = function (props) {
        if (props.pictureName !== null) {
            var pictureUrl = const_1.API_BASE_URL + "/public/pictures/" + props.pictureName;
            this.setState({
                img: pictureUrl
            });
        }
    };
    ImgUploader.prototype.render = function () {
        var _this = this;
        var _a = this.state, img = _a.img, imgControlDisplay = _a.imgControlDisplay;
        return (react_1["default"].createElement("div", { className: "img-uploader-div" },
            react_1["default"].createElement("div", { className: "img-control-div", style: { display: imgControlDisplay }, onMouseOver: this.onImgOver, onMouseLeave: this.onImgLeave },
                react_1["default"].createElement(GarbageIcon_1["default"], { onClick: this.removeCurrentImg })),
            react_1["default"].createElement("input", { type: "file", ref: function (fileInput) { return _this.fileInput = fileInput; }, onChange: this.fileInputHandler }),
            react_1["default"].createElement("img", { className: "upload-img", onClick: function () { return _this.fileInput.click(); }, onMouseOver: this.onImgOver, onMouseLeave: this.onImgLeave, src: img, alt: "" })));
    };
    return ImgUploader;
}(react_1.Component));
exports["default"] = ImgUploader;
//# sourceMappingURL=ImgUploader.js.map