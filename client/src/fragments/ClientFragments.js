import { gql } from '@apollo/client';

export const CLIENT_FRAGMENT = gql`
  fragment ClientFragment on Client {
    id
    name
    email
    phone
  }
`;
