"use client";

export default function BillingOrbit() {
  return (
    <>
      <div
        className="font-outfit"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div style={{ position: "relative", width: 340, height: 340, overflow: "visible" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 48,
              borderRadius: "50%",
              border: "1px dashed rgba(255,255,255,0.05)",
            }}
          />

          {[
            { icon: "🧾", lines: ["GST", "Invoicing"], bg: "#047857", angle: 0 },
            { icon: "💳", lines: ["Insurance", "Claims"], bg: "#0D9488", angle: 45 },
            { icon: "🏦", lines: ["TPA", "Reconciliation"], bg: "#06B6D4", angle: 90 },
            { icon: "📊", lines: ["Revenue", "Analytics"], bg: "#3B66E2", angle: 135 },
            { icon: "📑", lines: ["Aging", "Reports"], bg: "#254DC8", angle: 180 },
            { icon: "💸", lines: ["Collections", "Mgmt"], bg: "#14B8A6", angle: 225 },
            { icon: "🏥", lines: ["Multi-Branch", "Billing"], bg: "#0891B2", angle: 270 },
            { icon: "🔄", lines: ["Cashless", "Workflow"], bg: "#3B66E2", angle: 315 },
          ].map((mod) => (
            <div
              key={"oc-" + mod.angle}
              style={{
                position: "absolute",
                top: 170,
                left: 170,
                width: 1,
                height: 155,
                background: "rgba(255,255,255,0.1)",
                transform: "translateX(-0.5px) rotate(" + mod.angle + "deg)",
                transformOrigin: "top center",
                pointerEvents: "none",
              }}
            />
          ))}

          {[
            { icon: "🩻", lines: ["EHR", "Integration"], bg: "#14B8A6", angle: 45 },
            { icon: "📱", lines: ["Online", "Payments"], bg: "#254DC8", angle: 135 },
            { icon: "📈", lines: ["Claim", "Success"], bg: "#0D9488", angle: 225 },
            { icon: "🛡️", lines: ["Fraud", "Detection"], bg: "#3B66E2", angle: 315 },
          ].map((mod) => (
            <div
              key={"ic-" + mod.angle}
              style={{
                position: "absolute",
                top: 170,
                left: 170,
                width: 1,
                height: 65,
                background: "rgba(255,255,255,0.1)",
                transform: "translateX(-0.5px) rotate(" + mod.angle + "deg)",
                transformOrigin: "top center",
                pointerEvents: "none",
              }}
            />
          ))}

          {[
            { icon: "🧾", lines: ["GST", "Invoicing"], bg: "#047857", angle: 0 },
            { icon: "💳", lines: ["Insurance", "Claims"], bg: "#0D9488", angle: 45 },
            { icon: "🏦", lines: ["TPA", "Reconciliation"], bg: "#06B6D4", angle: 90 },
            { icon: "📊", lines: ["Revenue", "Analytics"], bg: "#3B66E2", angle: 135 },
            { icon: "📑", lines: ["Aging", "Reports"], bg: "#254DC8", angle: 180 },
            { icon: "💸", lines: ["Collections", "Mgmt"], bg: "#14B8A6", angle: 225 },
            { icon: "🏥", lines: ["Multi-Branch", "Billing"], bg: "#0891B2", angle: 270 },
            { icon: "🔄", lines: ["Cashless", "Workflow"], bg: "#3B66E2", angle: 315 },
          ].map((mod) => (
            <div
              key={"op-" + mod.angle}
              style={{
                position: "absolute",
                left: 170 + 155 * Math.cos(((mod.angle - 90) * Math.PI) / 180),
                top: 170 + 155 * Math.sin(((mod.angle - 90) * Math.PI) / 180),
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "5px 10px 5px 6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: mod.bg + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  flexShrink: 0,
                }}
              >
                {mod.icon}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                {mod.lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {[
            { icon: "🩻", lines: ["EHR", "Integration"], bg: "#14B8A6", angle: 45 },
            { icon: "📱", lines: ["Online", "Payments"], bg: "#254DC8", angle: 135 },
            { icon: "📈", lines: ["Claim", "Success"], bg: "#0D9488", angle: 225 },
            { icon: "🛡️", lines: ["Fraud", "Detection"], bg: "#3B66E2", angle: 315 },
          ].map((mod) => (
            <div
              key={"ip-" + mod.angle}
              style={{
                position: "absolute",
                left: 170 + 65 * Math.cos(((mod.angle - 90) * Math.PI) / 180),
                top: 170 + 65 * Math.sin(((mod.angle - 90) * Math.PI) / 180),
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "4px 7px 4px 5px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.2)";
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: mod.bg + "15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  flexShrink: 0,
                }}
              >
                {mod.icon}
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                {mod.lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: 144,
              height: 144,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 0 6px rgba(255,255,255,0.1), 0 0 0 12px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.25)",
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 2 }}>💰</div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: -0.5,
                lineHeight: 1,
              }}
            >
              Billing
            </div>
            <div
              style={{
                fontSize: 7,
                fontWeight: 700,
                color: "#047857",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              Revenue Cycle
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
