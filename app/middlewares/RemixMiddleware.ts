import { ReactRouterMiddlewareApply } from "flying-worker/middlewares";

class RemixMiddleware extends ReactRouterMiddlewareApply {
    protected async loadRoutes(): Promise<void> {
		await import("../../routes/web");
    }

}

export default RemixMiddleware;
