# 💡 Chinese Commercial Code Convertor

Simple Typescript code for convert Chinese Commercial Code.

- Zero dependency

## 💻 Install 
```bash
npm i chinese-commercial-code-convertor
yarn add chinese-commercial-code-convertor
```

## 🛠️ Usage
```ts
import { numberToCode, codeToNumber } from "chinese-commercial-code-convertor"

// Convert Number To Chinese Code
console.log(numberToCode(1234)); // "姹"
console.log(numberToCode(36, {lang: "tw"})); // "久", Will auto convert 36 to 0036

console.log(numberToCode("0155")); // "作"
console.log(numberToCode(["0144", "0155"])); // 低作"

// Convert Chinese Code To Number
console.log(codeToNumber("姹")) // "1234"
console.log(codeToNumber("低作")) // "0144 0155"

console.log(codeToNumber(["低", "作"])) // "0144 0155"
console.log(codeToNumber(["低", "劝", "作"])) // "0144 -1 0155"
```

## Utils

### `numberToCode()`
Convert your number input to chinese string.
```ts
numberToCode(
    input: string | number | number[] | string[],
    inputOptions?: Options,
): string 
```

### `codeToNumber()`
Convert your chinese string input to number string
```ts
codeToNumber(
    input: string | string[],
    inputOptions?: Options,
): string
```

### Options
The Option input is a object which included the following items
```ts
interface Options {
    // Default: "tw"
    lang?: "tw" | "cn";
    
    // Default at numberToCode: ""
    // Default at codeToNumber: "-1"
    notFoundReturn?: string; 
}
```

#### `lang`
The lang is refer to which `Chinese Commercial Code` standard you prefer to return.

- tw: Taiwan - 台灣標準電報碼
- cn: China - 大陆标准电报码
- Default: `"tw"`

`Code Samples`
```ts
numberToCode(1234, { lang: "cn" }) // "姹"
codeToNumber("咥", { lang: "cn" }) // "8134"
```

#### `notFoundReturn`
If you target code is not found in the list, the `notFoundReturn` string will be the return string. You can input your own `notFoundReturn`.

- Default at numberToCode: `""`
- Default at codeToNumber: `"-1"`

`Code Samples`
```ts
numberToCode("8260", { notFoundReturn: "*" }) // *
codeToNumber("低劝作", { notFoundReturn: "?" }) // "0144 ? 0155"
```

## 💻 Dev logs

### - 1.0.0
1. Project init

## 🔐 License
MIT License

## 📜 References
https://www.njstar.com/cms/chinese-commercial-telegraph-code-lookup