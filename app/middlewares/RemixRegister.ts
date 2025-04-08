import { BaseMiddleware } from "flying-worker/core";
import type { Context, Next } from "hono";
import { type ServerBuild, createRequestHandler } from "react-router";

class RemixRegister extends BaseMiddleware {
	public async boot(context: Context, next: Next) {
		// @ts-ignore
		const build = await import("../../build/server");
		const requestHandler = createRequestHandler(
			build as unknown as ServerBuild,
		);

		return await requestHandler(context.req.raw);
	}
}

export default RemixRegister;
