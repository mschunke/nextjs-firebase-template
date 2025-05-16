"use client";

import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";

type LoaderProps = {
	inline?: boolean;
	className?: string;
};

export function Loader({ inline = false, className }: LoaderProps) {
	if (inline) {
		return (
			<LoaderCircleIcon className={cn("animate-spin w-6 h-6", className)} />
		);
	}

	return (
		<div className="fixed inset-0 z-50 flex justify-center items-center">
			<div>
				<LoaderCircleIcon className={cn("animate-spin w-20 h-20", className)} />
			</div>
		</div>
	);
}
