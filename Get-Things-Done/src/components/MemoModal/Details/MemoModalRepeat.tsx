import styles from "./MemoModalRepeat.module.css";

const MemoModalRepeat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.duration}>
        <span>Daily</span>
        <span>Weekly</span>
        <span>Bi-Weekly</span>
        <span>Monthly</span>
        <span>Yearly</span>
        {/* <span>Custom</span> */}
      </div>
      <div className={styles.end}>
        <div>End</div>
        <div className={styles["end-options"]}>
          <span>Never</span>
          <span>On Date</span>
          <span>After</span>
        </div>
      </div>
      <div className={styles.square}></div>
    </div>
  );
};

export default MemoModalRepeat;
