"use strict";
exports.__esModule = true;
exports.autoresize = void 0;
function autoresize(elementId) {
    var textarea = document.getElementById(elementId);
    textarea.style.height = "1px";
    textarea.style.height = (-8 + textarea.scrollHeight) + "px";
}
exports.autoresize = autoresize;
//# sourceMappingURL=autoresize.js.map