import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import {
  ClientInfo,
  DeleteProjectButton,
  EditProjectForm
} from '../components';
import { GET_PROJECTS } from '../queries';

const Project = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECTS, {
    variables: { id }
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {data && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className='mt-5'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};
export default Project;
