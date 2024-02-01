import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Someday from './pages/Someday';
import Projects from './pages/Projects';


function App() {
  // todos (출력용 예시)
  const todos = [
    {
        id: 1,
        title: '할일1(date설정x)',
        type: 'todo',
        startDate: new Date(),
        endDate: new Date(),
    },
    {
        id: 2,
        title: '할일2(date설정o)',
        type: 'todo',
        date: new Date(),
        startDate: new Date(),
        endDate: new Date(),
    },
    {
        id: 3,
        title: '할일3(date설정x)',
        type: 'todo',
        startDate: new Date(),
        endDate: new Date(),
    }
  ];
  // ProjectsData (출력용 예시)
  const projectsData = [{
    id: 1,
    name: 'Personal',
    hex: '#f18bda',
    items: [
      {
        type: 'todo',
        id: 101,
        title: 'todo예시',
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        type: 'temp',
        id: 102,
        title: 'memp(temp)예시',
      },
      {
        type: 'event',
        id: 103,
        title: 'event예시',
        place: '장소장소',
      },
    ],
  }, {
    id: 2,
    name: 'Work',
    hex: '#2ecc71',
    items: [
      {
        type: 'todo',
        id: 201,
        title: 'todo예시',
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        type: 'temp',
        id: 202,
        title: 'temp(memo)예시',
      },
      {
        type: 'event',
        id: 203,
        title: 'event예시',
        place: '장소',
      },
      {
        id: 100,
        name: 'dummy',
        hex: '#1278db',
        items: [
          {
            type: 'todo',
            id: 9,
            title: 'todo예시',
            startDate: new Date(),
            endDate: new Date(),
          },
          {
            type: 'temp',
            id: 8,
            title: 'temp(memo)예시',
          },
          {
            type: 'event',
            id: 7,
            title: 'event예시',
            place: '장소',
          },
        ],
      }
    ],
  }];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/someday" element={<Someday todos={todos} />} />
          <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
