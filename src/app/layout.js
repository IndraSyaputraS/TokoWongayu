import { Lexend_Deca } from "next/font/google";

import "./globals.css";

const lexec_deca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "Wongayu",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexec_deca.className} antialiased`}>{children}</body>
    </html>
  );
}
