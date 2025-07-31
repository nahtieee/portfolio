import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ethan Dith | Product Designer",
  description: "Portfolio of Ethan Dith, a Product Designer",
  keywords: "Ethan Dith, Product Designer, Portfolio",
  authors: [{ name: "Ethan Dith", url: "https://ethandith.com" }],
  creator: "Ethan Dith",
  openGraph: {
    title: "Ethan Dith | Product Designer",
    description: "Portfolio of Ethan Dith, a Product Designer",
    url: "https://www.ethandith.com/",
    siteName: "Ethan Dith",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth leading-loose">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
