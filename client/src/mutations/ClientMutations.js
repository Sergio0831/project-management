import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../fragments';

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;

export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;
