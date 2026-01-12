import {
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarExport,
} from "@mui/x-data-grid";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function DateRangeToolbar({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  return (
    <GridToolbarContainer sx={{ gap: 2, p: 1 }}>
      
      {/* 🔍 SEARCH */}
      <GridToolbarQuickFilter />

      {/* 📅 FROM */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From"
          value={fromDate}
          onChange={(newValue) => setFromDate(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />

        {/* 📅 TO */}
        <DatePicker
          label="To"
          value={toDate}
          onChange={(newValue) => setToDate(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>

      {/* ❌ CLEAR */}
      <Button size="small" onClick={() => {
        setFromDate(null);
        setToDate(null);
      }}>
        Clear
      </Button>

      {/* ⬇ DOWNLOAD */}
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
