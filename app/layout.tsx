import { Momo_Trust_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const momotrustdisplay = Momo_Trust_Display({
  weight: "400",
  variable: "--font-momo-trust-display",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${momotrustdisplay.variable} antialiased`}>
        <Navbar></Navbar>
        <div className="min-h-screen">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
