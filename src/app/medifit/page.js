import Footer from "@/components/layout/Footer";
import Link from "next/link";

const features = [
  {
    title: "Predictive Health Scoring",
    description: "AI-powered analysis of vital signs, lifestyle data, and medical history to predict health risks before they become serious issues.",
  },
  {
    title: "Personalized Care Pathways",
    description: "Custom wellness plans generated from your unique health profile. Diet, exercise, and checkup recommendations that actually fit your life.",
  },
  {
    title: "Patient Engagement Portal",
    description: "Dedicated portal for patients to track progress, book appointments, access reports, and communicate with healthcare providers seamlessly.",
  },
  {
    title: "Real-Time Health Monitoring",
    description: "Connect wearable devices and IoT health monitors for continuous tracking of heart rate, sleep patterns, blood pressure, and more.",
  },
  {
    title: "Telemedicine Integration",
    description: "Seamless video consultations with doctors directly from the app. Prescriptions, follow-ups, and care plans — all from your phone.",
  },
  {
    title: "Family Health Dashboard",
    description: "Manage health records for your entire family in one secure dashboard. Track vaccinations, checkups, and medications for everyone.",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Partner Clinics" },
  { value: "95%", label: "User Satisfaction" },
  { value: "24/7", label: "Health Monitoring" },
];

export default function MediFitPage() {
  return (
    <main>
      <section className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 1) 100%), url('/home/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Wellness & Health Tech
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Health <span className="text-teal-400">Analytics</span> Platform
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Bridging the gap between clinical data and patient wellness through predictive health analytics. 
              Take control of your health with intelligent, personalized insights powered by AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all">
                Start Free Trial
              </Link>
              <Link href="/products" className="inline-block px-8 py-4 bg-transparent border border-slate-400 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 font-bold text-xs tracking-[0.2em] uppercase block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Intelligent Health, Smarter You
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Empowering patients and providers with data-driven insights for proactive healthcare management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-teal-400 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Take Control of Your Health Today
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Join thousands of users already using MediFit's AI-powered platform for smarter, proactive health management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all">
              Get Started Free
            </Link>
            <Link href="/services" className="inline-block px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
