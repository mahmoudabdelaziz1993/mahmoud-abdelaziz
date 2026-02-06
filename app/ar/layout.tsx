// app/ar/layout.tsx
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Beiruti as Cairo } from "next/font/google";
import { Header } from "@/components/blocks/Header";
import { DirectionProvider } from "@/components/ui/direction";
import Script from "next/script";

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
            <head>
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
                    }} />
            </head>
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