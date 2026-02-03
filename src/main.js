const getJoke = require("./joke");

(async function run() {
  try {
    // `@actions/core` is ESM-only from v3+. Use dynamic import to load it from a CommonJS project.
    const core = await import("@actions/core");

    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke", joke);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();