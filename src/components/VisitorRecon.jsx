import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

export default function VisitorRecon() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (!cancelled) setInfo(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const browser = (() => {
    const ua = navigator.userAgent;
    if (ua.includes("Edg/")) return "Edge";
    if (ua.includes("Chrome/") && !ua.includes("Chromium")) return "Chrome";
    if (ua.includes("Firefox/")) return "Firefox";
    if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari";
    return "Unknown";
  })();

  const os = (() => {
    const p = navigator.platform || "";
    if (p.includes("Win")) return "Windows";
    if (p.includes("Mac")) return "macOS";
    if (p.includes("Linux")) return "Linux";
    return p || "Unknown";
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      className="panel w-full max-w-xs overflow-hidden shadow-glow"
    >
      <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
        <FiAlertTriangle className="text-amber" size={14} />
        <span className="font-mono text-xs text-ink-dim">recon_scan.log</span>
      </div>
      <div className="space-y-2 p-4 font-mono text-xs">
        <Row label="IP" value={error ? "unavailable" : info?.ip ?? "resolving…"} highlight />
        <Row
          label="Location"
          value={
            error
              ? "unavailable"
              : info
              ? `${info.city ?? "—"}, ${info.country_name ?? "—"}`
              : "resolving…"
          }
        />
        <Row label="Browser" value={browser} />
        <Row label="OS" value={os} />
        <Row label="Timezone" value={info?.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone} />
        <p className="mt-3 rounded-md bg-panel-2 px-2.5 py-2 text-[10px] leading-relaxed text-ink-dim">
          Fetched client-side from ipapi.co — nothing here is stored or sent anywhere.
        </p>
      </div>
    </motion.div>
  );
}

function Row({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-ink-dim">{label}</span>
      <span className={highlight ? "text-indigo-soft" : "text-ink"}>{value}</span>
    </div>
  );
}
