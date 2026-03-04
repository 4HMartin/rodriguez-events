import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";

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
      <body>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
