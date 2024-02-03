import { useState } from "react";
import styles from "./MemoModalRepeat.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  onRepeatCycleChange: (cycle: string) => void;
  onRepeatEndChange: (end: string) => void;
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
    console.log(event.target.value);
  };
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    const formattedDate = newValue ? newValue.format("YY/MM/DD HH:mm") : "";
    setSelectedRepeatEnd(`On Date: ${formattedDate}`);
    onRepeatEndChange(`On Date: ${formattedDate}`);
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
        <div className={styles["end-render-area"]}>
          {selectedRepeatEnd === "On Date" && (
            <div>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                dateFormats={{ monthShort: `M` }}
              >
                <DateTimePicker
                  format="YY/MM/DD hh:mm"
                  label="Repeat Ends"
                  value={selectedDate}
                  onChange={handleDateChange}
                  showDaysOutsideCurrentMonth
                />
              </LocalizationProvider>
            </div>
          )}
          {selectedRepeatEnd === "After" && <div>After N repetitions</div>}
        </div>
      </div>
    </div>
  );
};

export default MemoModalRepeat;
