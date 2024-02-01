import { Todo } from "./src/interfaces/Todo";
import { Memo } from "./src/interfaces/Memo";
import { Event } from "./src/interfaces/Event";
import { Project } from "./src/interfaces/Project";

// Project 1
const project1: Project = {
  id: 1,
  name: "Project 1",
  hex: "#FF0000",
  items: [
    // Subproject
    {
      id: 2,
      name: "Subproject 1",
      hex: "#00FF00",
      items: [
        // Todo
        {
          id: 1,
          title: "Complete task",
          note: "Finish the assigned task",
          type: "todo",
          dueDate: new Date("2024-02-01"),
        } as Todo,
        // Memo
        {
          id: 2,
          title: "Meeting notes",
          note: "Summary of today's meeting",
          type: "temp",
          repeat: "Weekly",
        } as Memo,
      ],
    },
    // Todo
    {
      id: 3,
      title: "Review document",
      note: "Review the project document",
      type: "todo",
      dueDate: new Date("2024-02-10"),
    } as Todo,
    // Event
    {
      id: 4,
      title: "Team gathering",
      note: "Monthly team gathering",
      type: "event",
      startDate: new Date("2024-02-15"),
      place: "Office cafeteria",
    } as Event,
  ],
};
// Project 2
const project2: Project = {
  id: 2,
  name: "Project 2",
  hex: "#0000FF",
  items: [
    // Todo
    {
      id: 5,
      title: "Submit report",
      note: "Submit the monthly report",
      type: "todo",
      dueDate: new Date("2024-02-05"),
    } as Todo,
    // Memo
    {
      id: 6,
      title: "Ideas brainstorming",
      note: "Record ideas for upcoming project",
      type: "temp",
      repeat: "Monthly",
    } as Memo,
    // Event
    {
      id: 7,
      title: "Client meeting",
      note: "Meeting with potential client",
      type: "event",
      startDate: new Date("2024-02-20"),
      place: "Virtual",
    } as Event,
  ],
};
// Project 3
const project3: Project = {
  id: 3,
  name: "Project 3",
  hex: "#FFFF00",
  items: [
    // Todo
    {
      id: 8,
      title: "Send email",
      note: "Respond to client emails",
      type: "todo",
      dueDate: new Date("2024-02-08"),
    } as Todo,
    // Memo
    {
      id: 9,
      title: "Meeting agenda",
      note: "Prepare agenda for weekly meeting",
      type: "temp",
      repeat: "Weekly",
    } as Memo,
    // Event
    {
      id: 10,
      title: "Project kickoff",
      note: "Kickoff meeting for new project",
      type: "event",
      startDate: new Date("2024-02-12"),
      place: "Conference room",
    } as Event,
  ],
};
// Project 4
const project4: Project = {
  id: 4,
  name: "Project 4",
  hex: "#00FFFF",
  items: [
    // Todo
    {
      id: 11,
      title: "Review code",
      note: "Review pull requests",
      type: "todo",
      dueDate: new Date("2024-02-15"),
    } as Todo,
    // Memo
    {
      id: 12,
      title: "Project update",
      note: "Update project status",
      type: "temp",
    } as Memo,
    // Event
    {
      id: 13,
      title: "Training session",
      note: "Training session on new tools",
      type: "event",
      startDate: new Date("2024-02-25"),
      place: "Training room",
    } as Event,
  ],
};
// Project 5
const project5: Project = {
  id: 5,
  name: "Project 5",
  hex: "#FF00FF",
  items: [
    // Todo
    {
      id: 14,
      title: "Project presentation",
      note: "Prepare presentation slides",
      type: "todo",
      dueDate: new Date("2024-02-20"),
    } as Todo,
    // Memo
    {
      id: 15,
      title: "Research findings",
      note: "Record findings from research",
      type: "temp",
    } as Memo,
    // Event
    {
      id: 16,
      title: "Team building activity",
      note: "Outdoor team building activity",
      type: "event",
      startDate: new Date("2024-02-28"),
      place: "Outdoor venue",
    } as Event,
  ],
};

// 모든 프로젝트를 합친 배열
const projects: Project[] = [project1, project2, project3, project4, project5];

export default projects;
