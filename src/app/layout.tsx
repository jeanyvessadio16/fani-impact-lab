import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import HeaderNavbar from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FANI IMPACT LAB",
  description: "FANI Impact Lab est un cabinet de conseil stratégique spécialisé dans l'entrepreneuriat, l'innovation et le développement des écosystèmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
