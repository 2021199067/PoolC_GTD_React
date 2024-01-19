import { Memo } from '../../interfaces/Memo';

interface MemoItemProps {
    memo: Memo;
};

const MemoItem = ( { memo }: MemoItemProps) => {
    return (
        <div> {memo.label} </div>
    );
};

export default MemoItem;