"use strict";
exports.__esModule = true;
exports.LETTERS_CONTENT_MODE = exports.ACCESS_TOKEN = exports.API_BASE_URL = void 0;
console.clear();
var a, b = "";
for (a = 1; 8 > a; a++)
    b += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-__-".charAt(Math.floor(66 * Math.random() + 1));
console.log("Your access token is " + b);
exports.API_BASE_URL = "https://shrouded-retreat-21347.herokuapp.com";
exports.ACCESS_TOKEN = b;
exports.LETTERS_CONTENT_MODE = ["ALL", "PUBLIC"];
/*console.log("Your access token is "+ passwd)
const language = navigator.language || navigator.userLanguage || 'en';
console.log("Now your lang is "+ language)*/ 
