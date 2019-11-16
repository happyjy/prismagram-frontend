import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!){
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(){
    createAccount(
      $username: String!
      $email: String!
      $firstName: String
      $lastName: String
    ) {
      username: $String!
      email: $String!
      firstName: $String
      lastName: $String
    }
  }
`;
