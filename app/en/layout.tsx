// app/en/layout.tsx
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Fira_Sans as Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/blocks/Header";
import { DirectionProvider } from "@/components/ui/direction";

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
            <head>
                <script
                    async
                    crossOrigin="anonymous"
                    src="https://tweakcn.com/live-preview.min.js"
                />
            </head>
            <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <DirectionProvider dir="rtl">


                        {/* Main content */}
                        <main className="grid container w-full lg:mx-auto max-w-5xl px-4">
                            {children}
                        </main>
                    </DirectionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}