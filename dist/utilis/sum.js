"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToCode = void 0;
function numberToCode(input, inputOptions) {
    const options = Object.assign({
        lang: "tw",
    }, inputOptions);
    console.log(options);
    const data = require("../data/numToTsData.json");
    console.log(data);
    return "";
}
exports.numberToCode = numberToCode;
//# sourceMappingURL=sum.js.map