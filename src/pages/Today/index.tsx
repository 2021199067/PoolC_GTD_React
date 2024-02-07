//import styles from './index.css';
import TodoItem from '../../components/TodoItem';
import EventItem from '../../components/EventItem';
import { Todo } from '../../interfaces/Todo';
import { Event } from '../../interfaces/Event';
import styles from './index.module.css';

interface TodayProps {
    todos: Todo[];
    events: Event[];
}

const Today = ({ todos, events }: TodayProps) => {
    const compareDates = (dateA: Date, dateB: Date) => {
        return (
            dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate()
        );
    };

    const todayTodos = todos.filter((todo) => {
        const currentDate = new Date();
        if(todo.startDate && todo.endDate) {
            if (currentDate >= todo.startDate && currentDate <= todo.endDate) {
                return true;
            } else if (compareDates(currentDate, todo.startDate) || compareDates(currentDate, todo.endDate)) {
                return true;
            } else {
                return false;
            }
        } else if (todo.dueDate && compareDates(currentDate, todo.dueDate)) {
            return true;
        } else { 
            return false;
        }
    });

    const todayEvents = events.filter((event) => {
        const currentDate = new Date();
        if(event.startDate) {
            if (compareDates(currentDate, event.startDate)) {
                return true;
            } else if (event.endDate) {
                if (compareDates(currentDate, event.endDate)) {
                    return true;
                } else if (currentDate >= event.startDate && currentDate <= event.endDate) {
                    return true;
                } else {
                    return false;
                }    
            } else {
                return false;
            }
        } 
    })

    return (
        <div className={styles.subpageWrapper}>
            <h1>Today</h1>
            <br></br>
            <div className={styles.eventBox}>
                {todayEvents.map((event) => (
                    <li key={event.id.toISOString()}>
                        <div className={styles.eventListItem}> 
                            <span> {event.startDate.toLocaleTimeString('en-US', {
                                hour12: false,
                                hour: '2-digit',
                                minute: '2-digit',
                            })} </span>
                            <EventItem event={event} />
                        </div>
                    </li>
                ))}
            </div>
            <ul>
                {todayTodos.map((todo) => (
                    <li key={todo.id.toISOString()}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Today;