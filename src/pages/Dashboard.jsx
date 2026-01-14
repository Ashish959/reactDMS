import { useState } from "react";
import dayjs from "dayjs";
import StatCard from "../components/StatCard";
import useDashboardInit from "../hooks/useDashboardInit";
import EnhancedTable from "../components/table/EnhancedTable";
import DateRangeDropdown from "../components/table/DateRangeDropdown";
import { StyledEngineProvider } from "@mui/material/styles";
import useOrders from "../hooks/useOrders";

export default function Dashboard() {
  const { loading: initLoading } = useDashboardInit();

  // 🔍 search (future use)
  const [search, setSearch] = useState("");

  // 📅 DEFAULT CURRENT MONTH
  const [fromDate, setFromDate] = useState(dayjs().startOf("month"));
  const [toDate, setToDate] = useState(dayjs().endOf("month"));

  // ✅ 🔥 API CALL YAHAN HO RAHI HAI
  const {
    rows,
    loading: tableLoading,
  } = useOrders({
    clientId: 0,          // 👈 selected client id yahan pass karna
    action: "All",        // 👈 status / type
    fromDate,
    toDate,
  });

  if (initLoading) return <div>Loading...</div>;

  return (
    <>
      {/* ================= CARDS ================= */}
      <div className="card-grid">
        <StatCard title="Pending Sales Order" className="card-blue" />
        <StatCard title="My Orders" className="card-orange" />
        <StatCard title="My Sales" className="card-green" />
      </div>

      {/* ================= TABLE HEADER ================= */}
      <div className="table-header">
        <h3>Order Details</h3>

        <div className="table-actions">
          <StyledEngineProvider injectFirst>
            <DateRangeDropdown
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
          </StyledEngineProvider>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="table-wrapper">
        <EnhancedTable
          rows={rows}            // ✅ API DATA
          loading={tableLoading} // ✅ loader
        />
      </div>
    </>
  );
}
