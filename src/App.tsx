import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Someday from './pages/Someday';
import Projects from './pages/Projects';
import Today from './pages/Today';

import { addData, fetchEvents, fetchMemos, fetchProjects, fetchTodos, fetchCollection } from './firestoreFunctions';
import { Todo } from './interfaces/Todo';
import { Event } from './interfaces/Event';
import { Project } from './interfaces/Project';
import { Memo } from './interfaces/Memo';
// import { Memo } from './interfaces/Memo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [memos, setMemos] = useState<Memo[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const unsubscribe = fetchCollection('todo-list', setTodos);
    return () =>{
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = fetchCollection('event-list', setEvents);
    return () =>{
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = fetchCollection('memo-list', setMemos);
    return () =>{
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = fetchCollection('project-folders', setProjects);
    return () =>{
      unsubscribe();
    };
  }, []);
  

  // useEffect(() => {
  //   projectlist.map(async (project) => {
  //     await addData('project-folders', project);
  //   });
  // }, []);

 
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inbox memos={memos} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/today" element={<Today todos = {todos} events={events} />} />
          <Route path="/someday" element={<Someday todos={todos} />} />
          <Route path="/projects" element={<Projects projectsData={projects} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
