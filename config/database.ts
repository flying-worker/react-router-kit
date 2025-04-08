import { drizzle } from "drizzle-orm/d1";
import { getEnv } from "flying-worker/core";
import { DatabaseConfig } from "flying-worker/types";

export const databaseConfig: DatabaseConfig = {
	default: "d1",

	connections: {
		d1: {
			connection: (): ReturnType<typeof drizzle> => drizzle(getEnv("DB")),
		},
	},
};
