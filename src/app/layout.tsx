import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer";
import { Banner } from "@/components/sections/Banner";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madlen - Your Fashion Destination",
  description: "Discover the latest trends in fashion at Madlen. Shop our curated collection of clothing and accessories.",
  keywords: ["fashion", "clothing", "accessories", "online shopping"],
  authors: [{ name: "Madlen" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-garamond min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-grow">
            <Header />
            <Banner />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
