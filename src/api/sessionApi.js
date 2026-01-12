import axios from "axios";

export const getSession = async () => {
  const payload = {
    SessionId: "",
    Emp_Id: localStorage.getItem("Emp_Id"),
    Cmp_Id: "0",
    DataBy: "EmpId"
  };

  const res = await axios.post(
    "/api/Employee/GetEmpCmpSession",
    payload
  );

  return res.data; // 🔥 important
};