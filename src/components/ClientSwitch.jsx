import { useState } from "react";
import "../styles/CommonHeader.css";

export default function ClientSwitch({
  clients = [],
  selectedClient,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter(c =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="client-switch">
      {/* SELECTED CLIENT */}
      <div className="client-selected" onClick={() => setOpen(!open)}>
        {selectedClient}
        <span className="caret">▾</span>
      </div>

      {open && (
        <div className="client-dropdown">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul>
            {filteredClients.map((client, i) => (
              <li
                key={i}
                onClick={() => {
                  onChange(client);
                  setOpen(false);
                  setSearch("");
                }}
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
