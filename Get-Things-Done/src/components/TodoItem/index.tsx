import { Todo } from "../../interfaces/Todo"

interface TodoItemProps {
    todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div>
            {todo.title}
        </div>
    )
};

export default TodoItem;