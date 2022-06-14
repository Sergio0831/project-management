import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT, PROJECT_FRAGMENT } from '../fragments';

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      ...ProjectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      ...ProjectFragment
      description
      client {
        ...ClientFragment
      }
    }
  }
  ${(PROJECT_FRAGMENT, CLIENT_FRAGMENT)}
`;
