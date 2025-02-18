import { cnDataToNum } from "../data/cnDataToNum"
import { twDataToNum } from "../data/twDataToNum"

import { numToCnData } from "../data/numToCnData"
import { numToTwData } from "../data/numToTwData"

/**
 * Helper function to make numbers or string into 4 code format
 */
function toFourNumStr(input: string | number): string {
    let cpKey = input + "";

    while (cpKey.length < 4) {
        cpKey = "0" + cpKey;
    }

    return cpKey;
}

/**
 * Options Settings for general convert functions
 */
interface Options {
    lang?: "tw" | "cn";
    notFoundReturn?: string;
}

/**
 * Convert Number Or String input to regarding Chinese word code
 */
export function numberToCode(
    input: string | number | number[] | string[],
    inputOptions?: Options,
): string {
    const options = {
        ...{
            lang: "tw",
            notFoundReturn: "",
        },
        ...inputOptions,
    };

    const data: Record<string, string> = options.lang === "tw"
        ? numToTwData
        : numToCnData;

    if (Array.isArray(input)) {
        return input.map((key) => {
            const cpKey = toFourNumStr(key);
            return data[cpKey] !== undefined
                ? data[cpKey]
                : options.notFoundReturn;
        }).join("");
    }
    else if(typeof input === "string"){
        return input.split(" ").map((key) => {
            const cpKey = toFourNumStr(key);
            return data[cpKey] !== undefined
                ? data[cpKey]
                : options.notFoundReturn;
        }).join("");
    }
    else if (typeof input === "number") {
        const cpStr = toFourNumStr(input);
        return data[cpStr] !== undefined ? data[cpStr] : options.notFoundReturn;
    }

    return "";
}

/**
 * Convert Chinese word code to regarding number code
 */
export function codeToNumber(
    input: string | string[],
    inputOptions?: Options,
): string {
    const options = {
        ...{
            lang: "tw",
            notFoundReturn: "-1",
        },
        ...inputOptions,
    };

    const data: Record<string, string> = options.lang === "tw"
        ? twDataToNum
        : cnDataToNum;

    if (Array.isArray(input)) {
        return input.map((key) => {
            return data[key] !== undefined
                ? data[key]
                : options.notFoundReturn;
        }).join(" ");
    }
    else if(input.length >= 2){
        return input.split("").map((key) => {
            return data[key] !== undefined
                ? data[key]
                : options.notFoundReturn;
        }).join(" ");
    }
    else {
        return data[input] !== undefined ? data[input] : options.notFoundReturn;
    }
}
