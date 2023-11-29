import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

import Navbar from "./components/navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
