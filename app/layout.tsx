import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Rodriguez Events",
  description: "Family-run catering specialists in Spanish, South American, and Mediterranean cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Toaster />
        <Header />
          {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
