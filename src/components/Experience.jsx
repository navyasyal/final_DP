import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/content";
import SectionHeading from "./common/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Leadership & experience"
          title="Where I've led"
          description="Campus leadership and organizational roles alongside my technical work."
          command="cat experience.log"
        />

        <div className="relative mt-12 space-y-8 border-l border-line pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel text-cyan">
                <FiBriefcase size={14} />
              </span>
              <div className="panel p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-cyan">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-dim">{item.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs text-ink-dim">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-indigo-soft" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
