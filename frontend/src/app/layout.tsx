import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import apolloClient from "../../Library/client";
import { ApolloProvider } from "@apollo/client";
import Layout from "../../components/layour";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>header</div>
        <Layout>
        {children}
        </Layout>
        {/* <ApolloProvider client={apolloClient}>

        </ApolloProvider> */}
        <div className="bg-red-500">footer</div>
      </body>
    </html>
  );
}
