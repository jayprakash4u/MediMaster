export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-40 rounded-lg bg-slate-100 mb-4" />
              <h3 className="text-lg font-bold text-navy-950 mb-2">Project {item}</h3>
              <p className="text-slate-600 text-sm">
                A modern solution designed to streamline operations and deliver measurable results.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
