import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  command,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {command && (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink-dim ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-danger/70" />
          <span className="h-2 w-2 rounded-full bg-amber/70" />
          <span className="h-2 w-2 rounded-full bg-cyan/70" />
          <span className="ml-1 text-indigo-soft">navya@soc</span>
          <span>:~$</span>
          <span className="text-ink">{command}</span>
          <span className="typing-cursor" />
        </div>
      )}
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-ink-dim ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
