import { apiErrorHandler, apiSuccessHandler } from "@/lib/api";
import { validateAdmin } from "@/lib/auth";

export async function POST(req: Request) {
	try {
		const user = await validateAdmin();

		const body = await req.json();

		if (!user) {
			return apiErrorHandler(new Error("Unauthorized"), 401);
		}

		return apiSuccessHandler({ message: "Hello, world!", body, user }, 201);
	} catch (error) {
		console.error(error);
		return apiErrorHandler(error, 500);
	}
}
