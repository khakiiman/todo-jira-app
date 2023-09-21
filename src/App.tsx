import { Route, Routes } from 'react-router-dom';
import './App.css';

import KanbanBoard from './components/Dashboard/kanbanBoard';
import ProjectSetting from './components/Dashboard/projectSettings';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/board' element={<KanbanBoard />} />
        <Route path='/editProject' element={<ProjectSetting />} />
      </Routes>
    </>
  );
}

export default App;
