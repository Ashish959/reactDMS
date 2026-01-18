import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSession } from "../api/sessionApi";
import { getGeneralData } from "../api/generalDataApi";
import { loginSuccess } from "../features/auth/authSlice";

const useDashboardInit = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    const initDashboard = async () => {
      try {
        const session = await getSession();
        dispatch(
          loginSuccess({
            sessionId: session.SessionId,
            empId: session.Emp_Id,
            cmpId: session.Cmp_Id,
          })
        );

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
  }, [dispatch]);

  return { loading, generalData };
};

export default useDashboardInit;
