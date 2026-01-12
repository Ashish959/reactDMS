import "../styles/sidebar.css";
import "../styles/variables.css";
import {
  MdDashboardCustomize,
  MdShoppingCart,
  MdRestore,
  MdEdit,
  MdInput,
  MdOutput,
  MdAssessment,
  MdRedeem,
} from "react-icons/md";

export default function Sidebar({ isOpen = true }) {
  return (
    <div className={`sidebar-content ${isOpen ? "open" : "closed"}`}>
      <ul className="menu">

        <li className="menu-item active">
          <span className="icon"><MdDashboardCustomize /></span>
          <span className="text">Dashboard</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdShoppingCart /></span>
          <span className="text">Bill / New Invoice</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdRestore /></span>
          <span className="text">Closing</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdEdit /></span>
          <span className="text">Audit</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdInput /></span>
          <span className="text">Stock-In</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdOutput /></span>
          <span className="text">Stock-Out</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdShoppingCart /></span>
          <span className="text">Place Order</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdAssessment /></span>
          <span className="text">Reports</span>
        </li>

        <li className="menu-item">
          <span className="icon"><MdRedeem /></span>
          <span className="text">Claim</span>
        </li>

      </ul>
    </div>
  );
}
