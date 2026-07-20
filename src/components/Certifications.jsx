import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/content";
import SectionHeading from "./common/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications & simulations"
          title="Verified learning"
          description="Job simulations and coursework completed alongside hands-on lab work."
          command="cat certifications.log"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="panel group flex flex-col p-5 transition-colors hover:border-cyan/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel-2 text-amber">
                  <FiAward size={18} />
                </span>
                <span className="font-mono text-xs text-ink-dim">{cert.year}</span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-ink">
                {cert.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-cyan">{cert.org}</p>
              <ul className="mt-3 space-y-1.5">
                {cert.details.map((d) => (
                  <li key={d} className="flex gap-2 text-xs text-ink-dim">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-indigo-soft" />
                    {d}
                  </li>
                ))}
              </ul>
              <span className="mt-4 flex items-center gap-1.5 font-mono text-xs text-ink-dim transition-colors group-hover:text-cyan">
                <FiExternalLink size={12} /> View credential
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
