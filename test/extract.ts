import { cheerio } from "https://deno.land/x/cheerio/mod.ts";

// load the HTML content
// const html = await Deno.readTextFile("./test.html");
// const $ = cheerio.load(html);

// const tables = $("table");
// const result = [];

// tables.each((_, table) => {
//     const $table = $(table);
//     const page = $table.find(".page b").text();
//     const data = [];

//     let codes = [];
//     let hanzis = [];
    
//     $table.children("tbody").children("tr").each((_, tr) => {
//         const $tr = $(tr);

//         if ($tr.hasClass("code")) {
//             codes = $tr.find("td").map((_, td) => $(td).text()).get();
//         } else if ($tr.hasClass("hanzi")) {
//             hanzis = $tr.find("td").map((_, td) => {
//                 const hanzi = $(td).contents().first().text().trim();
//                 const unicode = $(td).find("div").text();
//                 return { hanzi, unicode: unicode || "" };
//             }).get();
            
//             for (let i = 0; i < codes.length; i++) {
//                 data.push({
//                     code: codes[i],
//                     hanzi: hanzis[i].hanzi,
//                     unicode: hanzis[i].unicode
//                 });
//             }
//         }
//     });

//     result.push({ page, data });
// });

// const ls = result.map( v => v.data).flat().filter( v => v.hanzi !== "");
// let obj = {}

// for(let v of ls){
//     obj[`${v.code}`] = v.hanzi
// }

// await Deno.writeTextFile("./numToCnDataTw.json", JSON.stringify(obj));

// import cn from "../src/data/numToTwData.json" with { type: "json" };

// const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()))

// await Deno.writeTextFile("./twDataToNum.json", JSON.stringify(f(cn)))