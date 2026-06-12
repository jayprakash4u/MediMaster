import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deepNavy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* brand */}
        <div>
          <div className="text-xl font-bold flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <span className="text-white">Navy Pro</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Professional solutions delivered with expertise and reliability.
          </p>
        </div>

        {/* quick links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Quick Links</p>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.name}>
                <Link href={l.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Contact</p>
          <div className="space-y-2 text-sm text-slate-400">
            <p>123 Business Ave</p>
            <p>+1 (555) 123-4567</p>
            <p>contact@navypro.com</p>
            <p className="text-teal-400 font-semibold">Support: Mon-Fri 9am-6pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-deepNavy-700 px-6 py-4">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Navy Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
