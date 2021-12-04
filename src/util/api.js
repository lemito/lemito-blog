"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.checkAuth = exports.savePicture = exports.saveLetter = exports.login = exports.deleteLetter = exports.getAnyLetterById = exports.getPublicLetterById = exports.getAllTitles = exports.getPublicTitles = void 0;
var const_1 = require("./const");
var axios_1 = __importDefault(require("axios"));
var request = function (options) {
    var headers = {};
    if (options.headers !== undefined)
        headers = options.headers;
    if (localStorage.getItem(const_1.ACCESS_TOKEN)) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem(const_1.ACCESS_TOKEN);
    }
    return (0, axios_1["default"])({
        url: options.url,
        method: options.method,
        data: options.data,
        headers: headers
    });
};
function getPublicTitles() {
    return request({
        url: const_1.API_BASE_URL + "/public/letters/titles",
        method: "GET",
        data: null
    });
}
exports.getPublicTitles = getPublicTitles;
function getAllTitles() {
    return request({
        url: const_1.API_BASE_URL + "/authorship/letters/titles",
        method: "GET",
        data: null
    });
}
exports.getAllTitles = getAllTitles;
function getPublicLetterById(id) {
    return request({
        url: const_1.API_BASE_URL + "/public/letters/" + id,
        method: "GET",
        data: null
    });
}
exports.getPublicLetterById = getPublicLetterById;
function getAnyLetterById(id) {
    return request({
        url: const_1.API_BASE_URL + "/authorship/letters/" + id,
        method: "GET",
        data: null
    });
}
exports.getAnyLetterById = getAnyLetterById;
function deleteLetter(id) {
    return request({
        url: const_1.API_BASE_URL + "/authorship/letters/delete_letter/" + id,
        method: "POST",
        data: null
    });
}
exports.deleteLetter = deleteLetter;
function login(loginRequest) {
    return request({
        url: const_1.API_BASE_URL + "/auth/signin",
        method: "POST",
        data: loginRequest
    });
}
exports.login = login;
function saveLetter(letter) {
    return request({
        url: const_1.API_BASE_URL + "/authorship/letters/save_letter",
        method: "POST",
        data: letter
    });
}
exports.saveLetter = saveLetter;
function savePicture(picture) {
    return request({
        url: const_1.API_BASE_URL + "/authorship/pictures/save_picture",
        method: "POST",
        data: picture
    });
}
exports.savePicture = savePicture;
function checkAuth() {
    return request({
        url: const_1.API_BASE_URL + "/auth/is_authed",
        method: "GET"
    });
}
exports.checkAuth = checkAuth;
//# sourceMappingURL=api.js.map