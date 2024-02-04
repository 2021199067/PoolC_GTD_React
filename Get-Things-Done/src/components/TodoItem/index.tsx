import { Todo } from "../../interfaces/Todo"
import styles from './index.module.css'
interface TodoItemProps {
    todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div className={styles.itemWrapper}>
            {todo.title}
        </div>
    )
};

export default TodoItem;