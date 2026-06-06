const fs = require("fs");
const path = require("path");
const axios = require("axios");

const WEBHOOK_URL =
  "http://localhost:5678/webhook/finance-agent";

const TEST_DIR = "./tests";

async function runTest(file) {
  const test = JSON.parse(
    fs.readFileSync(
      path.join(TEST_DIR, file),
      "utf8"
    )
  );

  const start = Date.now();

  try {
    const response = await axios.post(
      WEBHOOK_URL,
      test.payload,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const duration =
      Date.now() - start;

    const output =
      JSON.stringify(response.data);

    const passed =
      test.expected.every(
        expected =>
          output.includes(expected)
      );

    return {
      name: test.name,
      file,
      passed,
      duration,
      response: response.data
    };

  } catch (err) {

    return {
      name: test.name,
      file,
      passed: false,
      duration: 0,
      error:
        err.response?.data ||
        err.message
    };

  }
}

async function main() {

  const suiteStart = Date.now();

  console.log("\n");
  console.log("========================================");
  console.log(" Finance AI Parallel Test Suite");
  console.log("========================================");
  console.log("");

  const files =
    fs.readdirSync(TEST_DIR)
      .filter(
        file => file.endsWith(".json")
      )
      .sort();

  console.log(
    `Launching ${files.length} tests in parallel...\n`
  );

  const results =
    await Promise.all(
      files.map(file =>
        runTest(file)
      )
    );

  results.forEach(result => {

    const icon =
      result.passed ? "✓" : "✗";

    console.log(
      `${icon} ${result.name} (${result.duration}ms)`
    );

    if (!result.passed) {

      console.log(
        "  ERROR:",
        result.error || "Validation Failed"
      );

    }

  });

  const passed =
    results.filter(
      r => r.passed
    ).length;

  const failed =
    results.length - passed;

  const totalTime =
    results.reduce(
      (sum, r) => sum + r.duration,
      0
    );

  const avgTime =
    Math.round(
      totalTime / results.length
    );

  const suiteTime =
    Date.now() - suiteStart;

  console.log("");
  console.log("========================================");
  console.log("");

  console.log(
    `Total Tests : ${results.length}`
  );

  console.log(
    `Passed      : ${passed}`
  );

  console.log(
    `Failed      : ${failed}`
  );

  console.log(
    `Avg Time    : ${avgTime}ms`
  );

  console.log(
    `Suite Time  : ${suiteTime}ms`
  );

  console.log("");

  if (failed === 0) {

    console.log(
      "STATUS: PASS ✅"
    );

  } else {

    console.log(
      "STATUS: FAIL ❌"
    );

  }

  console.log("");
  console.log("========================================");
  console.log("");

  process.exit(
    failed === 0 ? 0 : 1
  );

}

main();
