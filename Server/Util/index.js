"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanitizeArray = void 0;
function SanitizeArray(inputString) {
    if (Array.isArray(inputString)) {
        return inputString.map((item) => String(item).trim()).filter((item) => item !== '');
    }
    else {
        let unsanitizedArray = inputString.split(',');
        return unsanitizedArray.map((item) => item.trim()).filter((item) => item !== '');
    }
}
exports.SanitizeArray = SanitizeArray;
//# sourceMappingURL=index.js.map