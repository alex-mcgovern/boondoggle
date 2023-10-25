import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
	plugins: [
		react(),
		vanillaExtractPlugin({
			identifiers:
				process.env.NODE_ENV === "production" ? "short" : "debug",
		}),
		dts({ rollupTypes: true }),
	],
	build: {
		minify: false,
		lib: {
			entry: [path.resolve(__dirname, "components/button/index.ts")],
			name: "boondoggle.design",
			formats: ["es"],
		},
		rollupOptions: {
			external: [
				"react",
				"react/jsx-runtime",
				"react-dom",
				"@dessert-box/core",
				"@fortawesome/fontawesome-svg-core",
				"@fortawesome/pro-solid-svg-icons",
				"@fortawesome/react-fontawesome",
				"@vanilla-extract/recipes",
				"@vanilla-extract/sprinkles",
				"clsx",
				"object-assign",
				"prop-types",
			],
			output: {
				preserveModules: true,
				preserveModulesRoot: "components",
			},
		},
	},
});
