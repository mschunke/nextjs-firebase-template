import { apiErrorHandler, apiSuccessHandler } from "@/lib/api";
import { adminAuth } from "@/lib/firebase-admin";
import type { NextRequest } from "next/server";
import { setCookie } from "cookies-next/server";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
	try {
		const json = await req.json();
		const { idToken } = json;

		await adminAuth.verifyIdToken(idToken);

		const sessionCookie = await adminAuth.createSessionCookie(idToken, {
			expiresIn: 60 * 60 * 24 * 5 * 1000,
		});

		// TODO: Add cookie name
		await setCookie("<ADD COOKIE NAME HERE>", sessionCookie, {
			httpOnly: true,
			expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
			cookies,
		});

		return apiSuccessHandler({}, 200);
	} catch (error) {
		return apiErrorHandler(error, 500);
	}
}
