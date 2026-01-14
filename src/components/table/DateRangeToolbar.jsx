import * as React from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

dayjs.extend(isBetweenPlugin);

/* ================= CUSTOM DAY ================= */
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

function Day(props) {
  const { day, selectedDay, ...other } = props;
  const [start, end] = selectedDay || [];

  const dayIsBetween =
    start && end ? day.isBetween(start, end, null, "[]") : false;

  const isFirstDay = start ? day.isSame(start, "day") : false;
  const isLastDay = end ? day.isSame(end, "day") : false;

  return (
    <CustomPickersDay
      {...other}
      day={day}
      selected={isFirstDay || isLastDay}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

/* ================= SHORTCUTS ================= */
const shortcutsItems = [
  {
    label: "This Week",
    getValue: () => [dayjs().startOf("week"), dayjs().endOf("week")],
  },
  {
    label: "Last Week",
    getValue: () => {
      const d = dayjs().subtract(1, "week");
      return [d.startOf("week"), d.endOf("week")];
    },
  },
  {
    label: "Last 7 Days",
    getValue: () => [dayjs().subtract(7, "day"), dayjs()],
  },
  {
    label: "Current Month",
    getValue: () => [dayjs().startOf("month"), dayjs().endOf("month")],
  },
  { label: "Reset", getValue: () => [null, null] },
];

/* ================= MAIN ================= */
export default function DateRangeToolbar({ value, onChange }) {
  const [internal, setInternal] = React.useState(value || [null, null]);

  React.useEffect(() => {
    setInternal(value || [null, null]);
  }, [value]);

  const handleDateChange = (newDate) => {
    let range;
    if (internal[0] && !internal[1]) {
      range = newDate.isBefore(internal[0])
        ? [newDate, internal[0]]
        : [internal[0], newDate];
    } else {
      range = [newDate, null];
    }
    setInternal(range);
    onChange?.(range);
  };

  const handleShortcutClick = (getValue) => {
    const range = getValue();
    setInternal(range);
    onChange?.(range);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          width: 560,
          maxWidth: "92vw",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {/* LEFT SHORTCUTS */}
        <Box
          sx={{
            width: 150,
            borderRight: "1px solid #e5e7eb",
            bgcolor: "#f9fafb",
            py: 1,
          }}
        >
          <List dense>
            {shortcutsItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  dense
                  onClick={() => handleShortcutClick(item.getValue)}
                  sx={{
                    py: 0.8,
                    px: 2,
                    borderRadius: 1,
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* RIGHT CALENDAR */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            mb={1.2}
            sx={{ alignSelf: "flex-start" }}
          >
            <Chip
              size="small"
              label={
                internal[0]
                  ? internal[0].format("MMM D, YYYY")
                  : "Start Date"
              }
            />
            <Chip
              size="small"
              label={
                internal[1]
                  ? internal[1].format("MMM D, YYYY")
                  : "End Date"
              }
            />
          </Stack>

          <DateCalendar
            value={internal[0]}
            onChange={handleDateChange}
            slots={{ day: Day }}
            slotProps={{ day: { selectedDay: internal } }}
            sx={{
              "& .MuiPickersDay-root": {
                fontSize: 13,
              },
            }}
          />
        </Box>
      </Paper>
    </LocalizationProvider>
  );
}
