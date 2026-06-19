import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { fontVariables, inter } from "@/lib/fonts";
import { SITE } from "@/lib/site";

export const metadata = {
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SITE.locale} className={fontVariables}>
      <body className={`${inter.className} min-h-screen bg-gray-50 text-slate-900 antialiased`}>
        <Navbar />
        <SmoothScroll>
          <div className="pb-20 md:pb-0">{children}</div>
        </SmoothScroll>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
