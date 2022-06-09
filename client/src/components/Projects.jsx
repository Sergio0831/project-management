import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <h2>No projects</h2>
      )}
    </>
  );
};
export default Projects;
