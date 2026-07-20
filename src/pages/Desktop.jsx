import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { profile } from "../data/content";
import DesktopFolder from "../components/DesktopFolder";
import WhoAmI from "../components/WhoAmI";
import VisitorRecon from "../components/VisitorRecon";

const FOLDERS = [
  { to: "/folder/about", label: "About Me", rotate: -3 },
  { to: "/folder/skills", label: "Skills", rotate: 2 },
  { to: "/folder/projects", label: "Projects", rotate: -2 },
  { to: "/folder/certifications", label: "Certifications", rotate: 3 },
  { to: "/folder/experience", label: "Experience & Education", rotate: -2 },
  { to: "/folder/contact", label: "Contact", rotate: 2 },
];

export default function Desktop() {
  return (
    <div className="relative min-h-screen">
      <header className="section-container flex items-center justify-between py-6">
        <p className="font-mono text-xs text-ink-dim">
          <span className="text-cyan">navya</span>@<span className="text-indigo-soft">portfolio</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-dim transition-colors hover:text-indigo"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-dim transition-colors hover:text-indigo"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={profile.links.resume}
            download
            className="flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-indigo hover:text-indigo"
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>
      </header>

      <main className="section-container flex flex-col gap-12 pb-24 pt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-8 lg:w-[46%]">
          <div>
            <p className="font-display text-2xl italic text-indigo-soft sm:text-3xl">navya</p>
            <h1 className="-mt-2 font-display text-6xl font-semibold leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
              portfolio
            </h1>
            <p className="mt-5 max-w-sm text-ink-dim">{profile.tagline}</p>
          </div>

          <WhoAmI />
          <VisitorRecon />
        </div>

        <div className="lg:w-[54%]">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
            Double-click won&apos;t work here — a single click is fine
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {FOLDERS.map((f, i) => (
              <DesktopFolder key={f.to} {...f} delay={0.1 + i * 0.06} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
