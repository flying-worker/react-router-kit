import { getEnv } from "flying-worker/core";
import { AppConfig } from "flying-worker/types";

export const appConfig: AppConfig = {

	name: getEnv("APP_NAME", "Flying Worker"),

	secret: getEnv("APP_SECRET"),

	environment:  getEnv("APP_ENV", "development"),

	url: getEnv("APP_URL"),

	timezone: "UTC",

	locale: "en",

	maintenance: {
		status: getEnv("APP_MAINTENANCE_MODE", false),
		message: "<h1>We are performing maintenance. Please check back soon.</h1>",
	},
	apiRoute: async () => {
		await import("../routes/api");
	},
	webRoute: async () => {
		await import("../routes/web");
	},
};
