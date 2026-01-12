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
