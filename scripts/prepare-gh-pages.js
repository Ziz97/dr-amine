/**
 * Writes Cloudflare Workers-compatible metadata into build/ before publishing
 * to the gh-pages branch. That branch is static-only; without these files,
 * Cloudflare Builds fail with ENOENT on package.json when they run npm run build.
 */
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");

if (!fs.existsSync(path.join(buildDir, "index.html"))) {
  console.error("build/ is missing. Run npm run build first.");
  process.exit(1);
}

const packageJson = {
  name: "dr-amine",
  private: true,
  scripts: {
    build: "node -e \"console.log('Prebuilt static site — skipping compile')\"",
  },
  devDependencies: {
    wrangler: "^4.120.0",
  },
};

const wranglerToml = `name = "dr-amine"
compatibility_date = "2025-04-01"

[assets]
directory = "./"
not_found_handling = "single-page-application"
`;

const assetsIgnore = `node_modules
package.json
package-lock.json
wrangler.toml
.assetsignore
.gitignore
`;

fs.writeFileSync(
  path.join(buildDir, "package.json"),
  `${JSON.stringify(packageJson, null, 2)}\n`
);
fs.writeFileSync(path.join(buildDir, "wrangler.toml"), wranglerToml);
fs.writeFileSync(path.join(buildDir, ".assetsignore"), assetsIgnore);

console.log("Prepared build/ for gh-pages + Cloudflare Workers Builds");
