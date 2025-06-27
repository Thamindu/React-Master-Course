import { inter } from "./fonts";
import "./globals.css";
inter


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
        {children}
      </body>
    </html>
  );
}
