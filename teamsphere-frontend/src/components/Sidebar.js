import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './sidebar.css';
import CreateProjectModal from './CreateProjectModal';
const Sidebar = ({ theme }) => {
const [showModal, setShowModal] = useState(false);

  // Auto-refresh handler after modal closes
  const handleProjectCreated = () => {
    window.location.reload();
  };

  return (
    <div style={{
      width: '220px',
      backgroundColor: theme === 'dark' ? '#23272f' : '#1f2a40',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      justifyContent: 'space-between'
    }}>
      
      <div>
        <h2 style={{ marginBottom: '30px' }}>TEAMSPHERE</h2>
        <nav>
          <div style={{ marginBottom: '15px', cursor: 'pointer' }} onClick={() => setShowModal(true)}>Create Project</div>
        </nav>
        <ThemeToggle />
      </div>
      <button style={{
        marginTop: 'auto',
        padding: '10px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
      }}>
        LOGOUT
      </button>
      <CreateProjectModal show={showModal} onClose={() => setShowModal(false)} onProjectCreated={handleProjectCreated} />
    </div>
  );
};

export default Sidebar;
