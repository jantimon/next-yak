import { execSync, spawn } from "child_process";
import kill from "tree-kill";
import { mkdirSync, readFileSync } from "fs";

const __dirname = new URL(".", import.meta.url).pathname;

// run npm run build:
execSync("npm run build", { cwd: __dirname, stdio: "inherit" });

// spawn server with npm run start
const server = spawn("npm", ["run", "start"], {
  cwd: __dirname,
  shell: true,
});

// wait for server to start (1s)
await new Promise((resolve) => setTimeout(resolve, 1000));

// wait for server to start:
Promise.all([
  fetch("http://localhost:3000/yak"),
  fetch("http://localhost:3000/yak"),
  fetch("http://localhost:3000/styled"),
  fetch("http://localhost:3000/styled"),
])
  .then(runTests)
  .finally(async() => {
    kill(server.pid, "SIGKILL")
  });

async function runTests() {
    // run lighthouse performance tests 3 times:
    const runs = 5;
    const urls = [
        "yak",
        "styled",
    ]
    const results = {
    }
    for (let i = 0; i < runs; i++) {
        for (const url of urls) {
            results[url] = results[url] || [];
            results[url].push(await runLighthouse(url, i));
        }
    }
    // beatiful console output table:
    console.table(
        Object.fromEntries(
            Object.entries(results).map(([url, runs]) => [
                url,
                {
                    score: mean(runs.map((run) => run.score)).toFixed(0),
                    scoreMin: Math.min(...runs.map((run) => run.score)).toFixed(0),
                    scoreMax: Math.max(...runs.map((run) => run.score)).toFixed(0),
                    lcp: mean(runs.map((run) => run.lcp)).toFixed(0),
                    lcpMin: Math.min(...runs.map((run) => run.lcp)).toFixed(0),
                    lcpMax: Math.max(...runs.map((run) => run.lcp)).toFixed(0),
                    blockingTime: mean(runs.map((run) => run.blockingTime)).toFixed(2),
                    blockingTimeMin: Math.min(...runs.map((run) => run.blockingTime)).toFixed(2),
                    blockingTimeMax: Math.max(...runs.map((run) => run.blockingTime)).toFixed(2),
                    transferSize: mean(runs.map((run) => run.transferSize)).toFixed(0),
                },
            ])
        )
    );
    
}

async function runLighthouse(pathName, run) {
    mkdirSync("benchmark/lighthouse", { recursive: true });
    const json = (`./benchmark/lighthouse/${pathName}_${run}.json`);
    execSync(
        `npx lighthouse http://localhost:3000/${pathName} --output=json --output-path=${json} --preset=perf --only-categories=performance`,
        { cwd: __dirname, stdio: "inherit" }
    );
    const results = JSON.parse(readFileSync(json, "utf-8"));
    const score = results.categories.performance.score * 100;
    const lcp = results.audits["largest-contentful-paint"].numericValue;
    const blockingTime = results.audits["total-blocking-time"].numericValue;
    const transferSize = results.audits["total-byte-weight"].numericValue;

    return { score, lcp, blockingTime, transferSize };
}

function mean(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

