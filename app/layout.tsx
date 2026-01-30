// app/layout.tsx - EMPTY or minimal
import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: 'Mahmoud Abdelaziz Slama',
  description:
    'Senior Front-End Developer with 5+ years crafting fast, elegant web apps using React & Next.js. Clean code, sharp UI, seamless performance.',
  keywords: [
    'React Developer',
    'Next.js Developer',
    'Front-End Developer',
    'Full Stack JavaScript',
    'Egypt',
    'Portfolio',
  ],

  // Open Graph (Facebook, LinkedIn, WhatsApp, Discord, etc.)
  openGraph: {
    title: 'Mahmoud Abdelaziz Slama',
    description:
      '5+ years building performant, user-loved web experiences. Clean code, pixel-perfect UI. Let’s build something great!',
    url: 'https://mahmoudabdelaziz1993.github.io/mahmoud-abdelaziz',
    siteName: 'Mahmoud Abdelaziz Portfolio',
    images: [
      {
        url: `/images/og.png`, // auto-prefixed with basePath
        width: 1200,
        height: 630,
        alt: 'Mahmoud Abdelaziz Slama - Front-End Developer Portfolio',
      },
    ],
    locale: 'en_US', // or 'ar_AR' if Arabic primary
    type: 'website',
  },

  // Twitter / X Cards (fallback to OG if not set)
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmoud Abdelaziz Slama | React & Next.js Expert',
    description:
      'Crafting fast, elegant web apps with React & Next.js. 5+ years experience. Portfolio live!',
    images: [`/images/og.png`], // or same as OG
    creator: '@your-twitter-handle', // optional
  },

  // Optional extras
  metadataBase: new URL('https://mahmoudabdelaziz1993.github.io/mahmoud-abdelaziz'),
  alternates: {
    canonical: '/',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Just pass through to language layouts
}