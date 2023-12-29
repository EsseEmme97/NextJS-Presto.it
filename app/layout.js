import { Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";


const heebo = Heebo({ subsets: ["latin"] });

export const metadata = {
  title: "Presto",
  description: "benvenuti al portale presto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
