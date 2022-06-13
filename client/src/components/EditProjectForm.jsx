import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UPDATE_PROJECT } from '../mutations/ProjectMutations';
import { GET_PROJECT } from '../queries/ProjectQueries';

const EditProjectForm = ({ project }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: project.name,
    description: project.description,
    status: ''
  });
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name: formValues.name,
      description: formValues.description,
      status: formValues.status
    },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.name || !formValues.description || !formValues.status) {
      alert('Please fill out all fields');
    }

    updateProject(formValues.name, formValues.description, formValues.status);
  };

  return (
    <div className='mt-5'>
      <h3>Update Project Details</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-control'
            id='description'
            name='description'
            value={formValues.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Status</label>
          <select
            id='status'
            name='status'
            className='form-select'
            value={formValues.status}
            onChange={handleChange}
          >
            <option value='new'>Not Started</option>
            <option value='progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditProjectForm;
