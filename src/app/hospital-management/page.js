import Footer from "@/components/layout/Footer";
import Link from "next/link";
import HospitalHero from "@/components/pages/hospital-management/HospitalHero";
import StatisticsSection from "@/components/pages/hospital-management/StatisticsSection";
import HMSCrossLayout from "@/components/pages/hospital-management/HMSCrossLayout";
import HospitalSoftwareSection from "@/components/pages/hospital-management/HospitalSoftwareSection";
import HmsModulesWithVideo from "@/components/pages/hospital-management/HmsModulesWithVideo";
import HMSBenefitsSection from "@/components/pages/hospital-management/HMSBenefitsSection";
import HMSTrialSection from "@/components/pages/home/sections/HMSTrialSection";

export default function HospitalManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HospitalHero />

      {/* Product Images Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              {
                title: "Hospital Management",
                image: "/hospital/hospital.jpg",
                href: "/hospital-management",
              },
              {
                title: "Pharmacy Management",
                image: "/hospital/pharmacy.jpg",
                href: "http://localhost:3000/pharmacy-management",
              },
              {
                title: "Pathology Lab",
                image: "/hospital/pathalogy-lab.jpg",
                href: "http://localhost:3000/pathology-management",
              },
              {
                title: "Clinic Management",
                image: "/hospital/clinic.jpg",
                href: "http://localhost:3000/pharmacy-management",
              },
              {
                title: "Dental Clinic",
                image: "/hospital/dental.jpg",
                href: "http://localhost:3000/dental-clinic-management",
              },
              {
                title: "Patient Managment",
                image: "/hospital/patientmanagment.jpg",
                href: "http://localhost:3000/dental-clinic-management",
              },
            ].map((product, idx) => (
              <Link
                key={idx}
                href={product.href}
                className="group relative rounded-xl overflow-hidden aspect-square bg-slate-100 border border-slate-200 hover:border-teal-400 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                  {product.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HMS Cross Layout Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <HospitalSoftwareSection />
          <HMSCrossLayout />
        </div>
      </section>

      <HmsModulesWithVideo />
      <HMSBenefitsSection />
      <StatisticsSection />
      <HMSTrialSection />

      <Footer />
    </main>
  );
}
