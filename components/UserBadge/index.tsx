"use client";

import { Button } from "../ui/button";
import { LogOutIcon, UserIcon } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function UserBadge() {
	const router = useRouter();

	onAuthStateChanged(auth, (user) => {
		if (!user) {
			router.push("/auth");
		}
	});

	const handleSignOut = () => {
		signOut(auth);
		router.push("/");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="secondary">
					<UserIcon />
					<span>{auth.currentUser?.displayName}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="right" align="end">
				<DropdownMenuItem onClick={handleSignOut}>
					<LogOutIcon />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
