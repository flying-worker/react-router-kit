import { Config } from "flying-worker/types";
import { appConfig } from "./app";
import { authConfig } from "./auth";
import { corsConfig } from "./cors";
import { CsrfConfig } from "./csrf";
import { databaseConfig } from "./database";
import { eventListener } from "./event-listener";
import { middlewaresConfig } from "./middlewares";
import { queue } from "./queue";
import { sessionConfig } from "./session";
import { AuthConfig } from "@/types/appConfig";

const config: Config = {
	app: appConfig,
	session: sessionConfig,
	auth: authConfig,
	db: databaseConfig,
	cors: corsConfig,
	csrf: CsrfConfig,
	middlewares: middlewaresConfig,
	eventListener: eventListener,
	queue: queue,
};

export default config;
