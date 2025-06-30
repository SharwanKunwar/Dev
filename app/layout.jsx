import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


const inter = Inter({
  subsets:["latin"],
  weight:["400","500","600","700","800","900"]})

export const metadata = {
  title: "UnpreditableCoders | A Community where we talk about tech, coding and more",
  description: "UnpredictableCoders is a vibrant community for tech enthusiasts and coders, sharing ideas, building projects, and exploring the future of development—designed with a clean, modern aesthetic and smooth microinteractions."
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
