import { motion } from "framer-motion";
import { FiTarget, FiCompass } from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./common/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Professional summary"
          description="Who I am, what I'm working toward, and what I care about outside the SOC."
          command="cat about.md"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="panel overflow-hidden"
          >
            <img
              src={profile.photo}
              alt={`${profile.name} — portrait`}
              className="h-72 w-full object-cover object-[50%_75%] sm:h-96"
              loading="lazy"
            />
            <div className="border-t border-line p-5">
              <p className="font-display font-semibold text-ink">{profile.name}</p>
              <p className="font-mono text-xs text-cyan">{profile.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-ink-dim">{profile.summary}</p>

            <div className="panel p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan">
                <FiTarget /> <span className="font-mono text-xs uppercase tracking-wider">Career objective</span>
              </div>
              <p className="text-ink-dim">{profile.objective}</p>
            </div>

            <div className="panel p-5">
              <div className="mb-3 flex items-center gap-2 text-cyan">
                <FiCompass /> <span className="font-mono text-xs uppercase tracking-wider">Interests</span>
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-start gap-2 text-sm text-ink-dim"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-soft" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
