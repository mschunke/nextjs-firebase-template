import { validateUser } from "@/lib/auth";

export default async function AddFirmPage() {
	const user = await validateUser();

	return (
		<div className="w-full max-w-2xl mx-auto p-6">
			<div className="h-full flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold mb-6">Sample page</h1>
				<div>You are {user.email}</div>
				<div>
					This is the main app page, usually where you add new businesses or
					teams, which will be later accessible by &apos;api/&lt;id&gt;
					/...&apos;
				</div>
			</div>
		</div>
	);
}
