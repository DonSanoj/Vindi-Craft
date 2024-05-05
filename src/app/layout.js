import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vindi Craft | Discover Crafts",
  description: "Discover new Crafts that use resin to create",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <body className={inter.className}>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
