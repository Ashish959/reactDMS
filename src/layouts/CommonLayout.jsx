import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/dashboard.css";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="main">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CommonLayout;
