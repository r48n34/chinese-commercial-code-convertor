interface Options {
    lang?: "tw" | "cn";
    notFoundReturn?: string;
}
/**
 * Convert Number Or String input to regarding Chinese word code
 */
export declare function numberToCode(input: string | number | number[] | string[], inputOptions?: Options): string;
export declare function codeToNumber(input: string | string[], inputOptions?: Options): string;
export {};
