"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeToNumber = exports.numberToCode = void 0;
function toFourNumStr(input) {
    let cpKey = input + "";
    while (cpKey.length < 4) {
        cpKey = "0" + cpKey;
    }
    return cpKey;
}
/**
 * Convert Number Or String input to regarding Chinese word code
 */
function numberToCode(input, inputOptions) {
    const options = Object.assign({
        lang: "tw",
        notFoundReturn: "",
    }, inputOptions);
    const data = options.lang === "tw"
        ? require("../data/numToTwData.json")
        : require("../data/numToCnData.json");
    if (Array.isArray(input)) {
        return input.map((key) => {
            const cpKey = toFourNumStr(key);
            return data[cpKey] !== undefined
                ? data[cpKey]
                : options.notFoundReturn;
        }).join("");
    }
    else if (typeof input === "string" || typeof input === "number") {
        const cpStr = toFourNumStr(input);
        return data[cpStr] !== undefined ? data[cpStr] : options.notFoundReturn;
    }
    return "";
}
exports.numberToCode = numberToCode;
function codeToNumber(input, inputOptions) {
    const options = Object.assign({
        lang: "tw",
        notFoundReturn: "-1",
    }, inputOptions);
    const data = options.lang === "tw"
        ? require("../data/twDataToNum.json")
        : require("../data/cnDataToNum.json");
    if (Array.isArray(input)) {
        return input.map((key) => {
            return data[key] !== undefined
                ? data[key]
                : options.notFoundReturn;
        }).join(" ");
    }
    else if (input.length >= 2) {
        return input.split("").map((key) => {
            return data[key] !== undefined
                ? data[key]
                : options.notFoundReturn;
        }).join(" ");
    }
    else {
        return data[input] !== undefined ? data[input] : options.notFoundReturn;
    }
    return "";
}
exports.codeToNumber = codeToNumber;
//# sourceMappingURL=numberToCode.js.map