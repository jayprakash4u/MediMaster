export default function MobileNavigationWave() {
  const navItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      label: "Home",
      color: "text-gray-500",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h-2v2zm0-4h2V7h-2v5z" />
        </svg>
      ),
      label: "Popular",
      color: "text-white",
      isCenter: true,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      label: "Settings",
      color: "text-gray-500",
    },
  ];

  const createWave = (position) => {
    // Create SVG wave path based on position
    const wavePaths = {
      left: "M0,20 Q50,60 80,30 L80,40 Q50,80 0,40 Z",
      center: "M0,20 Q40,60 80,30 L80,40 Q40,80 0,40 Z",
      right: "M0,30 Q40,60 80,20 L80,40 Q40,80 0,40 Z",
    };
    return wavePaths[position] || wavePaths.center;
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-navy-950 mb-2">
            Mobile Navigation
          </h1>
          <p className="text-sm text-gray-600">
            Wave-shaped curved bottom navigation
          </p>
        </div>

        {/* Variation 1: Centered Wave */}
        <div className="mb-20">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
            Centered Wave
          </h3>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden" style={{ height: "580px", width: "320px", margin: "0 auto" }}>
            {/* Content area */}
            <div className="absolute inset-0 pt-8 px-6 flex items-start justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className="text-lg font-bold text-navy-950">MediMaster</h2>
                <p className="text-xs text-gray-500 mt-2">Healthcare Management</p>
              </div>
            </div>

            {/* Wave navigation */}
            <div className="absolute bottom-0 left-0 right-0">
              {/* Wave SVG background */}
              <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* Main wave shape */}
                <path
                  d="M0,20 Q40,60 80,30 L80,40 Q40,80 0,40 Z"
                  fill="url(#waveGradient)"
                  opacity="0.95"
                />
              </svg>

              {/* Navigation items positioned over wave */}
              <div className="relative h-32 flex items-end justify-around pb-6">
                {navItems.map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center relative ${item.isCenter ? "-mt-10" : ""}`}>
                    {/* Center circle bump for center icon */}
                    {item.isCenter && (
                      <div className="absolute -top-10 w-14 h-14 bg-black rounded-full border-4 border-gray-100 flex items-center justify-center shadow-2xl z-20">
                        <div className={`${item.color} transition-transform hover:scale-110`}>
                          {item.icon}
                        </div>
                      </div>
                    )}
                    
                    {/* Regular icon without bump */}
                    {!item.isCenter && (
                      <button className="p-3 hover:scale-110 transition-transform">
                        <div className={item.color}>{item.icon}</div>
                      </button>
                    )}
                    
                    {/* Label */}
                    <span className={`text-[10px] mt-1 font-medium ${item.color === "text-white" ? "text-gray-200" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Variation 2: Left-Aligned Wave */}
        <div className="mb-20">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
            Left-Aligned Wave
          </h3>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden" style={{ height: "580px", width: "320px", margin: "0 auto" }}>
            {/* Content area */}
            <div className="absolute inset-0 pt-8 px-6 flex items-start justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className="text-lg font-bold text-navy-950">MediMaster</h2>
                <p className="text-xs text-gray-500 mt-2">Healthcare Management</p>
              </div>
            </div>

            {/* Wave navigation */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <defs>
                  <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* Left-aligned wave */}
                <path
                  d="M0,20 Q50,60 80,30 L80,40 Q50,80 0,40 Z"
                  fill="url(#waveGradient2)"
                  opacity="0.95"
                />
              </svg>

              <div className="relative h-32 flex items-end justify-around pb-6">
                {navItems.map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center relative ${item.isCenter ? "-mt-10" : ""}`}>
                    {item.isCenter && (
                      <div className="absolute -top-10 w-14 h-14 bg-black rounded-full border-4 border-gray-100 flex items-center justify-center shadow-2xl z-20">
                        <div className={`${item.color} transition-transform hover:scale-110`}>
                          {item.icon}
                        </div>
                      </div>
                    )}
                    {!item.isCenter && (
                      <button className="p-3 hover:scale-110 transition-transform">
                        <div className={item.color}>{item.icon}</div>
                      </button>
                    )}
                    <span className={`text-[10px] mt-1 font-medium ${item.color === "text-white" ? "text-gray-200" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Variation 3: Right-Aligned Wave */}
        <div className="mb-20">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
            Right-Aligned Wave
          </h3>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden" style={{ height: "580px", width: "320px", margin: "0 auto" }}>
            {/* Content area */}
            <div className="absolute inset-0 pt-8 px-6 flex items-start justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className="text-lg font-bold text-navy-950">MediMaster</h2>
                <p className="text-xs text-gray-500 mt-2">Healthcare Management</p>
              </div>
            </div>

            {/* Wave navigation */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <defs>
                  <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* Right-aligned wave */}
                <path
                  d="M0,30 Q40,60 80,20 L80,40 Q40,80 0,40 Z"
                  fill="url(#waveGradient3)"
                  opacity="0.95"
                />
              </svg>

              <div className="relative h-32 flex items-end justify-around pb-6">
                {navItems.map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center relative ${item.isCenter ? "-mt-10" : ""}`}>
                    {item.isCenter && (
                      <div className="absolute -top-10 w-14 h-14 bg-black rounded-full border-4 border-gray-100 flex items-center justify-center shadow-2xl z-20">
                        <div className={`${item.color} transition-transform hover:scale-110`}>
                          {item.icon}
                        </div>
                      </div>
                    )}
                    {!item.isCenter && (
                      <button className="p-3 hover:scale-110 transition-transform">
                        <div className={item.color}>{item.icon}</div>
                      </button>
                    )}
                    <span className={`text-[10px] mt-1 font-medium ${item.color === "text-white" ? "text-gray-200" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
