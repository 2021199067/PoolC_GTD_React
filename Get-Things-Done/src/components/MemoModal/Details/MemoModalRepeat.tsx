import { useState } from "react";
import styles from "./MemoModalRepeat.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const MemoModalRepeat = () => {
  const [selectedEnd, setSelectedEnd] = useState<string>("");

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEnd(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles["adjustable-container"]}>
        <div className={styles.cycle}>
          <label>
            <input
              type="radio"
              name="cycle"
              value="Daily"
              className={styles.radio}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              name="cycle"
              value="Weekly"
              className={styles.radio}
            />
            Weekly
          </label>
          <label>
            <input
              type="radio"
              name="cycle"
              value="Bi-Weekly"
              className={styles.radio}
            />
            Bi-Weekly
          </label>
          <label>
            <input
              type="radio"
              name="cycle"
              value="Monthly"
              className={styles.radio}
            />
            Monthly
          </label>
          <label>
            <input
              type="radio"
              name="cycle"
              value="Yearly"
              className={styles.radio}
            />
            Yearly
          </label>
          {/* <input>Custom</input> */}
        </div>
        <div className={styles.end}>
          <div>End</div>
          <div className={styles["end-options"]}>
            <label
              className={
                selectedEnd === "Never" ? styles.labelChecked : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="Never"
                checked={selectedEnd === "Never"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              Never
            </label>
            <label
              className={
                selectedEnd === "On Date" ? styles.labelChecked : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="On Date"
                checked={selectedEnd === "On Date"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              On Date
            </label>
            <label
              className={
                selectedEnd === "After" ? styles.labelChecked : styles.label
              }
            >
              <input
                type="radio"
                name="end"
                value="After"
                checked={selectedEnd === "After"}
                onChange={handleEndChange}
                className={styles.radio}
              />
              After
            </label>
          </div>
        </div>
        <div className={styles["end-render-area"]}>
          {selectedEnd === "On Date" && (
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label="Repeat Ends" />
              </LocalizationProvider>
            </div>
          )}
          {selectedEnd === "After" && <div>After N repetitions</div>}
        </div>
      </div>
    </div>
  );
};

export default MemoModalRepeat;
