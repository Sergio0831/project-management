import { gql } from '@apollo/client';

const PROJECT_FRAGMENT = gql`
  fragment ProjectFragment on Project {
    id
    name
    status
  }
`;

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      ...ProjectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      ...ProjectFragment
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
  ${PROJECT_FRAGMENT}
`;

export { GET_PROJECTS, GET_PROJECT };
