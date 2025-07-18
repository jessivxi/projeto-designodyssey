import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/header/header"
import Footer from "./components/footer/footer"

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DesignOdyssey",
  description: "Freelancers de Design",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header/>
      <html lang="pt-br">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
      <Footer/>
    </>
  );
}
