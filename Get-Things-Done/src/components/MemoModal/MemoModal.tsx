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

import {
  SetStateAction,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "./MemoModal.module.css";
import MemoModalDetail from "./MemoModalDetail";
import MemoModalProject from "./MemoModalProject";
import { addData } from "../../firestoreFunctions";
import { Event } from "../../interfaces/Event";
import { Todo } from "../../interfaces/Todo";
interface MemoModalProps {
  closeModal: () => void;
}
const MemoModal = forwardRef(({ closeModal }: MemoModalProps, ref) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    icon: "inbox",
    name: "Inbox",
  });
  const modalRef = useRef(null);

  const [details, setDetails] = useState({
    start: null,
    end: null,
    location: "",
    repeat: "",
    deadline: null,
  });

  useImperativeHandle(ref, () => modalRef.current);

  const handleProjectSelect = (icon: string, name: string) => {
    setSelectedProject({ icon, name });
  };

  const handleRadioChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = () => {
    setProjectOpen(!projectOpen);
  };

  const handleAddItem = () => {
    const newMemo = {
      id: new Date(),
      title,
      type: "memo",
      note,
      completed: false,
    };
    if (selectedOption === "Event") {
      const newEvent: Event = {
        ...newMemo,
        type: "event",
        startDate: details.start,
        endDate: details.end,
        place: details.location,
        repeat: { freq: details.repeat },
      };
      addData("event-list", newEvent);
    } else if (selectedOption === "Todo") {
      const newTodo: Todo = {
        ...newMemo,
        type: "todo",
        startDate: details.start,
        endDate: details.end,
        dueDate: details.deadline,
        repeat: { freq: details.repeat },
      };
      addData("todo-list", newTodo);
    } else {
      addData("memo-list", newMemo);
    }
    closeModal();
  };
  const handleDetailsChange = (newdetails: { [key: string]: string }) => {
    setDetails({
      ...details,
      ...newdetails,
    });
  };
  return (
    <>
      <div ref={modalRef} className={`${styles.MemoModal} memo-modal`}>
        <div className={styles.default}>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            className={styles["new-activity-title"]}
            placeholder="New Activity..."
          />
          <input
            type="text"
            onChange={(event) => setNote(event.target.value)}
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
                <i className="material-icons">{selectedProject.icon}</i>
                <div>{selectedProject.name}</div>
              </label>
              <label className={styles.save}>
                <input type="submit" onClick={handleAddItem} value="" />
                <i className="material-icons">save</i>
                <div>Saave</div>
              </label>
            </div>
            {projectOpen && (
              <MemoModalProject onProjectSelect={handleProjectSelect} />
            )}
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
            <MemoModalDetail
              selectedType={selectedOption}
              updateDetails={handleDetailsChange}
            />
          )}
          {selectedOption === "Todo" && (
            <MemoModalDetail
              selectedType={selectedOption}
              updateDetails={handleDetailsChange}
            />
          )}
        </div>
      </div>
    </>
  );
});

export default MemoModal;
