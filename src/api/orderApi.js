import axios from "axios";
import dayjs from "dayjs";

export const getOrderByClient = async ({
  clientId,
  action,
  startDate,
  endDate,
  division = "",
}) => {
  const payload = {
    Action: action,
    Division: division,
    Emp_Id: localStorage.Emp_Id,
    Order_Id: clientId,
    StartDate: dayjs(startDate).format("MM/DD/YYYY"),
    EndDate: dayjs(endDate).format("MM/DD/YYYY"),
    SessionId: "ZTdNGDPPgfwHxKLSE673SJIXW6rcm4JcOHWp25r1r8kKYCYHkb41CWUCHF8SND/VP7DbKrDXEXgOneeUH0yBdQ==", 
  };

  const res = await axios.post(
    "/api/Order/GetOrderbyClient",
    payload
  );
  return res.data;
};
