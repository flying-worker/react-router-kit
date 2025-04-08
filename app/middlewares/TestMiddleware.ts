import { BaseMiddleware } from "flying-worker/core";
import { Context, Next } from "hono";

class TestMiddleware extends BaseMiddleware {
	public async boot(context: Context, next: Next) {
		return context.json({
			data: "Protected by middleware",
		});
	}
}

export default TestMiddleware;
