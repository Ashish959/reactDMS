// export default function StatCard({ title, className = "" }) {
//   return (
//     <div className={`stat-card ${className}`}>
//       <h4>{title}</h4>

//       <div className="stat-row">
//         <span>ATV</span>
//         <span>0</span>
//       </div>

//       <div className="stat-row">
//         <span>MTD</span>
//         <span>0 / 0</span>
//       </div>

//       <div className="stat-row">
//         <span>LMTD</span>
//         <span>0 / 0</span>
//       </div>
//     </div>
//   );
// }
import "../styles/card.css";

export default function StatCard({ title, className }) {
  return (
    <div className={`stat-card ${className}`}>
      <h4>{title}</h4>

      <div className="stat-row">
        <span>ATV</span>
        <span>0</span>
      </div>

      <div className="stat-row">
        <span>MTD</span>
        <span>0 / 0</span>
      </div>

      <div className="stat-row">
        <span>LMTD</span>
        <span>0 / 0</span>
      </div>
    </div>
  );
}