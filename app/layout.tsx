import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Whatsapp from "@/components/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@sherwin",
  description: `Results-oriented Project Coordinator with a Master of Business Administration in Project Management, CSPO (Certified 
    Scrum Product Owner), and CAPM (Certified Associate of Project Management) certifications. Proficient in Agile and 
    Waterfall methodologies`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <body className={`${inter.className} relative bg-gray-50 text-zinc-950 dark:text-gray-50 dark:text-opacity-50 dark:bg-zinc-900`}>

        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"/>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#676394]"/>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>

            <Header/>
              {children}
            <Footer />

            <Whatsapp />  
            <ThemeSwitch />

          </ActiveSectionContextProvider>  
        </ThemeContextProvider> 

      </body>
    </html>
  );
}
