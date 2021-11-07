var i
var passwd = '';
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-__-';
for (i=1;i<8;i++) {
    var c = Math.floor(Math.random()*chars.length + 1);
    passwd += chars.charAt(c)
}
export const API_BASE_URL = "https://shrouded-retreat-21347.herokuapp.com";
export const ACCESS_TOKEN = passwd;
export const LETTERS_CONTENT_MODE = ["ALL", "PUBLIC"];
console.log("Your access token is "+ passwd)
