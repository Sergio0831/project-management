import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT, PROJECT_FRAGMENT } from '../fragments';

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      ...ProjectFragment
      description
      client {
        ...ClientFragment
      }
    }
  }
  ${(PROJECT_FRAGMENT, CLIENT_FRAGMENT)}
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      ...ProjectFragment
      description
      client {
        ...ClientFragment
      }
    }
  }
  ${(PROJECT_FRAGMENT, CLIENT_FRAGMENT)}
`;
