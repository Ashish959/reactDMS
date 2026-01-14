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
    Emp_Id: localStorage.Emp_Id,
    Order_Id: clientId,
    StartDate: dayjs(startDate).format("MM/DD/YYYY"),
    EndDate: dayjs(endDate).format("MM/DD/YYYY"),
    SessionId: "",
    Action: action,
    Division: division,
  };

  const res = await axios.post(
    "/api/Order/GetOrderbyClient",
    payload
  );

  return res.data;
};
