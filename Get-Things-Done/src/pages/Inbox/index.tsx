import styles from './index.module.css';
import MemoItem from '../../components/MemoItem';
import { Memo } from '../../interfaces/Memo';
import { updateData } from '../../firestoreFunctions';

interface InboxProps {
    memos: Memo[]
}

const Inbox = ( { memos }: InboxProps) => {
    const handleMemoComplete = (memo: Memo) => {
        if(memo.docRef) updateData('memo-list', memo.docRef, {
            completed: !memo.completed,
        });
    }
    return (
        <div className= {styles.subpageWrapper}>
            <h1> Inbox </h1>
            <br></br>
            <ul>
                {memos.map((memo) => (
                    <li key={memo.id.toISOString()}>
                        <div className={styles.itemWrapper}> 
                            <button className={styles.completeButton} onClick={() => handleMemoComplete(memo)}>
                            {(memo.completed ? "✓" : "")}
                            </button>
                            <MemoItem memo = {memo}/> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Inbox;