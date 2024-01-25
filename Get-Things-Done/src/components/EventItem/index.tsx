import { Event } from "../../interfaces/Event"

interface EventItemProps {
    event: Event;
};

const EventItem = ({ event }: EventItemProps) => {
    return (
        <div>
            {event.label}
        </div>
    )
};

export default EventItem;