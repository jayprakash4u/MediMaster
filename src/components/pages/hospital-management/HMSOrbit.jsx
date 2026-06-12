'use client';

export default function HMSStatic() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Arena */}
        <div style={{ position: "relative", width: 260, height: 260, overflow: "visible" }}>

          {/* Decorative rings */}
          <div style={{ position:"absolute", inset:0,  borderRadius:"50%", border:"1px solid rgba(255,255,255,0.08)" }} />
          <div style={{ position:"absolute", inset:36, borderRadius:"50%", border:"1px dashed rgba(255,255,255,0.05)" }} />

          {/* Connector lines outer */}
          {[
            { icon: "👤", lines: ["Outpatient", "Management"],    bg: "#3B66E2", angle: 315 },
            { icon: "📋", lines: ["Patient", "Registration"],     bg: "#0D9488", angle: 0   },
            { icon: "📅", lines: ["Appointment &", "Scheduling"], bg: "#06B6D4", angle: 45  },
            { icon: "💰", lines: ["Balance", "Sheet"],            bg: "#14B8A6", angle: 90  },
            { icon: "🗂️", lines: ["Medical", "Data"],             bg: "#254DC8", angle: 135 },
            { icon: "🖥️", lines: ["Reception", "Management"],    bg: "#0891B2", angle: 180 },
            { icon: "👔", lines: ["Payroll & HRD", "Management"], bg: "#3B66E2", angle: 225 },
            { icon: "🛏️", lines: ["Inpatient", "Management"],    bg: "#254DC8", angle: 270 },
          ].map((mod) => (
            <div
              key={"oc-" + mod.angle}
              style={{
                position: "absolute",
                top: 130,
                left: 130,
                width: 1,
                height: 80,
                background: "rgba(255,255,255,0.1)",
                transform: "translateX(-0.5px) rotate(" + mod.angle + "deg)",
                transformOrigin: "top center",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Connector lines inner */}
          {[
            { icon: "🏥", lines: ["Discharge", "Summary"],   bg: "#254DC8", angle: 225 },
            { icon: "💊", lines: ["Pharmacy", "Mgmt"],       bg: "#0D9488", angle: 315 },
            { icon: "📦", lines: ["Store", "Management"],    bg: "#3B66E2", angle: 45  },
            { icon: "🧪", lines: ["Laboratory", "Mgmt"],     bg: "#14B8A6", angle: 135 },
          ].map((mod) => (
            <div
              key={"ic-" + mod.angle}
              style={{
                position: "absolute",
                top: 130,
                left: 130,
                width: 1,
                height: 30,
                background: "rgba(255,255,255,0.1)",
                transform: "translateX(-0.5px) rotate(" + mod.angle + "deg)",
                transformOrigin: "top center",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Pills outer */}
          {[
            { icon: "👤", lines: ["Outpatient", "Management"],    bg: "#3B66E2", angle: 315 },
            { icon: "📋", lines: ["Patient", "Registration"],     bg: "#0D9488", angle: 0   },
            { icon: "📅", lines: ["Appointment &", "Scheduling"], bg: "#06B6D4", angle: 45  },
            { icon: "💰", lines: ["Balance", "Sheet"],            bg: "#14B8A6", angle: 90  },
            { icon: "🗂️", lines: ["Medical", "Data"],             bg: "#254DC8", angle: 135 },
            { icon: "🖥️", lines: ["Reception", "Management"],    bg: "#0891B2", angle: 180 },
            { icon: "👔", lines: ["Payroll & HRD", "Management"], bg: "#3B66E2", angle: 225 },
            { icon: "🛏️", lines: ["Inpatient", "Management"],    bg: "#254DC8", angle: 270 },
          ].map((mod) => (
            <div
              key={"op-" + mod.angle}
              style={{
                position: "absolute",
                left: 130 + 118 * Math.cos(((mod.angle - 90) * Math.PI) / 180),
                top: 130 + 118 * Math.sin(((mod.angle - 90) * Math.PI) / 180),
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: "4px 8px 4px 5px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: mod.bg + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  flexShrink: 0,
                }}
              >
                {mod.icon}
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                {mod.lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Pills inner */}
          {[
            { icon: "🏥", lines: ["Discharge", "Summary"],   bg: "#254DC8", angle: 225 },
            { icon: "💊", lines: ["Pharmacy", "Mgmt"],       bg: "#0D9488", angle: 315 },
            { icon: "📦", lines: ["Store", "Management"],    bg: "#3B66E2", angle: 45  },
            { icon: "🧪", lines: ["Laboratory", "Mgmt"],     bg: "#14B8A6", angle: 135 },
          ].map((mod) => (
            <div
              key={"ip-" + mod.angle}
              style={{
                position: "absolute",
                left: 130 + 52 * Math.cos(((mod.angle - 90) * Math.PI) / 180),
                top: 130 + 52 * Math.sin(((mod.angle - 90) * Math.PI) / 180),
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: "3px 6px 3px 4px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.2)";
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: mod.bg + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 8,
                  flexShrink: 0,
                }}
              >
                {mod.icon}
              </div>
              <div style={{ fontSize: 7, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                {mod.lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Center core */}
          <div
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: 110, height: 110, borderRadius: 16,
              background: "rgba(255,255,255,0.05)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 6px rgba(255,255,255,0.1), 0 0 0 12px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.25)",
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 2 }}>🏥</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: -1, lineHeight: 1 }}>HMS</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: "#254DC8", letterSpacing: "1.2px", textTransform: "uppercase", marginTop: 2 }}>
              Smart Care
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
