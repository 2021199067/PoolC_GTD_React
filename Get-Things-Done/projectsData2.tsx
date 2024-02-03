import { Todo } from "./src/interfaces/Todo";
import { Memo } from "./src/interfaces/Memo";
import { Event } from "./src/interfaces/Event";
import { Project } from "./src/interfaces/Project";

// Project 1
const project1: Project = {
  id: new Date(),
  name: "Project 1",
  type: 'project',
  hex: "#FF0000",
  items: [
    // Subproject
    {
      id: new Date(),
      name: "Subproject 1",
      type: 'project',
      hex: "#00FF00",
      items: [
        // Todo
        {
          id: new Date(),
          title: "Complete task",
          note: "Finish the assigned task",
          type: "todo",
          dueDate: new Date("2024-02-01"),
        } as Todo,
        // Memo
        {
          id: new Date(),
          title: "Meeting notes",
          note: "Summary of today's meeting",
          type: "memo",
          // repeat: "Weekly",
        } as Memo,
      ],
    } as Project,
    // Todo
    {
      id: new Date(),
      title: "Review document",
      note: "Review the project document",
      type: "todo",
      dueDate: new Date("2024-02-10"),
    } as Todo,
    // Event
    {
      id: new Date(),
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
  id: new Date(),
  name: "Project 2",
  type: 'project',
  hex: "#0000FF",
  items: [
    // Todo
    {
      id: new Date(),
      title: "Submit report",
      note: "Submit the monthly report",
      type: "todo",
      dueDate: new Date("2024-02-05"),
    } as Todo,
    // Memo
    {
      id: new Date(),
      title: "Ideas brainstorming",
      note: "Record ideas for upcoming project",
      type: "memo",
      repeat: {freq: "Monthly"},
    } as Memo,
    // Event
    {
      id: new Date(),
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
  id: new Date(),
  name: "Project 3",
  type: 'project',
  hex: "#FFFF00",
  items: [
    // Todo
    {
      id: new Date(),
      title: "Send email",
      note: "Respond to client emails",
      type: "todo",
      dueDate: new Date("2024-02-08"),
    } as Todo,
    // Memo
    {
      id: new Date(),
      title: "Meeting agenda",
      note: "Prepare agenda for weekly meeting",
      type: "memo",
      repeat: {freq: "Weekly"},
    } as Memo,
    // Event
    {
      id: new Date(),
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
  id: new Date(),
  name: "Project 4",
  type: 'project',
  hex: "#00FFFF",
  items: [
    // Todo
    {
      id: new Date(),
      title: "Review code",
      note: "Review pull requests",
      type: "todo",
      dueDate: new Date("2024-02-15"),
    } as Todo,
    // Memo
    {
      id: new Date(),
      title: "Project update",
      note: "Update project status",
      type: "memo",
    } as Memo,
    // Event
    {
      id: new Date(),
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
  id: new Date(),
  name: "Project 5",
  type: 'project',
  hex: "#FF00FF",
  items: [
    // Todo
    {
      id: new Date(),
      title: "Project presentation",
      note: "Prepare presentation slides",
      type: "todo",
      dueDate: new Date("2024-02-20"),
    } as Todo,
    // Memo
    {
      id: new Date(),
      title: "Research findings",
      note: "Record findings from research",
      type: "memo",
    } as Memo,
    // Event
    {
      id: new Date(),
      title: "Team building activity",
      note: "Outdoor team building activity",
      type: "event",
      startDate: new Date("2024-02-28"),
      place: "Outdoor venue",
    } as Event,
  ],
};

// 모든 프로젝트를 합친 배열
const projects2: Project[] = [project1, project2, project3, project4, project5];

export default projects2;
