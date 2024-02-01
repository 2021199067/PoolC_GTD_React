import React, { useState } from "react";
import styles from "./MemoModalProject.module.css";
import projects from "../../../projectsData.tsx";

const MemoModalProject = ({ onProjectSelect }) => {
  const [activePath, setActivePath] = useState([]);

  const handleInboxClick = () => {
    onProjectSelect("inbox", "Inbox");
  };

  const handleProjectClick = (path, project) => {
    setActivePath((prevPath) => {
      const newPath =
        path.length < prevPath.length && path.every((p, i) => p === prevPath[i])
          ? path.slice(0, path.length - 1)
          : path;
      return newPath;
    });
    onProjectSelect(project.icon, project.name);
  };

  const renderProjects = (projects, currentPath = []) => {
    // 최상위 floor일 때만 Inbox 항목을 추가합니다.
    const isRootFloor = currentPath.length === 1 && currentPath[0] === "root";
    return (
      <div className={styles.floor} key={currentPath.join("-")}>
        {isRootFloor && (
          <div
            className={`${styles.project} ${styles.leaf}`}
            onClick={handleInboxClick}
          >
            <i className="material-icons">inbox</i>
            <span>Inbox</span>
          </div>
        )}
        {projects.map((project, index) => {
          const hasSubprojects =
            project.items && project.items.some((item) => !item.type);
          return (
            <div
              key={project.id}
              className={`${styles.project} ${
                hasSubprojects ? styles.branch : styles.leaf
              }`}
              onClick={() =>
                handleProjectClick([...currentPath, project.id], {
                  icon: "folder",
                  name: project.name,
                })
              }
            >
              <i className="material-icons">folder</i>
              <span>{project.name}</span>
              {hasSubprojects && (
                <i className="material-icons">chevron_right</i>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderActiveFloors = () => {
    let currentProjects = projects;
    const floors = [];

    floors.push(renderProjects(currentProjects, ["root"]));

    activePath.forEach((id, index) => {
      const project = currentProjects.find((p) => p.id === id);
      if (project && project.items) {
        currentProjects = project.items.filter((item) => !item.type);
        floors.push(
          renderProjects(currentProjects, activePath.slice(0, index + 1))
        );
      }
    });

    return floors;
  };

  return <div className={styles.container}>{renderActiveFloors()}</div>;
};

export default MemoModalProject;
