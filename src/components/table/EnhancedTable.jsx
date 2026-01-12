// import * as React from "react";
//import { DataGrid } from "@mui/x-data-grid";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useMemo } from "react";
import dayjs from "dayjs";
import DateRangeGridToolbar from "./DateRangeToolbar";
const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "orderNo", headerName: "Order No", flex: 1 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
        field: "amount",
        headerName: "Amount",
        width: 120,
        align: "right",
        headerAlign: "right",
    },
];

const rows = [
    {
        id: 1,
        orderNo: "ORD-1001",
        date: "10-09-2025",
        status: "Pending",
        amount: 2500,
    },
    {
        id: 2,
        orderNo: "ORD-1002",
        date: "11-09-2025",
        status: "Completed",
        amount: 5400,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
    {
        id: 3,
        orderNo: "ORD-1003",
        date: "12-09-2025",
        status: "Cancelled",
        amount: 1200,
    },
];

export default function DataGridTable() {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const filteredRows = useMemo(() => {
        return rows.filter((row) => {
            const d = dayjs(row.date);
            if (fromDate && d.isBefore(fromDate, "day")) return false;
            if (toDate && d.isAfter(toDate, "day")) return false;
            return true;
        });
    }, [rows, fromDate, toDate]);
    return (
        <div style={{ width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                checkboxSelection
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                showToolbar
                slots={{
                    toolbar: () => (
                        <DateRangeGridToolbar
                            fromDate={fromDate}          
                            toDate={toDate}              
                            setFromDate={setFromDate}    
                            setToDate={setToDate}       
                        />
                    ),
                }}

            />
        </div>
    );
}


