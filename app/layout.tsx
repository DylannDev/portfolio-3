import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👨‍💻 Dylann Xavero - Développeur Front-End | Portfolio",
  description:
    "Développeur front-end spécialisé dans la création de sites web réactifs et modernes. J'utilise React, Next.js et TypeScript pour donner vie à vos applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div className="max-w-7xl w-full">
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
