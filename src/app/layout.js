import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "HackedMy Zone",
  description: "Your ultimate tech hub for hacking, coding, and all things dev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Navbar fixed at top */}
        <Navbar />

        {/* Main content pushed below navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
