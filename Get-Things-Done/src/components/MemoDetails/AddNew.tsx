// 할 거

// 1. project버튼 toggle형식으로 변경해서 누르면 아래로 확장, 기존 프로젝트 목록에서 선택할 수 있게끔 하기
// 새로운 컴포넌트로 만드는 게 좋을 듯?
// 그동안 Save버튼은 Done 버튼으로 변경하든지, 없애든지.

// 2. Details 완성하기
// 지금 None이 label에 가려서 클릭이 안 되는 상황.. 원래는 그러면 안되는데 해결법 찾아야 함.
// When이랑 Deadline은 유닉스타임으로 받는다 치고, Location은 어쩔 수 없이 그냥 String으로 받아야 하나?
// Repeat은 프리셋 중에 고르겍끔 하면 될 것 같고 (Radio)
// Alarm도 마찬가지로 프리셋 (Radio)
// Repeat, Alarm 다 Custom 가능하겠지만 소요가 클 것 같음

// 3. Save버튼 Submit하게끔 변경, preventDefault, 기존 입력값 한번에 받아 오브젝트로 반환

// 4. 디테일
// 라디오 다시 클릭하면 선택 해제되게끔 하기
// Event/Todo 토글 버튼 -> 단순 FI FO가 아니라 흰색 사각형이 이동하게끔

// 알아봐야 할 것

// CSS 초기화 방식 통일
// 내가 index.css에 추가한 것들 잊지 말 것
// 캘린더 통일? Material UI 쓰려면 공동작업에서 어떻게 해야 하는지

// 끝

import { SetStateAction, useState } from "react";
import styles from "./AddNew.module.css";
import AddNewDetail from "./AddNewDetail";
import AddNewProject from "./AddNewProject";

function AddNew() {
  const [selectedOption, setSelectedOption] = useState("");
  const [projectOpen, setProjectOpen] = useState(false);

  const handleRadioChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = () => {
    setProjectOpen(!projectOpen);
  };

  return (
    <>
      <div className={styles.AddNew}>
        <div className={styles.default}>
          <input
            type="text"
            className={styles["new-activity-title"]}
            placeholder="New Activity..."
          />
          <input
            type="text"
            className={styles["new-activity-notes"]}
            placeholder="Notes"
          />
          <div
            className={`${styles["gray-area"]} ${
              projectOpen ? styles.expanded : ""
            }`}
          >
            <div className={styles["project-save-buttons"]}>
              <label className={styles.project}>
                <input
                  type="checkbox"
                  name="project-open"
                  id="project-open"
                  checked={projectOpen}
                  onChange={handleCheckboxChange}
                />
                <i className="material-icons">inbox</i>
                <div>Inbox</div>
              </label>
              <label className={styles.save}>
                <input type="submit" value="" />
                <i className="material-icons">save</i>
                <div>Save</div>
              </label>
            </div>
            {projectOpen && <AddNewProject />}
          </div>
        </div>

        <div className={styles.selection}>
          <input
            type="radio"
            name="EventTodo"
            id="Event"
            className={styles["toggle-left"]}
            value="Event"
            onChange={handleRadioChange}
          />
          <label htmlFor="Event">
            <i className="material-icons">edit_calendar</i>
          </label>
          <input
            type="radio"
            name="EventTodo"
            id="Todo"
            className={styles["toggle-right"]}
            value="Todo"
            onChange={handleRadioChange}
          />
          <label htmlFor="Todo">
            <i className="material-icons">add_task</i>
          </label>
        </div>

        <div
          className={`${styles.option} ${selectedOption ? styles.visible : ""}`}
        >
          {selectedOption === "Event" && (
            <AddNewDetail selectedType={selectedOption} />
          )}
          {selectedOption === "Todo" && (
            <AddNewDetail selectedType={selectedOption} />
          )}
        </div>
      </div>
    </>
  );
}

export default AddNew;
