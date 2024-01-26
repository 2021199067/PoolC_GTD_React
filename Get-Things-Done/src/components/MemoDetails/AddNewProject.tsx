import styles from "./AddNewProject.module.css";

const AddNewProject = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.floor}>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">inbox</i>
            <span>Inbox</span>
          </div>
          <div className={`${styles.project} ${styles.branch}`}>
            <i className="material-icons">folder</i>
            <span>개인</span>
            <i className="material-icons">chevron_right</i>
          </div>
          <div className={`${styles.project} ${styles.branch}`}>
            <i className="material-icons">folder</i>
            <span>학교</span>
            <i className="material-icons">chevron_right</i>
          </div>
        </div>
        <div className={styles.floor}>
          <div className={`${styles.project} ${styles.branch}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
            <i className="material-icons">chevron_right</i>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
          <div className={`${styles.project} ${styles.leaf}`}>
            <i className="material-icons">folder</i>
            <span>folderName</span>
          </div>
        </div>
        <div className={styles.floor}></div>
        <div className={styles.floor}></div>
        <div className={styles.floor}></div>
        <div className={styles.floor}></div>
      </div>
      <div className={styles.menubar}></div>
    </>
  );
};

export default AddNewProject;
