'use client'
import { ApolloProvider } from "@apollo/client";
import React from "react";
import apolloClient from "../Library/client";

const Layout = ({children} : {children : React.ReactNode}) =>{
    return <div>
     <ApolloProvider client={apolloClient}>
        {children}
        </ApolloProvider>
    </div>
}

export default Layout;