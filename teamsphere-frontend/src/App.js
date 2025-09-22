import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import ProjectBoard from './components/ProjectBoard';

const App = () => {
  const theme = useSelector(state => state.tasks.theme);

  const appStyles = {
    display: 'flex',
    height: '100vh',
    backgroundColor: theme === 'dark' ? '#23272f' : '#f5f5f5',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    transition: 'all 0.3s ease'
  };

  const contentStyles = {
    flex: 1,
    padding: '20px',
    overflowY: 'auto'
  };

  return (
    <div style={appStyles}>
      <Sidebar theme={theme} />
      <div style={contentStyles}>
        <ProjectBoard theme={theme} />
      </div>
    </div>
  );
};

export default App;
