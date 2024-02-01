import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { fetchData, addData, updateData, deleteData } from './firestoreFunctions';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Someday from './pages/Someday';
import Projects from './pages/Projects';
import Today from './pages/Today';
import { Todo } from './interfaces/Todo';
import { Event } from './interfaces/Event';
import { Project } from './interfaces/Project';
// import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  // todos (출력용 예시)
  const events: Event[] = [
    {
      id:4,
      title: 'Meet John',
      type: 'event',
      startDate: new Date('February 3, 2024 12:00:00'),
    },
    {
      id:5,
      title: 'PoolC Meeting',
      type: 'event',
      startDate: new Date('February 1, 2024 20:00:00'),
    }
  ];
  const todos: Todo[] = [
    {
        id: 1,
        title: '할일1(date설정today)',
        type: 'todo',
        dueDate: new Date(),
    },
    {
        id: 2,
        title: '할일2(date설정o)',
        type: 'todo',
        dueDate: new Date('February 3, 2024 23:15:30'),
        startDate: new Date('February 2, 2024 00:00:00'),
        endDate: new Date('February 3, 2024 23:00:00'),
    },
    {
        id: 3,
        title: '할일3(date설정x)',
        type: 'todo',
    }
  ];
  // ProjectsData (출력용 예시)
  const projectsData: Project[] = [{
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

  // await addData('todo-list', todos);

  // const updateTodoData = {title: '할일4(수정)'};
  // const fetchedList = await fetchData('todo-list');
  // await updateData('todo-list', fetchedList[0].id, updateTodoData);
  // const updatedList = await fetchData('todo-list');

  // console.log(updatedList);
  
  // const addTodo = async () => {
  //   const todosCollection = collection(firestore, 'todo-list');

  //   try {
  //     await Promise.all(
  //       todos.map(async (todo) => {
  //         const docRef = await addDoc(todosCollection, todo);
  //         console.log('added succesfully with ID: ', docRef.id);
  //       }) 
  //     );
  //   }catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Today todos = {todos} events={events} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/someday" element={<Someday todos={todos} />} />
          <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
