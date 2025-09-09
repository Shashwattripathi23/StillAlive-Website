import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Still Alive? - Confessions App",
  description:
    "Share confessions, last words, and emotions that matter. A safe space to express your deepest thoughts anonymously.",
  keywords: "confessions, anonymous, last words, emotions, app, mobile",
  authors: [{ name: "Still Alive Team" }],
  openGraph: {
    title: "Still Alive? - Confessions App",
    description: "Share confessions, last words, and emotions that matter.",
    type: "website",
    images: ["/1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kalam.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
