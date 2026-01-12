// import StatCard from "../components/StatCard";
// import useDashboardInit from "../hooks/useDashboardInit";

// export default function Dashboard() {
//   const { loading } = useDashboardInit();
//   const columns = ["Order No", "Date", "Status", "Amount"];
//   if (loading) return <div>Loading...</div>;

//   return (
//     <>
//       <div className="card-grid">
//         <StatCard title="Pending Sales Order" className="card-blue" />
//         <StatCard title="My Orders" className="card-orange" />
//         <StatCard title="My Sales" className="card-green" />
//       </div>

//       <h3>Order Details</h3>
//       <div className="table-wrapper">
//         <table className="data-table">
//           <thead>
//             <tr>
//               {columns.map(col => (
//                 <th key={col}>{col}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td colSpan={columns.length} className="no-data">
//                 No data available
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

import StatCard from "../components/StatCard";
import useDashboardInit from "../hooks/useDashboardInit";
import EnhancedTable from "../components/table/EnhancedTable"; // 👈 ADD THIS

export default function Dashboard() {
  const { loading } = useDashboardInit();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* CARDS */}
      <div className="card-grid">
        <StatCard title="Pending Sales Order" className="card-blue" />
        <StatCard title="My Orders" className="card-orange" />
        <StatCard title="My Sales" className="card-green" />
      </div>

      {/* TABLE */}
      <h3>Order Details</h3>

      <div className="table-wrapper">
        <EnhancedTable /> {/* 👈 YAHI MAIN CHANGE */}
      </div>
    </>
  );
}
