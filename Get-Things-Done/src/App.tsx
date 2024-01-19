
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
