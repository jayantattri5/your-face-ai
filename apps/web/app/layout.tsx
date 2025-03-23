import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AI Photo & Viideo Generator | YourFace AI",
  description: "Create stunning AI-generated photos and videos with YourFace AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div>
      </div>
        {children}
      </body>
      </ClerkProvider>
    </html>
  );
}
