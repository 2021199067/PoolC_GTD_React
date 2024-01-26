import { useState } from "react";
import styles from "./AddNewDetail.module.css";
// import AddNewWhen from "./AddNewWhen";
// import AddNewLocation from "./AddNewLocation";
// import AddNewDeadline from "./AddNewDeadline";
// import AddNewRepeat from "./AddNewRepeat";
// import AddNewAlarm from "./AddNewAlarm"

interface AddNewDeatilProps {
  selectedType: "Event" | "Todo";
}

function AddNewDetail({ selectedType }: AddNewDeatilProps) {
  const [selectedDetail, setSelectedDetail] = useState("");

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
    Event: ["When", "Location", "Repeat", "Alarm"],
    Todo: ["When", "Deadline", "Repeat", "Alarm"],
  };

  const renderDetails = () => {
    switch (selectedDetail) {
      case "When":
        // return <AddNewWhen />;
        return <div>When</div>;
      case "Location":
        // return <AddNewLocation />;
        return <div>Location</div>;
      case "Deadline":
        // return <AddNewDeadline />;
        return <div>Deadline</div>;
      case "Repeat":
        // return <AddNewRepeat />;
        return <div>Repeat</div>;
      case "Alarm":
        // return <AddNewAlarm />;
        return <div>Alarm</div>;
      default:
        return <div>Details</div>;
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
              <input type="text" placeholder="None" />
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

export default AddNewDetail;
