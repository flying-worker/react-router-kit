import { SessionAuth } from "flying-worker/auth";
import { decrypt, encrypt } from "flying-worker/supports";
import { Context } from "hono";
// import { ApiTokenPayload } from "flying-worker/types";

export class UserController {
	async index(context: Context) {
		// const user: ApiTokenPayload = {
		// 	name: "test",
		// 	user: {
		// 		id: 2,
		// 		name: "Admin",
		// 		email: "admin@admin.com",
		// 	},
		// 	permissions: ["admin"],
		// 	expiresInDays: 100,
		// };

		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInVzZXIiOnsiaWQiOjIsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sInBlcm1pc3Npb25zIjpbImFkbWluIl0sImV4cCI6MTc1MDA2MTg4OX0.f1YfFAT6wSRniesTB3jV_QRQYD8xyfendxO8DuL0GnY";

		//const token = await ApiAuth.createToken(user)

		return context.json({
			payload: await SessionAuth.user(),
			token: token,
		});

		// const credentials = {
		// 	email: "admin@admin.com",
		// };

		// await Auth.attempt(credentials, false)

		// await Auth.logout();

		// const user = await Auth.user();

		// context.header("Content-Encoding", "Identity");
		//
		// return streamText(context, async (stream) => {
		// 	// Write a text with a new line ('\n').
		// 	await stream.writeln("Hello");
		// 	// Wait 1 second.
		// 	await stream.sleep(1000);
		// 	// Write a text without a new line.
		// 	await stream.write("Hono!");
		// });

		// return context.json({
		// 	ss: user?.hasRole(["admin"]),
		// });
	}

	async testWeb(c: Context) {
		const dd = await encrypt("hello");

		return c.json({
			dd: await decrypt(dd),
			hh: dd,
		});
	}

	update(c: Context) {
		return c.text("PUT /users/:id");
	}

	delete(c: Context) {
		return c.text("DELETE /users/:id");
	}
}
