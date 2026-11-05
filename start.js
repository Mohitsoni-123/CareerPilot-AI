import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("\n==========================================================");
console.log("   🚀 Launching CareerPilot-AI Major Project Suite");
console.log("   - Backend Express API : http://localhost:5000");
console.log("   - Frontend Vite Client: http://localhost:5173");
console.log("==========================================================\n");

const isWin = process.platform === "win32";
const npmCmd = isWin ? "npm.cmd" : "npm";

// Start Server
const serverProc = spawn(npmCmd, ["run", "dev"], {
  cwd: path.join(__dirname, "server"),
  stdio: "inherit",
  shell: true,
});

// Start Client
const clientProc = spawn(npmCmd, ["run", "dev"], {
  cwd: path.join(__dirname, "client"),
  stdio: "inherit",
  shell: true,
});

process.on("SIGINT", () => {
  serverProc.kill();
  clientProc.kill();
  process.exit();
});

