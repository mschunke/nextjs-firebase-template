export function apiSuccessHandler<T = unknown>(data: T, status = 200) {
	return new Response(
		JSON.stringify({
			success: true,
			data,
		}),
		{
			status,
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}

export function apiErrorHandler(err: unknown, status = 200) {
	try {
		console.error(err);
		const message =
			err instanceof Error ? err.message : "Internal server error";
		return new Response(
			JSON.stringify({
				success: false,
				message,
			}),
			{
				status,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch {
		return new Response(
			JSON.stringify({
				success: false,
				message: "Internal server error",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
}
