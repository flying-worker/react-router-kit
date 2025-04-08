/**
 * Web Routes Configuration
 *
 * This file defines the regular web routes for the application. These routes handle web-specific requests and utilize sessions
 * for managing user state and data persistence. Unlike API routes, these web routes do not have a prefix and are directly
 * accessible from the root URL (e.g., `/web`, `/test`).
 *
 * Sessions:
 * - Session management is enabled using `flying-worker/session` to persist data like user information across requests.
 * - You can store and retrieve session data using `Session.set()` and `Session.get()` methods, respectively.
 *
 * The routes use the `Route` class, which handles route definition and middleware application, similar to the API routes.
 */

import { UserController } from "@/app/controllers/UserController"; // Import controller for user-related logic
import { Route } from "flying-worker/route"; // Import Route manager
import { Session } from "flying-worker/session"; // Import session manager for handling sessions
import { Context } from "hono";

// Web route to set and retrieve session data at the root
Route.get("/web", async (context: Context) => {


	// const statement = sql`select * from 'users' where id = 1`;
	// const res: unknown[] = drizzle(getEnv("DB")).all(statement)

	// Returning the session value as part of the response
	return context.json({
		dd: Session.get("name"), // Retrieving the session value
	});
});

// Web route for testing functionality in the UserController at the root
Route.get("/test", [UserController, "testWeb"]);


/**
 * Remix Routes Configuration
 *
 * This file defines the routes for Remix pages in the application.
 *
 * Routes:
 * - The `RemixRoute` function is used to map a URL path to a specific Remix page component.
 * - The route's path is the URL you want to match (e.g., `/`, `/login`), and the `filePath` points to the component's location.
 *
 * File Paths:
 * - The `filePath` should be relative to the `./resources/remix` directory.
 * - For example:
 *     - `'pages/Index.tsx'` for the main index page.
 *     - `'pages/Login.tsx'` for the login page.
 *
 * Middlewares:
 * - Middlewares can be applied to specific routes to handle additional logic before or after the request.
 * - The middleware(s) are passed as an array, e.g., `["test"]`, and can be used for tasks like authentication or logging.
 *
 * Route Grouping:
 * - Routes can be defined hierarchically using the `RemixRoute()` function inside a callback. The nested routes will inherit the parent route's prefix and middlewares.
 */

import { ReactRoute } from "flying-worker/route";

// Define the root route, which maps to the Index page
ReactRoute("/", "./resources/remix/pages/Index.tsx", ["test"]);

// Define a route for the login page
ReactRoute("/login", "./resources/remix/pages/Login.tsx");

// Define a group of routes related to the product page, including a nested route
ReactRoute(
	"/product",
	async () => {
		// Nested route for the product's KV page
		ReactRoute("/", "./resources/remix/pages/KV.tsx");
	},
	["test"], // Middleware applied to all routes within this group
);
