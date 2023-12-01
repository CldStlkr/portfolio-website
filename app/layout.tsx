import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Neel | Personal Website",
  description: "Hi!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:text-opacity-90 h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#e2fbfa] absolute top-[-6rem] -z-10 right-[11rem] h-[62.5rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div
          className="bg-[#d7fbf1] absolute top-[-1rem] -z-10 left-[-35rem] h-[62.5rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
