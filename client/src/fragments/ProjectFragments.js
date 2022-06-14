import { gql } from '@apollo/client';

export const PROJECT_FRAGMENT = gql`
  fragment ProjectFragment on Project {
    id
    name
    status
  }
`;
