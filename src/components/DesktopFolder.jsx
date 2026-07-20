import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FolderIcon from "./common/FolderIcon";

export default function DesktopFolder({ to, label, rotate = 0, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      style={{ rotate: `${rotate}deg` }}
    >
      <Link
        to={to}
        className="group flex w-28 flex-col items-center gap-2 rounded-xl p-2 transition-transform hover:-translate-y-1 hover:rotate-0 sm:w-32"
      >
        <FolderIcon className="h-16 w-20 text-indigo-soft drop-shadow-sm transition-transform group-hover:scale-105 sm:h-20 sm:w-24" />
        <span className="text-center font-body text-xs font-medium text-ink sm:text-sm">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}
