import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  {
    field: "srNo",
    headerName: "Sr No.",
    width: 80,
    sortable: false,
  },
  {
    field: "Division",
    headerName: "Division",
    width: 120,
  },
  {
    field: "Order_Id",
    headerName: "Order Id",
    width: 120,
  },
  {
    field: "InvoiceId",
    headerName: "Invoice Id",
    width: 130,
  },
  {
    field: "PendingSince",
    headerName: "Pending Since",
    width: 150,
  },
  {
    field: "Source",
    headerName: "Client From",
    width: 200,
  },
  {
    field: "Destination",
    headerName: "Client To",
    width: 200,
  },
  {
    field: "OrderBy",
    headerName: "Order By",
    width: 180,
  },
  {
    field: "NoOfProducts",
    headerName: "No. Of Items",
    width: 130,
    type: "number",
  },
  {
    field: "Order_Amt",
    headerName: "Amount",
    width: 130,
    type: "number",
    valueFormatter: (params) => {
      const value = params?.value;
      return value != null ? `₹ ${Number(value).toFixed(2)}` : "₹ 0.00";
    },
  },
  {
    field: "Sale_Amt",
    headerName: "Sale Amt.",
    width: 130,
    type: "number",
    valueFormatter: (params) => {
      const value = params?.value;
      return value != null ? `₹ ${Number(value).toFixed(2)}` : "₹ 0.00";
    },
  },
  {
    field: "OrderDate",
    headerName: "Order Date",
    width: 150,
    valueGetter: (params) =>
      params?.value
        ? new Date(params.value).toLocaleDateString()
        : "",
  },
  {
    field: "SaleDate",
    headerName: "Sale Date",
    width: 150,
    valueGetter: (params) =>
      params?.value
        ? new Date(params.value).toLocaleDateString()
        : "",
  },
  {
    field: "OrderQty",
    headerName: "Order Qty",
    width: 120,
    type: "number",
  },
  {
    field: "QuantityReceived",
    headerName: "Sale Qty",
    width: 120,
    type: "number",
  },
  {
    field: "freeqty",
    headerName: "Free Qty",
    width: 120,
    type: "number",
  },
  {
    field: "OrderStatus",
    headerName: "Status",
    width: 180,
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <button onClick={() => console.log("Row:", params.row)}>
        View
      </button>
    ),
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
        getRowId={(row) => row.Order_Id}
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
