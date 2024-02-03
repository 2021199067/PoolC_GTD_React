import { useState } from "react";
import styles from "./MemoModalDetail.module.css";
import MemoModalWhen from "./Details/MemoModalWhen";
import MemoModalLocation from "./Details/MemoModalLocation";
import MemoModalDeadline from "./Details/MemoModalDeadline";
import MemoModalRepeat from "./Details/MemoModalRepeat";

interface MemoModalDetailProps {
  selectedType: "Event" | "Todo";
}

function MemoModalDetail({ selectedType }: MemoModalDetailProps) {
  const [selectedDetail, setSelectedDetail] = useState("");
  const [selectedRepeatCycle, setSelectedRepeatCycle] = useState<string>("");
  const [selectedRepeatEnd, setSelectedRepeatEnd] = useState<string>("");

  const handleRowClick = (
    e: React.MouseEvent<HTMLLabelElement>,
    id: string
  ) => {
    const radio = e.currentTarget.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    const row = e.currentTarget;

    if (radio) {
      radio.checked = true;
      document.querySelectorAll(`.${styles.row}`).forEach((element) => {
        (element as HTMLElement).style.backgroundColor = "";
      });
      row.style.backgroundColor = "#ebebeb";
    }

    setSelectedDetail(id);
  };

  const detailOptions: { [key: string]: string[] } = {
    Event: ["When", "Location", "Repeat"],
    Todo: ["When", "Deadline", "Repeat"],
  };

  const renderDetails = () => {
    switch (selectedDetail) {
      case "When":
        return <MemoModalWhen />;
      case "Location":
        return <MemoModalLocation />;
      case "Deadline":
        return <MemoModalDeadline />;
      case "Repeat":
        return (
          <MemoModalRepeat
            onRepeatCycleChange={setSelectedRepeatCycle}
            onRepeatEndChange={setSelectedRepeatEnd}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.basic}>
        {detailOptions[selectedType].map((option) => (
          <label
            key={option}
            className={styles.row}
            onClick={(e) => handleRowClick(e, option)}
            htmlFor={option}
          >
            <input
              className={styles["row-selection"]}
              type="radio"
              name="basic"
              id={option}
            />
            <div className={styles.title}>{option}: </div>
            <div className={styles.input}>
              {option === "Repeat" ? (
                <input
                  type="text"
                  readOnly
                  value={`${selectedRepeatCycle}${selectedRepeatEnd}`}
                  placeholder="None"
                />
              ) : (
                <input type="text" placeholder="None" />
              )}
            </div>
            <div className={styles["show-details"]}>
              <i className="material-icons">chevron_right</i>
            </div>
          </label>
        ))}
      </div>
      <div className={styles.detail}>{renderDetails()}</div>
    </div>
  );
}

export default MemoModalDetail;