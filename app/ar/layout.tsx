import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LanguageSwitcher from "@/components/language-switcher";
import { Beiruti as Cairo } from "next/font/google";
import DarkModeSwitch from "@/registry/new-york/dark-mode-switch";
import Head from "next/head";
import { Header } from "@/components/layout/Header";

const cairo = Cairo({
    subsets: ["arabic"],
    weight: ["400", "700"],
    variable: "--font-default",
});

export default function ArLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body className={`${cairo.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Header - RTL aligned */}
                    <Header
                        lang="ar"
                    />


                    {/* Main content */}
                    <main className="container mx-auto max-w-5xl min-h-screen flex">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}