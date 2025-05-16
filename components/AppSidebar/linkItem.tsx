import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type LinkItemProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
	subItems?: { label: string; href: string }[];
};

export function LinkItem({ href, icon, label, subItems }: LinkItemProps) {
	if (!subItems) {
		return (
			<SidebarMenuItem key={href}>
				<SidebarMenuButton asChild>
					<Link href={href}>
						{icon}
						<span>{label}</span>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);
	}

	return (
		<SidebarMenuItem key={href}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton asChild>
						<span className="flex">
							{icon}
							<span>{label}</span>
							<ChevronRightIcon className="ml-auto" />
						</span>
					</SidebarMenuButton>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start" side="right">
					{subItems.map((subItem) => (
						<DropdownMenuItem key={subItem.href}>
							<Link href={subItem.href}>{subItem.label}</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</SidebarMenuItem>
	);
}
