import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 160,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function EnhancedTable({ rows = [], loading }) {
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}               
        columns={columns}
        loading={loading}          
        autoHeight
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: 0 }}
        showToolbar
      />
    </Paper>
  );
}
