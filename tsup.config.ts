import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: ["src/**/*.ts"],
        format: ["cjs"],
        outDir: "output/cjs",
        sourcemap: false,
        splitting: false,
        dts: true,
        bundle: false,
        external: ["path", "fs", "fs-extra"],
        clean: true,
        target: "node20"
    },
]);
