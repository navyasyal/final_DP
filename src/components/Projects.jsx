import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import {
  featuredProjects,
  socLabProjects,
  academicProjects,
} from "../data/content";
import SectionHeading from "./common/SectionHeading";

const FILTERS = ["All", "Featured", "SOC Labs", "Research & Academic"];

function normalizeProjects() {
  const featured = featuredProjects.map((p) => ({
    kind: "Featured",
    title: p.name,
    description: p.description,
    tech: p.tech,
    bullets: p.features,
    tag: p.tag,
    links: { Website: p.link},
  }));

  const labs = socLabProjects.map((p) => ({
    kind: "SOC Labs",
    title: p.title,
    description: p.summary,
    tech: p.tech,
    bullets: p.points,
    tag: "Home Lab",
    links: { code: p.link },
  }));

  const academic = academicProjects.map((p) => ({
    kind: "Research & Academic",
    title: p.name,
    description: p.description,
    tech: p.tech,
    bullets: [],
    tag: p.category,
    links: { report: { url: p.link, label: p.linkLabel } },
  }));

  return [...featured, ...labs, ...academic];
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const all = useMemo(normalizeProjects, []);

  const visible = filter === "All" ? all : all.filter((p) => p.kind === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="What I've actually built"
          description="From a capstone Zero Trust system to independent SOC labs — real repos, real logs, real detections."
          command="./run projects.sh"
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                filter === f
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-line text-ink-dim hover:border-ink-dim hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="panel group flex flex-col overflow-hidden transition-colors hover:border-cyan/50"
              >
                {/* Visual header — icon-driven since no project screenshots were supplied */}
                <div className="relative flex h-28 items-center justify-between overflow-hidden border-b border-line bg-panel-2 px-5">
                  <div className="grid-noise absolute inset-0 opacity-30" />
                  <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-ink-dim">
                    {project.tag}
                  </span>
                  {project.kind === "Featured" && (
                    <span className="relative z-10 flex items-center gap-1 rounded-full bg-amber/10 px-2.5 py-1 font-mono text-[10px] uppercase text-amber">
                      <FiStar size={11} /> Flagship
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-dim">{project.description}</p>

                  {project.bullets.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {project.bullets.slice(0, 4).map((b) => (
                        <li key={b} className="flex gap-2 text-xs text-ink-dim">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-ink-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 font-mono text-xs">
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-ink-dim transition-colors hover:text-cyan"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.links.codeFrontend && (
                      <a
                        href={project.links.codeFrontend}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-ink-dim transition-colors hover:text-cyan"
                      >
                        <FiGithub /> Frontend repo
                      </a>
                    )}
                    {project.links.report && (
                      <a
                        href={project.links.report.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-ink-dim transition-colors hover:text-cyan"
                      >
                        <FiExternalLink /> {project.links.report.label}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
