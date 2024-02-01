import { Todo } from '../../interfaces/Todo';
import { Memo } from '../../interfaces/Memo';
import { Event } from '../../interfaces/Event';
import { Project } from '../../interfaces/Project';
import MemoItem from '../MemoItem';
import TodoItem from '../TodoItem';
import EventItem from '../EventItem';

interface ProjectItemProps {
    item: Project | Todo | Memo | Event;
}

const ProjectItem = ({ item }: ProjectItemProps) => {
    if ('name' in item) {
        // Project
        return (
            <div>
                <h3>{item.name}</h3>
                <ul>
                    {item.items?.map((subItem) => (
                        <li key={subItem.id}>
                            <ProjectItem item={subItem} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else if (item.type === 'todo') {
        // Todo
        return (
            <div>
                <TodoItem todo={item as Todo} />
            </div>
        );
    } else if (item.type === 'temp') {
        // Memo
        return (
            <div>
                <MemoItem memo={item as Memo} />
            </div>
        );
    } else {
        // Event
        return (
            <div>
                <EventItem event={item as Event} />
            </div>
        )
    }
};

export default ProjectItem;