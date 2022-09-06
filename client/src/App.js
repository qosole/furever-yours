import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './Style.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// Pass users array to the List component as a prop
export default function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <Footer />
    </div>
    </ApolloProvider>
  );
 
}
