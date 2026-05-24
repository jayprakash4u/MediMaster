import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "ServicesPlus - Professional Services",
  description: "Comprehensive professional services for all your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
