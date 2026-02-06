// app/en/layout.tsx
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Fira_Sans as Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/blocks/Header";
import { DirectionProvider } from "@/components/ui/direction";
import Script from "next/script";

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
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-H0690135DY`}
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-H0690135DY');
    `,
                    }}
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