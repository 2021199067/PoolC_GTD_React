import styles from "./MemoModalWhen.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const MemoModalWhen = () => {
  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Start" />
        <DateTimePicker label="End" />
      </LocalizationProvider>
    </div>
  );
};

export default MemoModalWhen;
