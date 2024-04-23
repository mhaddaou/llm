import { gql } from "@apollo/client";

const GETUSERSQUERY = gql`
  query GETUSERSQUERY {
    getUsers {
      firstName
      hobbies
      lastName
    }
  }
`;

export default GETUSERSQUERY;
