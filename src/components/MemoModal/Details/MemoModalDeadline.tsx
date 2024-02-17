import styles from "./MemoModalDeadline.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";

interface MemoModalDeadlineProps {
  updateWhenChange: (newdetails: {[key: string]: Date }) => void;
}

const MemoModalDeadline = ({ updateWhenChange } : MemoModalDeadlineProps) => {
  const handleDateChange = (newValue: Dayjs | null ) => {
    if(newValue) {
      const dValue = newValue.toDate();
      updateWhenChange({'deadline': dValue })
    };
  };
  return (
    <div className={styles.container}>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          label="Deadline" 
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MemoModalDeadline;
