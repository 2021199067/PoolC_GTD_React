import { updateData } from '../../firestoreFunctions';
import { Memo } from '../../interfaces/Memo';
import styles from './index.module.css'
interface MemoItemProps {
    memo: Memo;
};

const MemoItem = ( { memo }: MemoItemProps) => {
    const handleMemoComplete = () => {
        if(memo.docRef) updateData('memo-list', memo.docRef, {
            completed: !memo.completed,
        });
    }

    return (
        <div className={styles.itemWrapper}> 
            <button className={styles.completeButton} onClick={handleMemoComplete}>
            {(memo.completed ? "✓" : "")}
            </button>
            <p>{memo.title}</p> 
        </div>
    );
};

export default MemoItem;