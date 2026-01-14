import "../styles/header.css";
import "../styles/variables.css";
import { useContext, useState, useEffect, useRef } from "react";
import { SessionContext } from "../context/SessionContext";

export default function Header({ onMenuClick }) {
  // 🔒 SAFE context access (NO CRASH)
  const context = useContext(SessionContext);
  const { sessionData } = context || {};

  const [clientOpen, setClientOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  const clients = [
    "BKD (Baniye Ki Dukan)",
    "Demo Distributor",
    "Demo Distributor 1",
  ];

  const [activeClient, setActiveClient] = useState(clients[0]);

  const filteredClients = clients.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  const selectClient = (client) => {
    setActiveClient(client);
    setClientOpen(false);
    setSearch("");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setClientOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <div className="logo">MY MASSIST CRM</div>
      </div>

      <div className="header-right" ref={dropdownRef}>
        <div
          className="client-box"
          onClick={() => setClientOpen(!clientOpen)}
        >
          <div className="client-info">
            <div className="client-name">{activeClient}</div>
            <div className="client-role">
              {sessionData?.Role_Name || "Role"}
            </div>
          </div>
          <span className="caret">▾</span>
        </div>

        {clientOpen && (
          <div className="client-dropdown">
            <input
              type="text"
              placeholder="Search client"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
              {filteredClients.map((client, i) => (
                <li key={i} onClick={() => selectClient(client)}>
                  🏢 {client}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="profile-wrapper">
          <button
            className="profile-btn"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            👤 <span className="caret">▾</span>
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>👤 My Profile</li>
                <li>🔐 Change Password</li>
                <li className="danger" onClick={handleLogout}>
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
