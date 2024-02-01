import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Someday from './pages/Someday';
import Projects from './pages/Projects';
import Today from './pages/Today';

import { fetchAllData } from './firestoreFunctions';

function App() {
  
  const todos = fetchAllData('todo-list');
  const events = fetchAllData('event-list');
  const projectdb = fetchAllData('project-folders'); 

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
