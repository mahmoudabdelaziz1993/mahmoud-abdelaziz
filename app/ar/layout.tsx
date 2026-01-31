// app/ar/layout.tsx
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Beiruti as Cairo } from "next/font/google";
import { Header } from "@/components/blocks/Header";
import { DirectionProvider } from "@/components/ui/direction";

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
                    <DirectionProvider dir="ltr">

                        {/* Header - RTL aligned */}



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