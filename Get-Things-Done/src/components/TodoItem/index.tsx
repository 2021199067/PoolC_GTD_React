import { Todo } from "../../interfaces/Todo"

interface TodoItemProps {
    todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div>
            {todo.label}
        </div>
    )
};

export default TodoItem;