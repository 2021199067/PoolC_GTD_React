import { EventInput } from '@fullcalendar/core'
import { RRuleInput } from '@fullcalendar/rrule'
import { Todo } from '../../interfaces/Todo'
import { Event } from '../../interfaces/Event'
import { RRule } from '../../interfaces/RRule';

// sample data for todo
const todoData: Todo[] = [
    {
        id: 1,
        title: "Todo 1(1.14~1.16, 1.19)",
        note: "This is Todo 1",
        type: "todo",
        startDate: new Date(2024, 0, 15),
        endDate: new Date(2024, 0, 17),
        dueDate: new Date(2024, 0, 20),
    },
    {
        id: 2,
        title: "Todo 2(1.16~1.19, 1.28)",
        note: "This is Todo 2",
        type: "todo",
        startDate: new Date(2024, 0, 17),
        endDate: new Date(2024, 0, 20),
        dueDate: new Date(2024, 0, 29)
    },
    {
        id: 3,
        title: "Todo 3(오늘)",
        note: "This is Todo 3",
        type: "todo",
        startDate: undefined, // Start date not provided
        endDate: undefined, // End date not provided
        dueDate: new Date()
    },
    {
        id: 4,
        title: "Todo 4(1.29)",
        note: "This is Todo 4",
        type: "todo",
        startDate: undefined, // Start date not provided
        endDate: new Date(2024, 0, 17),
        dueDate: new Date(2024, 0, 30)
    }
];
// sample data for event
const eventData: Event[] = [
    {
        id: 1,
        title: "Event 1(1.12~1.15)",
        note: "This is Event 1",
        type: "event",
        startDate: new Date(2024, 0, 13),
        endDate: new Date(2024, 0, 16),
        place: "Location 1"
    },
    {
        id: 2,
        title: "Event 2(오늘, 매주반복)",
        note: "This is Event 2",
        type: "event",
        startDate: new Date(),
        endDate: undefined, // End date not provided
        place: "Location 2",
        repeat: {
            freq: 'weekly',
        }
    },
    {
        id: 3,
        title: "Event 3(1.24~1.27)",
        note: "This is Event 3",
        type: "event",
        startDate: new Date(2024, 0, 25),
        endDate: new Date(2024, 0, 28),
        place: "Location 3"
    },
    {
        id: 4,
        title: "Event 4(1.15~1.17)",
        note: "This is Event 4",
        type: "event",
        startDate: new Date(2024, 0, 16),
        endDate: new Date(2024, 0, 18),
        place: "Location 4"
    },
    {
        id: 5,
        title: "Event 5(1.30, 매일반복~2.1)",
        note: "This is Event 2",
        type: "event",
        startDate: new Date(2024, 0, 31),
        endDate: undefined, // End date not provided
        place: "Location 2",
        repeat: {
            freq: 'daily',
            dtstart: new Date(2024, 0, 31),
            until: '2024-02-02'
        }
    },
    {
        id: 6,
        title: "1차 제출!",
        note: "This is Event 2",
        type: "event",
        startDate: new Date(2024, 1, 5),
        endDate: undefined, // End date not provided
        place: "동방",
    },
];

export const INITIAL_EVENTS: EventInput[] = [...parseTodointoEventInput(todoData), ...parseEventIntoEventInput(eventData)]

export function addOneDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}

export function parseTodointoEventInput(todos: Todo[]): EventInput[] {
    const eventInputs: EventInput[] = [];

    todos.forEach(todo => {
        eventInputs.push({
            id: todo.id.toString() + 'due',
            title: todo.title,
            start: todo.dueDate.toISOString().replace(/T.*$/, ''),
            end: todo.dueDate.toISOString().replace(/T.*$/, ''),
            allDay: true,
            extendedProps: { type: 'todoDue', checked: false },
            backgroundColor: '#ffe5e5',
            textColor: '#444',
            borderColor: 'white',
        });

        if (todo.startDate && todo.endDate) {
            eventInputs.push({
                id: todo.id.toString() + 'proc',
                title: todo.title,
                start: todo.startDate.toISOString().replace(/T.*$/, ''),
                end: addOneDay(todo.endDate).toISOString().replace(/T.*$/, ''),
                extendedProps: { type: 'todoProcess', checked: false },
                backgroundColor: '#eee',
                textColor: '#444',
                borderColor: 'white',
            });
        }

    })
    return eventInputs;
}

export function parseEventIntoEventInput(events: Event[]): EventInput[] {
    const eventInputs: EventInput[] = [];

    events.forEach(event => {
        const eventInput: EventInput = {
            id: event.id.toString(),
            title: event.title,
            start: event.startDate.toISOString().replace(/T.*$/, ''),
            extendedProps: { type: 'event' },
            backgroundColor: '#ffb',
            borderColor: 'white',
            textColor: '#333'
        };

        if (event.endDate) {
            eventInput.end = addOneDay(event.endDate).toISOString().replace(/T.*$/, '');
        }
        if (event.repeat && isRRuleOptions(event.repeat)) {
            // Convert RRuleOptions to RRuleInput if needed
            const rruleInput: RRuleInput = convertToRRuleInput(event.repeat);
            eventInput.rrule = rruleInput;
        }

        eventInputs.push(eventInput);
    });

    return eventInputs;
}
function isRRuleOptions(obj: any): obj is RRule {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        obj.freq !== undefined // Add other checks if needed
    );
}

// Function to convert RRuleOptions to RRuleInput if needed
function convertToRRuleInput(options: RRule): RRuleInput {
    // Implement conversion logic here
    // For demonstration purposes, assume options is already of type RRuleInput
    return options as RRuleInput;
}

let eventGuid = 0

/* const todayStr = new Date().toISOString().replace(/T.*$/, '')  */// YYYY-MM-DD of today

/* export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00'
    }
] */

export function createEventId(): string {
    return String(eventGuid++)
}
