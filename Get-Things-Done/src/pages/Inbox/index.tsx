import styles from './index.module.css';
// import MemoItem from './components/Memo';
// import { Memo } from './interfaces/MemoData';


const Inbox = () => {
    // const [memos, setMemos] = useState<Memo[]>([]);
  
    // const addMemo = (content: string) => {
    //   const newMemo: Memo = {
    //     id: new Date().getTime(),
    //     content,
    //   }
    //   setMemos([...memos, newMemo]);
    // }

    return (
        <div className= {styles.wrapper}>
            <h2> Inbox </h2>
        </div>
    )
};

export default Inbox;