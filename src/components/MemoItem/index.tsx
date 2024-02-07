import { updateData } from '../../firestoreFunctions';
import { Memo } from '../../interfaces/Memo';
import styles from './index.module.css'
interface MemoItemProps {
    memo: Memo;
};

const MemoItem = ( { memo }: MemoItemProps) => {
    return (
        <div> 
            <p>{memo.title}</p> 
        </div>
    );
};

export default MemoItem;