import styles from "./MemoModalWhen.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";

interface Props {
  onWhenStartChange: (value: string) => void;
  onWhenEndChange: (value: string) => void;
  updateWhenChange: (newdetails: {[key: string]: string | Date }) => void;

}

const MemoModalWhen: React.FC<Props> = ({
  onWhenStartChange,
  onWhenEndChange,
  updateWhenChange,
}) => {
  const [selectedWhenStart, setSelectedWhenStart] = useState<Dayjs | null>();
  const [selectedWhenEnd, setSelectedWhenEnd] = useState<Dayjs | null>();

  const handleStartChange = (newValue: Dayjs | null) => {
    setSelectedWhenStart(newValue);
    const formattedStartDate = newValue
      ? newValue.format("YY/MM/DD HH:mm")
      : "";
    onWhenStartChange(formattedStartDate);
    if(newValue) { updateWhenChange( { ['start']: newValue.toDate() });}
  };
  const handleEndChange = (newValue: Dayjs | null) => {
    setSelectedWhenEnd(newValue);
    const formattedEndDate = newValue ? newValue.format("YY/MM/DD HH:mm") : "";
    onWhenEndChange(formattedEndDate);
    if(newValue) { updateWhenChange( { ['end']: newValue.toDate() });}
  };

  return (
    <div className={styles.container}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateFormats={{ monthShort: `M` }}
      >
        <DateTimePicker
          sx={{ width: 1, boxSizing: 50, fontSize: 8 }}
          format="YY/MM/DD HH:mm"
          label="Starts"
          value={selectedWhenStart}
          onChange={handleStartChange}
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>

      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateFormats={{ monthShort: `M` }}
      >
        <DateTimePicker
          sx={{ width: 1, boxSizing: 50, fontSize: 8 }}
          format="YY/MM/DD HH:mm"
          label="Ends"
          value={selectedWhenEnd}
          onChange={handleEndChange}
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>
    </div>
  );
};

export default MemoModalWhen;
