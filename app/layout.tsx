// app/layout.tsx - EMPTY or minimal
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Just pass through to language layouts
}