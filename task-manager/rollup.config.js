import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/script.ts", // main.ts
  output: {
    file: "dist/app.js", // public/bundle.js
    format: "iife",
    // sourcemap: true,
  },
  plugins: [typescript()],
};