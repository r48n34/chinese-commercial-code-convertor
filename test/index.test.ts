import { numberToCode, codeToNumber } from "../src/index"

// https://www.njstar.com/tools/telecode/Chinese-Telegraph-Code-Book.php?TW=1
test('TW test numberToCode', () => {
    expect(numberToCode(1234)).toBe("姹");
    expect(numberToCode(1234, {lang: "tw"})).toBe("姹");
    expect(numberToCode(1234, {lang: undefined })).toBe("姹");

    expect(numberToCode(36, {lang: "tw"})).toBe("久");

    expect(numberToCode("0123", {lang: "tw"})).toBe("伋");
    expect(numberToCode("123", {lang: "tw"})).toBe("伋");

    expect(numberToCode(["0144", "0155"], {lang: "tw"})).toBe("低作");

    expect(numberToCode([1315, 1355, 1], {lang: "tw"})).toBe("孖宜一");

    expect(numberToCode([8128, 8152], {lang: "tw"})).toBe("剷卼");

    expect(numberToCode("8260", {lang: "tw"})).toBe("");
    expect(numberToCode("8260", {lang: "tw", notFoundReturn: "*"})).toBe("*");

    expect(numberToCode(["0144", "8260", "0155"], {lang: "tw", notFoundReturn: "?"})).toBe("低?作");
    expect(numberToCode(["0144", "8260", "0155"], {lang: "tw"})).toBe("低作");
})

test('TW test codeToNumber', () => {
    expect(codeToNumber("姹")).toBe("1234");
    expect(codeToNumber("姹", {lang: "tw"})).toBe("1234");
    expect(codeToNumber("低作", {lang: "tw"})).toBe("0144 0155");
    expect(codeToNumber("低作")).toBe("0144 0155");

    expect(codeToNumber("低劝作", {lang: "tw"})).toBe("0144 -1 0155");
    expect(codeToNumber("低劝作", {lang: "tw", notFoundReturn: "?"})).toBe("0144 ? 0155");

    expect(codeToNumber(["低", "作"], {lang: "tw"})).toBe("0144 0155");
    expect(codeToNumber(["低", "劝", "作"], {lang: "tw"})).toBe("0144 -1 0155");
})

// https://www.njstar.com/tools/telecode/Chinese-Telegraph-Code-Book.php
test('CN test numberToCode', () => {
    expect(numberToCode(1234, {lang: "cn"})).toBe("姹");
    expect(numberToCode(36, {lang: "cn"})).toBe("久");

    expect(numberToCode("0123", {lang: "cn"})).toBe("伋");
    expect(numberToCode("123", {lang: "cn"})).toBe("伋");

    expect(numberToCode(["0144", "0155"], {lang: "cn"})).toBe("低作");

    expect(numberToCode([1315, 1355, 1], {lang: "cn"})).toBe("孓宜一");

    expect(numberToCode([8134, 8189], {lang: "cn"})).toBe("咥囡");
    expect(numberToCode([8128, 8152], {lang: "cn"})).toBe("");

    expect(numberToCode("8260", {lang: "cn"})).toBe("");
    expect(numberToCode("8260", {lang: "cn", notFoundReturn: "*"})).toBe("*");

    expect(numberToCode(["0144", "8260", "0155"], {lang: "cn", notFoundReturn: "?"})).toBe("低?作");
    expect(numberToCode(["0144", "8260", "0155"], {lang: "cn"})).toBe("低作");
})

test('CN test codeToNumber', () => {
    expect(codeToNumber("咥", {lang: "cn"})).toBe("8134");

})