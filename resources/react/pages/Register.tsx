import GuestLayout from "@remix/layouts/GuestLayout";
import RegisterPage from "@remix/themes/default/pages/auth/Register";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
	return [{ title: "Remix and Hono on Vite on Cloudflare pages" }];
};

export default function Login() {
	return (
		<GuestLayout>
			<RegisterPage />
		</GuestLayout>
	);
}
