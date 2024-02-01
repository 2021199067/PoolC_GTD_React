import styles from "./MemoModalDeadline.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const MemoModalDeadline = () => {
  return (
    <div className={styles.container}>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Deadline" />
      </LocalizationProvider>
    </div>
  );
};

export default MemoModalDeadline;
