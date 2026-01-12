
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";
const DashboardLayout = () => {
  const [open, setOpen] = useState(true); // desktop default open

  return (
    <>
      <Header onMenuClick={() => setOpen(!open)} />

      <div className="main">
        <Sidebar isOpen={open} />

        <div className="content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardLayout;


