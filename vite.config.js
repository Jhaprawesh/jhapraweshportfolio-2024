import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import alias from "@rollup/plugin-alias";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: {
      "#minpath": path.resolve(__dirname, "node_modules/vfile/lib/minpath.js"),
      "#minproc": path.resolve(__dirname, "node_modules/vfile/lib/minproc.js"),
      "#minurl": path.resolve(__dirname, "node_modules/vfile/lib/minurl.js"),
    },
  },
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
});
