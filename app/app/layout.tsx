export default async function AppLayout({
	children,
}: { children: React.ReactNode }) {
	return <div className="w-screen h-screen flex relative">{children}</div>;
}
