import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { UserBadge } from "@/components/UserBadge";
import { ChevronDownIcon, LayoutDashboardIcon, UsersIcon } from "lucide-react";
import { LinkItem } from "./linkItem";

type AppSidebarProps = {
	pathId: string;
};

export function AppSidebar({ pathId }: AppSidebarProps) {
	const links = [
		{
			href: `/app/${pathId}`,
			icon: LayoutDashboardIcon,
			label: "Dashboard",
		},
		{
			href: `/app/${pathId}/submenu`,
			icon: UsersIcon,
			label: "Submenu",
			subItems: [
				{ label: "Option 1", href: `/app/${pathId}/submenu/1` },
				{ label: "Option 2", href: `/app/${pathId}/submenu/2` },
			],
		},
	];

	return (
		<Sidebar>
			<SidebarHeader>
				<Button variant="ghost" className="w-full justify-start">
					<span>Unique or dropdown</span>
					<ChevronDownIcon className="ml-auto" />
				</Button>
			</SidebarHeader>
			<SidebarSeparator />
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{links.map((link) => (
							<LinkItem
								key={link.href}
								href={link.href}
								label={link.label}
								icon={<link.icon />}
								subItems={link.subItems}
							/>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarContent>
					<UserBadge />
				</SidebarContent>
			</SidebarFooter>
		</Sidebar>
	);
}
