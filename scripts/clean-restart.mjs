import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const root = process.cwd();
const nextDir = path.join(root, ".next");

function rmrf(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
}

try {
  rmrf(nextDir);
  console.log("Removed .next");
} catch (e) {
  console.log("Could not remove .next:", e.message);
  // rename fallback
  const alt = path.join(root, `.next_broken_${Date.now()}`);
  try {
    fs.renameSync(nextDir, alt);
    console.log("Renamed .next to", alt);
  } catch (e2) {
    console.log("Rename failed:", e2.message);
    process.exit(1);
  }
}

console.log("Ready for npm run dev");
