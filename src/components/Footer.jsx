import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line py-12">
      <div className="section-container flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Link to="/" className="font-display text-lg font-semibold text-ink">
            <span className="text-cyan">&lt;</span>
            {profile.initials}
            <span className="text-cyan">/&gt;</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-dim">{profile.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        <nav>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-dim">
            Navigate
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-ink-dim transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="section-container mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with React · Vite · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
