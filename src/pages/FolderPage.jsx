import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { profile } from "../data/content";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

const FOLDER_CONTENT = {
  about: {
    title: "About Me",
    quote:
      "A cybersecurity undergraduate learning to think like both the attacker and the defender.",
    Content: About,
  },
  skills: {
    title: "Skills & Tools",
    quote: "The toolkit behind every lab, log, and dashboard on this site.",
    Content: Skills,
  },
  projects: {
    title: "Projects & Labs",
    quote:
      "Real repos, real logs, real detections — from independent home labs to a capstone Zero Trust system.",
    Content: Projects,
  },
  certifications: {
    title: "Certifications",
    quote: "Job simulations and coursework completed alongside hands-on lab work.",
    Content: Certifications,
  },
  experience: {
    title: "Experience & Education",
    quote: "Where I've led, and where I've studied.",
    Content: () => (
      <>
        <Experience />
        <Education />
      </>
    ),
  },
  contact: {
    title: "Contact",
    quote: "Open to internships, collaborations, and SOC / Blue Team opportunities.",
    Content: Contact,
  },
};

export default function FolderPage() {
  const { id } = useParams();
  const folder = FOLDER_CONTENT[id];

  if (!folder) return <Navigate to="/" replace />;

  const { title, quote, Content } = folder;

  return (
    <div className="relative min-h-screen">
      <div className="section-container flex items-center justify-between py-6">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 font-mono text-xs text-ink-dim transition-colors hover:border-indigo hover:text-indigo"
        >
          <FiArrowLeft size={14} /> Back to Desktop
        </Link>
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink-dim transition-colors hover:border-indigo hover:text-indigo"
          >
            <FiMail size={13} /> {profile.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel text-ink-dim transition-colors hover:border-indigo hover:text-indigo"
          >
            <FiLinkedin size={14} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-panel text-ink-dim transition-colors hover:border-indigo hover:text-indigo"
          >
            <FiGithub size={14} />
          </a>
        </div>
      </div>

      <div className="section-container pb-6 pt-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-2xl border-l-2 border-indigo/60 pl-4 font-display text-lg italic text-ink-dim sm:text-xl"
        >
          &ldquo;{quote}&rdquo;
        </motion.p>
      </div>

      <Content />
    </div>
  );
}
