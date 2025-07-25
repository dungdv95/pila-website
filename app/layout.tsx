import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import LayoutPage from "@/components/navs/layout-page";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pila-website.vercel.app"),
  title: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
  description: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
  openGraph: {
    title: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
    description: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
    images: [
      {
        url: `https://pila-website.vercel.app/images/thumbnail-large.jpg`,
        alt: "Hình ảnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
    description: "CÔNG TY CỔ PHẦN TẬP ĐOÀN PILA",
    images: [
      {
        url: `https://pila-website.vercel.app/images/thumbnail-large.jpg`,
        alt: "Hình ảnh",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-QKN4ZPXJ6S`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QKN4ZPXJ6S');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutPage>{children}</LayoutPage>
        </ThemeProvider>
      </body>
    </html>
  );
}
