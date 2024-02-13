//import styles from './index.css';
import TodoItem from '../../components/TodoItem';
import { Todo } from '../../interfaces/Todo';

interface SomedayProps {
    todos: Todo[];
}

const Someday = ({ todos }: SomedayProps) => {
    const somedayTodos = todos.filter((todo) => todo.type === 'todo' && !todo.dueDate);

    return (
        <div>
            <h1>Someday</h1>
            <ul>
                {somedayTodos.map((todo) => (
                    <li key={todo.id.toISOString()}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Someday;