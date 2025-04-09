import GuestLayout from "@react/layouts/GuestLayout";
import type { MetaFunction } from "react-router";
import LoginPage from "../themes/default/pages/auth/Login";

export const meta: MetaFunction = () => {
	return [{ title: "Remix and Hono on Vite on Cloudflare pages" }];
};

export default function Login() {
	return (
		<GuestLayout>
			<p>Welcome to login sds</p>
			<LoginPage />
		</GuestLayout>
	);
}
