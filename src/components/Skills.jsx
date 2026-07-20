import { motion } from "framer-motion";
import {
  FiCode,
  FiShield,
  FiActivity,
  FiCloud,
  FiWifi,
  FiDatabase,
  FiGlobe,
  FiTerminal,
  FiTool,
} from "react-icons/fi";
import { skillGroups } from "../data/content";
import SectionHeading from "./common/SectionHeading";

const ICONS = {
  "Programming Languages": FiCode,
  Cybersecurity: FiShield,
  "SIEM & SOC": FiActivity,
  "Cloud & IAM": FiCloud,
  Networking: FiWifi,
  Databases: FiDatabase,
  "Web Development": FiGlobe,
  "Operating Systems": FiTerminal,
  Tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Grouped the way I actually use it — from SIEM platforms to the dev stack behind my projects."
          command="ls -la skills/"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.group] ?? FiCode;
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="panel group p-5 transition-colors hover:border-cyan/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-cyan">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {group.group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-panel-2 px-3 py-1 font-mono text-[11px] text-ink-dim transition-colors group-hover:border-indigo/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
