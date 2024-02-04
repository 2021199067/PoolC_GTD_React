import styles from "./MemoModalWhen.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { useState } from "react";
// { setWhen } : { setWhen: (date: Date | null) => void}
const MemoModalWhen = () => {
  // const [start, setStart] = useState<Date | null>(null);
  // const [end, setEnd] = useState<Date | null>(null);

  // const handleStartChange = (date: Date | null) => {
  //   setStart(date);
  //   setWhen( { start: date, end: end});
  // }

  // const handleEndChange = (date: Date | null) => {
  //   setEnd(date);
  //   setWhen( { start: start, end: date});
  // }

  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Start"/>
        <DateTimePicker label="End"/>
      </LocalizationProvider>
    </div>
  );
};

export default MemoModalWhen;
