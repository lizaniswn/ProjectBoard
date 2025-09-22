import React, { useEffect, useState } from 'react';
import InviteMember from './InviteMember';
import ProjectTasksBoard from './ProjectTasksBoard';
import './projectboard.css';

const ProjectBoard = ({ theme }) => {
  const [projects, setProjects] = useState([]);

  const reloadProjects = () => {
    fetch('http://localhost:5001/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.data);
        }
      });
  };

  useEffect(() => {
    reloadProjects();
  }, []);

  return (
    <>
      <div className="invite-left">
        <InviteMember />
      </div>
      <div className="project-board-container">
        <h2 className="project-board-title">Projects</h2>
        <div>
          {projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            <ul className="project-list">
              {projects.map(project => (
                <li key={project._id} className="project-list-item">
                  <div className="project-name">{project.name}</div>
                  <div className="project-owner">Owner: {project.owner}</div>
                  <div className="project-members">
                    <span className="project-label">Members:</span>
                    <div className="project-member-names">
                      {project.members && project.members.length > 0
                        ? project.members.map(m => (
                            <span key={m._id} className="member-name">{m.name}</span>
                          ))
                        : <span className="member-none">None</span>}
                    </div>
                  </div>
                  <div className="project-tasks">
                    <span className="project-label">Tasks:</span>
                    <div className="project-task-names">
                      {project.tasks && project.tasks.length > 0
                        ? project.tasks.map(t => (
                            <span key={t._id} className="task-name">{t.title}</span>
                          ))
                        : <span className="task-none">None</span>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ProjectTasksBoard />
    </>
  );
};

export default ProjectBoard;
