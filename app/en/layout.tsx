import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LanguageSwitcher from "@/components/language-switcher";
import { Fira_Sans as Geist, Geist_Mono } from "next/font/google";
import DarkModeSwitch from "@/registry/new-york/dark-mode-switch";
import { Header } from "@/components/layout/Header";

const geist = Geist({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-default",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Header */}
                    <Header
                        lang="en"
                    />

                    {/* Main content */}
                    <main className="container space-y-10 lg:space-y-20 mx-auto max-w-5xl min-h-screen flex">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}