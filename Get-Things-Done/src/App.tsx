import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Someday from './pages/Someday';
import Projects from './pages/Projects';
import Today from './pages/Today';

import { fetchEvents, fetchProjects, fetchTodos } from './firestoreFunctions';
import { Todo } from './interfaces/Todo';
import { Event } from './interfaces/Event';
import { Project } from './interfaces/Project';
// import { Memo } from './interfaces/Memo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [projectdb, setProjectDB] = useState<Project[]>([]);
  
  useEffect(() => {
    fetchTodos().then((result) => setTodos(result));
  }, []);
  useEffect(() => {
    fetchEvents().then((result) => setEvents(result));
  }, []);
  useEffect(() => {
    fetchProjects().then((result) => setProjectDB(result));
  }, []);
  
  // const todos: Todo[] = fetchAllData<Todo>('todo-list');
  // const events: Event[] = fetchAllData<Event>('event-list');
  // const projectdb: Project[] = fetchAllData<Project>('project-folders'); 

  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Today todos = {todos} events={events} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/someday" element={<Someday todos={todos} />} />
          <Route path="/projects" element={<Projects projectsData={projectdb} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
