import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar Vistar - India's First Solar Cooperative Society",
  description: "Join the cooperative revolution in renewable energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@400,0..1,0,24&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          
          {/* SideNavBar (Floating Action Buttons) */}
          <div className="fixed bottom-md right-md flex flex-col items-end gap-base z-50">
            <Link
              href="/contact"
              className="bg-surface text-on-surface rounded-full p-4 shadow-lg shadow-primary/20 hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-on-surface-variant">call</span>
            </Link>
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary-container rounded-full p-4 shadow-lg shadow-primary/20 hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center"
            >
              <span className="material-symbols-outlined">chat</span>
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
