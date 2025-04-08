/**
 * API Routes
 *
 * This file defines the Hono API routes for the application.
 *
 * Route Prefix:
 * - The routes in this file are prefixed with '/api'.
 * - For example, if the prefix is set to '/api', these routes will be accessible as:
 *     - `/api/` for the root route.
 *     - `/api/users` for the user-related routes.
 *
 * Route Groups:
 * - The `Route.group()` method allows you to define routes under a shared path prefix.
 * - You can also apply middlewares to groups, which will be inherited by all routes within the group.
 *
 * Example:
 * - A route defined with `Route.get("/users")` will be available at `/api/users`.
 * - A route inside a group with `/users` prefix will automatically be available under `/api/users`.
 *
 * Middlewares:
 * - Middlewares can be applied at both the individual route level and the group level.
 * - For group-level middlewares, they are automatically applied to all routes inside the group.
 */

import { UserController } from "@/app/controllers/UserController";
import { Route } from "flying-worker/route";

// Define the root route for API with middleware 'test'
Route.get("/", [UserController, "testWeb"], ["test"]);

// Group all user-related routes under '/users' and apply the 'test' middleware
Route.group(
	"/users",
	() => {
		// Route to list users
		Route.get("/", [UserController, "index"]);
	},
	["test"], // Middleware applied to all routes within this group
);
