import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../../../components/AppSidebar";
import { validateUser } from "@/lib/auth";

export default async function FirmLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{
		firmId: string;
	}>;
}) {
	await validateUser();

	const { firmId } = await params;

	return (
		<SidebarProvider>
			<div className="w-full flex justify-center">
				<AppSidebar pathId={firmId} />
				<main className="w-full flex justify-center max-w-2xl mt-8">
					{children}
				</main>
			</div>
		</SidebarProvider>
	);
}
