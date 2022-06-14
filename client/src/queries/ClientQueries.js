import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../fragments';

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;
