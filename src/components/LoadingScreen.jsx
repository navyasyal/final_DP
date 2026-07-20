import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "initializing secure session…",
  "loading threat intel feeds…",
  "mounting SOC dashboard…",
  "verifying integrity… OK",
];

export default function LoadingScreen({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const exitTimer = setTimeout(() => setHide(true), 320);
      const doneTimer = setTimeout(() => onDone?.(), 780);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(doneTimer);
      };
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
    return () => clearTimeout(t);
  }, [lineIndex, onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="w-[min(90vw,420px)] rounded-xl border border-line bg-panel/80 p-6 font-mono text-sm text-ink-dim shadow-glow">
            <p className="mb-3 text-cyan">navya@soc:~$ boot --portfolio</p>
            <ul className="space-y-1.5">
              {BOOT_LINES.slice(0, lineIndex).map((line) => (
                <li key={line} className="text-ink-dim">
                  <span className="text-indigo-soft">✓</span> {line}
                </li>
              ))}
            </ul>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo to-cyan"
                initial={{ width: "0%" }}
                animate={{ width: `${(lineIndex / BOOT_LINES.length) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
