"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { Loader } from "../Loader";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Login() {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const signIn = async () => {
		try {
			const result = await signInWithPopup(auth, new GoogleAuthProvider());
			if (!result.user) {
				throw new Error("It was not possible to login");
			}
			const idToken = await result.user.getIdToken();
			setLoading(true);
			const tokenRes = await fetch("/auth/token", {
				method: "POST",
				body: JSON.stringify({
					idToken,
				}),
			});

			if (!tokenRes.ok) {
				throw new Error("It was not possible to login");
			}

			router.push("/app");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Error to login");
			setLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return <Button onClick={signIn}>Login with Google</Button>;
}
