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
ReactRoute("/", "./resources/react/pages/Index.tsx", ["test"]);

// Define a route for the login page
ReactRoute("/login", "./resources/react/pages/Login.tsx");

// Define a group of routes related to the product page, including a nested route
ReactRoute(
	"/product",
	async () => {
		// Nested route for the product's KV page
		ReactRoute("/", "./resources/react/pages/KV.tsx");
	},
	["test"], // Middleware applied to all routes within this group
);
