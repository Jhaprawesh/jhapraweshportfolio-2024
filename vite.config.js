import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/", // Adjust if deploying to a subdirectory
  plugins: [react()],
  assetsInclude: ["**/*.md"], // Include Markdown files as assets if needed
  resolve: {
    // alias: {
    //   // Ensure these paths are correct and needed
    "#minpath": path.resolve(__dirname, "node_modules/vfile/lib/minpath.js"),
    "#minproc": path.resolve(__dirname, "node_modules/vfile/lib/minproc.js"),
    "#minurl": path.resolve(__dirname, "node_modules/vfile/lib/minurl.js"),
    // },
  },
  build: {
    // rollupOptions: {
    //   // Adjust external dependencies as needed
    //   external: [/^node:.*/],
    // },
  },
});
