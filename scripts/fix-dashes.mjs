import fs from "fs";

const path = "src/config/site.ts";
let s = fs.readFileSync(path, "utf8");

// Fix common mojibake
s = s.replaceAll("â€”", "—"); // em dash
s = s.replaceAll("â€“", "–"); // en dash
s = s.replaceAll("â€™", "'"); // right single quote
s = s.replaceAll("â€˜", "'");
s = s.replaceAll("â€œ", '"');
s = s.replaceAll("â€", '"');
s = s.replaceAll("Ã³", "ó");
s = s.replaceAll("Ã“", "Ó");

fs.writeFileSync(path, s, "utf8");
console.log("fixed. remaining mojibake:", /â€|Ã[³“]/.test(s));
console.log("em dashes:", (s.match(/—/g) || []).length);
console.log("Milóre:", (s.match(/Milóre/g) || []).length);
