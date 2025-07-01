import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


const inter = Inter({
  subsets:["latin"],
  weight:["400","500","600","700","800","900"]})

export const metadata = {
  title: "Sharwan Jung Kunwar | Full Stack Developer & Tech Enthusiast",
  description: "A modern portfolio and community space by Sharwan Jung Kunwar—where code meets creativity. Showcasing full-stack projects, sharing insights on tech and development, and connecting with fellow coders through clean design and smooth microinteractions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased bg-neutral-100   dark:bg-neutral-700`}>
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
