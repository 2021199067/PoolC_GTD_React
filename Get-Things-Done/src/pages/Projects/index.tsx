//import styles from './index.module.css';
import { Project } from '../../interfaces/Project';
import ProjectItem from '../../components/ProjectItem';

interface ProjectsProps {
    projectsData: Project[];
}

const Projects = ({ projectsData }: ProjectsProps) => {
    const renderProject = (project: Project) => (
        <div key={project.id}>
            <button style={{ backgroundColor: project.hex }}>{project.name}</button>
            {project.items?.map((item) => (
                'items' in item ? (
                    <div key={item.id} style={{ marginLeft: '20px' }}>
                        {renderProject(item as Project)}
                    </div>
                ) : (
                    <ProjectItem key={item.id} item={item} />
                )
            ))}
        </div>
    );

    return (
        <>
            <h1>Projects</h1>
            {projectsData.map((project) => renderProject(project))}
        </>
    );
};

export default Projects;