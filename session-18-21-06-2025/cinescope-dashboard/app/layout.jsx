import NextTopLoader from 'nextjs-toploader';
import { inter } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"



export const metadata = {
  title: "CineScope Movies Database - BO3",
  description: "Find your favorite movie ratings and recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
         <NextTopLoader speed={400} color='#28e6b3' crawlSpeed={400} />
        {children}
        <Toaster  richColors position="top-center" />
      </body>
    </html>
  );
}
