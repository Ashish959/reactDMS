import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import StatCard from "../components/StatCard";
import useDashboardInit from "../hooks/useDashboardInit";
import { fetchDashboardOrders } from "../features/dashboard/dashboardOrdersSlice";
import EnhancedTable from "../components/table/EnhancedTable";
import DateRangeDropdown from "../components/table/DateRangeDropdown";
import { StyledEngineProvider } from "@mui/material/styles";

export default function Dashboard() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  console.log("✅ Redux Auth State:", isAuthenticated);

  const { loading: initLoading } = useDashboardInit();
  const [fromDate, setFromDate] = useState(dayjs().startOf("month"));
  const [toDate, setToDate] = useState(dayjs().endOf("month"));
  //onst {rows,loading: tableLoading,error,} = useSelector((state) => state.dashboardOrders);

const {rows: reduxRows,loading: tableLoading,error,} = useSelector((state) => state.dashboardOrders);
const rows = reduxRows.map((row, index) => ({...row,srNo: index + 1,}));

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(
        fetchDashboardOrders({
          clientId: 4952326,
          action: "SALE,SALEAGAINSTORDER,PURCHASE,ServiceInvoice,Delivered,Delivery Attempted,EDC,Return,CreditNote,DebitNote,stockout",
          startDate: fromDate,
          endDate: toDate,
          division: "",
          SessionId:"ZTdNGDPPgfwHxKLSE673SJIXW6rcm4JcOHWp25r1r8kKYCYHkb41CWUCHF8SND/VP7DbKrDXEXgOneeUH0yBdQ==",
        })
      );
    }
  }, [dispatch, isAuthenticated, fromDate, toDate]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (initLoading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* 🔹 Cards */}
      <div className="card-grid">
        <StatCard title="Pending Sales Order" className="card-blue" />
        <StatCard title="My Orders" className="card-orange" />
        <StatCard title="My Sales" className="card-green" />
      </div>

      {/* 🔹 Table Header */}
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

      {/* 🔹 Table */}
      <div className="table-wrapper">
        <EnhancedTable rows={rows} loading={tableLoading} />
      </div>
    </>
  );
}
