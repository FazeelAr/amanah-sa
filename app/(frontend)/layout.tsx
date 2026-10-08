import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: false });

const title = "Amanah Study Abroad | Global Education & Visa Consultancy";
const description = "Amanah Study Abroad guides students through international admissions, university scholarships, and student visa processing with personalized expert guidance.";

export const metadata: Metadata = {
  applicationName: "Amanah Study Abroad",
  title,
  description,
  icons: {
    icon: "/amanah_logo_circle.png",
    shortcut: "/amanah_logo_circle.png",
    apple: "/amanah_logo_circle.png",
  },
  openGraph: {
    title,
    description,
    siteName: "Amanah Study Abroad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  }
};

import { safeFetch } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/queries";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await safeFetch<any>(siteSettingsQuery, {}, { next: { revalidate: 60 } }) || {};

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar settings={settings} />
        <main className="relative">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
