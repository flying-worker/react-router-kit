import { App } from "flying-worker/core";
import { BaseMiddleware } from "flying-worker/core";
import { Context, Next } from "hono";
import { jwt } from "hono/jwt";

type jwtMiddlewareOptions = {
	secret: string;
	cookie?:
		| string
		| {
				key: string;
				secret?: string;
		  };
};

class ApiAuthMiddleware extends BaseMiddleware {
	public async boot(context: Context, next: Next) {
		let options: jwtMiddlewareOptions = { secret: App.config.app.secret };

		if (App.config.auth.guards.api.useCookie.status) {
			options.cookie = {
				key: App.config.auth.guards.api.useCookie.key,
				secret: App.config.app.secret,
			};
		}

		return jwt(options)(context, next);
	}
}

export default ApiAuthMiddleware;
