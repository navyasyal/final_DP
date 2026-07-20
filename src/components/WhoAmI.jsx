import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function WhoAmI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="panel w-full max-w-md overflow-hidden shadow-glow"
    >
      <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
        <span className="ml-2 font-mono text-xs text-ink-dim">whoami.sh</span>
      </div>
      <div className="p-5 font-mono text-sm">
        <p className="text-ink-dim">
          <span className="text-cyan">navya@portfolio</span>
          <span>:~$ cat info.txt</span>
        </p>
        <div className="mt-3 flex items-baseline justify-between">
          <p className="font-display text-base font-semibold text-ink">{profile.name}</p>
          <p className="text-[11px] text-ink-dim">NIIT UNIVERSITY</p>
        </div>
        <ul className="mt-3 space-y-1.5 text-xs text-ink-dim">
          <li>» Aspiring SOC Analyst &amp; Blue Team practitioner</li>
          <li>» President, Agraga — Management Society (NIIT University)</li>
          <li>» Social Media Head, Her Campus at NU</li>
          <li>» Python · Splunk · Wazuh · MITRE ATT&amp;CK</li>
        </ul>
      </div>
    </motion.div>
  );
}
