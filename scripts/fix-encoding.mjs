import fs from "fs";

const path = "src/config/site.ts";
let buf = fs.readFileSync(path);
if (buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
  buf = buf.subarray(3);
}
let s = buf.toString("utf8");

// Fix mojibake sequences
s = s.replaceAll("MilÃ³re", "Milóre");
s = s.replaceAll("MILÃ“RE", "MILÓRE");
s = s.replaceAll("MILÃ\u0093RE", "MILÓRE");

// If still broken, reinterpret latin1 -> utf8
if (!s.includes("Milóre")) {
  try {
    const reinterpreted = Buffer.from(s, "latin1").toString("utf8");
    if (reinterpreted.includes("Milóre")) s = reinterpreted;
  } catch {
    /* keep s */
  }
}

// Fallback: replace any Mil + non-ascii + re
s = s.replace(/Mil[^\x00-\x7F]+re/g, "Milóre");
s = s.replace(/MIL[^\x00-\x7F]+RE/g, "MILÓRE");

fs.writeFileSync(path, s, "utf8");
const out = fs.readFileSync(path, "utf8");
console.log("has Milóre:", out.includes("Milóre"));
console.log("count:", (out.match(/Milóre/g) || []).length);
console.log("BOM:", out.charCodeAt(0) === 0xfeff);
console.log("name line:", out.match(/name: "[^"]+"/)?.[0]);
