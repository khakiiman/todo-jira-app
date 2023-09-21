import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './components/Dashboard/Main';
import KanbanBoard from './components/Dashboard/KanbanBoard';
import Todo from './components/Dashboard/Todo';
import ProjectSetting from './components/Dashboard/ProjectSettings';
import User from './components/Dashboard/User';

import Sidebar from './components/Sidebar/Sidebar';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className='flex w-screen h-screen'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/board' element={<KanbanBoard />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/settings' element={<ProjectSetting />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
