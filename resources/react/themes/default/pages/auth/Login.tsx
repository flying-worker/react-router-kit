import { useState } from "react";
import type { MetaFunction } from "react-router";

import Checkbox from "@react/themes/default/components/Checkbox";
import InputLabel from "@react/themes/default/components/InputLabel";
import PrimaryButton from "@react/themes/default/components/PrimaryButton";
import TextInput from "@react/themes/default/components/TextInput";

import { FormEventHandler } from "react";

export const meta: MetaFunction = () => {
	return [{ title: "Remix and Hono on Vite on Cloudflare pages" }];
};

export default function Login() {
	const [status, setStatus] = useState(false);
	const [data, setData] = useState({});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
	};

	return (
		<>
			{status && (
				<div className="mb-4 font-medium text-green-600 text-sm">{status}</div>
			)}

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor="email" value="Email" />

					<TextInput
						id="email"
						type="email"
						name="email"
						className="mt-1 block w-full"
						autoComplete="username"
						isFocused={true}
					/>

					{/*<InputError message={errors.email} className="mt-2" />*/}
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						id="password"
						type="password"
						name="password"
						className="mt-1 block w-full"
						autoComplete="current-password"
					/>

					{/*<InputError message={errors.password} className="mt-2" />*/}
				</div>

				<div className="mt-4 block">
					<label className="flex items-center" htmlFor={"remember_me"}>
						<Checkbox name="remember" id={"remember_me"} />
						<span className="ms-2 text-gray-600 text-sm dark:text-gray-400">
							Remember me
						</span>
					</label>
				</div>

				<div className="mt-4 flex items-center justify-end">
					<a
						href={"/forget"}
						className="rounded-md text-gray-600 text-sm underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:focus:ring-offset-gray-800 dark:hover:text-gray-100"
					>
						Forgot your password?
					</a>

					<PrimaryButton className="ms-4" disabled={false}>
						Log in
					</PrimaryButton>
				</div>
			</form>
		</>
	);
}
