import type { Metadata } from "next";
import { Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";

// const notoSerif = Noto_Serif({
//   variable: "--font-noto-serif",
//   subsets: ["latin"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
// });

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
    <html lang="en">
      <body
        // className={`${notoSerif.variable} ${montserrat.variable} antialiased`}
      >
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
