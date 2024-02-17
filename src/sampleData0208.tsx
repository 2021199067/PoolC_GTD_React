import { Memo } from './interfaces/Memo';
import { Event } from './interfaces/Event';
import { Todo } from './interfaces/Todo';
import { Project } from './interfaces/Project';

const project1: Project = {
    id: new Date(),
    name: "Project 1",
    type: "project",
    hex: "#FF0000",
    icon: "icon1",
    items: [],
    docRef: "docRef1"
}
const project2: Project = {
    id: new Date(),
    name: "Project 2",
    type: "project",
    hex: "#00FF00",
    icon: "icon2",
    items: [],
    docRef: "docRef2"
}
const project3: Project = {
    id: new Date(),
    name: "Project 3",
    type: "project",
    hex: "#0000FF",
    icon: "icon3",
    items: [],
    docRef: "docRef3"
}
const subProject: Project = {
    id: new Date(),
    name: "subProject",
    type: "project",
    hex: "#FFFFFF",
    icon: "subIcon",
    items: [],
    docRef: "docRef4"
}

// Memo 배열
export const memos: Memo[] = [
    {
        id: new Date(),
        title: "Memo 1",
        project: project1,
        type: "memo",
        note: "Note 1",
        someday: false,
        allDay: false,
        startDate: new Date(),
        startTime: "10:00 AM",
        endDate: new Date(),
        repeat: { cycle: "daily", end: 3 },
        completed: true,
        docRef: "docRef1"
    },
    {
        id: new Date(),
        title: "Memo 2",
        project: project2,
        type: "memo",
        note: undefined,
        someday: true,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        completed: undefined,
        docRef: undefined
    },
    // 선택적인 속성을 가진 경우와 아닌 경우를 추가
    {
        id: new Date(),
        title: "Memo 3",
        project: project3,
        type: "memo",
        note: undefined,
        someday: false,
        allDay: false,
        startDate: new Date(),
        startTime: "08:30 AM",
        endDate: new Date(),
        repeat: undefined,
        completed: false,
        docRef: "docRef2"
    },
    {
        id: new Date(),
        title: "Memo 4",
        project: subProject,
        type: "memo",
        note: "Note for Memo 4",
        someday: false,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        completed: true,
        docRef: undefined
    }
];

// Event 배열
export const events: Event[] = [
    {
        id: new Date(),
        title: "Event 1",
        project: project1,
        type: "event",
        place: "Place 1",
        note: undefined,
        someday: false,
        allDay: true,
        startDate: new Date(),
        startTime: "09:00 AM",
        endDate: new Date(),
        repeat: undefined,
        completed: true,
        docRef: "docRef2"
    },
    {
        id: new Date(),
        title: "Event 2",
        project: project2,
        type: "event",
        place: undefined,
        note: "Note for Event 2",
        someday: false,
        allDay: false,
        startDate: new Date(),
        startTime: "02:00 PM",
        endDate: undefined,
        repeat: undefined,
        completed: undefined,
        docRef: undefined
    },
    {
        id: new Date(),
        title: "Event 3",
        project: project3,
        type: "event",
        place: "Place 3",
        note: undefined,
        someday: true,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        completed: true,
        docRef: "docRef3"
    },
    {
        id: new Date(),
        title: "Event 4",
        project: "inbox",
        type: "event",
        place: "Place 4",
        when: false,
        someday: false,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        docRef: "docRef3"
    }
];

// Todo 배열
export const todos: Todo[] = [
    {
        id: new Date(),
        title: "Todo 1",
        project: project1,
        type: "todo",
        dueDate: new Date(),
        note: "Note for Todo 1",
        someday: false,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        completed: true,
        docRef: undefined
    },
    {
        id: new Date(),
        title: "Todo 2",
        project: project2,
        type: "todo",
        dueDate: undefined,
        note: undefined,
        someday: true,
        allDay: false,
        startDate: undefined,
        startTime: undefined,
        endDate: undefined,
        repeat: undefined,
        completed: undefined,
        docRef: "docRef3"
    },
    // 선택적인 속성을 가진 경우와 아닌 경우를 추가
    {
        id: new Date(),
        title: "Todo 3",
        project: project3,
        type: "todo",
        dueDate: undefined,
        note: "Note for Todo 3",
        someday: false,
        allDay: true,
        startDate: new Date(),
        startTime: undefined,
        endDate: new Date(),
        repeat: undefined,
        completed: false,
        docRef: "docRef4",
    },
    {
        id: new Date(),
        title: "Todo 4",
        project: "inbox",
        type: "todo",
        dueDate: undefined,
        note: "Note for Todo 3",
        someday: false,
        allDay: false,
        when: false,
        docRef: "docRef4",
    }
]

subProject.items = [memos[3]]
project1.items = [memos[0], events[0], todos[0]]
project2.items = [memos[1], events[1], todos[1]]
project3.items = [memos[2], events[2], todos[2], subProject]

// Project 배열
export const projects: Project[] = [project1, project2, project3];