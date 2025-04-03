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
  title: "AI Photo & Video Generator | YourFace AI",
  description: "Create stunning AI-generated photos and videos with YourFace AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5HV6WDVX');` }} />
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="MHMbyYvOVSBUXcdH6EogjQ" async></script>
      <script>
      var ahrefs_analytics_script = document.createElement('script');
      ahrefs_analytics_script.async = true;
      ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
      ahrefs_analytics_script.setAttribute('data-key', 'MHMbyYvOVSBUXcdH6EogjQ');
      document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
      </script>
      {/* End Google Tag Manager */}
      </head>
      <ClerkProvider>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HV6WDVX"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
      <div>
      </div>
        {children}
      </body>
      </ClerkProvider>
    </html>
  );
}
