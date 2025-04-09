import { type RouteConfig } from "@react-router/dev/routes";
import {
	DefineRoutesFunction,
	remixRoutesOptionAdapter,
} from "@react-router/remix-routes-option-adapter";
import { applyReactRoutes } from "flying-worker/route";
import { DefineRouteFunction } from "flying-worker/types";

export default remixRoutesOptionAdapter(
	async (defineRoutes: DefineRoutesFunction) => {
		/**
		 * Load routes from the `routes/remix` file.
		 * You can define routes directly in `routes/remix.ts` or within the `defineRoutes` method, similar to React Router.
		 *
		 * Defining routes in `routes/remix.ts` allows you to assign Hono middleware.
		 * Flying Worker will automatically match the routes and apply the corresponding middleware.
		 */
		await import("../../routes/react");

		return defineRoutes(async (route: DefineRouteFunction) => {
			/**
			 * Apply routes defined in `routes/remix.ts`.
			 */
			await applyReactRoutes(route);

			/**
			 * Alternatively, you can define routes directly here, similar to React Router syntax.
			 */
			// route("/", "pages/Index.tsx", { index: true });
		});
	},
) satisfies RouteConfig;
