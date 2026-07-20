/**
 * Original decorative background for the warm "paper desktop" aesthetic:
 * scattered hand-drawn-style plus marks and soft color blobs over the
 * dot-grid set on <body>. Purely original shapes — no copied artwork.
 */
const CROSSES = [
  { x: "6%", y: "10%", size: 14, rotate: 8 },
  { x: "92%", y: "8%", size: 18, rotate: -12 },
  { x: "88%", y: "34%", size: 12, rotate: 20 },
  { x: "4%", y: "48%", size: 16, rotate: -6 },
  { x: "96%", y: "62%", size: 14, rotate: 14 },
  { x: "10%", y: "78%", size: 12, rotate: -18 },
  { x: "80%", y: "88%", size: 16, rotate: 10 },
  { x: "45%", y: "6%", size: 12, rotate: -10 },
  { x: "55%", y: "94%", size: 14, rotate: 16 },
];

function Cross({ x, y, size, rotate }) {
  return (
    <div
      className="absolute text-amber/60"
      style={{ left: x, top: y, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2v20M2 12h20"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function PaperDoodles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo/10 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
      {CROSSES.map((c, i) => (
        <Cross key={i} {...c} />
      ))}
    </div>
  );
}
