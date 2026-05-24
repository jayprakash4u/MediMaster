import React from 'react';

const ColorSystemDemo = () => {
  // Color palette data
  const primaryTeal = [
    { name: 'Teal 50', value: '#F0FDFE' },
    { name: 'Teal 100', value: '#CCFDF5' },
    { name: 'Teal 200', value: '#99F6E4' },
    { name: 'Teal 300', value: '#5EEAD4' },
    { name: 'Teal 400', value: '#2DD4BF' },
    { name: 'Teal 500', value: '#14B8A6', isPrimary: true },
    { name: 'Teal 600', value: '#0D9488' },
    { name: 'Teal 700', value: '#0F766E' },
    { name: 'Teal 800', value: '#115E59' },
    { name: 'Teal 900', value: '#134E4A' },
    { name: 'Teal 950', value: '#042F2E' },
  ];

  const aquaInteraction = [
    { name: 'Aqua 50', value: '#F0F9FF' },
    { name: 'Aqua 100', value: '#E0F2FE' },
    { name: 'Aqua 200', value: '#B9F6FF' },
    { name: 'Aqua 300', value: '#6EE7FF' },
    { name: 'Aqua 400', value: '#38D9E8' },
    { name: 'Aqua 500', value: '#06B6D4', isPrimary: true },
    { name: 'Aqua 600', value: '#0891B2' },
    { name: 'Aqua 700', value: '#0E7490' },
    { name: 'Aqua 800', value: '#155E75' },
    { name: 'Aqua 900', value: '#164E63' },
    { name: 'Aqua 950', value: '#0C3A44' },
  ];

  const deepNavyBrand = [
    { name: 'Navy 50', value: '#EEF4FF' },
    { name: 'Navy 100', value: '#E0EBFF' },
    { name: 'Navy 200', value: '#C5D7FF' },
    { name: 'Navy 300', value: '#9AB1FF' },
    { name: 'Navy 400', value: '#6B8CFF' },
    { name: 'Navy 500', value: '#3B66E2' },
    { name: 'Deep Navy 600', value: '#254DC8', isPrimary: true },
    { name: 'Deep Navy 700', value: '#1A3BA8' },
    { name: 'Deep Navy 800', value: '#153087' },
    { name: 'Deep Navy 900', value: '#122868' },
    { name: 'Deep Navy 950', value: '#0F1F4D' },
  ];

  const neutralSurfaces = [
    { name: 'Gray 50', value: '#FBFCFD', desc: 'Pure white backgrounds' },
    { name: 'Gray 100', value: '#F5F7FA', desc: 'Light card backgrounds' },
    { name: 'Gray 200', value: '#E8ECF0', desc: 'Hover states' },
    { name: 'Gray 300', value: '#D5D9E0', desc: 'Borders' },
    { name: 'Gray 400', value: '#A4A9B4', desc: 'Disabled text' },
    { name: 'Neutral 50', value: '#FFFFFF', desc: 'White - Cards, Paper' },
    { name: 'Neutral 100', value: '#F9FAFB' },
    { name: 'Neutral 200', value: '#F3F4F6' },
    { name: 'Neutral 300', value: '#E5E7EB', desc: 'Input borders' },
  ];

  const semanticColors = [
    { name: 'Success', value: '#10B981', category: 'Status' },
    { name: 'Warning', value: '#F59E0B', category: 'Status' },
    { name: 'Error', value: '#EF4444', category: 'Status' },
    { name: 'Info', value: '#06B6D4', category: 'Status' },
  ];

  const ColorSwatch = ({ color, category }) => (
    <div className="relative group">
      <div 
        className="h-20 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md" 
        style={{ backgroundColor: color.value }}
      >
        {color.isPrimary && (
          <div className="absolute -top-2 -right-2 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
            PRIMARY
          </div>
        )}
      </div>
      <div className="mt-2">
        <div className="text-xs font-medium text-gray-900">{color.name}</div>
        <div className="text-[10px] text-gray-500 font-mono">{color.value}</div>
        {color.desc && (
          <div className="text-[9px] text-gray-400 mt-0.5">{color.desc}</div>
        )}
      </div>
    </div>
  );

  const ButtonDemo = ({ variant, children, className = '' }) => {
    const variants = {
      primary: 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25',
      secondary: 'bg-deepNavy-600 hover:bg-deepNavy-700 text-white shadow-lg shadow-deepNavy-600/25',
      accent: 'bg-aqua-500 hover:bg-aqua-600 text-white shadow-lg shadow-aqua-500/25',
      outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50',
      ghost: 'text-slate-700 hover:bg-slate-100',
    };
    return (
      <button className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  const InputDemo = ({ label, placeholder, type = 'text' }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white 
                   focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 
                   transition-all duration-200 outline-none text-slate-800"
      />
    </div>
  );

  const CardDemo = ({ title, children }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card hover:shadow-cardHover transition-all duration-300">
      <h4 className="text-lg font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Industrial Color System</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional color palette built for enterprise applications. 
            PrimaryTeal/Aqua for interactions, Deep Navy for branding, Neutral tones for surfaces.
          </p>
        </div>

        {/* PrimaryTeal / Aqua - Interaction Layer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-3 h-8 bg-teal-500 rounded-full"></span>
            PrimaryTeal / Aqua - Interaction Layer
          </h2>
          <p className="text-slate-600">Buttons, Labels, Accents - Interactive elements that guide user actions</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-2">
            {primaryTeal.map((color) => (
              <ColorSwatch key={color.name} color={color} category="primary" />
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-2">
            {aquaInteraction.map((color) => (
              <ColorSwatch key={color.name} color={color} category="accent" />
            ))}
          </div>

          {/* Interactive Elements Demo */}
          <CardDemo title="Interactive Elements">
            <div className="flex flex-wrap gap-3">
              <ButtonDemo variant="primary">Primary Action</ButtonDemo>
              <ButtonDemo variant="accent">Accent Action</ButtonDemo>
              <ButtonDemo variant="secondary">Secondary Action</ButtonDemo>
              <ButtonDemo variant="outline">Outline Action</ButtonDemo>
              <ButtonDemo variant="ghost">Ghost Action</ButtonDemo>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                Label
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-aqua-100 text-aqua-800">
                <span className="w-2 h-2 bg-aqua-500 rounded-full mr-2"></span>
                Badge
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-deepNavy-100 text-deepNavy-800">
                <span className="w-2 h-2 bg-deepNavy-600 rounded-full mr-2"></span>
                Category
              </span>
            </div>
          </CardDemo>
        </section>

        {/* SecondaryDeep Navy - Branding Layer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-3 h-8 bg-deepNavy-600 rounded-full"></span>
            Deep Navy - Branding Layer
          </h2>
          <p className="text-slate-600">Logo, Typography, Illustration - Core brand identity elements</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-2">
            {deepNavyBrand.map((color) => (
              <ColorSwatch key={color.name} color={color} category="brand" />
            ))}
          </div>

          {/* Typography Demo */}
          <CardDemo title="Typography System">
            <div className="space-y-4">
              <div>
                <h1 className="text-5xl font-bold text-deepNavy-900 leading-tight">Display Heading</h1>
                <p className="text-slate-500 mt-2">font-weight: 800 | line-height: 1.1 | Tracking: -0.02em</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h2 className="text-3xl font-semibold text-deepNavy-800">Section Heading</h2>
                <p className="text-slate-500 mt-2">font-weight: 600 | line-height: 1.25</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base text-slate-600 leading-relaxed">
                  Body text maintains excellent readability with sufficient contrast ratio. 
                  Line height ensures comfortable reading across all screen sizes.
                </p>
                <p className="text-slate-500 mt-2">font-weight: 400 | line-height: 1.625</p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-8">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Brand Color</div>
                  <div className="text-2xl font-bold text-deepNavy-900 mt-1">Navy Pro</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Accent Color</div>
                  <div className="text-2xl font-bold text-teal-500 mt-1">Teal Plus</div>
                </div>
              </div>
            </div>
          </CardDemo>
        </section>

        {/* Neutral Light Blue/Grey - Surface Layer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-3 h-8 bg-gray-300 rounded-full"></span>
            Neutral Light Blue/Grey - Surface Layer
          </h2>
          <p className="text-slate-600">Input fields, Card shadows - Structural and depth elements</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {neutralSurfaces.map((color) => (
              <ColorSwatch key={color.name} color={color} category="surface" />
            ))}
          </div>

          {/* Form Elements Demo */}
          <CardDemo title="Form Elements & Input Fields">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InputDemo label="Full Name" placeholder="Enter your name" />
                <InputDemo label="Email Address" placeholder="you@example.com" type="email" />
                <InputDemo label="Company" placeholder="Company name" />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-700">Card with Shadow</span>
                  <span className="text-xs text-slate-500">Elevation: 4px</span>
                </div>
                <div className="text-sm text-slate-600">
                  Cards use subtle shadows to create depth hierarchy. 
                  Borders use gray-300 for clear separation.
                </div>
              </div>
            </div>
          </CardDemo>
        </section>

        {/* Semantic Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-3 h-8 bg-gradient-to-r from-green-500 via-amber-500 to-red-500 rounded-full"></span>
            Semantic Colors - Status & Feedback
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticColors.map((color) => (
              <div key={color.name} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: color.value }}></div>
                  <div>
                    <div className="font-semibold text-slate-800">{color.name}</div>
                    <div className="text-xs text-slate-500">{color.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadow System */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-3 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></span>
            Shadow System - Depth Hierarchy
          </h2>
          
          <CardDemo title="Elevation Levels">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['xs', 'sm', 'DEFAULT', 'md', 'lg'].map((size) => (
                <div key={size} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className={`w-full h-16 rounded-lg mb-2 shadow-${size}`}></div>
                  <div className="text-xs font-medium text-slate-700">shadow-{size}</div>
                </div>
              ))}
            </div>
          </CardDemo>
        </section>

        {/* Usage Guide */}
        <section className="space-y-6">
          <CardDemo title="Color Usage Guidelines">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <span className="font-semibold text-slate-800">Primary Actions</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">Use teal-500 for primary buttons, links, and key interactions. Reserved for most important actions.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-deepNavy-600 rounded"></div>
                  <span className="font-semibold text-slate-800">Brand Elements</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">Deep navy for logos, headings, and navigation. Projects authority and trust.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-aqua-500 rounded"></div>
                  <span className="font-semibold text-slate-800">Accents & Highlights</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">Aqua for secondary actions, badges, and visual highlights. Adds energy without overwhelming.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded border border-gray-300"></div>
                  <span className="font-semibold text-slate-800">Surfaces & Cards</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">White/off-white for cards and modals. Subtle shadows create depth and hierarchy.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-100 rounded"></div>
                  <span className="font-semibold text-slate-800">Backgrounds</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">Light gray for page backgrounds. Reduces eye strain while maintaining cleanliness.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-800 rounded"></div>
                  <span className="font-semibold text-slate-800">Text & Content</span>
                </div>
                <p className="text-sm text-slate-600 ml-6">Dark gray for text. High contrast for readability without harsh black-on-white.</p>
              </div>
            </div>
          </CardDemo>
        </section>

      </div>
    </div>
  );
};

export default ColorSystemDemo;