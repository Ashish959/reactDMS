 import "../styles/card.css";
export default function StatCard({
  title,
  atv = 0,
  mtd = "0 / 0",
  lmtd = "0 / 0",
  variant = "blue", // blue | orange | green
}) {
  return (
    <div className={`stat-card modern ${variant}`}>
      <div className="stat-title">{title}</div>

      <div className="stat-metrics">
        <div className="metric">
          <span className="value big">{atv}</span>
          <span className="label">ATV</span>
        </div>

        <div className="metric">
          <span className="value big">{mtd}</span>
          <span className="label">MTD</span>
        </div>

        <div className="metric">
          <span className="value big">{lmtd}</span>
          <span className="label">LMTD</span>
        </div>
      </div>
    </div>
  );
}