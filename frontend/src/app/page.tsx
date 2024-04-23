'use client'

import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import GETUSERSQUERY from "../../graphql/querys/get-users.query";

interface User {
  firstName: string;
  lastName: string;
}

export default  function Home() {
  // const { loading, error, data } = useQuery<any, {}>(GET_USERS, { client , fetchPolicy: "network-only"});
  // const { data , error, loading} = await getClient().query({ query: GET_USERS, fetchPolicy: "network-only" });
  const { loading, error, data } = useQuery(GETUSERSQUERY);

  if (loading) return <p>Loading...</p>;
  // // // if(error) return <>error</>
  if (error) return <p>Error: {error.message}</p>;
  if (data) console.log(data);
  // console.log(data.getUsers as User[]);
  let i  = -1;
  return (
    <div>
      <h2>Users</h2>
      <div>
        {data.getUsers.map((user: User) => {
          i++;
          return <div key={i}>{user.firstName}</div>;
        })}
      </div>
    </div>
  );
}
