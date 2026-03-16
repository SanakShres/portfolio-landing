import type { Metadata } from "next";
import { Inter, Inter_Tight, DM_Mono, Rubik_Iso, Rubik_Dirt } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/header/header.component";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "900"],
});

const interTight = Inter_Tight({
	variable: "--font-inter-tight",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

const rubikIso = Rubik_Iso({
	variable: "--font-rubik-iso",
	weight: "400",
	subsets: ["latin"],
});

const rubikDirt = Rubik_Dirt({
	variable: "--font-rubik-dirt",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sanak — Web Designer & Developer",
	description:
		"Web & App Designer and Developer specializing in intuitive interfaces and scalable systems.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${interTight.variable} ${dmMono.variable} ${rubikIso.variable} ${rubikDirt.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
