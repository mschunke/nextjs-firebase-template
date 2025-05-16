"use server";

import { redirect } from "next/navigation";
import { adminAuth } from "./firebase-admin";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function validateUser() {
	try {
		const sessionCookie = await getCookie("autolex:token", {
			cookies,
		});

		if (!sessionCookie) {
			redirect("/auth");
		}

		const decodedToken = await adminAuth.verifySessionCookie(sessionCookie);

		return decodedToken;
	} catch (error) {
		console.error(error);
		redirect("/auth");
	}
}

export async function validateAdmin() {
	try {
		const user = await validateUser();
		return user;
	} catch {
		return null;
	}
}
