import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Counter from "./pages/Counter";

function ProtectedRoute({ children }) {
  const empId = localStorage.getItem("Emp_Id");
  return empId ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/counter" element={<Counter />} />

        {/* LOGIN */}
        <Route path="/login" element={<Auth />} />

        {/* PROTECTED DASHBOARD WITH LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* UNKNOWN */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;