import styles from './index.module.css';
import MemoItem from '../../components/MemoItem';
import { Memo } from '../../interfaces/Memo';

interface InboxProps {
    memos: Memo[]
}

const Inbox = ( { memos }: InboxProps) => {
    console.log(memos);
    return (
        <div className= {styles.subpageWrapper}>
            <h1> Inbox </h1>
            <br></br>
            <ul>
                {memos.map((memo) => (
                    <li key={memo.id.toISOString()}>
                        <MemoItem memo={memo} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Inbox;