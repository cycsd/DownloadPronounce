import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";
import { GetSupportUrls } from './pages/utils/domain';

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = packageJson.version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/);

const manifest = defineManifest(async () => ({
  manifest_version: 3,
  name: packageJson.displayName ?? packageJson.name,
  version: `${major}.${minor}.${patch}.${label}`,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/background/index.ts" },
  permissions: [
    "history", "tabs"
  ],
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icons/talking32x32.png",
  },
  icons: {
    "128": "icons/talking128x128.png",
  },
  content_scripts: [
    {
      matches: GetSupportUrls(),
      js: ["src/pages/content/index.tsx"],
    },
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css", "assets/img/*"],
      matches: ["*://*/*"],
    },
  ],
}));

export default manifest;
