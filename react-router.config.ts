import type { Config } from "@react-router/dev/config";

export default {
	future: {
		unstable_splitRouteModules: true,
	},
	appDirectory: "./resources/react",
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
} satisfies Config;
