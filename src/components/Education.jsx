import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { education, achievements } from "../data/content";
import SectionHeading from "./common/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="section-container grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Education" title="Academic background" command="cat education.md" />
          <div className="relative mt-10 space-y-8 border-l border-line pl-8">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel text-cyan">
                  <FiBookOpen size={14} />
                </span>
                <div className="panel p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-cyan">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">{item.school}</p>
                  <p className="mt-2 text-xs text-ink-dim">{item.notes}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Achievements" title="Milestones worth noting" command="ls -la achievements/" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="panel p-5 transition-colors hover:border-cyan/50"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-amber">
                  <FiAward size={16} />
                </span>
                <h3 className="font-display text-sm font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-xs text-ink-dim">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
