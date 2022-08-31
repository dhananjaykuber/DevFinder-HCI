import React from 'react';
import styles from '../../styles/components/profile/Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <h4>{project.title}</h4>
      <p>
        {project.description.length > 25
          ? `${project.description.slice(0, 80)}...`
          : project.description}
      </p>
      <div className={styles.links}>
        {project.githubRepo && (
          <a href={project.githubRepo} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        )}
        {project.deployedLink && (
          <a href={project.deployedLink} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-link"></i>
          </a>
        )}
      </div>
      <div className={styles.technologies}>
        {project.technologies.map((technology) => (
          <strong>{technology}</strong>
        ))}
      </div>
    </div>
  );
};

export default Project;
