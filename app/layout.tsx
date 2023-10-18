import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer, { Copyright } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hictros",
  description: "Precision in every circuit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="dark">
      <body className={inter.className}>
        <div className=" min-h-screen px-2 xl:px-24 bg-[#eee]  dark:bg-[#030712fd]">
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col px-2 pt-5 md:px-10 md:pt-10 lg:px-16 xl:px-24 bg-background ">
              <Header />
              {children}
            </main>
            <hr />
            <Footer />
          </ThemeProvider>
        </div>
        <Copyright />
      </body>
    </html>
  );
}
