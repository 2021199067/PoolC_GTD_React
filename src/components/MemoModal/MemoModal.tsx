import React, {
  SetStateAction,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
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

// 메모 모달 컴포넌트 정의
const MemoModal = forwardRef(({ closeModal }: MemoModalProps, ref) => {
  // 상태 관리: 제목, 메모, 시작일, 종료일, 선택된 옵션, 프로젝트 열림 상태, 선택된 프로젝트
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    icon: "inbox",
    name: "Inbox",
  });
  const [details, setDetails] = useState({
    start: null,
    end: null,
    location: "",
    repeat: "",
    deadline: null,
  });

  // Refs
  const modalRef = useRef(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  // 높이 조절 함수: 주어진 ref의 높이를 내용에 맞게 조절
  const adjustHeight = (elementRef: React.RefObject<HTMLTextAreaElement>) => {
    if (elementRef.current) {
      elementRef.current.style.height = "auto";
      elementRef.current.style.height = `${elementRef.current.scrollHeight}px`;
    }
  };

  // 이벤트 핸들러: 프로젝트 선택, 라디오 변경, 체크박스 변경, 항목 추가, 상세 정보 변경
  const handleProjectSelect = (icon: string, name: string) =>
    setSelectedProject({ icon, name });
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedOption(e.target.value);
  const handleCheckboxChange = () => setProjectOpen(!projectOpen);
  const handleAddItem = () => {
    const newMemo = {
      id: new Date(),
      title,
      type: "memo",
      note,
      completed: false,
    };
    // 선택된 옵션에 따라 적절한 데이터 구조로 firestore에 추가
    const newItem =
      selectedOption === "Event"
        ? { ...newMemo, type: "event", ...details }
        : selectedOption === "Todo"
          ? { ...newMemo, type: "todo", ...details }
          : newMemo;
    addData(`${selectedOption.toLowerCase()}-list`, newItem);
    closeModal();
  };
  const handleDetailsChange = (newDetails: { [key: string]: any }) =>
    setDetails({ ...details, ...newDetails });

  // 모달 ref 공개
  useImperativeHandle(ref, () => modalRef.current);

  return (
    <>
      <div
        ref={modalRef}
        className={`${styles.MemoModal} ${styles.default} memo-modal`}
      >
        <div className={styles["first-line"]}>
          {/* memo/event/todo 선택 */}
          <div className={styles["selection-container"]}>
            <div className={styles.selection}>
              {/* memo(기본 선택) */}
              <input
                type="radio"
                name="EventTodo"
                id="Memo"
                value="Memo"
                onChange={handleRadioChange}
              />
              <label htmlFor="Memo">
                <i className="material-icons">draft</i>
              </label>

              {/* event */}
              <input
                type="radio"
                name="EventTodo"
                id="Event"
                value="Event"
                onChange={handleRadioChange}
              />
              <label htmlFor="Event">
                <i className="material-icons">edit_calendar</i>
              </label>

              {/* todo */}
              <input
                type="radio"
                name="EventTodo"
                id="Todo"
                value="Todo"
                onChange={handleRadioChange}
              />
              <label htmlFor="Todo">
                <i className="material-icons">add_task</i>
              </label>
            </div>
          </div>

          {/* title */}
          <textarea
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
            onInput={() => adjustHeight(titleRef)}
            className={styles["new-activity-title"]}
            placeholder="Title"
            rows={1}
          />
        </div>

        {/* 메모 입력 */}
        <textarea
          ref={notesRef}
          onChange={(e) => setNote(e.target.value)}
          onInput={() => adjustHeight(notesRef)}
          className={styles["new-activity-notes"]}
          placeholder="Notes"
          rows={5}
        />

        {/* 날짜 선택 */}
        <div className={styles.date}>
          <input
            type="text"
            onChange={(e) => setStartDate(e.target.value)}
            className={styles["new-activity-date"]}
            placeholder="From:"
          />
          <span> ~ </span>
          <input
            type="text"
            onChange={(e) => setEndDate(e.target.value)}
            className={styles["new-activity-date"]}
            placeholder="To:"
          />
        </div>

        {/* 프로젝트 선택 및 저장 */}
        <div
          className={`${styles["gray-area"]} ${projectOpen ? styles.expanded : ""}`}
        >
          <div className={styles["project-and-save"]}>
            <label className={styles.project}>
              <input
                type="checkbox"
                checked={projectOpen}
                onChange={handleCheckboxChange}
              />
              <i className="material-icons">{selectedProject.icon}</i>
              <div>{selectedProject.name}</div>
            </label>
            <label className={styles.save}>
              <input type="submit" onClick={handleAddItem} value="" />
              <i className="material-icons">save</i>
              <div>Save</div>
            </label>
          </div>
          {projectOpen && (
            <MemoModalProject onProjectSelect={handleProjectSelect} />
          )}
        </div>

        {/* 선택된 옵션에 따른 상세 입력 */}
        {selectedOption && (
          <MemoModalDetail
            selectedType={selectedOption}
            updateDetails={handleDetailsChange}
          />
        )}
      </div>
    </>
  );
});

export default MemoModal;
