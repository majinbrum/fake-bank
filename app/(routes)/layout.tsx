import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Aside from "../(components)/(layout)/Aside";
import { TransactionsProvider } from "../providers/TransactionsContext";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fake Bank",
	description: "This is the fake bank account of Philip J. Fry from Futurama.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={dmSans.className}>
				<main className='relative w-screen h-screen bg-gray-100'>
					<div className='p-12 h-full w-full max-w-screen-2xl mx-auto flex gap-x-8'>
						<Aside />
						<TransactionsProvider>{children}</TransactionsProvider>
					</div>
				</main>
			</body>
		</html>
	);
}
