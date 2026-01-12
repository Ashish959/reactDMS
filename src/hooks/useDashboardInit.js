import { useEffect, useState, useContext } from "react";
import { getSession } from "../api/sessionApi";
import { getGeneralData } from "../api/generalDataApi";
import { SessionContext } from "../context/SessionContext";

const useDashboardInit = () => {
  const { setSessionData } = useContext(SessionContext);
  const [loading, setLoading] = useState(true);
  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    const initDashboard = async () => {
      try {
        const session = await getSession();
        setSessionData(session);

        localStorage.setItem("SessionData", JSON.stringify(session));

        const data = await getGeneralData(
          session.SessionId,
          session.Cmp_Id
        );

        setGeneralData(data);
        localStorage.setItem("AllGeneralData", JSON.stringify(data));
      } catch (err) {
        console.error("Dashboard init failed", err);
      } finally {
        setLoading(false);
      }
    };

    initDashboard();
  }, []);

  return { loading, generalData };
};

export default useDashboardInit;
