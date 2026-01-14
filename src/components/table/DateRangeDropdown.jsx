import { useState } from "react";
import { Box, Popover, Typography, Button, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dayjs from "dayjs";
import DateRangeToolbar from "./DateRangeToolbar";

export default function DateRangeDropdown({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  onApply, // 👈 NEW
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  // 🔹 TEMP RANGE (Apply dabane tak yahin rahega)
  const [tempRange, setTempRange] = useState([fromDate, toDate]);

  const open = Boolean(anchorEl);

  const label =
    fromDate && toDate
      ? `${dayjs(fromDate).format("MMM D, YYYY")} - ${dayjs(toDate).format(
          "MMM D, YYYY"
        )}`
      : "Select Date Range";

  return (
    <>
      {/* INPUT BUTTON */}
      <Box
        onClick={(e) => {
          setTempRange([fromDate, toDate]);
          setAnchorEl(e.currentTarget);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.5,
          py: 0.8,
          minWidth: 260,
          border: "1px solid #d1d5db",
          borderRadius: 1.5,
          cursor: "pointer",
          background: "#fff",
        }}
      >
        <CalendarMonthIcon fontSize="small" />
        <Typography sx={{ flexGrow: 1 }}>{label}</Typography>
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>

      {/* POPUP */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ p: 2 }}>
          <DateRangeToolbar
            value={tempRange}
            onChange={(range) => setTempRange(range)}
          />

          {/* APPLY / CANCEL */}
          <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
            <Button
              size="small"
              onClick={() => setAnchorEl(null)}
            >
              Cancel
            </Button>

            <Button
              size="small"
              variant="contained"
              onClick={() => {
                setFromDate(tempRange[0]);
                setToDate(tempRange[1]);
                onApply?.(tempRange[0], tempRange[1]); // 🔥 API trigger
                setAnchorEl(null);
              }}
              disabled={!tempRange[0] || !tempRange[1]}
            >
              Apply
            </Button>
          </Stack>
        </Box>
      </Popover>
    </>
  );
}
