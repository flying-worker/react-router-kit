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
