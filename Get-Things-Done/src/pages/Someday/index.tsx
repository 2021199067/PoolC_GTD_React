//import styles from './index.css';
import TodoItem from '../../components/TodoItem';
import { Todo } from '../../interfaces/Todo';

interface SomedayProps {
    todos: Todo[];
}

const Someday = ({ todos }: SomedayProps) => {
    const somedayTodos = todos.filter((todo) => todo.type === 'todo' && !todo.date);

    return (
        <>
            <h1>Someday</h1>
            <ul>
                {somedayTodos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Someday;