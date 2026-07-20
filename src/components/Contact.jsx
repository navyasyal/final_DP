import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./common/SectionHeading";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error(
        "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file."
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk SOC roles & internships"
          description="Open to internships, collaborations, and SOC / Blue Team opportunities."
          command="./connect --with navya"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="panel flex items-center gap-4 p-5 transition-colors hover:border-cyan/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel-2 text-cyan">
                <FiMail size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase text-ink-dim">Email</p>
                <p className="text-sm text-ink">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="panel flex items-center gap-4 p-5 transition-colors hover:border-cyan/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel-2 text-cyan">
                <FiPhone size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase text-ink-dim">Phone</p>
                <p className="text-sm text-ink">{profile.phone}</p>
              </div>
            </a>

            <div className="panel flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel-2 text-cyan">
                <FiMapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase text-ink-dim">Location</p>
                <p className="text-sm text-ink">{profile.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-dim transition-colors hover:border-cyan hover:text-cyan"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="panel space-y-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-1.5 block font-mono text-xs text-ink-dim">
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-line bg-panel-2 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block font-mono text-xs text-ink-dim">
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-line bg-panel-2 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-ink-dim">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-panel-2 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan"
                placeholder="SOC internship opportunity"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-line bg-panel-2 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan"
                placeholder="Tell me a bit about the role or opportunity…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo to-cyan px-5 py-3 font-mono text-sm font-medium text-void shadow-glow transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiSend />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-cyan">
                Message sent — thank you! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-danger">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
