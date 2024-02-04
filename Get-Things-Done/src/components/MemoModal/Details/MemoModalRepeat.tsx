import { useState } from "react";
import styles from "./MemoModalRepeat.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";

interface Props {
  onRepeatCycleChange: (value: string) => void;
  onRepeatEndChange: (value: string) => void;
}

const MemoModalRepeat: React.FC<Props> = ({
  onRepeatCycleChange,
  onRepeatEndChange,
}) => {
  const [selectedRepeatCycle, setSelectedRepeatCycle] = useState<string>("");
  const [selectedRepeatEnd, setSelectedRepeatEnd] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleCycleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRepeatCycle(event.target.value);
    onRepeatCycleChange(event.target.value);
  };
  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRepeatEnd(event.target.value);
    onRepeatEndChange(event.target.value);
  };
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    const formattedDate = newValue ? newValue.format("YY/MM/DD HH:mm") : "";
    onRepeatEndChange(`${formattedDate}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles["adjustable-container"]}>
        <div className={styles.cycle}>
          <label
            className={
              selectedRepeatCycle === "Daily"
                ? styles.labelChecked
                : styles.label
            }
          >
            <input
              type="radio"
              name="cycle"
              value="Daily"
              checked={selectedRepeatCycle === "Daily"}
              onChange={handleCycleChange}
              className={styles.radio}
            />
            Daily
          </label>
          <label
            className={
              selectedRepeatCycle === "Weekly"
                ? styles.labelChecked
                : styles.label
            }
          >
            <input
              type="radio"
              name="cycle"
              value="Weekly"
              checked={selectedRepeatCycle === "Weekly"}
              onChange={handleCycleChange}
              className={styles.radio}
            />
            Weekly
          </label>
          <label
            className={
              selectedRepeatCycle === "Bi-Weekly"
                ? styles.labelChecked
                : styles.label
            }
          >
            <input
              type="radio"
              name="cycle"
              value="Bi-Weekly"
              checked={selectedRepeatCycle === "Bi-Weekly"}
              onChange={handleCycleChange}
              className={styles.radio}
            />
            Bi-Weekly
          </label>
          <label
            className={
              selectedRepeatCycle === "Monthly"
                ? styles.labelChecked
                : styles.label
            }
          >
            <input
              type="radio"
              name="cycle"
              value="Monthly"
              checked={selectedRepeatCycle === "Monthly"}
              onChange={handleCycleChange}
              className={styles.radio}
            />
            Monthly
          </label>
          <label
            className={
              selectedRepeatCycle === "Yearly"
                ? styles.labelChecked
                : styles.label
            }
          >
            <input
              type="radio"
              name="cycle"
              value="Yearly"
              checked={selectedRepeatCycle === "Yearly"}
              onChange={handleCycleChange}
              className={styles.radio}
            />
            Yearly
          </label>
        </div>
        <div className={styles.end}>
          <div>End</div>
          <div className={styles["end-options"]}>
            <label
              className={
                selectedRepeatEnd === "Never"
                  ? styles.labelChecked
                  : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="Never"
                checked={selectedRepeatEnd === "Never"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              Never
            </label>
            <label
              className={
                selectedRepeatEnd === "On Date"
                  ? styles.labelChecked
                  : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="On Date"
                checked={selectedRepeatEnd === "On Date"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              On Date
            </label>
            <label
              className={
                selectedRepeatEnd === "After"
                  ? styles.labelChecked
                  : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="After"
                checked={selectedRepeatEnd === "After"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              After
            </label>
          </div>
        </div>
        <div className={styles["created-area"]}>
          {selectedRepeatEnd === "On Date" && (
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              dateFormats={{ monthShort: `M` }}
            >
              <DateTimePicker
                sx={{ width: 1, boxSizing: 50, fontSize: 8 }}
                format="YY/MM/DD HH:mm"
                label="Repeat Ends"
                value={selectedDate}
                onChange={handleDateChange}
                showDaysOutsideCurrentMonth
              />
            </LocalizationProvider>
          )}
          {selectedRepeatEnd === "After" && (
            <div>
              After{" "}
              <select name="number" id="repetitions">
                <option value="select">N</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>{" "}
              repetitions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoModalRepeat;
